import React, {useEffect, useState} from 'react'
import {NavLink, useNavigate} from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux'
import {useFormik} from 'formik'
import SigninSchema from '../../../Schemas/SigninSchema'
import { signupToastStatusRed, signupToastMsgRed } from '../../../Redux/SignupToastReducer'
import {SigninUser} from '../../../Services/UserService'
import DangerToasts from '../../shared/Toasts/DangerToasts'

let initialValues = {
  username : "",
  password : "",

}
const Signin = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  let state = useSelector(state=>state.SignupToastReducer)
  
  let {values, handleSubmit, handleBlur, handleChange, errors, touched} = useFormik({
    initialValues : initialValues,
    validationSchema : SigninSchema,
    onSubmit : async () => {

      let result = await SigninUser(values)
      if(result.data.errType === 1 || result.data.errType === 2) {
        dispatch(signupToastStatusRed(true))
        
        dispatch(signupToastMsgRed('Invalid Username/Password'))
      } else {
        dispatch(signupToastStatusRed(false))
        localStorage.setItem('whole_token', result.data.token)
        localStorage.setItem('whole_lock_screen_token', result.data.lock_token)
        navigate('/auth/home')
      }
    }
  })

  return (
    <>
<div>
  {/* Preloader */}
  {/* <div className="preloader">
    <img src="/assets/dist/images/logos/favicon.png" alt="loader" className="lds-ripple img-fluid" />
  </div> */}
  {/*  Body Wrapper */}
  <div className="page-wrapper" id="main-wrapper" data-layout="vertical" data-sidebartype="full" data-sidebar-position="fixed" data-header-position="fixed">
    <div className="position-relative overflow-hidden radial-gradient min-vh-100">
      <div className="position-relative z-index-5">
        <div className="row">
          <div className="col-xl-7 col-xxl-8">
            <a href="index.html" className="text-nowrap logo-img d-block px-4 py-9 w-100">
              <img src="https://demos.adminmart.com/premium/bootstrap/modernize-bootstrap/package/dist/images/logos/dark-logo.svg" width={180} alt />
            </a>
            <div className="d-none d-xl-flex align-items-center justify-content-center" style={{height: 'calc(100vh - 80px)'}}>
              <img src="https://demos.adminmart.com/premium/bootstrap/modernize-bootstrap/package/dist/images/backgrounds/login-security.svg" alt className="img-fluid" width={500} />
            </div>
          </div>
          <div className="col-xl-5 col-xxl-4">
            <div className="authentication-login min-vh-100 bg-body row justify-content-center align-items-center p-4">
              <div className="col-sm-8 col-md-6 col-xl-9">
                <h2 className="mb-3 fs-7 fw-bolder">Welcome to Modernize</h2>
                <p className=" mb-9">Your Admin Dashboard</p>
                <div className="row">
                  <div className="col-6 mb-2 mb-sm-0">
                    <a className="btn btn-white text-dark border fw-normal d-flex align-items-center justify-content-center rounded-2 py-8" href="javascript:void(0)" role="button">
                      <img src="https://demos.adminmart.com/premium/bootstrap/modernize-bootstrap/package/dist/images/svgs/google-icon.svg" alt className="img-fluid me-2" width={18} height={18} />
                      <span className="d-none d-sm-block me-1 flex-shrink-0">Sign in with</span>Google
                    </a>
                  </div>
                  <div className="col-6">
                    <a className="btn btn-white text-dark border fw-normal d-flex align-items-center justify-content-center rounded-2 py-8" href="javascript:void(0)" role="button">
                      <img src="https://demos.adminmart.com/premium/bootstrap/modernize-bootstrap/package/dist/images/svgs/facebook-icon.svg" alt className="img-fluid me-2" width={18} height={18} />
                      <span className="d-none d-sm-block me-1 flex-shrink-0">Sign in with</span>FB
                    </a>
                  </div>
                </div>
                <div className="position-relative text-center my-4">
                  <p className="mb-0 fs-4 px-3 d-inline-block bg-white text-dark z-index-5 position-relative">or sign in with</p>
                  <span className="border-top w-100 position-absolute top-50 start-50 translate-middle" />
                </div>
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Username</label>
                    <input type="text" className={`form-control ${errors.username && touched.username ? "is-invlaid" : null}`} id="exampleInputEmail1" aria-describedby="emailHelp" name='username' onChange={handleChange} onBlur={handleBlur} value={values.username}/>
                    <div>{errors.username && touched.username ? (<small className='text-danger'>{errors.username}</small>) : null}</div>
                  </div>
                  <div className="mb-4">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className={`form-control ${errors.password && touched.password ? "is-invlaid" : null}`} id="exampleInputPassword1" name='password' onChange={handleChange} onBlur={handleBlur} value={values.password}/>
                    <div>{errors.password && touched.password ? (<small className='text-danger'>{errors.password}</small>) : null}</div>
                  </div>
                  <div className="d-flex align-items-center justify-content-between mb-4">
                    <div className="form-check">
                      <input className="form-check-input primary" type="checkbox" defaultValue id="flexCheckChecked" defaultChecked />
                      <label className="form-check-label text-dark" htmlFor="flexCheckChecked">
                        Remeber this Device
                      </label>
                    </div>
                    <a className="text-primary fw-medium" href="authentication-forgot-password.html">Forgot Password ?</a>
                  </div>
                  <button type='submit' className="btn btn-primary w-100 py-8 mb-4 rounded-2 cursor">Sign In</button>
                  <div className="d-flex align-items-center justify-content-center">
                    <p className="fs-4 mb-0 fw-medium">New to Modernize?</p>
                    <NavLink className="text-primary fw-medium ms-2" to="/signup">Create an account</NavLink>
                  </div>
                  {state.status == true ? (<DangerToasts />) : null}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

    </>
  )
}

export default Signin
