export interface Web3State {
  wallet: any | null;
}

export interface Web3UpdateProps {
  wallet: any | null;
}

export type Web3Wallet = {
  provider: any;
  address: string;
}