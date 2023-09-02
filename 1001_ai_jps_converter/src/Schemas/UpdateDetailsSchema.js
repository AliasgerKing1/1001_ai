import * as Yup from "yup"

const UpdateDetailsSchema = Yup.object({
    f_name : Yup.string().required("FirstName required!"),
    l_name : Yup.string().required("LastName required!")
})
export default UpdateDetailsSchema