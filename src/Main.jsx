import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { Provider } from 'react-redux'
import {store} from './Redux/Store'
// import { Provider } from 'react-redux'




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <Provider store={Store}>  */}
    <Provider store={store}> 
    <App/>
    </Provider>
    {/* </Provider> */}
  </React.StrictMode>,
) 