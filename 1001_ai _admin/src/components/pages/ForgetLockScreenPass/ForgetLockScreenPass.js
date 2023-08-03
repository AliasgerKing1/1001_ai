import React, { useState } from 'react'
import {NavLink, useNavigate} from "react-router-dom"
import {checkOtp} from "../../../services/ForgetPasswordService"
import ErrorAlert from '../../shared/ErrorAlert';
import { genOtp } from '../../../services/ForgetPasswordService'

const ForgetLockScreenPass = () => {
    const [current, setCurrent] = useState(1);
    let [showAlert, setShowAlert] = useState(false);
    let [msg, setMsg] = useState("");
    let navigate = useNavigate();
  
    const restrictOtp = (event, currentInput) => {
      let otp = '';
    
      if (event.key === 'Backspace' && event.target.value === '') {
        const previousInputElement = document.getElementById(`input-${currentInput - 1}`);
        if (previousInputElement) {
          previousInputElement.focus();
        }
      } else {
        if (isNaN(parseFloat(event.target.value))) {
          event.target.value = '';
        } else {
          const inputValue = event.target.value;
          event.target.value = inputValue.charAt(0);
          otp += inputValue.charAt(0);
    
          const nextInputElement = document.getElementById(`input-${currentInput + 1}`);
          if (nextInputElement && inputValue.length > 0) {
            nextInputElement.focus();
            nextInputElement.value = inputValue.substring(1);
            otp += inputValue.substring(1);
            setCurrent(currentInput + 1);
          }
        }
      }
  
    };
    const handleButtonClick = async () => {
      let otp = '';
      for (let i = 1; i <= 6; i++) {
        const inputElement = document.getElementById(`input-${i}`);
        if (inputElement) {
          otp += inputElement.value;
        }
      }
      let obj = {
        otp : otp
      }
  let admin_token = localStorage.getItem("admin_token")
      let result = await checkOtp(admin_token, obj) 
      if(result.data.status == 401) {
        setShowAlert(true)
        setMsg("Incorrect Otp")
      }else {
        setShowAlert(false)
              navigate("/auth/lock/screen");
      }
  
    }
    let resendOtp = async () => {
      let admin_token = localStorage.getItem("admin_token")
      let result = await genOtp(admin_token)
      if(result.data.status == 500) {
        setShowAlert(true)
        setMsg("Server isnt't Responding")
      } else {
        setShowAlert(false)
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
                    <h3 className="fw-bolder fs-7 mb-3">Forget Password</h3>
                    <p>We sent a verification code to your mobile. Enter the code from the mobile in the field below.</p>
                    <h6 className="fw-bolder">******1234</h6>
                  </div>
                  <form>
                    <div className="mb-3">
                      <label htmlFor="exampleInputEmail1" className="form-label fw-semibold">Type your 6 digits security code</label>
                      <div className="d-flex align-items-center gap-2 gap-sm-3">
                        <input className='form-control' type="text" id="input-1" onKeyUp={(e)=> restrictOtp(e, 1)} style={{pointerEvents :  current !== 1 ? 'none' : "", opacity : current !== 1 ? '0.6' : ""}} />
  <input className='form-control' type="text" id="input-2" onKeyUp={(e)=> restrictOtp(e, 2)} style={{pointerEvents :  current !== 2 ? 'none' : "", opacity : current !== 2 ? '0.6' : ""}} />
  <input className='form-control' type="text" id="input-3" onKeyUp={(e)=> restrictOtp(e, 3)} style={{pointerEvents :  current !== 3 ? 'none' : "", opacity : current !== 3 ? '0.6' : ""}} />
  <input className='form-control' type="text" id="input-4" onKeyUp={(e)=> restrictOtp(e, 4)} style={{pointerEvents :  current !== 4 ? 'none' : "", opacity : current !== 4 ? '0.6' : ""}} />
  <input className='form-control' type="text" id="input-5" onKeyUp={(e)=> restrictOtp(e, 5)} style={{pointerEvents :  current !== 5 ? 'none' : "", opacity : current !== 5 ? '0.6' : ""}} />
  <input className='form-control' type="text" id="input-6" onKeyUp={(e)=> restrictOtp(e, 6)} style={{pointerEvents :  current !== 6 ? 'none' : "", opacity : current !== 6 ? '0.6' : ""}} />
                      </div>
                    </div>
                    <a href="javascript:void(0)" className="btn btn-primary w-100 py-8 mb-4" onClick={handleButtonClick}>Verify My Account</a>
                    <div className="d-flex align-items-center mb-3">
                      <p className="fs-4 mb-0 text-dark">Didn't get the code?</p>
                      <a className="text-primary fw-medium ms-2 cursor" onClick={resendOtp}>Resend</a>
                    </div>
                    {showAlert ? (<ErrorAlert msg={msg} />) : null} 
                  </form>
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

export default ForgetLockScreenPass
