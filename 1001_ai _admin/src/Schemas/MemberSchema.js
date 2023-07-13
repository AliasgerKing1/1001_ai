import * as Yup from "yup"

let SigninSchema =  Yup.object({
    name : Yup.string().required("Name required!"),
    username : Yup.string().required("Username required!"),
    email : Yup.string().required("Email required!").email("Invalid Email"),
    password : Yup.string().required("Password required!"),
    conf_pass : Yup.string().required("Confirm Password required!"),
    phone : Yup.string().required("Phone Number required!"),
    qualification : Yup.string().required("Qualification required!"),
    address : Yup.string().required("Address required!"),
    skills : Yup.string().required("Skills required!"),
    YOG : Yup.string().required("Year of Graduation required!"),
})
export default SigninSchema