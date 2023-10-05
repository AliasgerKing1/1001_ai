import React, { useState, useEffect } from 'react';
import { googleLogout, useGoogleLogin } from '@react-oauth/google';
import { NavLink,useNavigate } from 'react-router-dom';
import {useFormik} from 'formik' 
import axios from 'axios';
import SigninSchema from '../../../Schemas/SigninSchema'

import { login } from '../../../Services/userService';

const Signin = () => {
  let [msg, setMsg] = useState("")
  let [eye, setEye] = useState(false)
  let [showLoader, setShowLoader] = useState(false);
  let [showAlert, setShowAlert] = useState(false);
    const [ user, setUser ] = useState([]);
    const [ profile, setProfile ] = useState([]);

    const loginFun = useGoogleLogin({
      onSuccess: (codeResponse) => setUser(codeResponse),
      onError: (error) => console.log('Login Failed:', error)
  });
  
  useEffect(
      () => {
          if (user) {
              axios
                  .get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`, {
                      headers: {
                          Authorization: `Bearer ${user.access_token}`,
                          Accept: 'application/json'
                      }
                  })
                  .then((res) => {
                      setProfile(res.data);
                  })
                  .catch((err) => console.log(err));
          }
      },
      [ user ]
  );
  let initialValues = {
    email: "",
    password: "",
  }

  let navigate = useNavigate();

let {values, handleBlur, handleChange, handleSubmit, errors, touched} = useFormik({
  initialValues : initialValues,
  validationSchema : SigninSchema,
  onSubmit : async () => {
      try {
        setShowLoader(true)
        let result = await login(values);
        if(result.data.status === 200) {
          setShowAlert(false)
          localStorage.setItem('martToken', result.data.token)
          navigate('/auth/home')
          setShowLoader(false)

        }
        if(result.data.errType == 1) {
          setShowLoader(false)
          setShowAlert(true)
          setMsg("Username or Password is incorrect")
          setTimeout(() => {
            setShowAlert(false)
          }, 3000);
        }
        if(result.data.errType == 2) {
          setShowLoader(false)
          setShowAlert(true)
          setMsg("Username or Password is incorrect")
          setTimeout(() => {
            setShowAlert(false)
          }, 3000);
        }
        setShowLoader(false)
      } catch(error) {
        setShowLoader(true)
        setShowAlert(true)
        setMsg("Internal Server Error")
        setTimeout(() => {
            setShowAlert(false)
          }, 3000);
        console.log(error)
        setShowLoader(false)
      }


  }
})
  return (
    <>
<div>
  {/*preloader start*/}
  {/* <div id="preloader">
    <img src="/assets/img/preloader.gif" alt="preloader" width={450} className="img-fluid" />
  </div> */}
  {/*preloader end*/}
  {/*main content wrapper start*/}
  <div className="main-wrapper">
    {/*login section start*/}
    <section className="login-section py-5">
      <div className="container">
        <div className="row justify-content-center">
        <div className="col-lg-5 col-12 tt-login-img">
      <img src="assets/img/banner/login-banner.jpg" alt="Login Banner" class="img-fluid" style={{height : '100%'}} />
    </div>
          <div className="col-lg-5 col-12 bg-white d-flex p-0 tt-login-col shadow">
            <form className="tt-login-form-wrap p-3 p-md-6 p-lg-6 py-7 w-100" onSubmit={handleSubmit}>
              <div className="mb-7">
              <NavLink to="/"><img src="assets/img/logo.png" alt="logo" /></NavLink>
              </div>
              <h2 className="mb-4 h3">Hey there! <br />Welcome back <span className="text-secondary">Grostore.</span>
              </h2>
              <div className="row g-3">
                <div className="col-sm-12">
                  <div className="input-field">
                    <label className="fw-bold text-dark fs-sm mb-1">Email</label>
                    <input type="email" placeholder="Enter your email" name="email"
className={`theme-input ${touched.email && errors.email ? "is-invalid" : ""}`} onChange={handleChange} onBlur={handleBlur} value={values.email} />
                  </div>
                  <div>{touched.email && errors.email ? (<small className='text-danger'>{errors.email}</small>) : null}</div>
                </div>
                <div className="col-sm-12">
                  <div className="input-field check-password">
                    <label className="fw-bold text-dark fs-sm mb-1">Password</label>
                    <div className="check-password">
                      <input type={eye ? 'text' : "password"} placeholder="Password" className={`theme-input ${touched.password && errors.password ? "is-invalid" : ""}`} name="password"
onChange={handleChange} onBlur={handleBlur} value={values.password} />
                      <span className="eye eye-icon"><i className="fa-solid fa-eye" onClick={()=>setEye(true)} /></span>
                    <span className="eye eye-slash"><i className="fa-solid fa-eye-slash" onClick={()=>setEye(false)} /></span>
                  </div>
                  <div>{touched.password && errors.password ? (<small className='text-danger'>{errors.password}</small>) : null}</div>
                  </div>
                </div>
              </div>
              <div className="d-flex align-items-center justify-content-between mt-4">
                <div className="checkbox d-inline-flex align-items-center gap-2">
                  <div className="theme-checkbox flex-shrink-0">
                    <input type="checkbox" id="save-password" />
                    <span className="checkbox-field">
                      <i className="fa-solid fa-check" />
                    </span>
                  </div>
                  <label className="save-password fs-sm">Remember for 30 days</label>
                </div>
                <a href="#" className="fs-sm">Forgot Password</a>
              </div>
              <div className="row g-4 mt-4">
                <div className="col-sm-6">
                  <button type="submit" className="btn btn-primary w-100">Sign In</button>
                </div>
                <div className="col-sm-6">
                  <a className="btn btn-outline google-btn w-100 cursor-pointer" onClick={() => loginFun()}>
                    <img src="/assets/img/brands/google.png" alt="google" className="me-2" />Sign with Google </a>
                </div>
              </div>
              <p className="mb-0 fs-xs mt-4">Don't have an Account? <NavLink to="/signup">Sign Up</NavLink>
              </p>
              {showAlert && (<div className="alert alert-danger alert-dismissible d-flex align-items-center fade show mt-2" role="alert">
<i className="fas fa-moon fs-lg ms-1 me-4" />
  {msg}
  <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close" />
</div>)}
            </form>

          </div>
        </div>
      </div>
    </section>
    {/*login section end*/}
  </div>
  {/*main content wrapper end*/}
  {/*scroll bottom to top button start*/}
  <button className="scroll-top-btn">
    <i className="fa-regular fa-hand-pointer" />
  </button>
  {/*scroll bottom to top button end*/}
</div>

    </>
  )
}

export default Signin
