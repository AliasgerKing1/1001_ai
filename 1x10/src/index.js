import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom"
import {Provider } from "react-redux"
import {configureStore, combineReducers} from "@reduxjs/toolkit"
import DetailsPageReducer from "./Redux/DetialPageReducer"
import SignInUserReducer from "./Redux/SignInUserReducer"
import DetailsReducer from "./Redux/DetailsReducer"

import { GoogleOAuthProvider } from '@react-oauth/google';
import { useGoogleLogin } from '@react-oauth/google';
const root = ReactDOM.createRoot(document.getElementById('root'));

let rootReducer = combineReducers({
DetailsPageReducer,
SignInUserReducer,
DetailsReducer
})
let store = configureStore({
  reducer : rootReducer
})
root.render(
  <GoogleOAuthProvider clientId="762966009515-5pqp4kphu99sfmvpupf35sdm8fo3n16c.apps.googleusercontent.com">
  <BrowserRouter>
  <Provider store={store}>
    <App />
  </Provider>
  </BrowserRouter>
  </GoogleOAuthProvider>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
