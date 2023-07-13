import React, {useState} from 'react'
import {useNavigate} from "react-router-dom"

import {useFormik} from "formik"
import MemberSchema from "../../Schemas/MemberSchema"
import ErrorAlert from "../shared/ErrorAlert"
let initialValues = {
  name : "",
    email : "",
    username : "",
    phone : "",
    address : "",
    qualification : "",
    YOG : "",
    skills : "",
    password : "",
}
const AddMemberComp = () => {
  let [showAlert, setShowAlert] = useState(false);
  let [msg, setMsg] = useState("");
  let navigate = useNavigate();

  let {values, handleBlur, handleChange, handleSubmit, errors, touched} = useFormik({
    initialValues : initialValues,
    validationSchema : MemberSchema,
    onSubmit : async () => {
// if(result.data.status == 200) {
//             setShowAlert(false)
//            navigate("/auth/home")
//                }
//                else{
//             setShowAlert(true)
//             setMsg("Data Not Submited !")
//                }
     
}

})
  return (
    <>
                <form onSubmit={handleSubmit}>
                <div className="row">
  <div className="col-lg-6">
    <div className="card">
      <div className="px-4 py-3 border-bottom">
        <h5 className="card-title fw-semibold mb-0">Basic Information</h5>
      </div>
      <div className="card-body p-4">
        <div className="mb-4">
          <label htmlFor="exampleInputPassword1" className="form-label fw-semibold">Name</label>
          <div className="input-group border rounded-1">
            <span className="input-group-text bg-transparent px-6 border-0" name="name" id="basic-addon1"><i className="ti ti-user fs-6" /></span>
            <input type="text" placeholder="John Doe" className={`form-control border-0 ps-2 ${errors.name && touched.name ? "is-invalid" : ""}`} onChange={handleChange} onBlur={handleBlur} value={values.name} />
          </div>
             <div>{errors.name && touched.name ? (<small className='text-danger'>{errors.name}</small>) : null}</div>
        </div>
        <div className="mb-4">
          <label htmlFor="exampleInputPassword1" className="form-label fw-semibold">UserName</label>
          <div className="input-group border rounded-1">
            <span className="input-group-text bg-transparent px-6 border-0" name="username" id="basic-addon1"><span className='fs-6'>@</span></span>
            <input type="text" placeholder="@JohnDoe" className={`form-control border-0 ps-2 ${errors.username && touched.username ? "is-invalid" : ""}`} onChange={handleChange} onBlur={handleBlur} value={values.username} />
          </div>
              <div>{errors.username && touched.username ? (<small className='text-danger'>{errors.username}</small>) : null}</div>
        </div>
        <div className="mb-4">
          <label htmlFor="exampleInputPassword1" className="form-label fw-semibold">Email</label>
          <div className="input-group border rounded-1">
          <span className="input-group-text bg-transparent px-6 border-0" name="email" id="basic-addon1"><i className="ti ti-mail fs-6" /></span>
            <input type="text" placeholder="johndoe@mail.com" className={`form-control border-0 ${errors.email && touched.email ? "is-invalid" : ""}`} onChange={handleChange} onBlur={handleBlur} value={values.email} />
            <span className="input-group-text bg-transparent px-6 border-0" id="basic-addon1">john@example.com</span>
          </div>
              <div>{errors.email && touched.email ? (<small className='text-danger'>{errors.email}</small>) : null}</div>
        </div>
        <div className="mb-4">
        <label htmlFor="exampleInputPassword1" className="form-label fw-semibold">Phone No</label>
          <div className="input-group border rounded-1">
            <span className="input-group-text bg-transparent px-6 border-0" name="phone" id="basic-addon1"><i className="ti ti-phone fs-6" /></span>
            <input type="text" placeholder="412 2150 451" className={`form-control border-0 ps-2 ${errors.phone && touched.phone ? "is-invalid" : ""}`} onChange={handleChange} onBlur={handleBlur} value={values.phone} />
          </div>
              <div>{errors.phone && touched.phone ? (<small className='text-danger'>{errors.phone}</small>) : null}</div>
        </div>
        <div className="mb-4">
          <label htmlFor="exampleInputPassword1" className="form-label fw-semibold">Address</label>
          <div className="input-group border rounded-1">
            <span className="input-group-text bg-transparent px-6 border-0" id="basic-addon1"><i className="ti ti-building-arch fs-6" /></span>
            <textarea name="address" id cols={20} rows={1} placeholder="Your Address" defaultValue={""} className={`form-control p-7 border-0 ps-2 ${errors.address && touched.address ? "is-invalid" : ""}`} onChange={handleChange} onBlur={handleBlur} value={values.address} />
          </div>
              <div>{errors.address && touched.address ? (<small className='text-danger'>{errors.address}</small>) : null}</div>
        </div>
      </div>
    </div>
  </div>
  <div className="col-lg-6">
    <div className="card">
      <div className="px-4 py-3 border-bottom">
        <h5 className="card-title fw-semibold mb-0">Education & Skills</h5>
      </div>
      <div className="card-body p-4">
        <div className="mb-4">
          <label htmlFor="exampleInputPassword1" className="form-label fw-semibold">Highest Qualification</label>
          <div className="input-group border rounded-1">
            <span className="input-group-text bg-transparent px-6 border-0" name="qualification" id="basic-addon1"><i className="ti ti-school fs-6" /></span>
            <input type="text" placeholder="B Tech" className={`form-control border-0 ps-2 ${errors.qualification && touched.qualification ? "is-invalid" : ""}`} onChange={handleChange} onBlur={handleBlur} value={values.qualification} />
          </div>
              <div>{errors.qualification && touched.qualification ? (<small className='text-danger'>{errors.qualification}</small>) : null}</div>
        </div>
        <div className="mb-4">
          <label htmlFor="exampleInputPassword1" className="form-label fw-semibold">Year of Graduation</label>
          <div className="input-group border rounded-1">
            <span className="input-group-text bg-transparent px-6 border-0" name="YOG" id="basic-addon1"><i className="ti ti-mail fs-6" /></span>
            <input type="text" placeholder="2023" className={`form-control border-0 ps-2 ${errors.YOG && touched.YOG ? "is-invalid" : ""}`} onChange={handleChange} onBlur={handleBlur} value={values.YOG} />
          </div>
              <div>{errors.YOG && touched.YOG ? (<small className='text-danger'>{errors.YOG}</small>) : null}</div>
        </div>
        <div className="mb-4">
          <label htmlFor="exampleInputPassword1" className="form-label fw-semibold">Password</label>
          <div className="input-group border rounded-1">
            <span className="input-group-text bg-transparent px-6 border-0" name="password" id="basic-addon1"><i className="ti ti-lock-access fs-6" /></span>
            <input type="password" placeholder="Password" className={`form-control border-0 ps-2 ${errors.password && touched.password ? "is-invalid" : ""}`} onChange={handleChange} onBlur={handleBlur} value={values.password} />
          </div>
              <div>{errors.password && touched.password ? (<small className='text-danger'>{errors.password}</small>) : null}</div>
        </div>
        <div className="mb-4">
          <label htmlFor="exampleInputPassword1" className="form-label fw-semibold">Confirm Password</label>
          <div className="input-group border rounded-1">
            <span className="input-group-text bg-transparent px-6 border-0" id="basic-addon1"><i className="ti ti-lock-access fs-6" /></span>
            <input type="password" placeholder="Confirm Password"  name="conf_pass" className={`form-control border-0 ps-2 ${errors.conf_pass && touched.conf_pass ? "is-invalid" : ""}`} onChange={handleChange} onBlur={handleBlur} value={values.conf_pass} />
          </div>
              <div>{errors.conf_pass && touched.conf_pass ? (<small className='text-danger'>{errors.conf_pass}</small>) : null}</div>
        </div>
        <div className="mb-4">
          <label htmlFor="exampleInputPassword1" className="form-label fw-semibold">Skills</label>
            <div className="input-group border rounded-1">
            <span className="input-group-text bg-transparent px-6 border-0" id="basic-addon1"><i className="ti ti-artboard fs-6" /></span>
            <textarea name="skills" id cols={20} rows={1} placeholder="Skills" defaultValue={""} className={`form-control p-7 border-0 ps-2 ${errors.skills && touched.skills ? "is-invalid" : ""}`} onChange={handleChange} onBlur={handleBlur} value={values.skills} />
          </div>
              <div>{errors.skills && touched.skills ? (<small className='text-danger'>{errors.skills}</small>) : null}</div>
        </div>
        <button type='submit' className='btn btn-primary'>Add</button>
      </div>
    </div>
  </div>
</div>
  </form>
    </>
  )
}

export default AddMemberComp