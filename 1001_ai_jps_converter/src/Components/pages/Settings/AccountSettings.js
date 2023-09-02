import React, {useState} from 'react'
import {useNavigate} from "react-router-dom";
import {useFormik} from "formik";
import Footer from '../../shared/Footer'
import Sidebar from '../../shared/Sidebar'
import Header from '../../shared/Header'
import SettingNav from '../../shared/SettingNav'
import {updateUser} from '../../../Services/UserSerivice'
import {UserDataRed} from '../../../Redux/UserReducer'

import UpdateDetailsSchema from "../../../Schemas/UpdateDetailsSchema"
import { useSelector, useDispatch } from 'react-redux'


const AccountSettings = () => {
  let dispatch = useDispatch()
  let [showAlert, setShowAlert] = useState(false);
  let [showLoader, setShowLoader] = useState(false);
  let [msg, setMsg] = useState("");
  
  let state = useSelector(state => state.userReducer)
  
  let navigate = useNavigate();
  let initialValues = {
  f_name : state && state.f_name ? state.f_name : "",
  l_name : state && state.l_name ? state.l_name : ""
  }

  let {values, handleBlur, handleChange, handleSubmit, errors, touched} = useFormik({
    initialValues : initialValues,
    validationSchema : UpdateDetailsSchema,
    onSubmit : async () => {

      try {
        let token = localStorage.getItem('token')
        setShowLoader(true)
        let result = await updateUser(token, values);
        if(result.data.status == 200) {
          dispatch(UserDataRed(result?.data?.updatedData[0]))
          navigate("/auth/profile/user")
          setShowAlert(false)
        } else {
          setShowAlert(true)
          setMsg("Internal Server Error")
        }
        setShowLoader(false)
      } catch(error) {
        setShowAlert(true)
        setMsg("Internal Server Error")
        console.log(error)
        setShowLoader(false)
      }

    }
})
  return (
    <>
{/* Layout wrapper */}
<div className="layout-wrapper layout-content-navbar  ">
  <div className="layout-container">
    {/* Menu */}
<Sidebar />
    {/* / Menu */}
    {/* Layout container */}
    <div className="layout-page">
      {/* Navbar */}
<Header />
      {/* / Navbar */}
      {/* Content wrapper */}
      <div className="content-wrapper">
        {/* Content */}
        <div className="container-xxl flex-grow-1 container-p-y">
          <h4 className="py-3 mb-4 text-a-l fw-bold">
            <span className="text-muted fw-light fw-600">Account Settings /</span> Account
          </h4>
          <div className="row">
            <div className="col-md-12">

<SettingNav />
              <div className="card mb-4">
                <h5 className="card-header text-a-l fw-bold">Profile Details</h5>
                {/* Account */}
                <div className="card-body">
                  <div className="d-flex align-items-start align-items-sm-center gap-4">
                    <img src="../../assets/img/avatars/14.png" alt="user-avatar" className="d-block w-px-100 h-px-100 rounded" id="uploadedAvatar" />
                    <div className="button-wrapper">
                      <label htmlFor="upload" className="btn btn-primary me-2 mb-3" tabIndex={0}>
                        <span className="d-none d-sm-block fw-600">Upload new photo</span>
                        <i className="ti ti-upload d-block d-sm-none" />
                        <input type="file" id="upload" className="account-file-input" hidden accept="image/png, image/jpeg" />
                      </label>
                      <button type="button" className="btn btn-label-secondary account-image-reset mb-3">
                        <i className="ti ti-refresh-dot d-block d-sm-none" />
                        <span className="d-none d-sm-block fw-600">Reset</span>
                      </button>
                      <div className="text-muted fw-600">Allowed JPG, JPEG or PNG. Max size of 800K</div>
                    </div>
                  </div>
                </div>
                <hr className="my-0" />
                <div className="card-body">
                  <form id="formAccountSettings" onSubmit={handleSubmit}>
                    <div className="row">
                      <div className="mb-3 col-md-6">
                        <label htmlFor="firstName" className="form-label fl fw-600">First Name</label>
                        <input className={`form-control fw-600 ${touched.f_name && errors.f_name ? "is-invalid" : ""}`} type="text" id="firstName" name="f_name" placeholder="John" autofocus onChange={handleChange} onBlur={handleBlur} value={values.f_name} />
                        <div>{touched.f_name && errors.f_name ? (<small className='text-danger'>{errors.f_name}</small>) : null}</div>
                      </div>
                      <div className="mb-3 col-md-6">
                        <label htmlFor="lastName" className="form-label fl fw-600">Last Name</label>
                        <input className={`form-control fw-600 ${touched.l_name && errors.l_name ? "is-invalid" : ""}`} type="text" name="l_name" id="lastName" placeholder="Doe" onChange={handleChange} onBlur={handleBlur} value={values.l_name} />
                        <div>{touched.l_name && errors.l_name ? (<small className='text-danger'>{errors.l_name}</small>) : null}</div>
                      </div>
                      <div className="mb-3 col-md-6">
                        <label htmlFor="email" className="form-label fl fw-600">E-mail</label>
                        <input className="form-control fw-600" type="text" id="email" name="email" defaultValue={state && state.email} placeholder={state && state.email} />
                      </div>
                      <div className="mb-3 col-md-6">
                        <label htmlFor="organization" className="form-label fl fw-600">Organization</label>
                        <input type="text" className="form-control fw-600" id="organization" name="organization" placeholder='1001_ai' />
                      </div>
                      <div className="mb-3 col-md-6">
                        <label className="form-label fl fw-600" htmlFor="phoneNumber">Phone Number</label>
                        <div className="input-group input-group-merge">
                          <span className="input-group-text">Ind (+91)</span>
                          <input type="text" id="phoneNumber" name="phoneNumber" className="form-control fw-600" placeholder="653 745 0111" />
                        </div>
                      </div>
                      <div className="mb-3 col-md-6">
                        <label className="form-label fl fw-600" htmlFor="country">Country</label>
                        <select id="country" className="select2 form-select">
                          <option value>Select</option>
                          <option value="Australia">Australia</option>
                          <option value="Bangladesh">Bangladesh</option>
                          <option value="Belarus">Belarus</option>
                          <option value="Brazil">Brazil</option>
                          <option value="Canada">Canada</option>
                          <option value="China">China</option>
                          <option value="France">France</option>
                          <option value="Germany">Germany</option>
                          <option value="India">India</option>
                          <option value="Indonesia">Indonesia</option>
                          <option value="Israel">Israel</option>
                          <option value="Italy">Italy</option>
                          <option value="Japan">Japan</option>
                          <option value="Korea">Korea, Republic of</option>
                          <option value="Mexico">Mexico</option>
                          <option value="Philippines">Philippines</option>
                          <option value="Russia">Russian Federation</option>
                          <option value="South Africa">South Africa</option>
                          <option value="Thailand">Thailand</option>
                          <option value="Turkey">Turkey</option>
                          <option value="Ukraine">Ukraine</option>
                          <option value="United Arab Emirates">United Arab Emirates</option>
                          <option value="United Kingdom">United Kingdom</option>
                          <option value="United States">United States</option>
                        </select>
                      </div>

                    </div>
                    <div className="mt-2">
                      <button type="submit" className="btn btn-primary me-2 fw-600 fl">Save changes</button>
                      <button type='button' className="btn btn-label-secondary fw-600 fl">Cancel</button>
                    </div>
                  </form>
                </div>
                {/* /Account */}
              </div>
              <div className="card">
                <h5 className="card-header text-a-l fw-bold">Delete Account</h5>
                <div className="card-body">
                  <div className="mb-3 col-12 mb-0">
                    <div className="alert alert-warning text-a-l">
                      <h5 className="alert-heading mb-1 fw-620">Are you sure you want to delete your account?</h5>
                      <p className="mb-0 fw-600">Once you delete your account, there is no going back. Please be certain.</p>
                    </div>
                  </div>
                  <form id="formAccountDeactivation" onSubmit="return false">
                    <div className="form-check mb-4">
                      <input className="form-check-input" type="checkbox" name="accountActivation" id="accountActivation" />
                      <label className="form-check-label fl fw-600" htmlFor="accountActivation">I confirm my account deactivation</label>
                    </div>
                    <button type="button" className="btn btn-danger deactivate-account fl">Deactivate Account</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* / Content */}
        {/* Footer */}
<Footer />
        {/* / Footer */}
        <div className="content-backdrop fade" />
      </div>
      {/* Content wrapper */}
    </div>
    {/* / Layout page */}
  </div>
  {/* Overlay */}
  <div className="layout-overlay layout-menu-toggle" />
  {/* Drag Target Area To SlideIn Menu On Small Screens */}
  <div className="drag-target" />
</div>
{/* / Layout wrapper */}

    </>
  )
}

export default AccountSettings
