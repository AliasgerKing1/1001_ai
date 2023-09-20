/* eslint-disable */
import React from 'react'
import Header from '../../Shared/Header'
import Sidebar from '../../Shared/Sidebar'
const Home = () => {
  return (
    <>
 {/* Layout wrapper */}
<div className="layout-wrapper layout-content-navbar ">
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

export default Home
