import React, { useState } from 'react'
import {NavLink, useNavigate} from "react-router-dom"
import { social,signinText, signupText, signupTextSuffix, main_signin_heading, sub_main_signin_heading, form, brand } from '../../../Json/Design_system';
import {InInput_Email_Username, Input_Password} from "../../../shared/Inputs/Inputs"
const vuexy_cover_signin = () => {
  let [rememberMe, setRememberMe] = useState(true)
  let [divider, setDivider] = useState(true)
  let [socialSignin, setSocialSignin] = useState(true)
  return (
  <>
      
{/* Content */}
<div className="authentication-wrapper authentication-cover authentication-bg">
  <div className="authentication-inner row">
    {/* /Left Text */}
    <div className="d-none d-lg-flex col-lg-7 p-0">
      <div className="auth-cover-bg auth-cover-bg-color d-flex justify-content-center align-items-center">
        <img src="../../assets/img/illustrations/auth-login-illustration-light.png" alt="auth-login-cover" className="img-fluid my-5 auth-illustration" data-app-light-img="illustrations/auth-login-illustration-light.png" data-app-dark-img="illustrations/auth-login-illustration-dark.html" />
        <img src="../../assets/img/illustrations/bg-shape-image-light.png" alt="auth-login-cover" className="platform-bg" data-app-light-img="illustrations/bg-shape-image-light.png" data-app-dark-img="illustrations/bg-shape-image-dark.html" />
      </div>
    </div>
    {/* /Left Text */}
    {/* Login */}
    <div className="d-flex col-12 col-lg-5 align-items-center p-sm-5 p-4">
      <div className="w-px-400 mx-auto">
        {/* Logo */}
        <div className="app-brand mb-4">
          <a href="index.html" className="app-brand-link gap-2">
            <span className="app-brand-logo demo">
            {brand.logo}
            </span>
            <span className="app-brand-text demo text-body fw-bold ms-1">{brand.name}</span>
          </a>
        </div>
        {/* /Logo */}
        <h3 className="mb-1">{main_signin_heading}</h3>
        <p className="mb-4">{sub_main_signin_heading}</p>
        <form id="formAuthentication" className="mb-3">
          <div className="mb-3">
          <label htmlFor="email" className="form-label">{form.email_username_label}</label>
              <InInput_Email_Username type="text" className="form-control" id="email" name="email-username" placeholder={form.email_placeholder.length !== 0 ? (email_placeholder) : "Enter your email or username"} />
          </div>
          <div className="mb-3 form-password-toggle">
            <div className="d-flex justify-content-between">
              <label className="form-label" htmlFor="password">{form.password_label}</label>
              <a href="auth-forgot-password-cover.html">
                <small>Forgot Password?</small>
              </a>
            </div>
            <div className="input-group input-group-merge">
            <Input_Password id="password" name="password" placeholder={form.password_placeholder.length !== 0 ? (password_placeholder) : "············"} />
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
          <button className="btn btn-primary d-grid w-100">
          {signinText}
          </button>
        </form>
        <p className="text-center">
        <span>{signupTextSuffix}</span>
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
    {/* /Login */}
  </div>
</div>
{/* / Content */}

    </>
  )
}

export default vuexy_cover_signin
