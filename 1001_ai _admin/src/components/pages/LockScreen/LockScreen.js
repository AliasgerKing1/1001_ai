import React, {useState} from 'react'
import { useFormik } from 'formik'
import { useNavigate, NavLink } from 'react-router-dom'

import LockScreenSchema from "../../../Schemas/LockScreenSchema"
import {checkPassword} from "../../../services/LockScreenService"
import ErrorAlert from '../../shared/ErrorAlert'
import { genOtp } from '../../../services/ForgetPasswordService'
let initialValues = {
    password : ""
}
const LockScreen = () => {
    let [showAlert, setShowAlert] = useState(false);
    let [msg, setMsg] = useState("");
    let navigate = useNavigate();
    let {values, handleBlur, handleChange, handleSubmit, errors, touched} = useFormik({
        initialValues : initialValues,
        validationSchema : LockScreenSchema,
        onSubmit : async () => {
                      let token = localStorage.getItem("admin_token")
            let result = await checkPassword(token, values)

            if(result.data.status == 409) {
              setShowAlert(true)
              setMsg("Incorect Password !")
            } else {
              if(result.data.lock_token) {
                setShowAlert(false)
                localStorage.setItem("lock_screen_token", result.data.lock_token)
                navigate("/auth/home")
              }
            }
         
    }
})

let otpGen = async () => {
  let admin_token = localStorage.getItem("admin_token")
  let result = await genOtp(admin_token)
  if(result.data.status == 500) {
    setShowAlert(true)
    setMsg("Server isnt't Responding")
  } else {
    setShowAlert(false)
    navigate("/lock/screen/forget")
  }
}
  return (
    <>
 <div data-theme="dark">
   {/* Preloader */}

  {/* <div className="preloader">
    <img src="../../dist/images/logos/favicon.png" alt="loader" className="lds-ripple img-fluid" />
  </div> */}
  {/* Body Wrapper */}
  <div className="page-wrapper" id="main-wrapper" data-layout="vertical" data-navbarbg="skin6" data-sidebartype="full" data-sidebar-position="fixed" data-header-position="fixed">
    <div className="position-relative overflow-hidden radial-gradient min-vh-100">
      <div className="position-relative z-index-5">
        <div className="row">
          <div className="col-lg-6 col-xl-8 col-xxl-9">
            <a href="index.html" className="text-nowrap logo-img d-block px-4 py-9 w-100">
              <img src="https://demos.adminmart.com/premium/bootstrap/modernize-bootstrap/package/dist/images/logos/light-logo.svg" width={180} alt />
            </a>
            <div className="d-none d-lg-flex align-items-center justify-content-center" style={{height: 'calc(100vh - 80px)'}}>
              <img src="https://demos.adminmart.com/premium/bootstrap/modernize-bootstrap/package/dist/images/backgrounds/login-security.svg" alt className="img-fluid" width={500} />
            </div>
          </div>
          <div className="col-lg-6 col-xl-4 col-xxl-3">
            <div className="card mb-0 shadow-none rounded-0 min-vh-100 h-100">
              <div className="d-flex align-items-center w-100 h-100">
                <div className="card-body">
                  <div className="mb-5">
                    <h3 className="fw-bolder fs-7 mb-3">Lock Screen</h3>
                    <p>Please verify that you are an authorized person who was the admin of 1001.</p>
                    <h6 className="fw-bolder">******1dx4</h6>
                  </div>
                  <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                      <label htmlFor="exampleInputEmail1" className="form-label fw-semibold">Type Password</label>
                      <div className="d-flex align-items-center gap-2 gap-sm-3">
                      <input type="password" placeholder="Password" name="password" className={`form-control ${errors.password && touched.password ? "is-invalid" : ""}`} onChange={handleChange} onBlur={handleBlur} value={values.password} id="exampleInputPassword1" />
                      </div>
                      <div>{errors.password && touched.password ? (<small className='text-danger'>{errors.password}</small>) : null}</div>
                    </div>
                    <button type='submit' className="btn btn-primary w-100 py-8 mb-4">Verify</button>
                  </form>
                    <div className="d-flex align-items-center mb-3">
                      <p className="fs-4 mb-0 text-dark">Forget Password?</p>
                      <a className="text-primary fw-medium ms-2 cursor" onClick={otpGen}>Create New</a>
                    </div>
                    {showAlert ? (<ErrorAlert msg={msg}/>) : null}
                </div>
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

export default LockScreen