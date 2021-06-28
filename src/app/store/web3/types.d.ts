import { ethers } from 'ethers'

export interface Web3State {
  wallet: Web3Wallet | null;
}

export interface Web3UpdateProps {
  wallet: Web3Wallet | null;
}

export enum Web3ConnectType {
  MetaMask
}

export type Web3Wallet = {
  type: Web3ConnectType;
  provider: ethers.providers.Web3Provider;
  address: string;
}