import * as Yup from "yup"

const SigninSchema = Yup.object({
    email : Yup.string().required("Email required!"),
    password : Yup.string().required("Password required!")
})
export default SigninSchema