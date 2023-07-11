import React, { useEffect } from 'react'
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
import {getCode} from "../../../services/PassowrdService"
import {codeRed} from "../../../Redux/PasswordcodeReducer"
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
// import { getImage } from '../../../services/GenerationService'
const Home = () => {
  let dispatch = useDispatch()
  let state = useSelector(state=> state.copyAlertReducer)
  let createPass = async () => {
    let result = await getCode()
    // console.log(result.data)
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
                <WebsiteCard trend="up" svg="" classVal="primary" title="Website left" ratio="+ 2.30%" noOfWebsite="5" value="$1,015.00" />
                <WebsiteCard trend="up" svg="" classVal="success" title="Website done" ratio="- 3.20%" noOfWebsite="15" value="$2,110.00" />
                <WebsiteCard trend="up" svg="" classVal="warning" title="Latest design" ratio="+ 2.10%" noOfWebsite="1" value="$1,015.00" />
                <WebsiteCard trend="down" svg="" classVal="danger" title="Website Failure" ratio="- 37.20%" noOfWebsite="1" value="$20.00" />
                {/* <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-thumb-up-filled text-white fs-7" title="done" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M13 3a3 3 0 0 1 2.995 2.824l.005 .176v4h2a3 3 0 0 1 2.98 2.65l.015 .174l.005 .176l-.02 .196l-1.006 5.032c-.381 1.626 -1.502 2.796 -2.81 2.78l-.164 -.008h-8a1 1 0 0 1 -.993 -.883l-.007 -.117l.001 -9.536a1 1 0 0 1 .5 -.865a2.998 2.998 0 0 0 1.492 -2.397l.007 -.202v-1a3 3 0 0 1 3 -3z" stroke-width="0" fill="currentColor"></path>
                  <path d="M5 10a1 1 0 0 1 .993 .883l.007 .117v9a1 1 0 0 1 -.883 .993l-.117 .007h-1a2 2 0 0 1 -1.995 -1.85l-.005 -.15v-7a2 2 0 0 1 1.85 -1.995l.15 -.005h1z" stroke-width="0" fill="currentColor"></path>
                </svg> */}
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
