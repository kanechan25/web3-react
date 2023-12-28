import React from "react";

import {
  ConnectionType,
  getHasMetaMaskExtensionInstalled,
} from "libs/web3Config/connectors";
import { METAMASK_URL } from "libs/web3Config/constants";
import { Option } from "libs/web3Components/Option";
import iconMetamask from "assets/images/wallets/metamask.png";
import iconCoinbase from "assets/images/wallets/coinbaseWalletIcon.svg";
import iconWalletCn from "assets/images/wallets/walletConnectIcon.svg";

type ConnectOptionsParams = {
  activeConnectionType: ConnectionType | null;
  isConnectionActive: boolean;
  onActivate: (connectionType: ConnectionType) => void;
  onDeactivate: (connectionType: null) => void;
};

export const ConnectionOptions = ({
  activeConnectionType,
  isConnectionActive,
  onActivate,
  onDeactivate,
}: ConnectOptionsParams) => {
  function getOptions(isActive: boolean) {
    const hasMetaMaskExtension = getHasMetaMaskExtensionInstalled();

    const isNoOptionActive =
      !isActive || (isActive && activeConnectionType === null);

    const metaMaskOption = hasMetaMaskExtension ? (
      <Option
        isEnabled={
          isNoOptionActive || activeConnectionType === ConnectionType.INJECTED
        }
        isConnected={activeConnectionType === ConnectionType.INJECTED}
        connectionType={ConnectionType.INJECTED}
        onActivate={onActivate}
        onDeactivate={onDeactivate}
        iconWallet={iconMetamask}
      />
    ) : (
      <a href={METAMASK_URL}>
        <button>Install Metamask</button>
      </a>
    );

    const coinbaseWalletOption = (
      <Option
        isEnabled={
          isNoOptionActive ||
          activeConnectionType === ConnectionType.COINBASE_WALLET
        }
        isConnected={activeConnectionType === ConnectionType.COINBASE_WALLET}
        connectionType={ConnectionType.COINBASE_WALLET}
        onActivate={onActivate}
        onDeactivate={onDeactivate}
        iconWallet={iconCoinbase}
      />
    );

    const walletConnectOption = (
      <Option
        isEnabled={
          isNoOptionActive ||
          activeConnectionType === ConnectionType.WALLET_CONNECT
        }
        isConnected={activeConnectionType === ConnectionType.WALLET_CONNECT}
        connectionType={ConnectionType.WALLET_CONNECT}
        onActivate={onActivate}
        onDeactivate={onDeactivate}
        iconWallet={iconWalletCn}
      />
    );

    return (
      <>
        {metaMaskOption}
        {coinbaseWalletOption}
        {walletConnectOption}
      </>
    );
  }

  return <div className="connectors">{getOptions(isConnectionActive)}</div>;
};
