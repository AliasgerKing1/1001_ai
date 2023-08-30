import React, { useState } from 'react'
import {NavLink, useNavigate} from "react-router-dom"
import {useFormik} from "formik"
import SignupSchema from "../../../Schemas/SignUpSchema"
import { addUser } from '../../../Services/UserSerivice'
import ErrorAlert from '../../shared/Alerts/ErrorAlert'

function formatDate(timestamp) {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(timestamp).toLocaleDateString('en-IN', options);
}
let date = new Date()
const formattedDate = formatDate(date);
let initialValues = {
  email : "",
  username:  "",
  password : "",
  conf_password : "",
  join_date : formattedDate
}

const Signup = () => {
    let [eye, setEye] = useState(false)
    let [showAlert, setShowAlert] = useState(false);
    let [showLoader, setShowLoader] = useState(false);
    let [msg, setMsg] = useState("");

    let navigate = useNavigate();

    let {values, handleBlur, handleChange, handleSubmit, errors, touched} = useFormik({
      initialValues : initialValues,
      validationSchema : SignupSchema,
      onSubmit : async () => {
        try {
          setShowLoader(true)
          let result = await addUser(values);
          if(result.data.status == 200) {
            navigate("/signin")
            setShowAlert(false)
          } else {
            setShowAlert(true)
            setMsg("Internal Server Error")
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
                        {/* Register Card */}
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
            <h4 className="mb-1 pt-2">Adventure starts here 🚀</h4>
            <p className="mb-4">Make your Image conversion task easy!</p>
            <form id="formAuthentication" className="mb-3" onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="username" className="form-label fl">Username</label>
                <input type="text" className={`form-control ${touched.username && errors.username ? "is-invalid" : ""}`}  id="username" name="username" placeholder="Enter your username" autofocus onChange={handleChange} onBlur={handleBlur} value={values.username} />
                <div>{touched.username && errors.username ? (<small className='text-danger'>{errors.username}</small>) : null}</div>
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label fl">Email</label>
                <input type="text" className={`form-control ${touched.email && errors.email ? "is-invalid" : ""}`} id="email" name="email" placeholder="Enter your email" onChange={handleChange} onBlur={handleBlur} value={values.email} />
                <div>{touched.email && errors.email ? (<small className='text-danger'>{errors.email}</small>) : null}</div>
              </div>
              <div className="mb-3 form-password-toggle">
                <label className="form-label fl" htmlFor="password">Password</label>
                <div className="input-group input-group-merge">
                  <input type={eye ? 'text' : "password"} id="password" className={`form-control ${touched.password && errors.password ? "is-invalid" : ""}`} name="password" placeholder="············" aria-describedby="password" onChange={handleChange} onBlur={handleBlur} value={values.password} />
                  <span className="input-group-text cursor-pointer"  onClick={()=>setEye(!eye)}><i className={`ti ${ eye ? "ti-eye": "ti-eye-off"}`} /></span>
                </div>
                <div>{touched.password && errors.password ? (<small className='text-danger'>{errors.password}</small>) : null}</div>
              </div>
              <div className="mb-3 form-password-toggle">
                <label className="form-label fl" htmlFor="conf-password">Confirm Password</label>
                <div className="input-group input-group-merge">
                  <input type={eye ? 'text' : "password"} id="conf-password" className={`form-control ${touched.conf_password && errors.conf_password ? "is-invalid" : ""}`} name="conf_password" placeholder="············" aria-describedby="conf-password" onChange={handleChange} onBlur={handleBlur} value={values.conf_password} />
                </div>
                <div>{touched.conf_password && errors.conf_password ? (<small className='text-danger'>{errors.conf_password}</small>) : null}</div>
              </div>
  <div className="mb-3 fv-plugins-icon-container">
  <div className="form-check">
    <input className="form-check-input" type="checkbox" id="terms-conditions" name="terms" />
    <label className="form-check-label" htmlFor="terms-conditions">
      I agree to
      <a href="javascript:void(0);" className='fw-600'> privacy policy &amp; terms</a>
    </label>
    <div className="fv-plugins-message-container fv-plugins-message-container--enabled invalid-feedback" /></div>
</div>

              <button className="btn btn-primary d-grid w-100">
                Sign up
              </button>
              {showAlert ? (<ErrorAlert msg={msg} />) : null}
            </form>
            <p className="text-center">
              <span>Already have an account?</span>
              <NavLink to="/signin">
                <span className='fw-600'> Sign in instead</span>
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
        {/* Register Card */}
            </div>
        </div>
      </div>
    </div>
  </div>
  {/* / Content */}

    </>
  )
}

export default Signup
