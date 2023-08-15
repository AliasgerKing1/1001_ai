/*eslint-disable */
import React, { useEffect, useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

import {useFormik} from "formik"
import { NavLink } from 'react-router-dom'

import { useDispatch, useSelector } from 'react-redux'
import {getPath} from "../../../Redux/PathReducer"
 
import SigninSchema from "../../../schemas/SigninSchema"
import { DoLogin } from '../../../services/UserService'

import Footer from '../../shared/Footer'
import ScrollTop from '../../shared/ScrollTop'
import {AlertDanger} from "../../shared/Alert"
import { getUrlLocationRedux } from '../../../Redux/VerifiedReducer'
const initialValues =  {
    email : "",
    password : "",
}
const Login = () => {
    let dispatch = useDispatch();
    let navigate = useNavigate();
    let location = useLocation();
    let state = useSelector(state=>state.TypeOtpNotReducer)
    let state2 = useSelector(state2=>state2.VerificationReducer)
    let [showSpinner, setShowSpinner] = useState(false);
    let [showAlert, setShowAlert] = useState(false);
    let [doRedirection, setDoRedirection] = useState(false);
let [msg, setMsg] = useState("");
    let {values, handleBlur, handleChange, handleSubmit, errors, touched} = useFormik({
        initialValues : initialValues,
        validationSchema : SigninSchema,
        onSubmit : () => {
            setShowSpinner(true);
    DoLogin(values).then(result=> {
        if (result.data.errType === 1) {
            setMsg("This email/username or password is incorrect !");
            setShowAlert(true);
        }
        if (result.data.errType === 2) {
            setMsg("This Password is incorrect !");
            setShowAlert(true);
        }
        if (result.data.errType === 3) {
            setMsg("Please verify your account first !");
            setShowAlert(true);
        }
        if(result.data.status === 200) {
            localStorage.setItem("token", result.data.token);
            navigate("/auth/home")
        }
        setShowSpinner(false);
}).catch(error=> {
    console.log(error)
setShowSpinner(false);
})

} 
  
    })
    useEffect(()=> {
    let check = 0;
    dispatch(getPath(check))
    if(state2.length != 0) {
        if(state2[0].verified != true) {
            setDoRedirection(true)
        }
    }
    // console.log(location.pathname)
    if(location.pathname == "/") {
getUrlLocationRedux(location.pathname)
    }
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
                                <h2 className="title">Login</h2>
                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb">
                                        {/* <li className="breadcrumb-item"><NavLink to="/auth/home">Home</NavLink></li>
                                        <li className="breadcrumb-item active" aria-current="page">Login</li> */}
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
                                            <input name="email" type="email" placeholder="Email *" onChange={handleChange} onBlur={handleBlur} value={values.email} className={errors.email && touched.email ? "is-invalid" : ""} autoComplete='off' />
                                            <div>{errors.email && touched.email ? (<small className='text-danger'>{errors.email}</small>) : null}</div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="input-grp">
                                            <input name="password" type="password" placeholder="Password *"  onChange={handleChange} onBlur={handleBlur} value={values.password} className={errors.password && touched.password ? "is-invalid" : ""} autoComplete='off' />
                                            <div>{errors.password && touched.password ? (<small className='text-danger'>{errors.password}</small>) : null}</div>
                                        </div>
                                    </div>
                                </div>
                                <div className='row'>
                                <div className='col-md-6'>
                                <button type='submit' className="submit-btn">SignIn</button>
                           { showAlert ? (<AlertDanger msg={msg}/>) : ""}
                                </div>
                                <div className='col-md-6'>
                                <NavLink to="/signup" className="d-block">Dont have an account yet?</NavLink>
                                <NavLink to="#"className="d-block">Forget Password?</NavLink>
                                <NavLink to="#" style={{display : (doRedirection == false ? "none" : "block")}}>Verify your email</NavLink>
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