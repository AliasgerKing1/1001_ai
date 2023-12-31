import React from 'react'
import DataTables from '../../shared/DataTables'
import DataTablesShow from "../../shared/DataTablesShow"
import Sidebar from '../../shared/Sidebar'
import Header from '../../shared/Header'
import BreadBanner from "../../shared/BreadBanner"

const DataList = () => {
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
              <BreadBanner title="Website List" />

              <DataTables title="Website Left to Clone" tagline="total numbers of website left to clone" />
              <DataTablesShow title="Website Done" tagline="total numbers of website clone successfully" />
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default DataList