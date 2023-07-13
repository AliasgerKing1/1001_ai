import React from 'react'
import Sidebar from '../../shared/Sidebar'
import Header from '../../shared/Header'

import ShoppingCart from "../../shared/ShoppingCart"
import MobileNavbar from "../../shared/MobileNavbar"
import Searchbar from "../../shared/Searchbar"
import BreadBanner from "../../shared/BreadBanner"

import { roles_list, role_prop_num } from "../../../json/bin"
const CrmRoleTable = () => {
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
                      <div>
                        <p className="card-subtitle mb-3">
                          by changing in this table change in rights of roles.
                        </p>
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
                              {role_prop_num.map((x) => {
                                return (
                                  <th>{x.rights}</th>
                                )
                              })}
                            </tr>
                          </thead>
                          <tbody>
                            {roles_list.map((x) => {
                              return (
                                <tr>
                                  <td>
                                    {x}
                                  </td>
                                  {role_prop_num.map((x) => {
                                    return (
                                      <td>
                                        <div class="form-check form-check-inline ms-5">
                                          <input class="form-check-input success pointer" type="checkbox" id="success2-check" value="option1" />
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
                              {role_prop_num.map((x) => {
                                return (
                                  <th>{x.rights}</th>
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
