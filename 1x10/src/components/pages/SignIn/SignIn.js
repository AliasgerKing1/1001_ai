import React, {useEffect,useState } from 'react'
import {NavLink, useNavigate} from "react-router-dom"
import {useFormik} from "formik"
import SigninSchema from "../../../Schemas/SignInSchema"
import { loginUser } from '../../../Services/AuthService'
import ErrorAlert from "../../shared/ErrorAlert"
import { checkUser } from '../../../Services/WholeModuleService'
import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google';
import jwt_decode from 'jwt-decode'
let initialValues = {
  username:  "",
  password : ""
}
const SignIn = () => {
  let [showAlert, setShowAlert] = useState(false);
  let [showLoader, setShowLoader] = useState(false);
  let [msg, setMsg] = useState("");

  let navigate = useNavigate();
  let {values, handleBlur, handleChange, handleSubmit, errors, touched} = useFormik({
    initialValues : initialValues,
    validationSchema : SigninSchema,
    onSubmit : async () => {
      try {
        setShowLoader(true)
          let whole_result = await checkUser(values)
          if(whole_result.data.status === 200) {
            setShowAlert(false)
            localStorage.setItem('token', whole_result.data.token)
            navigate('/auth/home')
          }
          if(whole_result.data.errType == 1) {

            let result = await loginUser(values);
            if(result.data.status === 200) {
              setShowAlert(false)
              localStorage.setItem('token', result.data.token)
              navigate('/auth/home')
            }
            if(result.data.errType == 1) {
              setShowAlert(true)
              setMsg("Username or Password is incorrect")
              setTimeout(() => {
                setShowAlert(false)
              }, 3000);
            }
            if(result.data.errType == 2) {
              setShowAlert(true)
              setMsg("Username or Password is incorrect")
              setTimeout(() => {
                setShowAlert(false)
              }, 3000);
            }

          }
          if(whole_result.data.errType == 2) {
            setShowAlert(true)
            setMsg("Username or Password is incorrect")
            setTimeout(() => {
              setShowAlert(false)
            }, 3000);
          } else
        setShowLoader(false)
      } catch(error) {
        setShowAlert(true)
        setMsg("Internal Server Error")
        setTimeout(() => {
          setShowAlert(false)
        }, 3000);
        console.log(error)
        setShowLoader(false)
      }
    }
})

  return (
    <>
{/* Sign In */}
  {/* Preloader */}
<div className="techwave_fn_sign">
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
      <div className="form__content">
        <div className="form__title">Sign In</div>
    <form className="login" onSubmit={handleSubmit}>
        <div className="form__username">
          <label htmlFor="user_login" style={{float : "left"}}>Username or Email</label>
          <input type="text" className={`input ${touched.username && errors.username ? "is-invalid" : ""}`} id="user_login" name="username" autoCapitalize="off" autoComplete="username" aria-describedby="login-message" onChange={handleChange} onBlur={handleBlur} placeholder="Username" />
          <div>{touched.username && errors.username ? (<small style={{textAlign : "left", color : "#dc3545"}}>{errors.username}</small>) : null}</div>
        </div>
        <div className="form__pass">
          <div className="pass_lab">
            <label htmlFor="user_password">Password</label>
            <a href="#">Forget Password?</a>
          </div>
          <input type="password" className={`input ${touched.password && errors.password ? "is-invalid" : ""}`} id="user_password" name="password" autoComplete="current-password" onChange={handleChange} onBlur={handleBlur} placeholder='********' spellCheck="false" />
          <div>{touched.password && errors.password ? (<small style={{textAlign : "left", color : "#dc3545"}}>{errors.password}</small>) : null}</div>
        </div>
        {showAlert ? (<ErrorAlert msg={msg} />) : null}
        <div className="form__submit">
          <label className="fn__submit">
            <input type="submit" name="submit" value="Sign In" />
          </label>
        </div>
    </form>
        <div className="form__alternative">
          <div className="fn__lined_text">
            <div className="line" />
            <div className="text">Or</div>
            <div className="line" />
          </div>
            {/* <a href="#" className="techwave_fn_button cursor"><span>Sign in with Google</span></a> */}
            <GoogleOAuthProvider clientId="762966009515-5pqp4kphu99sfmvpupf35sdm8fo3n16c.apps.googleusercontent.com">
<GoogleLogin
  onSuccess={credentialResponse => {
    console.log(credentialResponse);
    let data = jwt_decode(credentialResponse.credential)
    console.log("decoded data : ", data)
  }}
  onError={() => {
    console.log('Login Failed');
  }}
/>
</GoogleOAuthProvider>
        </div>
      </div>
    <div className="sign__desc">
      <p>Not a member? <NavLink to="/signup">Sign Up</NavLink></p>
    </div>
  </div>
</div>
{/* !Sign In */}
    </>
  )
}

export default SignIn
