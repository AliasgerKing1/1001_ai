/*eslint-disable */
import React, { useEffect, useState } from 'react'

import {useFormik} from "formik"
import { NavLink, useNavigate } from 'react-router-dom'

import { useDispatch } from 'react-redux'
import {getPath} from "../../../Redux/PathReducer"
import {getOtpRedux} from "../../../Redux/OtpReducer"
import {getTypeOtpRedux} from "../../../Redux/TypeOtpNotReducer"

import { addUser, checkUser, signupOtp } from '../../../services/UserService'
import SignupSchema from '../../../schemas/SignupSchema'

import Footer from '../../shared/Footer'
import ScrollTop from '../../shared/ScrollTop'
import {AlertDanger} from "../../shared/Alert"
const initialValues =  {
    name : "",
    email : "",
    password : "",
    conf_pass : "",
    status : "free",
    isVerified : false
}
const Signup = () => {
    let dispatch = useDispatch();
    let [showSpinner, setShowSpinner] = useState(false);
    let [showAlert, setShowAlert] = useState(false);
let [msg, setMsg] = useState("");
    let navigate = useNavigate();
    let {values, handleBlur, handleChange, handleSubmit, errors, touched} = useFormik({
        initialValues : initialValues,
        validationSchema : SignupSchema,
        onSubmit : async () => {
            setShowSpinner(true);
            let res = await checkUser({email : values.email})
            if(res.data.status === 401) {
                setMsg("This email/username already exist, please Login !");
                setShowAlert(true);
            }else if(res.data.status === 200) {
                let result = await addUser(values)
                let otp = await signupOtp(result.data._id)
                if(otp.data.status === 200) {
                    dispatch(getOtpRedux({otpSent : true}));
                }
                dispatch(getTypeOtpRedux(result.data));
                navigate("/otp")
                setShowSpinner(false);
            }
            setShowSpinner(false);
// if(result.data) {
// setIsReset(true);
// }
    }

})
useEffect(()=> {
    let check = 0;
    dispatch(getPath(check))
}, [])
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
                                <h2 className="title">Signup</h2>
                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb">
                                        {/* <li className="breadcrumb-item"><NavLink to="/auth/home">Home</NavLink></li>
                                        <li className="breadcrumb-item active" aria-current="page">Signup</li> */}
                                    </ol>
                                </nav>
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
                            <form id="contact-form" onSubmit={handleSubmit}>
                                <div className="row">
                                    <div className="col-sm-6">
                                        <div className="input-grp">
                                            <input name="name" type="text" placeholder="Name *" onChange={handleChange} onBlur={handleBlur} value={values.name} className={errors.name && touched.name ? "is-invalid" : ""} autoComplete='off' />
                                            <div>{errors.name && touched.name ? (<small className='text-danger'>{errors.name}</small>) : null}</div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="input-grp">
                                            <input name="email" type="email" placeholder="Email *" onChange={handleChange} onBlur={handleBlur} value={values.email} className={errors.email && touched.email ? "is-invalid" : ""} autoComplete='off' />
                                            <div>{errors.email && touched.email ? (<small className='text-danger'>{errors.email}</small>) : null}</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-6">
                                        <div className="input-grp">
                                            <input name="password" type="password" placeholder="Password *" onChange={handleChange} onBlur={handleBlur} value={values.password} className={errors.password && touched.password ? "is-invalid" : ""} autoComplete='off' />
                                            <div>{errors.password && touched.password ? (<small className='text-danger'>{errors.password}</small>) : null}</div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="input-grp">
                                            <input name="conf_pass" type="password" placeholder="Confirm Password *"  onChange={handleChange} onBlur={handleBlur} value={values.conf_pass} className={errors.conf_pass && touched.conf_pass ? "is-invalid" : ""} autoComplete='off' />
                                            <div>{errors.conf_pass && touched.conf_pass ? (<small className='text-danger'>{errors.conf_pass}</small>) : null}</div>
                                        </div>
                                    </div>
                                </div>
                                {/* <div className="input-grp message-grp">
                                    <textarea name="message" cols="30" rows="10" placeholder="Enter your message"></textarea>
                                </div> */}
                                <div className='row'>
                                <div className='col-md-6'>
                                <button className="submit-btn">Signup</button>
                                   { showAlert ? (<AlertDanger msg={msg}/>) : ""}

                                </div>
                                <div className='col-md-6'>
                                <NavLink to="/" >Already  User?</NavLink>
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

export default Signup