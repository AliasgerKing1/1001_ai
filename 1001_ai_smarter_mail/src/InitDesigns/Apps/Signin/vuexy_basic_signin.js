/* eslint-disable */
import React, { useState } from 'react'
import {NavLink, useNavigate} from "react-router-dom"
import { social,signinText, signupText, signupTextSuffix, main_signin_heading, sub_main_signin_heading, form, brand } from '../../../Json/Design_system';
import {Input_Email_Username, Input_Password} from "../../../Shared/Inputs/Inputs"
const Vuexy_basic_signin = () => {
  let [rememberMe, setRememberMe] = useState(true)
  let [divider, setDivider] = useState(true)
  let [socialSignin, setSocialSignin] = useState(true)
  return (
    <>
  {/* Content */}
<div className="container-xxl">
  <div className="authentication-wrapper authentication-basic container-p-y">
    <div className="authentication-inner py-4">
      {/* Login */}
      <div className="card">
        <div className="card-body">
          {/* Logo */}
          <div className="app-brand justify-content-center mb-4 mt-2">
            <a href="index.html" className="app-brand-link gap-2">
              <span className="app-brand-logo demo">
                {brand[0].logo}
              </span>
              <span className="app-brand-text demo text-body fw-bold ms-1">{brand[0].name}</span>
            </a>
          </div> 
          {/* /Logo */}
          <h4 className="mb-1 pt-2">{main_signin_heading}</h4>
          <p className="mb-4">{sub_main_signin_heading}</p>
          <form id="formAuthentication" className="mb-3">
            <div className="mb-3">
              <label htmlFor="email" className="form-label">{form[0].email_username_label}</label>
              <Input_Email_Username type="text" className="form-control" id="email" name="email-username" placeholder={form[0].email_placeholder?.length !== 0 ? (form[0].email_placeholder) : "Enter your email or username"} />
            </div>
            <div className="mb-3 form-password-toggle">
              <div className="d-flex justify-content-between">
                <label className="form-label" htmlFor="password">{form[0].password_label}</label>
                <a href="auth-forgot-password-basic.html">
                  <small>Forgot Password?</small>
                </a>
              </div>
              <div className="input-group input-group-merge">
                <Input_Password type="password" className="form-control" id="password" name="password" placeholder={form[0].password_placeholder?.length !== 0 ? (form[0].password_placeholder) : "············"} />
                <span className="input-group-text cursor-pointer"><i className="ti ti-eye-off" /></span>
              </div>
            </div>
            {rememberMe && (            
            <div className="mb-3">
              <div className="form-check">
                <input className="form-check-input" type="checkbox" id="remember-me" />
                <label className="form-check-label" htmlFor="remember-me">
                  Remember Me
                </label>
              </div>
            </div>
            )}

            <div className="mb-3">
              <button className="btn btn-primary d-grid w-100" type="submit">{signinText}</button>
            </div>
          </form>
          <p className="text-center">
            <span>{signupTextSuffix} </span>
            <NavLink to="/signup">
              <span>{signupText}</span>
            </NavLink>
          </p>
          {divider && 
          (<div className="divider my-4">
            <div className="divider-text">or</div>
          </div>
          )}
          {socialSignin && (
                      <div className="d-flex justify-content-center">
                      <NavLink to={`/${social.facebook}`} className="btn btn-icon btn-label-facebook me-3">
                        <i className="tf-icons fa-brands fa-facebook-f fs-5" />
                      </NavLink>
                      <NavLink to={`/${social.google}`} className="btn btn-icon btn-label-google-plus me-3">
                        <i className="tf-icons fa-brands fa-google fs-5" />
                      </NavLink>
                      <NavLink to={`/${social.twitter}`} className="btn btn-icon btn-label-twitter">
                        <i className="tf-icons fa-brands fa-twitter fs-5" />
                      </NavLink>
                    </div>
          )}
        </div>
      </div>
      {/* /Register */}
    </div>
  </div>
</div>
{/* / Content */}

    </>
  )
}

export default Vuexy_basic_signin
