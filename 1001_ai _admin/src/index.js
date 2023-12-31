import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom"

import { combineReducers, configureStore } from "@reduxjs/toolkit"
import { Provider } from "react-redux"


import copyAlertReducer from "./Redux/copyAlertReducer"
import PasswordCodeReducer from "./Redux/PasswordcodeReducer"
import WebsiteLeftReducer from "./Redux/WebsiteLeftReducer"
import rolesAlertReducer from "./Redux/RolesAlertReducer.js"
import AdminReducer from "./Redux/AdminReducer"
let rootReducer = combineReducers({
  copyAlertReducer,
  PasswordCodeReducer,
  WebsiteLeftReducer,
  rolesAlertReducer,
  AdminReducer
})
let store = configureStore({
  reducer: rootReducer
})
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
