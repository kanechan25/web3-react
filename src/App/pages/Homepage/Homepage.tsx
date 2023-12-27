import { useWeb3React } from "@web3-react/core";
import React, { useEffect, useState } from "react";

import { ConnectionType, switchNetwork } from "libs/web3Config/connectors";
import { CHAIN_INFO, INPUT_CHAIN_URL } from "libs/web3Config/constants";
import Web3Connection from "libs/web3Components/Web3Connection";

const Homepage = () => {
  const { chainId, account } = useWeb3React();
  const [connectionType, setConnectionType] = useState<ConnectionType | null>(
    null
  );

  return (
    <div className="Home">
      {INPUT_CHAIN_URL === "" && (
        <h2 className="error">Please set your RPC URL in config.ts</h2>
      )}
      <Web3Connection />

      <h3>{`ChainId: ${chainId}`}</h3>
      <h3>{`Connected Account: ${account}`}</h3>
      {Object.keys(CHAIN_INFO).map((chainId) => (
        <div key={chainId}>
          <button
            onClick={() => switchNetwork(parseInt(chainId), connectionType)}
          >
            {`Switch to ${CHAIN_INFO[chainId].label}`}
          </button>
        </div>
      ))}
    </div>
  );
};

export default Homepage;
