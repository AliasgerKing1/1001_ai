import React, { useState } from 'react'
import {NavLink, useNavigate} from "react-router-dom"
import {useFormik} from "formik"
import SigninSchema from "../../../Schemas/SigninSchema"
import { loginUser } from '../../../Services/UserSerivice'
import ErrorAlert from '../../shared/Alerts/ErrorAlert'

let initialValues = {
  username:  "",
  password : "",
}

const Signin = () => {
  let [eye, setEye] = useState(false)
  let [showAlert, setShowAlert] = useState(false);
  let [showLoader, setShowLoader] = useState(false);
  let [msg, setMsg] = useState("");

  let navigate = useNavigate();

  let {values, handleBlur, handleChange, handleSubmit, errors, touched} = useFormik({
    initialValues : initialValues,
    validationSchema : SigninSchema,
    onSubmit : async () => {
      try {
        setShowLoader(true)
        let result = await loginUser(values);
        if(result.data.status === 200) {
          setShowAlert(false)
          localStorage.setItem('token', result.data.token)
          navigate('/auth/home')
        }
        if(result.data.errType == 1) {
          setShowAlert(true)
          setMsg("Username or Password is incorrect")
        }
        if(result.data.errType == 2) {
          setShowAlert(true)
          setMsg("Username or Password is incorrect")
        }
        setShowLoader(false)
      } catch(error) {
        setShowAlert(true)
        setMsg("Internal Server Error")
        console.log(error)
        setShowLoader(false)
      }

    }
})


  return (
    <>
 {/* Content */}
<div className="container-xxl">
  <div className="authentication-wrapper authentication-basic container-p-y">
    <div className="authentication-inner py-4">
    <div className='row'>
      <div className='col-xl-4 col-md-6 offset-md-4 offset-xl-4 mb-4'>
      {/* Login */}
      <div className="card">
        <div className="card-body">
          {/* Logo */}
          <div className="app-brand justify-content-center mb-4 mt-2">
            <a href="index.html" className="app-brand-link gap-2">
              <span className="app-brand-logo demo">
                <svg width={32} height={22} viewBox="0 0 32 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M0.00172773 0V6.85398C0.00172773 6.85398 -0.133178 9.01207 1.98092 10.8388L13.6912 21.9964L19.7809 21.9181L18.8042 9.88248L16.4951 7.17289L9.23799 0H0.00172773Z" fill="#7367F0" />
                  <path opacity="0.06" fillRule="evenodd" clipRule="evenodd" d="M7.69824 16.4364L12.5199 3.23696L16.5541 7.25596L7.69824 16.4364Z" fill="#161616" />
                  <path opacity="0.06" fillRule="evenodd" clipRule="evenodd" d="M8.07751 15.9175L13.9419 4.63989L16.5849 7.28475L8.07751 15.9175Z" fill="#161616" />
                  <path fillRule="evenodd" clipRule="evenodd" d="M7.77295 16.3566L23.6563 0H32V6.88383C32 6.88383 31.8262 9.17836 30.6591 10.4057L19.7824 22H13.6938L7.77295 16.3566Z" fill="#7367F0" />
                </svg>
              </span>
              <span className="app-brand-text demo text-body fw-bold ms-1">Vuexy</span>
            </a>
          </div>
          {/* /Logo */}
          <h4 className="mb-1 pt-2">Welcome to Vuexy! 👋</h4>
          <p className="mb-4">Please sign-in to your account and start the adventure</p>
          <form id="formAuthentication" className="mb-3" onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="username" className="form-label fl">Email or Username</label>
              <input type="text" className={`form-control ${touched.username && errors.username ? "is-invalid" : ""}`} id="username" name="username" placeholder="Enter your email or username" autofocus onChange={handleChange} onBlur={handleBlur} value={values.username} />
              <div>{touched.username && errors.username ? (<small className='text-danger'>{errors.username}</small>) : null}</div>
            </div>
            <div className="mb-3 form-password-toggle">
              <div className="d-flex justify-content-between">
                <label className="form-label fl" htmlFor="password">Password</label>
                <a href="auth-forgot-password-basic.html">
                  <small>Forgot Password?</small>
                </a>
              </div>
              <div className="input-group input-group-merge">
                <input type={eye ? 'text' : "password"} id="password" className={`form-control ${touched.password && errors.password ? "is-invalid" : ""}`} name="password" placeholder="············" aria-describedby="password" onChange={handleChange} onBlur={handleBlur} value={values.password} />
                <span className="input-group-text cursor-pointer" onClick={()=>setEye(!eye)}><i className={`ti ${ eye ? "ti-eye": "ti-eye-off"}`} /></span>
              </div>
              <div>{touched.password && errors.password ? (<small className='text-danger'>{errors.password}</small>) : null}</div>
            </div>
            <div className="mb-3">
              <div className="form-check">
                <input className="form-check-input" type="checkbox" id="remember-me" />
                <label className="form-check-label" htmlFor="remember-me">
                  Remember Me
                </label>
              </div>
            </div>
            <div className="mb-3">
              <button className="btn btn-primary d-grid w-100" type='submit'>Sign in</button>
            </div>
            {showAlert ? (<ErrorAlert msg={msg} />) : null}
          </form>
          <p className="text-center">
            <span>New on our platform?</span>
            <NavLink to="/signup">
              <span> Create an account</span>
            </NavLink>
          </p>
          <div className="divider my-4">
            <div className="divider-text">or</div>
          </div>
          <div className="d-flex justify-content-center">
            <a href="javascript:;" className="btn btn-icon btn-label-facebook me-3">
              <i className="tf-icons fa-brands fa-facebook-f fs-5" />
            </a>
            <a href="javascript:;" className="btn btn-icon btn-label-google-plus me-3">
              <i className="tf-icons fa-brands fa-google fs-5" />
            </a>
            <a href="javascript:;" className="btn btn-icon btn-label-twitter">
              <i className="tf-icons fa-brands fa-twitter fs-5" />
            </a>
          </div>
        </div>
      </div>
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

export default Signin
