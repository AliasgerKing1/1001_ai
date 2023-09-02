import React from 'react'
import Footer from '../../shared/Footer'
import Sidebar from '../../shared/Sidebar'
import Header from '../../shared/Header'
const Pricing = () => {
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
      <div className="content-wrapper">
        {/* Content */}
        <div className="container-xxl flex-grow-1 container-p-y">
          <div className="card">
            {/* Pricing Plans */}
            <div className="pb-sm-5 pb-2 rounded-top">
            <div className="container py-5">
                    <h2 className="text-center mb-2 fw-bold">Pricing Plans</h2>
                    <p className="text-center fw-600"> Get started with us - it's perfect for individuals and teams. Choose a subscription plan that meets your needs. </p>
                    <div className="d-flex align-items-center justify-content-center flex-wrap gap-2 pt-3 mb-4">
                      <label className="switch switch-primary ms-3 ms-sm-0 mt-2">
                        <span className="switch-label fw-600">Monthly</span>
                        <input type="checkbox" className="switch-input price-duration-toggler" defaultChecked />
                        <span className="switch-toggle-slider">
                          <span className="switch-on" />
                          <span className="switch-off" />
                        </span>
                        <span className="switch-label fw-600">Annual</span>
                      </label>
                      <div className="mt-n5 ms-n5 d-none d-sm-block">
                        <i className="ti ti-corner-left-down ti-sm text-muted me-1 scaleX-n1-rtl" />
                        <span className="badge badge-sm bg-label-primary fw-600">Save up to 10%</span>
                      </div>
                    </div>
                    <div className="row mx-0 gy-3">
                      {/* Basic */}
                      <div className="col-xl mb-md-0 mb-4">
                        <div className="card border rounded shadow-none">
                          <div className="card-body">
                            <div className="my-3 pt-2 text-center">
                              <img src="/assets/img/illustrations/page-pricing-basic.png" alt="Basic Image" height={140} />
                            </div>
                            <h3 className="card-title text-center text-capitalize mb-1 fw-bold">Basic</h3>
                            <p className="text-center fw-600">A simple start for everyone</p>
                            <div className="text-center h-px-100 mb-2">
                              <div className="d-flex justify-content-center">
                                <sup className="h6 pricing-currency mt-3 mb-0 me-1 text-primary fw-600">$</sup>
                                <h1 className="display-4 mb-0 text-primary fw-600">0</h1>
                                <sub className="h6 pricing-duration mt-auto mb-2 text-muted fw-normal">/month</sub>
                              </div>
                              <small className="price-yearly price-yearly-toggle text-muted">$ 0 / year</small>
                            </div>
                            <ul className="list-group ps-3 my-4">
                              <li className="mb-2 text-a-l fw-600">100 responses a month</li>
                              <li className="mb-2 text-a-l fw-600">Unlimited forms and surveys</li>
                              <li className="mb-2 text-a-l fw-600">Unlimited fields</li>
                              <li className="mb-2 text-a-l fw-600">Basic form creation tools</li>
                              <li className="mb-0 text-a-l fw-600">Up to 2 subdomains</li>
                            </ul>
                            <button type="button" className="btn btn-label-success d-grid w-100 mt-3 fw-600" data-bs-dismiss="modal">Your Current Plan</button>
                          </div>
                        </div>
                      </div>
                      {/* Pro */}
                      <div className="col-xl mb-md-0 mb-4">
                        <div className="card border-primary border shadow-none">
                          <div className="card-body position-relative">
                            <div className="position-absolute end-0 me-4 top-0 mt-4">
                              <span className="badge bg-label-primary fw-600">Popular</span>
                            </div>
                            <div className="my-3 pt-2 text-center">
                              <img src="/assets/img/illustrations/page-pricing-standard.png" alt="Standard Image" height={140} />
                            </div>
                            <h3 className="card-title text-center text-capitalize mb-1 fw-bold">Pro</h3>
                            <p className="text-center fw-600">For small to medium businesses</p>
                            <div className="text-center h-px-100 mb-2">
                              <div className="d-flex justify-content-center">
                                <sup className="h6 pricing-currency mt-3 mb-0 me-1 text-primary fw-600">$</sup>
                                <h1 className="price-toggle price-yearly display-4 text-primary mb-0 fw-600">7</h1>
                                <h1 className="price-toggle price-monthly display-4 text-primary mb-0 d-none fw-600">9</h1>
                                <sub className="h6 text-muted pricing-duration mt-auto mb-2 fw-normal">/month</sub>
                              </div>
                              <small className="price-yearly price-yearly-toggle text-muted">$ 90 / year</small>
                            </div>
                            <ul className="list-group ps-3 my-4">
                              <li className="mb-2 text-a-l fw-600">Up to 5 users</li>
                              <li className="mb-2 text-a-l fw-600">120+ components</li>
                              <li className="mb-2 text-a-l fw-600">Basic support on Github</li>
                              <li className="mb-2 text-a-l fw-600">Monthly updates</li>
                              <li className="mb-0 text-a-l fw-600">Integrations</li>
                            </ul>
                            <button type="button" className="btn btn-primary d-grid w-100 mt-3 fw-600" data-bs-dismiss="modal">Upgrade</button>
                          </div>
                        </div>
                      </div>
                      {/* Enterprise */}
                      <div className="col-xl">
                        <div className="card border rounded shadow-none">
                          <div className="card-body">
                            <div className="my-3 pt-2 text-center">
                              <img src="/assets/img/illustrations/page-pricing-enterprise.png" alt="Enterprise Image" height={140} />
                            </div>
                            <h3 className="card-title text-center text-capitalize mb-1 fw-bold">Enterprise</h3>
                            <p className="text-center fw-600">Solution for big organizations</p>
                            <div className="text-center h-px-100 mb-2">
                              <div className="d-flex justify-content-center">
                                <sup className="h6 text-primary pricing-currency mt-3 mb-0 me-1 fw-600">$</sup>
                                <h1 className="price-toggle price-yearly display-4 text-primary mb-0 fw-600">16</h1>
                                <h1 className="price-toggle price-monthly display-4 text-primary mb-0 d-none fw-600">19</h1>
                                <sub className="h6 pricing-duration mt-auto mb-2 fw-normal text-muted">/month</sub>
                              </div>
                              <small className="price-yearly price-yearly-toggle text-muted">$ 190 / year</small>
                            </div>
                            <ul className="list-group ps-3 my-4">
                              <li className="mb-2 text-a-l fw-600">Up to 10 users</li>
                              <li className="mb-2 text-a-l fw-600">150+ components</li>
                              <li className="mb-2 text-a-l fw-600">Basic support on Github</li>
                              <li className="mb-2 text-a-l fw-600">Monthly updates</li>
                              <li className="mb-0 text-a-l fw-600">Speedy build tooling</li>
                            </ul>
                            <button type="button" className="btn btn-label-primary d-grid w-100 mt-3 fw-600" data-bs-dismiss="modal">Upgrade</button>
                          </div>
                        </div>
                    </div>
                  </div>
            </div>
            </div>
            {/*/ Pricing Plans */}
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
{/* / Layout wrapper */}


    </>
  )
}

export default Pricing
