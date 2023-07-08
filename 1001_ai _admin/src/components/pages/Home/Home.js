import React, { useEffect, useState } from 'react'
import Sidebar from '../../shared/Sidebar'
import Header from '../../shared/Header'

import {NavLink} from "react-router-dom"
import { getWebsiteName } from '../../../services/websiteDataService'
import Coustomizer from '../../shared/Coustomizer'
import ShoppingCart from "../../shared/ShoppingCart"
import MobileNavbar from "../../shared/MobileNavbar"
import Searchbar from "../../shared/Searchbar"
const Home = () => {
  let [websiteData, setWebsiteData] = useState([])
  let getWebsiteNameFun = async () => {
let result = await getWebsiteName();
setWebsiteData(result.data)
  }
  useEffect(()=> {
    getWebsiteNameFun()
  }, [])
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
              <div className="row">
                <div className="col-sm-6 col-xl-3">
                  <div className="card bg-light-primary shadow-none">
                    <div className="card-body p-4">
                      <div className="d-flex align-items-center">
                        <div className="round rounded bg-primary d-flex align-items-center justify-content-center">
                          {/* <i className="cc BTC text-white fs-7" title="BTC" /> */}
                          <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-stack-3 cc BTC text-white fs-7" title="left" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
   <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
   <path d="M12 2l-8 4l8 4l8 -4l-8 -4"></path>
   <path d="M4 10l8 4l8 -4"></path>
   <path d="M4 18l8 4l8 -4"></path>
   <path d="M4 14l8 4l8 -4"></path>
</svg>
                        </div>
                        <h6 className="mb-0 ms-3">Website left</h6>
                        <div className="ms-auto text-primary d-flex align-items-center">
                          <i className="ti ti-trending-up text-primary fs-6 me-1" />
                          <span className="fs-2 fw-bold">+ 2.30%</span>
                        </div>
                      </div>
                      <div className="d-flex align-items-center justify-content-between mt-4">
                        <h3 className="mb-0 fw-semibold fs-7">5</h3>
                        <span className="fw-bold">$1,015.00</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-xl-3">
                  <div className="card bg-light-success shadow-none">
                    <div className="card-body p-4">
                      <div className="d-flex align-items-center">
                        <div className="round rounded bg-success d-flex align-items-center justify-content-center">
                          {/* <i className="cc ETH text-white fs-7" title="ETH" /> */}
                          <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-thumb-up-filled text-white fs-7" title="done" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
   <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
   <path d="M13 3a3 3 0 0 1 2.995 2.824l.005 .176v4h2a3 3 0 0 1 2.98 2.65l.015 .174l.005 .176l-.02 .196l-1.006 5.032c-.381 1.626 -1.502 2.796 -2.81 2.78l-.164 -.008h-8a1 1 0 0 1 -.993 -.883l-.007 -.117l.001 -9.536a1 1 0 0 1 .5 -.865a2.998 2.998 0 0 0 1.492 -2.397l.007 -.202v-1a3 3 0 0 1 3 -3z" stroke-width="0" fill="currentColor"></path>
   <path d="M5 10a1 1 0 0 1 .993 .883l.007 .117v9a1 1 0 0 1 -.883 .993l-.117 .007h-1a2 2 0 0 1 -1.995 -1.85l-.005 -.15v-7a2 2 0 0 1 1.85 -1.995l.15 -.005h1z" stroke-width="0" fill="currentColor"></path>
</svg>
                        </div>
                        <h6 className="mb-0 ms-3">Website done</h6>
                        <div className="ms-auto text-success d-flex align-items-center">
                          <i className="ti ti-trending-down text-success fs-6 me-1" />
                          <span className="fs-2 fw-bold">- 3.20%</span>
                        </div>
                      </div>
                      <div className="d-flex align-items-center justify-content-between mt-4">
                        <h3 className="mb-0 fw-semibold fs-7">15</h3>
                        <span className="fw-bold">$2,110.00</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-xl-3">
                  <div className="card bg-light-primary shadow-none">
                    <div className="card-body p-4">
                      <div className="d-flex align-items-center">
                        <div className="round rounded bg-primary d-flex align-items-center justify-content-center">
                          {/* <i className="cc BTC text-white fs-7" title="BTC" /> */}
                          <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-stack-3 cc BTC text-white fs-7" title="left" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
   <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
   <path d="M12 2l-8 4l8 4l8 -4l-8 -4"></path>
   <path d="M4 10l8 4l8 -4"></path>
   <path d="M4 18l8 4l8 -4"></path>
   <path d="M4 14l8 4l8 -4"></path>
</svg>
                        </div>
                        <h6 className="mb-0 ms-3">Website left</h6>
                        <div className="ms-auto text-primary d-flex align-items-center">
                          <i className="ti ti-trending-up text-primary fs-6 me-1" />
                          <span className="fs-2 fw-bold">+ 2.30%</span>
                        </div>
                      </div>
                      <div className="d-flex align-items-center justify-content-between mt-4">
                        <h3 className="mb-0 fw-semibold fs-7">5</h3>
                        <span className="fw-bold">$1,015.00</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-xl-3">
                  <div className="card bg-light-success shadow-none">
                    <div className="card-body p-4">
                      <div className="d-flex align-items-center">
                        <div className="round rounded bg-success d-flex align-items-center justify-content-center">
                          {/* <i className="cc ETH text-white fs-7" title="ETH" /> */}
                          <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-thumb-up-filled text-white fs-7" title="done" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
   <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
   <path d="M13 3a3 3 0 0 1 2.995 2.824l.005 .176v4h2a3 3 0 0 1 2.98 2.65l.015 .174l.005 .176l-.02 .196l-1.006 5.032c-.381 1.626 -1.502 2.796 -2.81 2.78l-.164 -.008h-8a1 1 0 0 1 -.993 -.883l-.007 -.117l.001 -9.536a1 1 0 0 1 .5 -.865a2.998 2.998 0 0 0 1.492 -2.397l.007 -.202v-1a3 3 0 0 1 3 -3z" stroke-width="0" fill="currentColor"></path>
   <path d="M5 10a1 1 0 0 1 .993 .883l.007 .117v9a1 1 0 0 1 -.883 .993l-.117 .007h-1a2 2 0 0 1 -1.995 -1.85l-.005 -.15v-7a2 2 0 0 1 1.85 -1.995l.15 -.005h1z" stroke-width="0" fill="currentColor"></path>
</svg>
                        </div>
                        <h6 className="mb-0 ms-3">Website done</h6>
                        <div className="ms-auto text-success d-flex align-items-center">
                          <i className="ti ti-trending-down text-success fs-6 me-1" />
                          <span className="fs-2 fw-bold">- 3.20%</span>
                        </div>
                      </div>
                      <div className="d-flex align-items-center justify-content-between mt-4">
                        <h3 className="mb-0 fw-semibold fs-7">15</h3>
                        <span className="fw-bold">$2,110.00</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-6">
                <div class="card">
                  <div class="card-body">
                    <div class="mb-3">
                      <h4 class="card-title mb-0">Name of Websites</h4>
                    </div>
                    <ul class="list-group" style={{maxHeight: '300px', overflowY: 'scroll' }}>
                      {websiteData.map((x)=> {
                        return (
                          <li class="list-group-item d-flex align-items-center" key={x.index}>
                          <i data-feather="box" class="text-primary feather-sm me-2"></i>
                          <NavLink to="" className="text-white">
                          {x.name}
                          </NavLink>
                          {/* <span class="badge bg-light-primary text-primary font-medium rounded-pill ms-auto">14</span> */}
                                              <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-settings ms-auto text-white" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
     <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
     <path d="M10.325 4.317c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543 -.826 3.31 -2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065z"></path>
     <path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"></path>
  </svg>
                        </li>
                        )
                      })}

                    </ul>
                  </div>
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
<Coustomizer />
      </div>

    </>
  )
}

export default Home
