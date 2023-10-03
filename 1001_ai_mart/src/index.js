import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom'
import { GoogleLogin, GoogleOAuthProvider, useGoogleLogin } from '@react-oauth/google';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <GoogleOAuthProvider
    clientId="22352471051-nmb00ujkoajleo1gkha4obl72cp7elra.apps.googleusercontent.com">
<BrowserRouter>
<App />
</BrowserRouter>
          </GoogleOAuthProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
