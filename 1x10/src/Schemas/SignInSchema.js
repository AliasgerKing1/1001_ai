import * as Yup from "yup"

let SigninSchema =  Yup.object({
    username : Yup.string().required("Username required!"),
    password : Yup.string().required("Password required!"),
})
export default SigninSchema