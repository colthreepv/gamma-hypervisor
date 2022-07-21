/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import type { TypedEventFilter, TypedEvent, TypedListener } from "./common";

interface IHypervisorInterface extends ethers.utils.Interface {
  functions: {
    "PRECISION()": FunctionFragment;
    "addBaseLiquidity(uint256,uint256,uint256[2])": FunctionFragment;
    "addLimitLiquidity(uint256,uint256,uint256[2])": FunctionFragment;
    "approve(address,uint256)": FunctionFragment;
    "balanceOf(address)": FunctionFragment;
    "baseLower()": FunctionFragment;
    "baseUpper()": FunctionFragment;
    "compound(uint256[4])": FunctionFragment;
    "currentTick()": FunctionFragment;
    "deposit(uint256,uint256,address,address,uint256[4])": FunctionFragment;
    "deposit0Max()": FunctionFragment;
    "deposit1Max()": FunctionFragment;
    "getBasePosition()": FunctionFragment;
    "getTotalAmounts()": FunctionFragment;
    "limitLower()": FunctionFragment;
    "limitUpper()": FunctionFragment;
    "pool()": FunctionFragment;
    "pullLiquidity(uint256,uint256[4])": FunctionFragment;
    "rebalance(int24,int24,int24,int24,address,uint256[4],uint256[4])": FunctionFragment;
    "removeWhitelisted()": FunctionFragment;
    "setFee(uint8)": FunctionFragment;
    "setWhitelist(address)": FunctionFragment;
    "tickSpacing()": FunctionFragment;
    "token0()": FunctionFragment;
    "token1()": FunctionFragment;
    "totalSupply()": FunctionFragment;
    "transfer(address,uint256)": FunctionFragment;
    "transferFrom(address,address,uint256)": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "withdraw(uint256,address,address,uint256[4])": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "PRECISION", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "addBaseLiquidity",
    values: [BigNumberish, BigNumberish, [BigNumberish, BigNumberish]]
  ): string;
  encodeFunctionData(
    functionFragment: "addLimitLiquidity",
    values: [BigNumberish, BigNumberish, [BigNumberish, BigNumberish]]
  ): string;
  encodeFunctionData(
    functionFragment: "approve",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "balanceOf", values: [string]): string;
  encodeFunctionData(functionFragment: "baseLower", values?: undefined): string;
  encodeFunctionData(functionFragment: "baseUpper", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "compound",
    values: [[BigNumberish, BigNumberish, BigNumberish, BigNumberish]]
  ): string;
  encodeFunctionData(
    functionFragment: "currentTick",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "deposit",
    values: [
      BigNumberish,
      BigNumberish,
      string,
      string,
      [BigNumberish, BigNumberish, BigNumberish, BigNumberish]
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "deposit0Max",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "deposit1Max",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getBasePosition",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getTotalAmounts",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "limitLower",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "limitUpper",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "pool", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "pullLiquidity",
    values: [
      BigNumberish,
      [BigNumberish, BigNumberish, BigNumberish, BigNumberish]
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "rebalance",
    values: [
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      string,
      [BigNumberish, BigNumberish, BigNumberish, BigNumberish],
      [BigNumberish, BigNumberish, BigNumberish, BigNumberish]
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "removeWhitelisted",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setFee",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setWhitelist",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "tickSpacing",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "token0", values?: undefined): string;
  encodeFunctionData(functionFragment: "token1", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "totalSupply",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "transfer",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "transferFrom",
    values: [string, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "withdraw",
    values: [
      BigNumberish,
      string,
      string,
      [BigNumberish, BigNumberish, BigNumberish, BigNumberish]
    ]
  ): string;

  decodeFunctionResult(functionFragment: "PRECISION", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "addBaseLiquidity",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "addLimitLiquidity",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "approve", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "baseLower", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "baseUpper", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "compound", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "currentTick",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "deposit", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "deposit0Max",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "deposit1Max",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getBasePosition",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getTotalAmounts",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "limitLower", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "limitUpper", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "pool", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "pullLiquidity",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "rebalance", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "removeWhitelisted",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setFee", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setWhitelist",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "tickSpacing",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "token0", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "token1", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "totalSupply",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "transfer", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "transferFrom",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result;

  events: {};
}

export class IHypervisor extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: IHypervisorInterface;

  functions: {
    PRECISION(overrides?: CallOverrides): Promise<[BigNumber]>;

    addBaseLiquidity(
      amount0: BigNumberish,
      amount1: BigNumberish,
      minIn: [BigNumberish, BigNumberish],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    addLimitLiquidity(
      amount0: BigNumberish,
      amount1: BigNumberish,
      minIn: [BigNumberish, BigNumberish],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    approve(
      arg0: string,
      arg1: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    balanceOf(arg0: string, overrides?: CallOverrides): Promise<[BigNumber]>;

    baseLower(overrides?: CallOverrides): Promise<[number] & { tick: number }>;

    baseUpper(overrides?: CallOverrides): Promise<[number] & { tick: number }>;

    "compound(uint256[4])"(
      inMin: [BigNumberish, BigNumberish, BigNumberish, BigNumberish],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "compound()"(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    currentTick(
      overrides?: CallOverrides
    ): Promise<[number] & { tick: number }>;

    deposit(
      arg0: BigNumberish,
      arg1: BigNumberish,
      arg2: string,
      arg3: string,
      minIn: [BigNumberish, BigNumberish, BigNumberish, BigNumberish],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    deposit0Max(overrides?: CallOverrides): Promise<[BigNumber]>;

    deposit1Max(overrides?: CallOverrides): Promise<[BigNumber]>;

    getBasePosition(
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber] & {
        liquidity: BigNumber;
        total0: BigNumber;
        total1: BigNumber;
      }
    >;

    getTotalAmounts(
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & { total0: BigNumber; total1: BigNumber }
    >;

    limitLower(overrides?: CallOverrides): Promise<[number] & { tick: number }>;

    limitUpper(overrides?: CallOverrides): Promise<[number] & { tick: number }>;

    pool(overrides?: CallOverrides): Promise<[string]>;

    pullLiquidity(
      shares: BigNumberish,
      minAmounts: [BigNumberish, BigNumberish, BigNumberish, BigNumberish],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    rebalance(
      _baseLower: BigNumberish,
      _baseUpper: BigNumberish,
      _limitLower: BigNumberish,
      _limitUpper: BigNumberish,
      _feeRecipient: string,
      minIn: [BigNumberish, BigNumberish, BigNumberish, BigNumberish],
      outMin: [BigNumberish, BigNumberish, BigNumberish, BigNumberish],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    removeWhitelisted(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setFee(
      newFee: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setWhitelist(
      _address: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    tickSpacing(
      overrides?: CallOverrides
    ): Promise<[number] & { spacing: number }>;

    token0(overrides?: CallOverrides): Promise<[string]>;

    token1(overrides?: CallOverrides): Promise<[string]>;

    totalSupply(overrides?: CallOverrides): Promise<[BigNumber]>;

    transfer(
      arg0: string,
      arg1: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    transferFrom(
      arg0: string,
      arg1: string,
      arg2: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    withdraw(
      arg0: BigNumberish,
      arg1: string,
      arg2: string,
      arg3: [BigNumberish, BigNumberish, BigNumberish, BigNumberish],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  PRECISION(overrides?: CallOverrides): Promise<BigNumber>;

  addBaseLiquidity(
    amount0: BigNumberish,
    amount1: BigNumberish,
    minIn: [BigNumberish, BigNumberish],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  addLimitLiquidity(
    amount0: BigNumberish,
    amount1: BigNumberish,
    minIn: [BigNumberish, BigNumberish],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  approve(
    arg0: string,
    arg1: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  balanceOf(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

  baseLower(overrides?: CallOverrides): Promise<number>;

  baseUpper(overrides?: CallOverrides): Promise<number>;

  "compound(uint256[4])"(
    inMin: [BigNumberish, BigNumberish, BigNumberish, BigNumberish],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "compound()"(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  currentTick(overrides?: CallOverrides): Promise<number>;

  deposit(
    arg0: BigNumberish,
    arg1: BigNumberish,
    arg2: string,
    arg3: string,
    minIn: [BigNumberish, BigNumberish, BigNumberish, BigNumberish],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  deposit0Max(overrides?: CallOverrides): Promise<BigNumber>;

  deposit1Max(overrides?: CallOverrides): Promise<BigNumber>;

  getBasePosition(
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber, BigNumber] & {
      liquidity: BigNumber;
      total0: BigNumber;
      total1: BigNumber;
    }
  >;

  getTotalAmounts(
    overrides?: CallOverrides
  ): Promise<[BigNumber, BigNumber] & { total0: BigNumber; total1: BigNumber }>;

  limitLower(overrides?: CallOverrides): Promise<number>;

  limitUpper(overrides?: CallOverrides): Promise<number>;

  pool(overrides?: CallOverrides): Promise<string>;

  pullLiquidity(
    shares: BigNumberish,
    minAmounts: [BigNumberish, BigNumberish, BigNumberish, BigNumberish],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  rebalance(
    _baseLower: BigNumberish,
    _baseUpper: BigNumberish,
    _limitLower: BigNumberish,
    _limitUpper: BigNumberish,
    _feeRecipient: string,
    minIn: [BigNumberish, BigNumberish, BigNumberish, BigNumberish],
    outMin: [BigNumberish, BigNumberish, BigNumberish, BigNumberish],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  removeWhitelisted(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setFee(
    newFee: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setWhitelist(
    _address: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  tickSpacing(overrides?: CallOverrides): Promise<number>;

  token0(overrides?: CallOverrides): Promise<string>;

  token1(overrides?: CallOverrides): Promise<string>;

  totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

  transfer(
    arg0: string,
    arg1: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  transferFrom(
    arg0: string,
    arg1: string,
    arg2: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  withdraw(
    arg0: BigNumberish,
    arg1: string,
    arg2: string,
    arg3: [BigNumberish, BigNumberish, BigNumberish, BigNumberish],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    PRECISION(overrides?: CallOverrides): Promise<BigNumber>;

    addBaseLiquidity(
      amount0: BigNumberish,
      amount1: BigNumberish,
      minIn: [BigNumberish, BigNumberish],
      overrides?: CallOverrides
    ): Promise<void>;

    addLimitLiquidity(
      amount0: BigNumberish,
      amount1: BigNumberish,
      minIn: [BigNumberish, BigNumberish],
      overrides?: CallOverrides
    ): Promise<void>;

    approve(
      arg0: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    balanceOf(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    baseLower(overrides?: CallOverrides): Promise<number>;

    baseUpper(overrides?: CallOverrides): Promise<number>;

    "compound(uint256[4])"(
      inMin: [BigNumberish, BigNumberish, BigNumberish, BigNumberish],
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber, BigNumber] & {
        baseToken0Owed: BigNumber;
        baseToken1Owed: BigNumber;
        limitToken0Owed: BigNumber;
        limitToken1Owed: BigNumber;
      }
    >;

    "compound()"(
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber, BigNumber] & {
        baseToken0Owed: BigNumber;
        baseToken1Owed: BigNumber;
        limitToken0Owed: BigNumber;
        limitToken1Owed: BigNumber;
      }
    >;

    currentTick(overrides?: CallOverrides): Promise<number>;

    deposit(
      arg0: BigNumberish,
      arg1: BigNumberish,
      arg2: string,
      arg3: string,
      minIn: [BigNumberish, BigNumberish, BigNumberish, BigNumberish],
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    deposit0Max(overrides?: CallOverrides): Promise<BigNumber>;

    deposit1Max(overrides?: CallOverrides): Promise<BigNumber>;

    getBasePosition(
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber] & {
        liquidity: BigNumber;
        total0: BigNumber;
        total1: BigNumber;
      }
    >;

    getTotalAmounts(
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & { total0: BigNumber; total1: BigNumber }
    >;

    limitLower(overrides?: CallOverrides): Promise<number>;

    limitUpper(overrides?: CallOverrides): Promise<number>;

    pool(overrides?: CallOverrides): Promise<string>;

    pullLiquidity(
      shares: BigNumberish,
      minAmounts: [BigNumberish, BigNumberish, BigNumberish, BigNumberish],
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber, BigNumber] & {
        base0: BigNumber;
        base1: BigNumber;
        limit0: BigNumber;
        limit1: BigNumber;
      }
    >;

    rebalance(
      _baseLower: BigNumberish,
      _baseUpper: BigNumberish,
      _limitLower: BigNumberish,
      _limitUpper: BigNumberish,
      _feeRecipient: string,
      minIn: [BigNumberish, BigNumberish, BigNumberish, BigNumberish],
      outMin: [BigNumberish, BigNumberish, BigNumberish, BigNumberish],
      overrides?: CallOverrides
    ): Promise<void>;

    removeWhitelisted(overrides?: CallOverrides): Promise<void>;

    setFee(newFee: BigNumberish, overrides?: CallOverrides): Promise<void>;

    setWhitelist(_address: string, overrides?: CallOverrides): Promise<void>;

    tickSpacing(overrides?: CallOverrides): Promise<number>;

    token0(overrides?: CallOverrides): Promise<string>;

    token1(overrides?: CallOverrides): Promise<string>;

    totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

    transfer(
      arg0: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    transferFrom(
      arg0: string,
      arg1: string,
      arg2: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    withdraw(
      arg0: BigNumberish,
      arg1: string,
      arg2: string,
      arg3: [BigNumberish, BigNumberish, BigNumberish, BigNumberish],
      overrides?: CallOverrides
    ): Promise<[BigNumber, BigNumber]>;
  };

  filters: {};

  estimateGas: {
    PRECISION(overrides?: CallOverrides): Promise<BigNumber>;

    addBaseLiquidity(
      amount0: BigNumberish,
      amount1: BigNumberish,
      minIn: [BigNumberish, BigNumberish],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    addLimitLiquidity(
      amount0: BigNumberish,
      amount1: BigNumberish,
      minIn: [BigNumberish, BigNumberish],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    approve(
      arg0: string,
      arg1: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    balanceOf(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    baseLower(overrides?: CallOverrides): Promise<BigNumber>;

    baseUpper(overrides?: CallOverrides): Promise<BigNumber>;

    "compound(uint256[4])"(
      inMin: [BigNumberish, BigNumberish, BigNumberish, BigNumberish],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "compound()"(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    currentTick(overrides?: CallOverrides): Promise<BigNumber>;

    deposit(
      arg0: BigNumberish,
      arg1: BigNumberish,
      arg2: string,
      arg3: string,
      minIn: [BigNumberish, BigNumberish, BigNumberish, BigNumberish],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    deposit0Max(overrides?: CallOverrides): Promise<BigNumber>;

    deposit1Max(overrides?: CallOverrides): Promise<BigNumber>;

    getBasePosition(overrides?: CallOverrides): Promise<BigNumber>;

    getTotalAmounts(overrides?: CallOverrides): Promise<BigNumber>;

    limitLower(overrides?: CallOverrides): Promise<BigNumber>;

    limitUpper(overrides?: CallOverrides): Promise<BigNumber>;

    pool(overrides?: CallOverrides): Promise<BigNumber>;

    pullLiquidity(
      shares: BigNumberish,
      minAmounts: [BigNumberish, BigNumberish, BigNumberish, BigNumberish],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    rebalance(
      _baseLower: BigNumberish,
      _baseUpper: BigNumberish,
      _limitLower: BigNumberish,
      _limitUpper: BigNumberish,
      _feeRecipient: string,
      minIn: [BigNumberish, BigNumberish, BigNumberish, BigNumberish],
      outMin: [BigNumberish, BigNumberish, BigNumberish, BigNumberish],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    removeWhitelisted(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setFee(
      newFee: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setWhitelist(
      _address: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    tickSpacing(overrides?: CallOverrides): Promise<BigNumber>;

    token0(overrides?: CallOverrides): Promise<BigNumber>;

    token1(overrides?: CallOverrides): Promise<BigNumber>;

    totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

    transfer(
      arg0: string,
      arg1: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    transferFrom(
      arg0: string,
      arg1: string,
      arg2: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    withdraw(
      arg0: BigNumberish,
      arg1: string,
      arg2: string,
      arg3: [BigNumberish, BigNumberish, BigNumberish, BigNumberish],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    PRECISION(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    addBaseLiquidity(
      amount0: BigNumberish,
      amount1: BigNumberish,
      minIn: [BigNumberish, BigNumberish],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    addLimitLiquidity(
      amount0: BigNumberish,
      amount1: BigNumberish,
      minIn: [BigNumberish, BigNumberish],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    approve(
      arg0: string,
      arg1: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    balanceOf(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    baseLower(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    baseUpper(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "compound(uint256[4])"(
      inMin: [BigNumberish, BigNumberish, BigNumberish, BigNumberish],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "compound()"(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    currentTick(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    deposit(
      arg0: BigNumberish,
      arg1: BigNumberish,
      arg2: string,
      arg3: string,
      minIn: [BigNumberish, BigNumberish, BigNumberish, BigNumberish],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    deposit0Max(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    deposit1Max(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getBasePosition(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getTotalAmounts(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    limitLower(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    limitUpper(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    pool(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    pullLiquidity(
      shares: BigNumberish,
      minAmounts: [BigNumberish, BigNumberish, BigNumberish, BigNumberish],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    rebalance(
      _baseLower: BigNumberish,
      _baseUpper: BigNumberish,
      _limitLower: BigNumberish,
      _limitUpper: BigNumberish,
      _feeRecipient: string,
      minIn: [BigNumberish, BigNumberish, BigNumberish, BigNumberish],
      outMin: [BigNumberish, BigNumberish, BigNumberish, BigNumberish],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    removeWhitelisted(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setFee(
      newFee: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setWhitelist(
      _address: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    tickSpacing(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    token0(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    token1(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    totalSupply(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    transfer(
      arg0: string,
      arg1: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    transferFrom(
      arg0: string,
      arg1: string,
      arg2: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    withdraw(
      arg0: BigNumberish,
      arg1: string,
      arg2: string,
      arg3: [BigNumberish, BigNumberish, BigNumberish, BigNumberish],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
