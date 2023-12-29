import { useWeb3React } from "@web3-react/core";
import React, { useEffect, useState } from "react";

import { ConnectionType, switchNetwork } from "libs/web3Config/connectors";
import { CHAIN_INFO, INPUT_CHAIN_URL } from "libs/web3Config/constants";

const Homepage = () => {
  const { chainId, account } = useWeb3React();

  return <div className="Homepage">THIS IS HOMEPAGE</div>;
};

export default Homepage;
