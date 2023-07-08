import React from 'react'

const Error404 = () => {
  return (
    <>
      <div data-theme="dark">
        {/* <!-- Preloader -->
    <div class="preloader">
      <img src="../../dist/images/logos/favicon.png" alt="loader" class="lds-ripple img-fluid" />
    </div> */}
        {/* <!-- Body Wrapper --> */}
        <div class="page-wrapper" id="main-wrapper" data-layout="vertical" data-navbarbg="skin6" data-sidebartype="full" data-sidebar-position="fixed" data-header-position="fixed">
          <div class="position-relative overflow-hidden min-vh-100 d-flex align-items-center justify-content-center">
            <div class="d-flex align-items-center justify-content-center w-100">
              <div class="row justify-content-center w-100">
                <div class="col-lg-4">
                  <div class="text-center">
                    <img src="https://demos.adminmart.com/premium/bootstrap/modernize-bootstrap/package/dist/images/backgrounds/errorimg.svg" alt="" class="img-fluid" />
                    <h1 class="fw-semibold mb-7 fs-9">Opps!!!</h1>
                    <h4 class="fw-semibold mb-7">This page you are looking for could not be found.</h4>
                    <a class="btn btn-primary" href="/auth/home" role="button">Go Back to Home</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}

export default Error404
