import { useWeb3React } from "@web3-react/core";
import React, { useEffect, useState } from "react";

import { ConnectionType, switchNetwork } from "libs/web3Config/connectors";
import { CHAIN_INFO, INPUT_CHAIN_URL } from "libs/web3Config/constants";

const Web3Info = () => {
  const { chainId, account } = useWeb3React();

  return (
    <div className="web3-info">
      {INPUT_CHAIN_URL === "" && (
        <h2 className="error">Please set your RPC URL in config.ts</h2>
      )}

      <h3>{`ChainId: ${chainId}`}</h3>
      <h3>{`Wallet Account: ${account}`}</h3>
      {account && (
        <button onClick={() => switchNetwork(1, ConnectionType.INJECTED)}>
          {`Switch to ${CHAIN_INFO[1].label}`}
        </button>
      )}
    </div>
  );
};

export default Web3Info;
