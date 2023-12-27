import React, { useState } from "react";
import { Box } from "@mui/material";
import { ConnectionOptions } from "libs/web3Components/ConnectionOptions";
import { ConnectionType } from "libs/web3Config/connectors";
import { useWeb3React } from "@web3-react/core";

const Web3Modal: React.FC = () => {
  const { isActive } = useWeb3React();
  const [connectionType, setConnectionType] = useState<ConnectionType | null>(
    null
  );
  return (
    <Box>
      <ConnectionOptions
        activeConnectionType={connectionType}
        isConnectionActive={isActive}
        onActivate={setConnectionType}
        onDeactivate={setConnectionType}
      />
    </Box>
  );
};

export default Web3Modal;
