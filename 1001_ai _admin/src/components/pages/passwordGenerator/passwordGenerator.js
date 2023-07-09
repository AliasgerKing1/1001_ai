import React from 'react'
const passwordGenerator = () => {
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
            {/* password-generator-modal */}
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default passwordGenerator
