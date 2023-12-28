import * as React from "react";
import { Dialog } from "@mui/material";
import ConnectButton from "App/components/ConnectButton/ConnectButton";
import Web3Modal from "libs/web3Components/Web3Modal";
import { useWeb3React } from "@web3-react/core";
import { shortenString } from "App/utils";

const Web3Connection = () => {
  const { account } = useWeb3React();

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <ConnectButton onClick={handleClickOpen}>
        {account ? shortenString(account, 4, 4) : "Connect Wallet"}
      </ConnectButton>
      <Dialog open={open} onClose={handleClose}>
        <Web3Modal />
      </Dialog>
    </React.Fragment>
  );
};
export default Web3Connection;
