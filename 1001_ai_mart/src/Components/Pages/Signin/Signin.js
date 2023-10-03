import React, { useState, useEffect } from 'react';
import { googleLogout, useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import { NavLink } from 'react-router-dom';
const Signin = () => {
    const [ user, setUser ] = useState([]);
    const [ profile, setProfile ] = useState([]);
    const login = useGoogleLogin({
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
            <form className="tt-login-form-wrap p-3 p-md-6 p-lg-6 py-7 w-100">
              <div className="mb-7">
              <NavLink to="/"><img src="assets/img/logo.png" alt="logo" /></NavLink>
              </div>
              <h2 className="mb-4 h3">Hey there! <br />Welcome back <span className="text-secondary">Grostore.</span>
              </h2>
              <div className="row g-3">
                <div className="col-sm-12">
                  <div className="input-field">
                    <label className="fw-bold text-dark fs-sm mb-1">Email</label>
                    <input type="email" placeholder="Enter your email" className="theme-input" />
                  </div>
                </div>
                <div className="col-sm-12">
                  <div className="input-field check-password">
                    <label className="fw-bold text-dark fs-sm mb-1">Password</label>
                    <div className="check-password">
                      <input type="password" placeholder="Password" className="theme-input" />
                      <span className="eye eye-icon">
                        <i className="fa-solid fa-eye" />
                      </span>
                      <span className="eye eye-slash">
                        <i className="fa-solid fa-eye-slash" />
                      </span>
                    </div>
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
                  <a className="btn btn-outline google-btn w-100 cursor-pointer" onClick={() => login()}>
                    <img src="/assets/img/brands/google.png" alt="google" className="me-2" />Sign with Google </a>
                </div>
              </div>
              <p className="mb-0 fs-xs mt-4">Don't have an Account? <NavLink to="/signup">Sign Up</NavLink>
              </p>
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
