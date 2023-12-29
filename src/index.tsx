import './index.css'

import { Buffer } from 'buffer'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { Web3ContextProvider } from 'libs/web3/components/Web3ContextProvider'
import App from 'App/App'
import { store } from 'App/stores'

if (window.ethereum) {
  window.ethereum.autoRefreshOnNetworkChange = false
}

// Node polyfills required by WalletConnect are no longer bundled with webpack
window.Buffer = Buffer

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  // <React.StrictMode>
  <Web3ContextProvider>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </Web3ContextProvider>
  // </React.StrictMode>
)
