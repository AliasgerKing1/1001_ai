/*eslint-disable */
import React, { useEffect, useState } from 'react'
import { useNavigate, NavLink, useLocation } from 'react-router-dom'
import {useFormik} from "formik"

import { useDispatch, useSelector } from 'react-redux'
import {getPath} from "../../../Redux/PathReducer"
import {getTypeOtpRedux} from "../../../Redux/TypeOtpNotReducer"
 import {getVerificationRedux} from "../../../Redux/VerifiedReducer"
import OtpSchema from "../../../schemas/OtpSchema"
import { checkOtp, otpVerfied,getUserByOtpId, signupOtp } from '../../../services/UserService'

import Footer from '../../shared/Footer'
import ScrollTop from '../../shared/ScrollTop'
import {AlertDanger, AlertSuccess} from "../../shared/Alert"
const initialValues =  {
    otp : "",
}
const Login = () => {
    let dispatch = useDispatch();
    let navigate = useNavigate();
    let location = useLocation();
    let state = useSelector(state => state.OtpReducer)
    let state2 = useSelector(state2 => state2.TypeOtpNotReducer)
    let [showSpinner, setShowSpinner] = useState(false);
    let [showAlert, setShowAlert] = useState(false);
    let [showAlert2, setShowAlert2] = useState(false);
let [msg, setMsg] = useState("");
let [msg2, setMsg2] = useState("");
    let {values, handleBlur, handleChange, handleSubmit, errors, touched} = useFormik({
        initialValues : initialValues,
        validationSchema : OtpSchema,
        onSubmit : () => {
            setShowSpinner(true);
            let otpSets = {
                data : values,
                email : state2.email
            }
            checkOtp(otpSets).then(result=> {
                if(result.data.status === 200) {
                                    otpVerfied(state2._id).then(result2 => {
                                        getUserByOtpId(state2._id).then(status => {
                                    dispatch(getTypeOtpRedux(status.data))
                                    dispatch(getVerificationRedux([{verified : true}]))
                                    navigate("/")
                                })
                                  })
                                } else {
                                    setMsg("Otp is incorrect !");
                                    setShowAlert(true);
                                }
                                setShowSpinner(false);
            }).catch(error=> {
                setShowSpinner(false);
            })
        }
    
    })
    useEffect(()=> {
    let check = 0;
    dispatch(getPath(check))
    if(state.otpSent === true) {
        setMsg2("Otp Sent Successfully, check your Email!");
        setShowAlert2(true);
    }
    setTimeout(()=> {
setShowAlert2(false)
    }, 3000)
// console.log(location.pathname)
}, [])
let reSend = async () => {
    let otp = await signupOtp(state2._id)
    console.log(otp)
}
  return (
    <>
    {/* <!-- main-area --> */}
    <main className="main--area" id='top'>
    { showSpinner ? (<div className="loading">Loading&#8230;</div>)  : "" }
        {/* <!-- breadcrumb-area --> */}
        <section className="breadcrumb-area breadcrumb__hide-img" data-background="/assets/img/bg/breadcrumb_bg02.jpg">
            <div className="container">
                <div className="breadcrumb__wrapper">
                    <div className="row">
                        <div className="col-12">
                            <div className="breadcrumb__content">
                                <h2 className="title">Otp</h2>
                                {/* <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item"><NavLink to="/auth/home">Home</NavLink></li>
                                        <li className="breadcrumb-item active" aria-current="page">Login</li>
                                    </ol>
                                </nav> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* <!-- breadcrumb-area-end --> */}

        {/* <!-- contact-area --> */}
        <section className="contact-area">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-10 col-md-8  ">
                        <div className="contact__form-wrap">
                        <div className="row">
                                    <div className="col-sm-8 offset-sm-2">
                                    { showAlert2 ? (<AlertSuccess msg={msg2}/>) : ""}
                            <ul>
                                <li><p>Otp should be a number</p></li>
                                <li><p>Otp should be 6 digits</p></li>
                                <li><p>Otp will expire after 5 minutes</p></li>
                            </ul>
                            </div>
                            </div>
                            <form id="contact-form" onSubmit={handleSubmit}>
                                <div className="row">
                                    <div className="col-sm-8 offset-sm-2">
                                        <div className="input-grp">
                                            <input name="otp" type="text" placeholder="Otp *" onChange={handleChange} onBlur={handleBlur} value={values.otp} className={errors.otp && touched.otp ? "is-invalid" : ""} autoComplete='off' />
                                            <div>{errors.otp && touched.otp ? (<small className='text-danger'>{errors.otp}</small>) : null}</div>
                                        </div>
                                    </div>
                                </div>
                                <div className='row'>
                                <div className='col-md-4 offset-md-2'>
                                <button type='submit' className="submit-btn">confirm</button>
                           { showAlert ? (<AlertDanger msg={msg}/>) : ""}
                                </div>
                                <div className='col-md-4 offset-md-2'>
                                <NavLink onClick={reSend} style={{display : "block"}}>Re-send Otp</NavLink>
                                <NavLink to="/" >Back to Login</NavLink>
                                </div>
                                </div>
                            </form>
                            {/* <p className="ajax-response"></p> */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* <!-- contact-area-end --> */}

    </main>
    {/* <!-- main-area-end --> */}


  <Footer />
    </>
  )
}

export default Login