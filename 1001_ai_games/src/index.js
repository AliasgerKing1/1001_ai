/*eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import {configureStore, combineReducers} from "@reduxjs/toolkit";
import { Provider } from 'react-redux';
import PathReducer from "./Redux/PathReducer" 
import UserReducer from "./Redux/UserReducer" 
import SingleUserReducer from './Redux/SingleUserReducer';
import OtpReducer from './Redux/OtpReducer';
import TypeOtpNotReducer from './Redux/TypeOtpNotReducer';
import VerificationReducer from './Redux/VerifiedReducer';
import SearchReducer from './Redux/SearchReducer';
import EmptySearchReducer from "./Redux/EmptySearchReducer"
import otherUserReducer from "./Redux/OtherUserRedux"
import FollowersReducer from "./Redux/FollowersReducer"
import FollowingsReducer from "./Redux/FollowingsReducer"
import RedirectFollowReducer from './Redux/RedirectFollowReducer';
import FetchFollowersReducer from './Redux/FetchFollowersReducer';
import FetchFollowingsReducer from './Redux/FetchFollowingsReducer';

import { BrowserRouter } from 'react-router-dom';
let rootReducer = combineReducers({
  PathReducer,
  UserReducer,
  SingleUserReducer,
  OtpReducer,
  TypeOtpNotReducer,
  VerificationReducer,
  SearchReducer,
  EmptySearchReducer,
  otherUserReducer,
  FollowersReducer,
  FollowingsReducer,
  RedirectFollowReducer,
  FetchFollowersReducer,
  FetchFollowingsReducer,
})
let store = configureStore ({
  reducer : rootReducer
})
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Provider store={store}>
    <App />
    </Provider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
