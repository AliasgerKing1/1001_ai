import * as Yup from "yup"

let LockScreenSchema =  Yup.object({
    password : Yup.string().required("Password required!"),
})
export default LockScreenSchema