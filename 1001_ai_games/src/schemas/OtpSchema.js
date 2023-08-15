import * as Yup from "yup"

const OtpSchema = Yup.object({
    otp : Yup.string().min(6, "otp should be atleast 6 digit!").max(6, "otp should be atmost 6 digit!").required("Otp required!"),

})
export default OtpSchema