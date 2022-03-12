/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Admin, AdminInterface } from "../Admin";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_admin",
        type: "address",
      },
      {
        internalType: "address",
        name: "_advisor",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_hypervisor",
        type: "address",
      },
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
    ],
    name: "addBaseLiquidity",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_hypervisor",
        type: "address",
      },
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
    ],
    name: "addLimitLiquidity",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "admin",
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
    name: "advisor",
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
        name: "_hypervisor",
        type: "address",
      },
      {
        internalType: "address[]",
        name: "listed",
        type: "address[]",
      },
    ],
    name: "appendList",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_hypervisor",
        type: "address",
      },
    ],
    name: "pendingFees",
    outputs: [
      {
        internalType: "uint256",
        name: "fees0",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "fees1",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_hypervisor",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "shares",
        type: "uint256",
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
        internalType: "address",
        name: "_hypervisor",
        type: "address",
      },
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
    ],
    name: "rebalance",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_hypervisor",
        type: "address",
      },
      {
        internalType: "address",
        name: "listed",
        type: "address",
      },
    ],
    name: "removeListed",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IERC20",
        name: "token",
        type: "address",
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
    ],
    name: "rescueERC20",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_hypervisor",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_deposit0Max",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_deposit1Max",
        type: "uint256",
      },
    ],
    name: "setDepositMax",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_hypervisor",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_maxTotalSupply",
        type: "uint256",
      },
    ],
    name: "setMaxTotalSupply",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_hypervisor",
        type: "address",
      },
    ],
    name: "toggleWhitelist",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newAdmin",
        type: "address",
      },
    ],
    name: "transferAdmin",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newAdvisor",
        type: "address",
      },
    ],
    name: "transferAdvisor",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_hypervisor",
        type: "address",
      },
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferHypervisorOwner",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5060405161112d38038061112d8339818101604052604081101561003357600080fd5b5080516020909101516001600160a01b038216610097576040805162461bcd60e51b815260206004820152601960248201527f5f61646d696e2073686f756c64206265206e6f6e2d7a65726f00000000000000604482015290519081900360640190fd5b6001600160a01b0381166100f2576040805162461bcd60e51b815260206004820152601b60248201527f5f61647669736f722073686f756c64206265206e6f6e2d7a65726f0000000000604482015290519081900360640190fd5b600080546001600160a01b039384166001600160a01b031991821617909155600180549290931691161790556110008061012d6000396000f3fe608060405234801561001057600080fd5b50600436106101005760003560e01c80637b79a6d811610097578063d0645c5111610066578063d0645c51146103cd578063f141e708146103fb578063f4642b521461044e578063f851a4401461048057610100565b80637b79a6d8146102eb57806380a2236d1461031d578063a6da8e0d1461034f578063afadd527146103a157610100565b80634fe5ca8c116100d35780634fe5ca8c146101be5780635d799f87146101e45780636a9dc0da1461021257806375829def146102c557610100565b80630fdf7a4c146101055780631936e4be1461013557806325d2a3f31461015957806339393ac914610198575b600080fd5b6101336004803603604081101561011b57600080fd5b506001600160a01b0381358116916020013516610488565b005b61013d61053f565b604080516001600160a01b039092168252519081900360200190f35b61017f6004803603602081101561016f57600080fd5b50356001600160a01b031661054e565b6040805192835260208301919091528051918290030190f35b610133600480360360208110156101ae57600080fd5b50356001600160a01b0316610618565b610133600480360360208110156101d457600080fd5b50356001600160a01b03166106ba565b610133600480360360408110156101fa57600080fd5b506001600160a01b0381358116916020013516610790565b6101336004803603604081101561022857600080fd5b6001600160a01b03823516919081019060408101602082013564010000000081111561025357600080fd5b82018360208201111561026557600080fd5b8035906020019184602083028401116401000000008311171561028757600080fd5b919080806020026020016040519081016040528093929190818152602001838360200280828437600092019190915250929550610960945050505050565b610133600480360360208110156102db57600080fd5b50356001600160a01b0316610a2d565b6101336004803603606081101561030157600080fd5b506001600160a01b038135169060208101359060400135610b03565b6101336004803603606081101561033357600080fd5b506001600160a01b038135169060208101359060400135610bbc565b61037b6004803603604081101561036557600080fd5b506001600160a01b038135169060200135610c56565b604080519485526020850193909352838301919091526060830152519081900360800190f35b610133600480360360408110156103b757600080fd5b506001600160a01b038135169060200135610d40565b610133600480360360408110156103e357600080fd5b506001600160a01b0381358116916020013516610dd2565b610133600480360360c081101561041157600080fd5b506001600160a01b0381358116916020810135600290810b926040830135820b926060810135830b926080820135900b9160a09091013516610e6d565b6101336004803603606081101561046457600080fd5b506001600160a01b038135169060208101359060400135610f48565b61013d610fe4565b6000546001600160a01b031633146104d4576040805162461bcd60e51b815260206004820152600a60248201526937b7363c9030b236b4b760b11b604482015290519081900360640190fd5b816001600160a01b031663f2fde38b826040518263ffffffff1660e01b815260040180826001600160a01b03168152602001915050600060405180830381600087803b15801561052357600080fd5b505af1158015610537573d6000803e3d6000fd5b505050505050565b6001546001600160a01b031681565b60015460009081906001600160a01b031633146105a1576040805162461bcd60e51b815260206004820152600c60248201526b37b7363c9030b23b34b9b7b960a11b604482015290519081900360640190fd5b826001600160a01b031663224438d16040518163ffffffff1660e01b81526004016040805180830381600087803b1580156105db57600080fd5b505af11580156105ef573d6000803e3d6000fd5b505050506040513d604081101561060557600080fd5b5080516020909101519094909350915050565b6000546001600160a01b03163314610664576040805162461bcd60e51b815260206004820152600a60248201526937b7363c9030b236b4b760b11b604482015290519081900360640190fd5b806001600160a01b0316637e15144b6040518163ffffffff1660e01b8152600401600060405180830381600087803b15801561069f57600080fd5b505af11580156106b3573d6000803e3d6000fd5b5050505050565b6000546001600160a01b03163314610706576040805162461bcd60e51b815260206004820152600a60248201526937b7363c9030b236b4b760b11b604482015290519081900360640190fd5b6001600160a01b038116610761576040805162461bcd60e51b815260206004820152601d60248201527f6e657741647669736f722073686f756c64206265206e6f6e2d7a65726f000000604482015290519081900360640190fd5b6001805473ffffffffffffffffffffffffffffffffffffffff19166001600160a01b0392909216919091179055565b6000546001600160a01b031633146107dc576040805162461bcd60e51b815260206004820152600a60248201526937b7363c9030b236b4b760b11b604482015290519081900360640190fd5b6001600160a01b038116610837576040805162461bcd60e51b815260206004820152601c60248201527f726563697069656e742073686f756c64206265206e6f6e2d7a65726f00000000604482015290519081900360640190fd5b816001600160a01b031663a9059cbb82846001600160a01b03166370a08231306040518263ffffffff1660e01b815260040180826001600160a01b0316815260200191505060206040518083038186803b15801561089457600080fd5b505afa1580156108a8573d6000803e3d6000fd5b505050506040513d60208110156108be57600080fd5b5051604080517fffffffff0000000000000000000000000000000000000000000000000000000060e086901b1681526001600160a01b03909316600484015260248301919091525160448083019260209291908290030181600087803b15801561092757600080fd5b505af115801561093b573d6000803e3d6000fd5b505050506040513d602081101561095157600080fd5b505161095c57600080fd5b5050565b6000546001600160a01b031633146109ac576040805162461bcd60e51b815260206004820152600a60248201526937b7363c9030b236b4b760b11b604482015290519081900360640190fd5b604051637fe75b0760e01b81526020600482018181528351602484015283516001600160a01b03861693637fe75b0793869392839260440191808601910280838360005b83811015610a085781810151838201526020016109f0565b5050505090500192505050600060405180830381600087803b15801561052357600080fd5b6000546001600160a01b03163314610a79576040805162461bcd60e51b815260206004820152600a60248201526937b7363c9030b236b4b760b11b604482015290519081900360640190fd5b6001600160a01b038116610ad4576040805162461bcd60e51b815260206004820152601b60248201527f6e657741646d696e2073686f756c64206265206e6f6e2d7a65726f0000000000604482015290519081900360640190fd5b6000805473ffffffffffffffffffffffffffffffffffffffff19166001600160a01b0392909216919091179055565b6001546001600160a01b03163314610b51576040805162461bcd60e51b815260206004820152600c60248201526b37b7363c9030b23b34b9b7b960a11b604482015290519081900360640190fd5b826001600160a01b0316635dbba48e83836040518363ffffffff1660e01b81526004018083815260200182815260200192505050600060405180830381600087803b158015610b9f57600080fd5b505af1158015610bb3573d6000803e3d6000fd5b50505050505050565b6000546001600160a01b03163314610c08576040805162461bcd60e51b815260206004820152600a60248201526937b7363c9030b236b4b760b11b604482015290519081900360640190fd5b826001600160a01b0316633e091ee983836040518363ffffffff1660e01b81526004018083815260200182815260200192505050600060405180830381600087803b158015610b9f57600080fd5b6001546000908190819081906001600160a01b03163314610cad576040805162461bcd60e51b815260206004820152600c60248201526b37b7363c9030b23b34b9b7b960a11b604482015290519081900360640190fd5b856001600160a01b0316637f2116ff866040518263ffffffff1660e01b815260040180828152602001915050608060405180830381600087803b158015610cf357600080fd5b505af1158015610d07573d6000803e3d6000fd5b505050506040513d6080811015610d1d57600080fd5b508051602082015160408301516060909301519199909850919650945092505050565b6000546001600160a01b03163314610d8c576040805162461bcd60e51b815260206004820152600a60248201526937b7363c9030b236b4b760b11b604482015290519081900360640190fd5b816001600160a01b0316633f3e4c11826040518263ffffffff1660e01b815260040180828152602001915050600060405180830381600087803b15801561052357600080fd5b6000546001600160a01b03163314610e1e576040805162461bcd60e51b815260206004820152600a60248201526937b7363c9030b236b4b760b11b604482015290519081900360640190fd5b816001600160a01b03166328b0e4cc826040518263ffffffff1660e01b815260040180826001600160a01b03168152602001915050600060405180830381600087803b15801561052357600080fd5b6001546001600160a01b03163314610ebb576040805162461bcd60e51b815260206004820152600c60248201526b37b7363c9030b23b34b9b7b960a11b604482015290519081900360640190fd5b6040805163367a93c360e11b8152600287810b600483015286810b602483015285810b604483015284900b60648201526001600160a01b038381166084830152915191881691636cf527869160a48082019260009290919082900301818387803b158015610f2857600080fd5b505af1158015610f3c573d6000803e3d6000fd5b50505050505050505050565b6001546001600160a01b03163314610f96576040805162461bcd60e51b815260206004820152600c60248201526b37b7363c9030b23b34b9b7b960a11b604482015290519081900360640190fd5b826001600160a01b0316630d1df8dc83836040518363ffffffff1660e01b81526004018083815260200182815260200192505050600060405180830381600087803b158015610b9f57600080fd5b6000546001600160a01b03168156fea164736f6c6343000706000a";

export class Admin__factory extends ContractFactory {
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
    _admin: string,
    _advisor: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Admin> {
    return super.deploy(_admin, _advisor, overrides || {}) as Promise<Admin>;
  }
  getDeployTransaction(
    _admin: string,
    _advisor: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_admin, _advisor, overrides || {});
  }
  attach(address: string): Admin {
    return super.attach(address) as Admin;
  }
  connect(signer: Signer): Admin__factory {
    return super.connect(signer) as Admin__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): AdminInterface {
    return new utils.Interface(_abi) as AdminInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): Admin {
    return new Contract(address, _abi, signerOrProvider) as Admin;
  }
}
