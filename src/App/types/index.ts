import { ConnectionType } from "libs/web3Config/connectors";

export interface IWallet {
  connectionType: ConnectionType | "";
}
