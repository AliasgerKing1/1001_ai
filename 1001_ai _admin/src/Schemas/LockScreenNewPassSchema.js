import * as Yup from "yup"

let LockScreenNewPassSchema =  Yup.object({
    password : Yup.string().required("Password required!"),
    re_password : Yup.string().required("Re-Password required!").oneOf([Yup.ref("password"), null], "Password and Confirm Password not match !"),
})
export default LockScreenNewPassSchema