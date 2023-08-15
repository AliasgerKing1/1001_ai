import * as Yup from "yup"

const SignupSchema = Yup.object({
    name : Yup.string().min(3, "Name has atleast 3 character!").required("Name required!"),
    email : Yup.string().email("Incorrect email syntax!").required("Email required!"),
    // password : Yup.string().required("Password required!"),
    password : Yup.string().min(8, "Password has atleast 8 character!").required("Password required!"),
    conf_pass : Yup.string().required("Confirm Password required!").oneOf([Yup.ref("password"), null], "Password and Confirm Password not match !")
})
export default SignupSchema