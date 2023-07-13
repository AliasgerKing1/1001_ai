import React from 'react'
import Sidebar from '../../shared/Sidebar'
import Header from '../../shared/Header'

import ShoppingCart from "../../shared/ShoppingCart"
import MobileNavbar from "../../shared/MobileNavbar"
import Searchbar from "../../shared/Searchbar"
import BreadBanner from "../../shared/BreadBanner"

import AddMemberComp from "../../shared/AddMemberComp"
const AddMember = () => {
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
<BreadBanner title="Add Member" />
            {/* Multiple table control element */}
<AddMemberComp />
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

export default AddMember