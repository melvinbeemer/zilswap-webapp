import { BlockchainState } from "./blockchain/types";
import { TransactionState } from "./transaction/types";
import { PreferenceState } from "./preference/types";
import { LayoutState } from "./layout/types";
import { WalletState } from "./wallet/types";
import { TokenState } from "./token/types";
import { StatsState } from "./stats/types";
import { SwapFormState } from "./swap/types";
import { PoolFormState } from "./pool/types";
import { RewardsState } from "./rewards/types";
import { BridgeFormState } from "./bridge/types";
import { Web3State } from "./web3/types";

export * from "./blockchain/types";
export * from "./transaction/types";
export * from "./preference/types";
export * from "./layout/types";
export * from "./wallet/types";
export * from "./token/types";
export * from "./stats/types";
export * from "./swap/types";
export * from "./pool/types";
export * from "./rewards/types";
export * from "./web3/types";

export interface RootState {
  blockchain: BlockchainState
  bridge: BridgeFormState;
  transaction: TransactionState;
  preference: PreferenceState;
  layout: LayoutState;
  wallet: WalletState;
  token: TokenState;
  stats: StatsState;
  swap: SwapFormState;
  pool: PoolFormState;
  rewards: RewardsState;
  web3: Web3State;
};
