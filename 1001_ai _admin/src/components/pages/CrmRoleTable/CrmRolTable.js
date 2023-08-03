import React, {useEffect, useState} from 'react'
import { useDispatch, useSelector } from "react-redux"
import { successRedFun, errorRedFun, successMsgRedFun, errorMsgRedFun } from "../../../Redux/RolesAlertReducer"
import Sidebar from '../../shared/Sidebar'
import Header from '../../shared/Header'

import ShoppingCart from "../../shared/ShoppingCart"
import MobileNavbar from "../../shared/MobileNavbar"
import Searchbar from "../../shared/Searchbar"
import BreadBanner from "../../shared/BreadBanner"
import SuccessOutlinedAlert from '../../shared/SuccessOutlinedAlert'
import ErrorOutlinedAlert from '../../shared/ErrorOutlinedAlert'

import { roles_list, role_prop_num,roles_with_permissions } from "../../../json/bin"
import { getRoles, updateRoles,postRoles } from '../../../services/RolesService'
const CrmRoleTable = () => {
  const [selectedCheckboxes, setSelectedCheckboxes] = useState([]);
  let dispatch = useDispatch()
  let state = useSelector(state => state.rolesAlertReducer)

  let geRolesFun = async () => {
    let result = await getRoles();
    // console.log(result.data[0].admin)
    // if (result.data[0].admin.includes("")) {
    //   console.log('The string value exists in the array.');
    // } else {
    //   console.log('The string value does not exist in the array.');
    // }
  }
useEffect(()=> {
geRolesFun()
}, [])
 // Function to handle checkbox change
 const handleCheckboxChange = (position, right) => {
  setSelectedCheckboxes((prevSelected) => ({
    ...prevSelected,
    [position]: {
      ...prevSelected[position],
      [right]: !prevSelected[position]?.[right] // Toggle the checkbox value
    }
  }));
  // console.log(selectedCheckboxes)
};

let updateRoles = async () => {
// if(selectedCheckboxes.[``])
  // let result = await updateRoles("64c523ad7fcceea8e83d44f8",selectedCheckboxes)
  // console.log(result.data.status)
} 
let resetRoles = async () => {
  try {
    let result = await postRoles(roles_with_permissions);
    if (result.data.status === 200) {
      dispatch(successRedFun(true))
      dispatch(errorRedFun(false))
      dispatch(successMsgRedFun('Successfully Reset!'))
      setTimeout(() => {
        dispatch(successRedFun(false))
        dispatch(errorRedFun(false))
      }, 3000)
    } else {
      dispatch(successRedFun(false))
      dispatch(errorRedFun(true))
      dispatch(errorMsgRedFun('Failed to Reset!'))
      setTimeout(() => {
        dispatch(successRedFun(false))
        dispatch(errorRedFun(false))
      }, 3000)
    }
  } catch (error) {
    dispatch(successRedFun(false))
    dispatch(errorRedFun(true))
    dispatch(errorMsgRedFun('An error occurred while resetting'))
    setTimeout(() => {
      dispatch(successRedFun(false))
      dispatch(errorRedFun(false))
    }, 3000)
  }
  // console.log(result.data.status)
} 
  return (
   <>
      <div data-theme="dark">

        {/* Preloader */}
        {/* <div className="preloader">
<img src="/assets/dist/images/logos/favicon.png" alt="loader" className="lds-ripple img-fluid" />
</div> */}
        {/* Body Wrapper */}
        <div className="page-wrapper" id="main-wrapper" data-layout="vertical" data-navbarbg="skin6" data-sidebartype="full" data-sidebar-position="fixed" data-header-position="fixed">
          {/* Sidebar Start */}
          <Sidebar />
          {/* Sidebar End */}
          {/* Main wrapper */}
          <div className="body-wrapper">
            {/* Header Start */}
            <Header />
            {/* Header End */}
            <div style={{ position: 'fixed', top: '50px', right: '10px', zIndex: '9999' }}>
            {state.success && <SuccessOutlinedAlert msg={state.successMsg} />}
        {state.error && <ErrorOutlinedAlert msg={state.errorMsg} />}
</div>
            <div className="container-fluid">
              {/* Banner Start */}
              <BreadBanner title="Roles" />
              {/* Banner End */}
              {/* Multiple table control element */}
              <div className="row">
                <div className="col-12">
                  {/* ---------------------
start Multiple table control element
---------------- */}
                  <div className="card">
                    <div className="card-body">
                      <div className="mb-2">
                        <h5 className="mb-0">Assign Rights to Roles</h5>
                      </div>
                    <div className="row">
                      <div className="col-lg-5">
                      <div>
                        <p className="card-subtitle mb-3">
                          by changing in this table change in rights of roles.
                        </p>
                      </div>
                      </div>
                    <div className="col-lg-2 offset-lg-5">
                      <div className='row'>
                        <div className='col-lg-6'>
                        <button type="button" class="justify-content-center w-100 btn mb-1 btn-rounded btn-danger d-flex align-items-center" onClick={resetRoles}>
                      <b>reset</b>
                    </button>
                        </div>
                        <div className='col-lg-6'>
                        <button type="button" class="justify-content-center w-100 btn mb-1 btn-rounded btn-primary d-flex align-items-center" onClick={updateRoles}>
                      <b>save</b>
                    </button>
                        </div>
                      </div>


                    </div>
                    </div>
                      <div className="top">
                        <div className="Show_info" id="multi_control_info" role="status" aria-live="polite">
                          Total &nbsp; {roles_list.length} &nbsp; roles &nbsp; & &nbsp;{role_prop_num.length}&nbsp; rights
                        </div>
                      </div>
                      <div className="table-responsive" style={{ maxHeight: '500px', overflowY: 'scroll', overflowX: 'auto' }}>
                        <table
                          id="multi_control"
                          className="table border table-striped table-bordered display text-nowrap"
                          style={{ width: '100%' }}
                        >
                          <thead>
                            <tr>
                              <th>Name</th>
                              {role_prop_num.map((right, index) => {
                                return (
                                  <th key={index}>{right.rights}</th>
                                )
                              })}
                            </tr>
                          </thead>
                          <tbody>
                            {roles_list.map((position, positionIndex) => {
                              return (
                                <tr key={positionIndex}>
                                  <td>
                                    {position}
                                  </td>
                                  {role_prop_num.map((right, rightIndex) => {
                                    return (
                                      <td key={rightIndex}>
                                        <div class="form-check form-check-inline ms-5">
                                          <input class="form-check-input success pointer" type="checkbox"  value="option1" id={`checkbox_${positionIndex}_${rightIndex}`} onChange={() => handleCheckboxChange(position, right.rights)}
                    checked={selectedCheckboxes[position]?.[right.rights] || false}
                  />
                                        </div>
                                      </td>
                                    )
                                  })}



                                </tr>
                              )
                            })}
                          </tbody>
                          <tfoot>
                            <tr>
                              <th>Name</th>
                              {role_prop_num.map((right, index) => {
                                return (
                                  <th key={index}>{right.rights}</th>
                                )
                              })}
                            </tr>
                          </tfoot>
                        </table>
                      </div>
                    </div>
                  </div>
                  {/* ---------------------
end Multiple table control element
---------------- */}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*  Shopping Cart */}
        <ShoppingCart />
        {/*  Mobilenavbar */}
        <MobileNavbar />
        {/* Search Bar */}
        <Searchbar />
        {/* <Coustomizer /> */}
      </div>
    </>
  )
}

export default CrmRoleTable
