import React, { useEffect, useState } from 'react'
import Sidebar from '../../shared/Sidebar'
import Header from '../../shared/Header'

import ShoppingCart from "../../shared/ShoppingCart"
import MobileNavbar from "../../shared/MobileNavbar"
import Searchbar from "../../shared/Searchbar"
import WebsiteCard from '../../shared/WebsiteCard'
import WebsiteSetting from '../../shared/WebsiteSetting'
import WebsiteName from '../../shared/WebsiteName'
import ListedChart from "../../shared/ListedChart"
import RoleTable from "../../shared/RoleTable"
import PasswordGeneratorModal from "../../shared/PasswordGeneratorModal"
import SuccessOutlinedAlert from '../../shared/SuccessOutlinedAlert';
import ErrorOutlinedAlert from "../../shared/ErrorOutlinedAlert"
import { getWebsiteleft } from "../../../services/websiteDataService"

import {getCode} from "../../../services/PassowrdService"
import {codeRed} from "../../../Redux/PasswordcodeReducer"
import { useDispatch, useSelector } from 'react-redux';
import { webLeftRedFun } from "../../../Redux/WebsiteLeftReducer"
import { getAdmin } from '../../../services/AdminService'
import {AdminRed} from "../../../Redux/AdminReducer"

// import { getImage } from '../../../services/GenerationService'
const Home = () => {
  let dispatch = useDispatch()
  let state = useSelector(state=> state.copyAlertReducer)
  let state2 = useSelector(state => state.WebsiteLeftReducer)
  let state3 = useSelector(state => state.AdminReducer)
  let getAdminFun = async () => {
    let admin_token = localStorage.getItem("admin_token");
    let result = await getAdmin(admin_token)
    dispatch(AdminRed(result.data[0]))
  }
useEffect(()=> {
  if(state3.length == 0) {
    getAdminFun()
  }
}, [])
  let getWebsiteLeftFun = async () => {
    let result = await getWebsiteleft()
    dispatch(webLeftRedFun(result.data))
  }
  useEffect(() => {
    getWebsiteLeftFun()
  }, [])

  let createPass = async () => {
    let admin_token = localStorage.getItem("admin_token")
    let result = await getCode(admin_token)
    dispatch(codeRed(result.data))
  }


//   let generateimage = async () => {
// let result = await getImage("hiii")
// console.log(result.data)
//   }
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
              
              <div className="row">
                <WebsiteCard trend="up" svg={`              <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-stack-3 cc BTC text-white fs-7" title="left" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                    <path d="M12 2l-8 4l8 4l8 -4l-8 -4"></path>
                                    <path d="M4 10l8 4l8 -4"></path>
                                    <path d="M4 18l8 4l8 -4"></path>
                                    <path d="M4 14l8 4l8 -4"></path>
                                </svg>`} classVal="primary" title="Website left" ratio="+ 2.30%" noOfWebsite={state2?.web_left?.length} value="$1,015.00" />
                <WebsiteCard trend="up" svg={`<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-thumb-up-filled text-white fs-7" title="done" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M13 3a3 3 0 0 1 2.995 2.824l.005 .176v4h2a3 3 0 0 1 2.98 2.65l.015 .174l.005 .176l-.02 .196l-1.006 5.032c-.381 1.626 -1.502 2.796 -2.81 2.78l-.164 -.008h-8a1 1 0 0 1 -.993 -.883l-.007 -.117l.001 -9.536a1 1 0 0 1 .5 -.865a2.998 2.998 0 0 0 1.492 -2.397l.007 -.202v-1a3 3 0 0 1 3 -3z" stroke-width="0" fill="currentColor"></path>
                  <path d="M5 10a1 1 0 0 1 .993 .883l.007 .117v9a1 1 0 0 1 -.883 .993l-.117 .007h-1a2 2 0 0 1 -1.995 -1.85l-.005 -.15v-7a2 2 0 0 1 1.85 -1.995l.15 -.005h1z" stroke-width="0" fill="currentColor"></path>
                </svg> `} classVal="success" title="Website done" ratio="- 3.20%" noOfWebsite="15" value="$2,110.00" />
                <WebsiteCard trend="up" svg={`<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-palette text-white fs-7" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
   <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
   <path d="M12 21a9 9 0 0 1 0 -18c4.97 0 9 3.582 9 8c0 1.06 -.474 2.078 -1.318 2.828c-.844 .75 -1.989 1.172 -3.182 1.172h-2.5a2 2 0 0 0 -1 3.75a1.3 1.3 0 0 1 -1 2.25"></path>
   <path d="M8.5 10.5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
   <path d="M12.5 7.5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
   <path d="M16.5 10.5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
</svg>`} classVal="warning" title="Latest design" ratio="+ 2.10%" noOfWebsite="1" value="$1,015.00" />
                <WebsiteCard trend="down" svg={`<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-hand-stop text-white fs-7" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
   <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
   <path d="M8 13v-7.5a1.5 1.5 0 0 1 3 0v6.5"></path>
   <path d="M11 5.5v-2a1.5 1.5 0 1 1 3 0v8.5"></path>
   <path d="M14 5.5a1.5 1.5 0 0 1 3 0v6.5"></path>
   <path d="M17 7.5a1.5 1.5 0 0 1 3 0v8.5a6 6 0 0 1 -6 6h-2h.208a6 6 0 0 1 -5.012 -2.7a69.74 69.74 0 0 1 -.196 -.3c-.312 -.479 -1.407 -2.388 -3.286 -5.728a1.5 1.5 0 0 1 .536 -2.022a1.867 1.867 0 0 1 2.28 .28l1.47 1.47"></path>
</svg>`} classVal="danger" title="Website Failure" ratio="- 37.20%" noOfWebsite="1" value="$20.00" />
              </div>
              <div className='row'>
                <WebsiteName />
                <WebsiteSetting />
              </div>
              <div className='row'>
                <ListedChart />
                <div class="col-md-8">
          <div className="card">
  <div className="card-body text-center">
    <img src="/assets/dist/images/svg/2.svg" alt className="img-fluid mb-4" width={200} />
    <h5 className="fw-semibold fs-5 mb-2">Create your new Delete Password!</h5>
    <p className="mb-3">Get back to shopping and get rewards from it.</p>
    <button className="btn btn-primary" data-bs-target="#password-generator-modal" data-bs-toggle="modal" onClick={createPass}>Create new Password!</button>
  </div>
</div>
</div>
<PasswordGeneratorModal />
              </div>
              <RoleTable />

              {/* <button type="button" className='btn btn-success' onClick={generateimage}>generate</button> */}
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

export default Home
