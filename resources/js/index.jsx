import React from 'react'
import { createRoot, } from 'react-dom/client'
import { Provider } from 'react-redux'
import { Helmet } from 'react-helmet'
import { PayPalScriptProvider } from "@paypal/react-paypal-js";

import App from './App'
import store from './redux/store'

import './index.css'
import favicon from './favicon.png'

import $ from'jquery/dist/jquery.min.js'
import Popper from'@popperjs/core/dist/cjs/popper'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'

import './zephyr_bootstrap.css'

const container = document.getElementById('app')
const root = createRoot(container)

root.render(
  <React.StrictMode>
    <Helmet>
      <link 
        rel="icon" 
        type="image/png"
        href={favicon}
      />
    </Helmet>
    <PayPalScriptProvider options={{ clientId: import.meta.env.VITE_PAYPAL_CLIENT_ID }}>
      <Provider store={store}>
        <App />
      </Provider>
    </PayPalScriptProvider>
  </React.StrictMode>
)