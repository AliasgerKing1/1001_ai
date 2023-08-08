import React, {useEffect, useState} from 'react'
import {NavLink, useNavigate} from "react-router-dom"
import {useFormik} from "formik"
import SignupSchema from "../../../Schemas/SignUpSchema"
import { adduser } from '../../../Services/AuthService'

let initialValues = {
  name : "",
  email : "",
  username:  "",
  password : "",
  userefcode : "",
  join_date : ""
}
const SignUp = () => {
  let [showAlert, setShowAlert] = useState(false);
  let [showLoader, setShowLoader] = useState(false);
  const [activeStep, setActiveStep] = useState(1); // Active step state

  let [msg, setMsg] = useState("");
  let navigate = useNavigate();
  let {values, handleBlur, handleChange, handleSubmit, errors, touched} = useFormik({
    initialValues : initialValues,
    validationSchema : SignupSchema,
    onSubmit : async () => {
      try {
        setShowLoader(true)
        let result = await adduser(values);
        if(result.data.status == 200) {
          navigate("/signin")
        }
        setShowLoader(false)
      } catch(error) {
        console.log(error)
        setShowLoader(false)
      }

    }
})

let handleNextStep = () => {
  setActiveStep(activeStep + 1)
}

useEffect(()=> {
  if(activeStep > 2) {
    setActiveStep(2)
  }
}, [activeStep])
  return (
    <>
{/* Sign Up */}
<div className="techwave_fn_sign">
    {/* Preloader */}
{showLoader ? (   
    <div className="techwave_fn_preloader enabled wait_for_full_preloading_animation">
    <svg>
      <circle className="first_circle" cx="50%" cy="50%" r={110} />
      <circle className="second_circle" cx="50%" cy="50%" r={110} />
    </svg>
  </div>
  ) : null}
  {/* !Preloader */}
  <div className="sign__content">
    <h1 className="logo">Designed by Frenify</h1>
    <form className="signup" onSubmit={handleSubmit}>
      <div className="form__content">
        <div className="form__title">Sign Up</div>
        {activeStep === 1 && (<>
          <div className="form__name mb-4">
          <label htmlFor="name" style={{textAlign : "left"}}>Name <span style={{color : "#dc3545"}}>*</span></label>
          <input type="text" className={`input ${touched.name && errors.name ? "is-invalid" : ""}`} id="name" name="name" onChange={handleChange} onBlur={handleBlur} placeholder="Full Name" value={values.name} />
          <div>{touched.name && errors.name ? (<small style={{textAlign : "left", color : "#dc3545"}}>{errors.name}</small>) : null}</div>
        </div>
        <div className="form__email mb-4">
          <label htmlFor="email" style={{textAlign : "left"}}>Email <span style={{color : "#dc3545"}}>*</span></label>
          <input type="text" className={`input ${touched.email && errors.email ? "is-invalid" : ""}`} id="email" name="email" onChange={handleChange} onBlur={handleBlur} placeholder="yourmail@example.com" />
          <div>{touched.email && errors.email ? (<small style={{textAlign : "left", color : "#dc3545"}}>{errors.email}</small>) : null}</div>
        </div>
        <div className="form__pass mb-4">
          <label htmlFor="user_password" style={{textAlign : "left"}}>Password <span style={{color : "#dc3545"}}>*</span></label>
          <input type="password" className={`input ${touched.password && errors.password ? "is-invalid" : ""}`} id="user_password" name="password" onChange={handleChange} onBlur={handleBlur} autoComplete="current-password" placeholder='********' spellCheck="false" />
          <div>{touched.password && errors.password ? (<small style={{textAlign : "left", color : "#dc3545"}}>{errors.password}</small>) : null}</div>
        </div>
        </>)}
        {activeStep === 2 && (<>
          <div className="form__username mb-4">
          <label htmlFor="username" style={{textAlign : "left"}}>Username <span style={{color : "#dc3545"}
          }>*</span></label>
          <input type="text" className={`input ${touched.username && errors.username ? "is-invalid" : ""}`} id="username" name="username" onChange={handleChange} onBlur={handleBlur} placeholder="Username" />
          <div>{touched.username && errors.username ? (<small style={{textAlign : "left", color : "#dc3545"}}>{errors.username}</small>) : null}</div>
        </div>
        <div className="form__pass mb-4">
          <label htmlFor="user_referal_code" style={{textAlign : "left"}}>Referal Code</label>
          <input type="text" className="input" id="user_referal_code" name="userefcode" onChange={handleChange} onBlur={handleBlur} placeholder='*r*h**4*' spellCheck="false" />
        </div>
        </>)}
        <div className="form__submit">
          <label className="fn__submit">
            <input type="submit" name="submit" value={ activeStep === 1 ? "Next Step" : "Create Account"} onClick={handleNextStep}/>
          </label>
        </div>
        <div className="form__alternative">
          <div className="fn__lined_text">
            <div className="line" />
            <div className="text">Or</div>
            <div className="line" />
          </div>

          
          {activeStep === 2 ? (<a className="techwave_fn_button cursor" onClick={()=>setActiveStep(1)}><span>Previous Step</span></a>) : (          <a href="#" className="techwave_fn_button"><span>Sign up with Google</span></a>)}
        </div>
      </div>
    </form>
    <div className="sign__desc">
      <p>Don't have an account?  <NavLink to="/signin">Sign In</NavLink></p>
    </div>
  </div>
</div>
{/* !Sign Up */}


    </>
  )
}

export default SignUp
