/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Swap, SwapInterface } from "../Swap";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_recipient",
        type: "address",
      },
      {
        internalType: "address",
        name: "_router",
        type: "address",
      },
      {
        internalType: "address",
        name: "_VISR",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amountOut",
        type: "uint256",
      },
    ],
    name: "SwapVISR",
    type: "event",
  },
  {
    inputs: [],
    name: "VISR",
    outputs: [
      {
        internalType: "address",
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
        internalType: "address",
        name: "_recipient",
        type: "address",
      },
    ],
    name: "changeRecipient",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "recipient",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "router",
    outputs: [
      {
        internalType: "contract ISwapRouter",
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
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "sendToken",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "path",
        type: "bytes",
      },
      {
        internalType: "bool",
        name: "send",
        type: "bool",
      },
    ],
    name: "swap",
    outputs: [],
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
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b5060405162000db238038062000db2833981016040819052620000349162000172565b60006200004062000151565b600080546001600160a01b0319166001600160a01b0383169081178255604051929350917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908290a3506001600160a01b038316620000bc5760405162461bcd60e51b8152600401620000b390620001bb565b60405180910390fd5b6001600160a01b038216620000e55760405162461bcd60e51b8152600401620000b39062000229565b6001600160a01b0381166200010e5760405162461bcd60e51b8152600401620000b390620001f2565b600180546001600160a01b039485166001600160a01b03199182161790915560028054928516928216929092179091556003805492909316911617905562000260565b3390565b80516001600160a01b03811681146200016d57600080fd5b919050565b60008060006060848603121562000187578283fd5b620001928462000155565b9250620001a26020850162000155565b9150620001b26040850162000155565b90509250925092565b6020808252601d908201527f5f726563697069656e742073686f756c64206265206e6f6e2d7a65726f000000604082015260600190565b60208082526018908201527f5f564953522073686f756c64206265206e6f6e2d7a65726f0000000000000000604082015260600190565b6020808252601a908201527f5f726f757465722073686f756c64206265206e6f6e2d7a65726f000000000000604082015260600190565b610b4280620002706000396000f3fe608060405234801561001057600080fd5b50600436106100a35760003560e01c806392c2bcb411610076578063f2fde38b1161005b578063f2fde38b14610106578063f887ea4014610119578063f8fbd47814610121576100a3565b806392c2bcb4146100eb578063dd95b973146100fe576100a3565b8063412664ae146100a857806366d003ac146100bd578063715018a6146100db5780638da5cb5b146100e3575b600080fd5b6100bb6100b6366004610963565b610134565b005b6100c5610233565b6040516100d291906109cd565b60405180910390f35b6100bb610242565b6100c561030d565b6100bb6100f936600461088c565b61031c565b6100c56103ee565b6100bb61011436600461088c565b6103fd565b6100c561051e565b6100bb61012f3660046108ad565b61052d565b61013c610861565b6001600160a01b031661014d61030d565b6001600160a01b0316146101a8576040805162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015290519081900360640190fd5b60015460405163a9059cbb60e01b81526001600160a01b038481169263a9059cbb926101dc92909116908590600401610a1f565b602060405180830381600087803b1580156101f657600080fd5b505af115801561020a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061022e919061098c565b505050565b6001546001600160a01b031681565b61024a610861565b6001600160a01b031661025b61030d565b6001600160a01b0316146102b6576040805162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015290519081900360640190fd5b600080546040516001600160a01b03909116907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908390a36000805473ffffffffffffffffffffffffffffffffffffffff19169055565b6000546001600160a01b031690565b610324610861565b6001600160a01b031661033561030d565b6001600160a01b031614610390576040805162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015290519081900360640190fd5b6001600160a01b0381166103bf5760405162461bcd60e51b81526004016103b690610a38565b60405180910390fd5b6001805473ffffffffffffffffffffffffffffffffffffffff19166001600160a01b0392909216919091179055565b6002546001600160a01b031681565b610405610861565b6001600160a01b031661041661030d565b6001600160a01b031614610471576040805162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015290519081900360640190fd5b6001600160a01b0381166104b65760405162461bcd60e51b8152600401808060200182810382526026815260200180610b106026913960400191505060405180910390fd5b600080546040516001600160a01b03808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a36000805473ffffffffffffffffffffffffffffffffffffffff19166001600160a01b0392909216919091179055565b6003546001600160a01b031681565b610535610861565b6001600160a01b031661054661030d565b6001600160a01b0316146105a1576040805162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015290519081900360640190fd5b6040516370a0823160e01b81526000906001600160a01b038516906370a08231906105d09030906004016109cd565b60206040518083038186803b1580156105e857600080fd5b505afa1580156105fc573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061062091906109a8565b600354604051636eb1769f60e11b815291925082916001600160a01b038088169263dd62ed3e9261065792309216906004016109e1565b60206040518083038186803b15801561066f57600080fd5b505afa158015610683573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106a791906109a8565b10156107355760035460405163095ea7b360e01b81526001600160a01b038681169263095ea7b3926106e192909116908590600401610a1f565b602060405180830381600087803b1580156106fb57600080fd5b505af115801561070f573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610733919061098c565b505b6003546040805160a081019091528481526000916001600160a01b03169063c04b8d599060208101866107685730610775565b6001546001600160a01b03165b6001600160a01b031681526020014261271001815260200185815260200160008152506040518263ffffffff1660e01b81526004016107b49190610a6f565b602060405180830381600087803b1580156107ce57600080fd5b505af11580156107e2573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061080691906109a8565b90507f2a74fee11ab3c621208caf45f4052cc2bbb42b6353e0152f8afd4bbee0f0086385846108355730610842565b6001546001600160a01b03165b83604051610852939291906109fb565b60405180910390a15050505050565b3390565b80356001600160a01b038116811461087c57600080fd5b919050565b803561087c81610afe565b60006020828403121561089d578081fd5b6108a682610865565b9392505050565b6000806000606084860312156108c1578182fd5b6108ca84610865565b925060208085013567ffffffffffffffff808211156108e7578485fd5b818701915087601f8301126108fa578485fd5b81358181111561090657fe5b604051601f8201601f191681018501838111828210171561092357fe5b60405281815283820185018a1015610939578687fd5b81858501868301379081019093019490945250915061095a60408501610881565b90509250925092565b60008060408385031215610975578182fd5b61097e83610865565b946020939093013593505050565b60006020828403121561099d578081fd5b81516108a681610afe565b6000602082840312156109b9578081fd5b5051919050565b6001600160a01b03169052565b6001600160a01b0391909116815260200190565b6001600160a01b0392831681529116602082015260400190565b6001600160a01b039384168152919092166020820152604081019190915260600190565b6001600160a01b03929092168252602082015260400190565b6020808252601d908201527f5f726563697069656e742073686f756c64206265206e6f6e2d7a65726f000000604082015260600190565b60006020808352835160a08285015280518060c0860152835b81811015610aa45782810184015186820160e001528301610a88565b81811115610ab5578460e083880101525b509185015191610ac860408601846109c0565b6040860151606086015260608601516080860152608086015160a086015260e0601f19601f830116860101935050505092915050565b8015158114610b0c57600080fd5b5056fe4f776e61626c653a206e6577206f776e657220697320746865207a65726f2061646472657373a164736f6c6343000706000a";

export class Swap__factory extends ContractFactory {
  constructor(
    ...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>
  ) {
    if (args.length === 1) {
      super(_abi, _bytecode, args[0]);
    } else {
      super(...args);
    }
  }

  deploy(
    _recipient: string,
    _router: string,
    _VISR: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Swap> {
    return super.deploy(
      _recipient,
      _router,
      _VISR,
      overrides || {}
    ) as Promise<Swap>;
  }
  getDeployTransaction(
    _recipient: string,
    _router: string,
    _VISR: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _recipient,
      _router,
      _VISR,
      overrides || {}
    );
  }
  attach(address: string): Swap {
    return super.attach(address) as Swap;
  }
  connect(signer: Signer): Swap__factory {
    return super.connect(signer) as Swap__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): SwapInterface {
    return new utils.Interface(_abi) as SwapInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): Swap {
    return new Contract(address, _abi, signerOrProvider) as Swap;
  }
}
