import * as Yup from "yup";

const SignupSchema = Yup.object({
    password : Yup.string().required("Password required!"),
    conf_password : Yup.string().required("Confirm Password required!").oneOf([Yup.ref("password"), null], "Password and Confirm Password not match !"),
})

export default SignupSchema