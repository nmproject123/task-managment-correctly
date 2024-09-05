import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
// import { Provider } from 'react-redux'
// import { legacy_createStore } from 'redux'
// const appStore = legacy_createStore()
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      {/* <Provider store={appStore}> */}
        <App /> 
      {/* </Provider> */}
    </BrowserRouter>
  </React.StrictMode>,
)
