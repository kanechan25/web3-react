import { Button } from "@mui/material";
import React from "react";

interface IConnectButton {
  children?: React.ReactNode;
  disabled?: boolean;
  onClick?: () => void;
}

const ConnectButton: React.FC<IConnectButton> = ({
  disabled,
  children,
  onClick,
  ...rest
}) => {
  return (
    <Button
      variant="outlined"
      color="warning"
      onClick={onClick}
      disabled={disabled}
      {...rest}
    >
      {children}
    </Button>
  );
};

export default ConnectButton;
