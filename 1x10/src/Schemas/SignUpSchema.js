import * as Yup from "yup";

const SignupSchema = Yup.object({
    name : Yup.string().required("Name required!"),
    username : Yup.string().required("Username required!"),
    email : Yup.string().email("Invalid Email").required("Email required!"),
    password : Yup.string().required("Password required!"),
})

export default SignupSchema