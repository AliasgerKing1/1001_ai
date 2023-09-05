import React from 'react'
import Header from '../../shared/Header'
import Footer from '../../shared/Footer'
import Sidebar from '../../shared/Sidebar'
const Home = () => {
  return (
    <>
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
      <div className="content-wrapper">
        {/* Content */}
        <div className="container-xxl flex-grow-1 container-p-y">
          <h3>h.egehg.rjhj.h@gmail.com</h3>
          <div className="row">
   <div className="col-md-6 col-lg-4 mb-3">
  <div className="card h-100">
    <div className="card-body">
      <h5 className="card-title">Doughnut Animation</h5>
      <h6 className="card-subtitle text-muted">#doughnut #pink #animation</h6>
    </div>
    <img className="img-fluid" src="/assets/img/elements/10.jpg" alt="Card image cap" />
    <div class="overlay">
      <div class="overlay-content">
     <button type="button" className="btn btn-lg btn-icon btn-label-linkedin waves-effect"><i className="tf-icons ti-lg ti ti-download" /></button>
     <button type="button" className="btn btn-lg btn-icon btn-label-instagram waves-effect"><i className="tf-icons ti-lg ti ti-folder-plus" /></button>
     <button type="button" className="btn btn-lg btn-icon btn-label-github waves-effect"><i className="tf-icons ti-lg ti ti-edit" /></button>
     <button type="button" className="btn btn-lg btn-icon btn-label-reddit waves-effect"><i className="tf-icons ti-lg ti ti-copy" /></button>
      </div>
    </div>
  </div>
</div>
   <div className="col-md-6 col-lg-4 mb-3">
  <div className="card h-100">
    <div className="card-body">
      <h5 className="card-title">Doughnut Animation</h5>
      <h6 className="card-subtitle text-muted">#doughnut #pink #animation</h6>
    </div>
    <img className="img-fluid" src="/assets/img/elements/2.jpg" alt="Card image cap" />
        <div class="overlay">
      <div class="overlay-content">
      <button type="button" className="btn btn-lg btn-icon btn-label-linkedin waves-effect"><i className="tf-icons ti-lg ti ti-download" /></button>
     <button type="button" className="btn btn-lg btn-icon btn-label-instagram waves-effect"><i className="tf-icons ti-lg ti ti-folder-plus" /></button>
     <button type="button" className="btn btn-lg btn-icon btn-label-github waves-effect"><i className="tf-icons ti-lg ti ti-edit" /></button>
     <button type="button" className="btn btn-lg btn-icon btn-label-reddit waves-effect"><i className="tf-icons ti-lg ti ti-copy" /></button>
      </div>
    </div>
  </div>
</div>
   <div className="col-md-6 col-lg-4 mb-3">
  <div className="card h-100">
    <div className="card-body">
      <h5 className="card-title">Doughnut Animation</h5>
      <h6 className="card-subtitle text-muted">#doughnut #pink #animation</h6>
    </div>
    <img className="img-fluid" src="/assets/img/elements/4.jpg" alt="Card image cap" />
        <div class="overlay">
      <div class="overlay-content">
     <button type="button" className="btn btn-lg btn-icon btn-label-linkedin waves-effect"><i className="tf-icons ti-lg ti ti-download" /></button>
     <button type="button" className="btn btn-lg btn-icon btn-label-instagram waves-effect"><i className="tf-icons ti-lg ti ti-folder-plus" /></button>
     <button type="button" className="btn btn-lg btn-icon btn-label-github waves-effect"><i className="tf-icons ti-lg ti ti-edit" /></button>
     <button type="button" className="btn btn-lg btn-icon btn-label-reddit waves-effect"><i className="tf-icons ti-lg ti ti-copy" /></button>
      </div>
    </div>
  </div>
</div>
   <div className="col-md-6 col-lg-4 mb-3">
  <div className="card h-100">
    <div className="card-body">
      <h5 className="card-title">Doughnut Animation</h5>
      <h6 className="card-subtitle text-muted">#doughnut #pink #animation</h6>
    </div>
    <img className="img-fluid" src="/assets/img/elements/1.jpg" alt="Card image cap" />
        <div class="overlay">
      <div class="overlay-content">
     <button type="button" className="btn btn-lg btn-icon btn-label-linkedin waves-effect"><i className="tf-icons ti-lg ti ti-download" /></button>
     <button type="button" className="btn btn-lg btn-icon btn-label-instagram waves-effect"><i className="tf-icons ti-lg ti ti-folder-plus" /></button>
     <button type="button" className="btn btn-lg btn-icon btn-label-github waves-effect"><i className="tf-icons ti-lg ti ti-edit" /></button>
     <button type="button" className="btn btn-lg btn-icon btn-label-reddit waves-effect"><i className="tf-icons ti-lg ti ti-copy" /></button>
      </div>
    </div>
  </div>
</div>
          </div>
        </div>
        {/* / Content */}
        {/* Footer */}
<Footer />
        {/* / Footer */}
        <div className="content-backdrop fade" />
      </div>
      {/* Content wrapper */}
    </div>
    {/* / Layout page */}
  </div>
  {/* Overlay */}
  <div className="layout-overlay layout-menu-toggle" />
  {/* Drag Target Area To SlideIn Menu On Small Screens */}
  <div className="drag-target" />
</div>
    </>
  )
}

export default Home