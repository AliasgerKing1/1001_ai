import React from 'react'
import Sidebar from '../../shared/Sidebar'
import Header from '../../shared/Header'

import ShoppingCart from "../../shared/ShoppingCart"
import MobileNavbar from "../../shared/MobileNavbar"
import Searchbar from "../../shared/Searchbar"
import BreadBanner from "../../shared/BreadBanner"

import { roles_list } from "../../../json/bin"
const CrmTable = () => {
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
              <BreadBanner title="Assign Roles" />
                            {/* Multiple table control element */}
                            <div className="row">
                                <div className="col-12">
                                    {/* ---------------------
              start Multiple table control element
          ---------------- */}
                                    <div className="card">
                                        <div className="card-body">
                                            <div className="mb-2">
                                                <h5 className="mb-0"></h5>
                                            </div>
                                            <div>
                                                <p className="card-subtitle mb-3">

                                                </p>
                                            </div>
                                            <div className="top">
                                                <div className="Show_info" id="multi_control_info" role="status" aria-live="polite">
                                                    Total &nbsp; 0 &nbsp; entries
                                                </div>
                                            </div>
                                            <div className="table-responsive" style={{ maxHeight: '400px', overflowY: 'scroll' }}>
                                                <table
                                                    id="multi_control"
                                                    className="table border table-striped table-bordered display text-nowrap"
                                                    style={{ width: '100%' }}
                                                >
                                                    <thead>
                                                        <tr>
                                                            <th>Id</th>
                                                            <th>Name</th>
                                                            <th>Role</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>

                                                        <tr>
                                                            <td></td>
                                                            <td></td>
                                                            <td>
                                                                <select className='select2 form-control'>
                                                                    <option>Select</option>
                                                                    {roles_list.map((x) => {
                                                                        return (
                                                                            <option value={x.toLowerCase()}>{x}</option>
                                                                        )
                                                                    })}
                                                                </select>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                    <tfoot>
                                                        <tr>
                                                            <th>Id</th>
                                                            <th>Name</th>
                                                            <th>Role</th>
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

export default CrmTable
