import React from 'react'
import Sidebar from '../Shared/Sidebar'
import Header from '../Shared/Header'

const Calender = () => {
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
{/* https://jps-converter-calender.vercel.app/ */}
<iframe src=" https://jps-converter-calender.vercel.app/" frameborder="0" style={{
      position: 'absolute',
      top: '0',
      left: '0',
      width: '100%',
      height: '100%',
      border: 'none',
   }}></iframe>
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

export default Calender
