import React, { useState, useEffect } from 'react';
import { googleLogout, useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import { NavLink,useNavigate } from 'react-router-dom';
import {useFormik} from 'formik' 
import SignupSchema from '../../../Schemas/SignUpSchema'
import SignupSchema2 from '../../../Schemas/SignUpSchema2'
import { signupGoogle, signup } from '../../../Services/userService';
const Signup = () => {
  let [eye, setEye] = useState(false)
  let [eye2, setEye2] = useState(false)
  let [showLoader, setShowLoader] = useState(false);
  let [msg, setMsg] = useState("");
  const [ user, setUser ] = useState([]);
  const [ profile, setProfile ] = useState([]);
  function formatDate(timestamp) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(timestamp).toLocaleDateString('en-IN', options);
  }
  let date = new Date()
  const formattedDate = formatDate(date);
  // join_date : formattedDate
  let initialValues = {
    password: "",
    conf_password: "",
  }
  let initialValues2 = {
    f_name: "",
    l_name: "",
    email: "",
    password: "",
    conf_password: "",
  }

  const signupFun = useGoogleLogin({
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

let navigate = useNavigate();

let {values, handleBlur, handleChange, handleSubmit, errors, touched} = useFormik({
  // initialValues : initialValues,
  // validationSchema : SignupSchema,
  initialValues : user.length != 0 ? (initialValues) : (initialValues2),
  validationSchema : user.length != 0 ? (SignupSchema) : (SignupSchema2),
  onSubmit : async () => {
    if(user.length != 0) {
      try {
        let f_name = profile.name.split(" ")[0].trim()
        let l_name = profile.name.split(" ")[1].trim()
        setShowLoader(true)
        let data = {
          f_name : f_name,
          l_name : l_name,
          email : profile.email.trim(),
          password : values.password,
          conf_password : values.conf_password,
        }
        let result = await signupGoogle(data);
        if(result.data.status == 200) {
          localStorage.setItem("martToken", result.data.token)
          navigate("/auth/home")
          setShowLoader(false)
        } else {
          setShowLoader(true)
          setMsg("Internal Server Error")
        }
        setShowLoader(false)
      } catch(error) {
        setShowLoader(true)
        setMsg("Internal Server Error")
        console.log(error)
        setShowLoader(false)
      }
    } else {
      try {
        setShowLoader(true)
        let result = await signup(values);
        if(result.data.status == 200) {
          localStorage.setItem("martToken", result.data.token)
          navigate("/auth/home")
          setShowLoader(false)
        } else {
          setShowLoader(true)
          setMsg("Internal Server Error")
        }
        setShowLoader(false)
      } catch(error) {
        setShowLoader(true)
        setMsg("Internal Server Error")
        console.log(error)
        setShowLoader(false)
      }
    }

  }
})
  return (
    <>
<div>
  {/*preloader start*/}
  {showLoader && (  <div id="preloader">
    <img src="/assets/img/preloader.gif" alt="preloader" width={450} className="img-fluid" />
  </div>)}
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
              <div className="text-center mb-7">
                <NavLink to="/"><img src="assets/img/logo.png" alt="logo" /></NavLink>
              </div>
              <h4 className="mb-3">Get started absolutely free</h4>
              <p className="fs-xs">Already have an account? <NavLink to="/signin" className="text-secondary">Sign in</NavLink></p>
              {user.length != 0 ? (              <div className="row g-3">
              <div className="col-sm-12">
                  <div className="input-field check-password">
                    <input type={eye2 ? 'text' : "password"} placeholder="Password" className={`theme-input ${touched.password && errors.password ? "is-invalid" : ""}`} name="password"
onChange={handleChange} onBlur={handleBlur} value={values.password}/>
                    <span className="eye eye-icon"><i className="fa-solid fa-eye" onClick={()=>setEye2(true)} /></span>
                    <span className="eye eye-slash"><i className="fa-solid fa-eye-slash" onClick={()=>setEye2(false)} /></span>
                  </div>
                  <div>{touched.password && errors.password ? (<small className='text-danger'>{errors.password}</small>) : null}</div>
                </div>
                <div className="col-sm-12">
                  <div className="input-field check-password">
                    <input type={eye2 ? 'text' : "password"} placeholder="Confirm Password" className={`theme-input ${touched.conf_password && errors.conf_password ? "is-invalid" : ""}`} name="conf_password"
onChange={handleChange} onBlur={handleBlur} value={values.conf_password} />
                  </div>
                  <div>{touched.conf_password && errors.conf_password ? (<small className='text-danger'>{errors.conf_password}</small>) : null}</div>
                </div>
              </div>) : (
                         <div className="row g-3">
                <div className="col-sm-6">
                  <div className="input-field">
                    <input type="text" name="f_name" placeholder="First name" className={`theme-input ${touched.f_name && errors.f_name ? "is-invalid" : ""}`} onChange={handleChange} onBlur={handleBlur} value={values.f_name} />
                  </div>
                  <div>{touched.f_name && errors.f_name ? (<small className='text-danger'>{errors.f_name}</small>) : null}</div>
                </div>
                <div className="col-sm-6">
                  <div className="input-field">
                    <input type="text" name="l_name" placeholder="Last name" className={`theme-input ${touched.l_name && errors.l_name ? "is-invalid" : ""}`} onChange={handleChange} onBlur={handleBlur} value={values.l_name} />
                  </div>
                  <div>{touched.l_name && errors.l_name ? (<small className='text-danger'>{errors.l_name}</small>) : null}</div>
                </div>
                <div className="col-sm-12">
                  <div className="input-field">
                    <input type="email" name="email" placeholder="Email address" className={`theme-input ${touched.email && errors.email ? "is-invalid" : ""}`} onChange={handleChange} onBlur={handleBlur} value={values.email} />
                  </div>
                  <div>{touched.email && errors.email ? (<small className='text-danger'>{errors.email}</small>) : null}</div>
                </div>
                <div className="col-sm-12">
                  <div className="input-field check-password">
                    <input type={eye ? 'text' : "password"} placeholder="Password" className={`theme-input ${touched.password && errors.password ? "is-invalid" : ""}`} name="password"
onChange={handleChange} onBlur={handleBlur} value={values.password} />
                    <span className="eye eye-icon"><i className="fa-solid fa-eye" onClick={()=>setEye(true)} /></span>
                    <span className="eye eye-slash"><i className="fa-solid fa-eye-slash" onClick={()=>setEye(false)} /></span>
                  </div>
                  <div>{touched.password && errors.password ? (<small className='text-danger'>{errors.password}</small>) : null}</div>
                </div>
                <div className="col-sm-12">
                  <div className="input-field check-password">
                    <input type={eye ? 'text' : "password"} placeholder="Confirm Password" className={`theme-input ${touched.conf_password && errors.conf_password ? "is-invalid" : ""}`} name="conf_password"
onChange={handleChange} onBlur={handleBlur} value={values.conf_password} />
                  </div>
                  <div>{touched.conf_password && errors.conf_password ? (<small className='text-danger'>{errors.conf_password}</small>) : null}</div>
                </div>
              </div>
              )}
              {user.length != 0 ? (              <div className="row g-4 mt-4">
                <div className="col-sm-6 offset-sm-3">
                  <button type="submit" className="btn btn-primary w-100">Create account</button>
                </div>
              </div>) : (              <div className="row g-4 mt-4">
                <div className="col-sm-6">
                  <button type="submit" className="btn btn-primary w-100">Create account</button>
                </div>
                <div className="col-sm-6">
                  <a className="btn btn-outline google-btn w-100 cursor-pointer" onClick={() => signupFun()}><img src="assets/img/brands/google.png" alt="google" className="me-2" />Sign with Google</a>
                </div>
              </div>)}
              <p className="mb-0 fs-xxs mt-4 text-center">By signing up, I agree to <a href="#" className="text-dark">Terms of Use and Privacy Policy</a></p>
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

export default Signup
