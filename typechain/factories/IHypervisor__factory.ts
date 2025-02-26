/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { IHypervisor, IHypervisorInterface } from "../IHypervisor";

const _abi = [
  {
    inputs: [],
    name: "PRECISION",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount0",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amount1",
        type: "uint256",
      },
      {
        internalType: "uint256[2]",
        name: "minIn",
        type: "uint256[2]",
      },
    ],
    name: "addBaseLiquidity",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount0",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amount1",
        type: "uint256",
      },
      {
        internalType: "uint256[2]",
        name: "minIn",
        type: "uint256[2]",
      },
    ],
    name: "addLimitLiquidity",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "baseLower",
    outputs: [
      {
        internalType: "int24",
        name: "tick",
        type: "int24",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "baseUpper",
    outputs: [
      {
        internalType: "int24",
        name: "tick",
        type: "int24",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256[4]",
        name: "inMin",
        type: "uint256[4]",
      },
    ],
    name: "compound",
    outputs: [
      {
        internalType: "uint128",
        name: "baseToken0Owed",
        type: "uint128",
      },
      {
        internalType: "uint128",
        name: "baseToken1Owed",
        type: "uint128",
      },
      {
        internalType: "uint128",
        name: "limitToken0Owed",
        type: "uint128",
      },
      {
        internalType: "uint128",
        name: "limitToken1Owed",
        type: "uint128",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "compound",
    outputs: [
      {
        internalType: "uint128",
        name: "baseToken0Owed",
        type: "uint128",
      },
      {
        internalType: "uint128",
        name: "baseToken1Owed",
        type: "uint128",
      },
      {
        internalType: "uint128",
        name: "limitToken0Owed",
        type: "uint128",
      },
      {
        internalType: "uint128",
        name: "limitToken1Owed",
        type: "uint128",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "currentTick",
    outputs: [
      {
        internalType: "int24",
        name: "tick",
        type: "int24",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256[4]",
        name: "minIn",
        type: "uint256[4]",
      },
    ],
    name: "deposit",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "deposit0Max",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "deposit1Max",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getBasePosition",
    outputs: [
      {
        internalType: "uint256",
        name: "liquidity",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "total0",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "total1",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getTotalAmounts",
    outputs: [
      {
        internalType: "uint256",
        name: "total0",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "total1",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "limitLower",
    outputs: [
      {
        internalType: "int24",
        name: "tick",
        type: "int24",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "limitUpper",
    outputs: [
      {
        internalType: "int24",
        name: "tick",
        type: "int24",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "pool",
    outputs: [
      {
        internalType: "contract IUniswapV3Pool",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "shares",
        type: "uint256",
      },
      {
        internalType: "uint256[4]",
        name: "minAmounts",
        type: "uint256[4]",
      },
    ],
    name: "pullLiquidity",
    outputs: [
      {
        internalType: "uint256",
        name: "base0",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "base1",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "limit0",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "limit1",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "int24",
        name: "_baseLower",
        type: "int24",
      },
      {
        internalType: "int24",
        name: "_baseUpper",
        type: "int24",
      },
      {
        internalType: "int24",
        name: "_limitLower",
        type: "int24",
      },
      {
        internalType: "int24",
        name: "_limitUpper",
        type: "int24",
      },
      {
        internalType: "address",
        name: "_feeRecipient",
        type: "address",
      },
      {
        internalType: "uint256[4]",
        name: "minIn",
        type: "uint256[4]",
      },
      {
        internalType: "uint256[4]",
        name: "outMin",
        type: "uint256[4]",
      },
    ],
    name: "rebalance",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "removeWhitelisted",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint8",
        name: "newFee",
        type: "uint8",
      },
    ],
    name: "setFee",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_address",
        type: "address",
      },
    ],
    name: "setWhitelist",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "tickSpacing",
    outputs: [
      {
        internalType: "int24",
        name: "spacing",
        type: "int24",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "token0",
    outputs: [
      {
        internalType: "contract IERC20",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "token1",
    outputs: [
      {
        internalType: "contract IERC20",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256[4]",
        name: "",
        type: "uint256[4]",
      },
    ],
    name: "withdraw",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export class IHypervisor__factory {
  static readonly abi = _abi;
  static createInterface(): IHypervisorInterface {
    return new utils.Interface(_abi) as IHypervisorInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IHypervisor {
    return new Contract(address, _abi, signerOrProvider) as IHypervisor;
  }
}
