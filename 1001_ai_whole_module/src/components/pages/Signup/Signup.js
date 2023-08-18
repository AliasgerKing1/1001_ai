import React, {useState} from 'react'
import {NavLink, useNavigate} from "react-router-dom"
import {useFormik} from 'formik'
import SignupSchema from '../../../Schemas/SignupSchema'

import {SignupUser} from '../../../Services/UserService'

function formatDate(timestamp) {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(timestamp).toLocaleDateString('en-IN', options);
}
let date = new Date()
const formattedDate = formatDate(date);
let initialValues = {
  username : "",
  email : "",
  password : "",
  confpass : "",
  join_date : formattedDate
}
const Signup = () => {
  const navigate = useNavigate()
  let [error, setError] = useState(false)
  let [msg, setMsg] = useState("")

  let {values, handleSubmit, handleBlur, handleChange, errors, touched} = useFormik({
    initialValues : initialValues,
    validationSchema : SignupSchema,
    onSubmit : async () => {
      setError(true)
      let result = await SignupUser(values)
      if(result.data.status == 500) {
        setError(true)
        setMsg('Internal Server error')
      }else {
        setError(false)
        navigate('/signin')
      }
      setError(false)
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
                  <p className="mb-0 fs-4 px-3 d-inline-block bg-white text-dark z-index-5 position-relative">or sign Up with</p>
                  <span className="border-top w-100 position-absolute top-50 start-50 translate-middle" />
                </div>
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">UserName</label>
                    <input type="text" className={`form-control ${errors.username && touched.username ? "is-invlaid" : null}`} id="exampleInputtext" aria-describedby="textHelp" name="username" onChange={handleChange} onBlur={handleBlur} value={values.username}/>

                    <div>{errors.username && touched.username ? (<small className='text-danger'>{errors.username}</small>) : null}</div>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className={`form-control ${errors.email && touched.email ? "is-invlaid" : null}`} id="exampleInputEmail1" aria-describedby="emailHelp" name="email" onChange={handleChange} onBlur={handleBlur} value={values.email} />
                                        <div>{errors.email && touched.email ? (<small className='text-danger'>{errors.email}</small>) : null}</div>
                  </div>
                  <div className="mb-4">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className={`form-control ${errors.password && touched.password ? "is-invlaid" : null}`} id="exampleInputPassword1" name="password" onChange={handleChange} onBlur={handleBlur} value={values.password} />
                                        <div>{errors.password && touched.password ? (<small className='text-danger'>{errors.password}</small>) : null}</div>
                  </div>                    
                  <div className="mb-4">
                    <label htmlFor="exampleInputPassword1" className="form-label">Confirm Password</label>
                    <input type="password" className={`form-control ${errors.confpass && touched.confpass ? "is-invlaid" : null}`} id="exampleInputPassword1" name="confpass" onChange={handleChange} onBlur={handleBlur} value={values.confpass} />
                                        <div>{errors.confpass && touched.confpass ? (<small className='text-danger'>{errors.confpass}</small>) : null}</div>
                  </div>                    
                  <button type='submit' className="btn btn-primary w-100 py-8 mb-4 rounded-2 cursor">Sign Up</button>
                  <div className="d-flex align-items-center">
                    <p className="fs-4 mb-0 text-dark">Already have an Account?</p>
                    <NavLink className="text-primary fw-medium ms-2" to="/signin">Sign In</NavLink>
                  </div>
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

export default Signup
