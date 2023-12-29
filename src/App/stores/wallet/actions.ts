import { createAction } from "@reduxjs/toolkit";
import { ConnectionType } from "libs/web3Config/connectors";

export const setConnectionType = createAction<{
  connectionType: ConnectionType | "";
}>("wallet/setConnectionType");
