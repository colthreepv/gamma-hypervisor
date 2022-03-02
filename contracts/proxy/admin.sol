// SPDX-License-Identifier: BUSL-1.1

pragma solidity 0.7.6;

import "../interfaces/IHypervisor.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/access/AccessControl.sol";

/// @title Admin

contract Admin is AccessControl {
    bytes32 public constant ADMIN_ROLE = keccak256("ADMIN_ROLE");
    bytes32 public constant ADVISOR_ROLE = keccak256("ADVISOR_ROLE");

    constructor(address _admin, address _advisor) {
        require(_admin != address(0), "_admin should be non-zero");
        require(_advisor != address(0), "_advisor should be non-zero");
        _setupRole(DEFAULT_ADMIN_ROLE, _admin);
        _setupRole(ADVISOR_ROLE, _advisor);
    }

    /// @param _hypervisor Hypervisor Address
    /// @param _baseLower The lower tick of the base position
    /// @param _baseUpper The upper tick of the base position
    /// @param _limitLower The lower tick of the limit position
    /// @param _limitUpper The upper tick of the limit position
    /// @param _feeRecipient Address of recipient of 10% of earned fees since last rebalance
    /// @param swapQuantity Quantity of tokens to swap; if quantity is positive,
    /// `swapQuantity` token0 are swaped for token1, if negative, `swapQuantity`
    /// token1 is swaped for token0    
    function rebalance(
        address _hypervisor,
        int24 _baseLower,
        int24 _baseUpper,
        int24 _limitLower,
        int24 _limitUpper,
        address _feeRecipient,
        int256 swapQuantity
    ) external {
        require(hasRole(ADVISOR_ROLE, msg.sender));
        IHypervisor(_hypervisor).rebalance(_baseLower, _baseUpper, _limitLower, _limitUpper, _feeRecipient, swapQuantity);
    }

    /// @notice Pull liquidity tokens from liquidity and receive the tokens
    /// @param _hypervisor Hypervisor Address
    /// @param shares Number of liquidity tokens to pull from liquidity
    /// @return base0 amount of token0 received from base position
    /// @return base1 amount of token1 received from base position
    /// @return limit0 amount of token0 received from limit position
    /// @return limit1 amount of token1 received from limit position
    function pullLiquidity(
      address _hypervisor,
      uint256 shares
    ) external returns(
        uint256 base0,
        uint256 base1,
        uint256 limit0,
        uint256 limit1
      ) {
        require(hasRole(ADVISOR_ROLE, msg.sender));
        (base0, base1, limit0, limit1) = IHypervisor(_hypervisor).pullLiquidity(shares);
    }

    /// @notice Add tokens to base liquidity
    /// @param _hypervisor Hypervisor Address
    /// @param amount0 Amount of token0 to add
    /// @param amount1 Amount of token1 to add
    function addBaseLiquidity(address _hypervisor, uint256 amount0, uint256 amount1) external {
        require(hasRole(ADVISOR_ROLE, msg.sender));
        IHypervisor(_hypervisor).addBaseLiquidity(amount0, amount1);
    }

    /// @notice Add tokens to limit liquidity
    /// @param _hypervisor Hypervisor Address
    /// @param amount0 Amount of token0 to add
    /// @param amount1 Amount of token1 to add
    function addLimitLiquidity(address _hypervisor, uint256 amount0, uint256 amount1) external {
        require(hasRole(ADVISOR_ROLE, msg.sender));
        IHypervisor(_hypervisor).addLimitLiquidity(amount0, amount1);
    }

    /// @notice Get the pending fees
    /// @param _hypervisor Hypervisor Address
    /// @return fees0 Pending fees of token0
    /// @return fees1 Pending fees of token1
    function pendingFees(address _hypervisor) external returns (uint256 fees0, uint256 fees1) {
        require(hasRole(ADVISOR_ROLE, msg.sender));
        (fees0, fees1) = IHypervisor(_hypervisor).pendingFees();
    }

    /// @param _hypervisor Hypervisor Address
    /// @param _deposit0Max The maximum amount of token0 allowed in a deposit
    /// @param _deposit1Max The maximum amount of token1 allowed in a deposit
    function setDepositMax(address _hypervisor, uint256 _deposit0Max, uint256 _deposit1Max) external {
        require(hasRole(DEFAULT_ADMIN_ROLE, msg.sender));
        IHypervisor(_hypervisor).setDepositMax(_deposit0Max, _deposit1Max);
    }

    /// @param _hypervisor Hypervisor Address
    /// @param _maxTotalSupply The maximum liquidity token supply the contract allows
    function setMaxTotalSupply(address _hypervisor, uint256 _maxTotalSupply) external {
        require(hasRole(DEFAULT_ADMIN_ROLE, msg.sender));
        IHypervisor(_hypervisor).setMaxTotalSupply(_maxTotalSupply);
    }

    /// @notice Toogle Whitelist configuration
    /// @param _hypervisor Hypervisor Address
    function toggleWhitelist(address _hypervisor) external {
        require(hasRole(DEFAULT_ADMIN_ROLE, msg.sender));
        IHypervisor(_hypervisor).toggleWhitelist();
    }

    /// @param _hypervisor Hypervisor Address
    /// @param listed Array of addresses to be appended
    function appendList(address _hypervisor, address[] memory listed) external {
        require(hasRole(DEFAULT_ADMIN_ROLE, msg.sender));
        IHypervisor(_hypervisor).appendList(listed);
    }

    /// @param _hypervisor Hypervisor Address
    /// @param listed Address of listed to remove
    function removeListed(address _hypervisor, address listed) external {
        require(hasRole(DEFAULT_ADMIN_ROLE, msg.sender));
        IHypervisor(_hypervisor).removeListed(listed);
    }

    /// @param newAdmin New Admin Address
    function transferAdmin(address newAdmin) external {
        require(hasRole(DEFAULT_ADMIN_ROLE, msg.sender));
        require(newAdmin != address(0), "newAdmin should be non-zero");
        revokeRole(DEFAULT_ADMIN_ROLE, msg.sender);
        grantRole(DEFAULT_ADMIN_ROLE, newAdmin);
    }

    /// @param newAdvisor New Advisor Address
    function transferAdvisor(address newAdvisor) external {
        require(hasRole(DEFAULT_ADMIN_ROLE, msg.sender));
        require(newAdvisor != address(0), "newAdvisor should be non-zero");
        address advisor = getRoleMember(ADVISOR_ROLE, 0);
        revokeRole(ADVISOR_ROLE, advisor);
        grantRole(ADVISOR_ROLE, newAdvisor);
    }

    /// @param _hypervisor Hypervisor Address
    /// @param newOwner New Owner Address
    function transferHypervisorOwner(address _hypervisor, address newOwner) external {
        require(hasRole(DEFAULT_ADMIN_ROLE, msg.sender));
        IHypervisor(_hypervisor).transferOwnership(newOwner);
    }

    /// @notice Transfer tokens to the recipient from the contract
    /// @param token Address of token
    /// @param recipient Recipient Address
    function rescueERC20(IERC20 token, address recipient) external {
        require(hasRole(DEFAULT_ADMIN_ROLE, msg.sender));
        require(recipient != address(0), "recipient should be non-zero");
        require(token.transfer(recipient, token.balanceOf(address(this))));
    }

}
