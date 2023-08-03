import React, {useState} from 'react'
import { useFormik } from 'formik'
import { useNavigate, NavLink } from 'react-router-dom'

import LockScreenNewPassSchema from "../../../Schemas/LockScreenNewPassSchema"
import ErrorAlert from '../../shared/ErrorAlert'
import { createNewPass } from '../../../services/ForgetPasswordService'
let initialValues = {
    password : "",
    re_password : "",
}
const LockScreenNewPass = () => {
    let [showAlert, setShowAlert] = useState(false);
    let [msg, setMsg] = useState("");
    let navigate = useNavigate();
    let {values, handleBlur, handleChange, handleSubmit, errors, touched} = useFormik({
        initialValues : initialValues,
        validationSchema : LockScreenNewPassSchema,
        onSubmit : async () => {
                    let token = localStorage.getItem("admin_token")
                    let result = await createNewPass(token, values);
                    if(result.data.status !== 200) {
                      setShowAlert(true)
                      setMsg("Internal Server Error")
                    } else {
                      setShowAlert(false)
                      navigate("/auth/lock/screen")
                    }
    }
})
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
                    <h3 className="fw-bolder fs-7 mb-3">Create new Password</h3>
                    <p>Create your new password to authorized as an admin of 1001.</p>
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
                    <div className="mb-3">
                      <label htmlFor="exampleInputEmail1" className="form-label fw-semibold">Re Type Password</label>
                      <div className="d-flex align-items-center gap-2 gap-sm-3">
                      <input type="password" placeholder="Re type Password" name="re_password" className={`form-control ${errors.re_password && touched.re_password ? "is-invalid" : ""}`} onChange={handleChange} onBlur={handleBlur} value={values.re_password} id="exampleInputre_password1" />
                      </div>
                      <div>{errors.re_password && touched.re_password ? (<small className='text-danger'>{errors.re_password}</small>) : null}</div>
                    </div>
                    <button type='submit' className="btn btn-primary w-100 py-8 mb-4">Create</button>
                  </form>
                    <div className="d-flex align-items-center mb-3">
                      <p className="fs-4 mb-0 text-dark">Back to Lock Screen?</p>
                      <NavLink className="text-primary fw-medium ms-2" to="/auth/lock/screen">Go</NavLink>
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

export default LockScreenNewPass