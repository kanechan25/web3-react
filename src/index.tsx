import "./index.css";

import { Buffer } from "buffer";
import React from "react";
import ReactDOM from "react-dom/client";

import App from "App/App";
import { Web3ContextProvider } from "libs/web3Components/Web3ContextProvider";

if (window.ethereum) {
  window.ethereum.autoRefreshOnNetworkChange = false;
}

// Node polyfills required by WalletConnect are no longer bundled with webpack
window.Buffer = Buffer;

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Web3ContextProvider>
      <App />
    </Web3ContextProvider>
  </React.StrictMode>
);
