import React from 'react'
import Footer from '../../shared/Footer'
import Sidebar from '../../shared/Sidebar'
import Header from '../../shared/Header'
import SettingNav from '../../shared/SettingNav'

const ConnectionsSettings = () => {
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
          <h4 className="py-3 mb-4 text-a-l fw-bold">
            <span className="text-muted fw-light fw-600">Account Settings / </span> Connections
          </h4>
          <div className="row">
            <div className="col-md-12">
              <ul className="nav nav-pills flex-column flex-md-row mb-4">
<SettingNav />
              </ul>
              <div className="row">
                <div className="col-md-6 col-12 mb-md-0 mb-4">
                  <div className="card">
                    <h5 className="card-header pb-1 text-a-l fw-bold">Connected Accounts</h5>
                    <div className="card-body">
                      <p className="mb-4 text-a-l fw-600">Display content from your connected accounts on your site</p>
                      {/* Connections */}
                      <div className="d-flex mb-3">
                        <div className="flex-shrink-0">
                          <img src="../../assets/img/icons/brands/google.png" alt="google" className="me-3" height={30} />
                        </div>
                        <div className="flex-grow-1 row">
                          <div className="col-9 text-a-l">
                            <h6 className="mb-0 fw-600">Google</h6>
                            <small className="text-muted fw-500">Calendar and contacts</small>
                          </div>
                          <div className="col-3 d-flex align-items-center justify-content-end mt-sm-0 mt-2">
                            <div className="form-check form-switch">
                              <input className="form-check-input float-end" type="checkbox" defaultChecked />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="d-flex mb-3">
                        <div className="flex-shrink-0">
                          <img src="../../assets/img/icons/brands/slack.png" alt="slack" className="me-3" height={30} />
                        </div>
                        <div className="flex-grow-1 row">
                          <div className="col-9 text-a-l">
                            <h6 className="mb-0 text-a-l fw-600">Slack</h6>
                            <small className="text-muted fw-500">Communication</small>
                          </div>
                          <div className="col-3 d-flex align-items-center justify-content-end mt-sm-0 mt-2">
                            <div className="form-check form-switch">
                              <input className="form-check-input float-end" type="checkbox" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="d-flex mb-3">
                        <div className="flex-shrink-0">
                          <img src="../../assets/img/icons/brands/github.png" alt="github" className="me-3" height={30} />
                        </div>
                        <div className="flex-grow-1 row">
                          <div className="col-9 text-a-l">
                            <h6 className="mb-0 text-a-l fw-600">Github</h6>
                            <small className="text-muted fw-500">Manage your Git repositories</small>
                          </div>
                          <div className="col-3 d-flex align-items-center justify-content-end mt-sm-0 mt-2">
                            <div className="form-check form-switch">
                              <input className="form-check-input float-end" type="checkbox" defaultChecked />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="d-flex mb-3">
                        <div className="flex-shrink-0">
                          <img src="../../assets/img/icons/brands/mailchimp.png" alt="mailchimp" className="me-3" height={30} />
                        </div>
                        <div className="flex-grow-1 row">
                          <div className="col-9 text-a-l">
                            <h6 className="mb-0 text-a-l fw-600">Mailchimp</h6>
                            <small className="text-muted fw-500">Email marketing service</small>
                          </div>
                          <div className="col-3 d-flex align-items-center justify-content-end mt-sm-0 mt-2">
                            <div className="form-check form-switch">
                              <input className="form-check-input float-end" type="checkbox" defaultChecked />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="d-flex">
                        <div className="flex-shrink-0">
                          <img src="../../assets/img/icons/brands/asana.png" alt="asana" className="me-3" height={30} />
                        </div>
                        <div className="flex-grow-1 row">
                          <div className="col-9 text-a-l">
                            <h6 className="mb-0 text-a-l fw-600">Asana</h6>
                            <small className="text-muted fw-500">Communication</small>
                          </div>
                          <div className="col-3 d-flex align-items-center justify-content-end mt-sm-0 mt-2">
                            <div className="form-check form-switch">
                              <input className="form-check-input float-end" type="checkbox" />
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* /Connections */}
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-12">
                  <div className="card">
                    <h5 className="card-header pb-1">Social Accounts</h5>
                    <div className="card-body">
                      <p>Display content from social accounts on your site</p>
                      {/* Social Accounts */}
                      <div className="d-flex mb-3">
                        <div className="flex-shrink-0">
                          <img src="../../assets/img/icons/brands/facebook.png" alt="facebook" className="me-3" height={38} />
                        </div>
                        <div className="flex-grow-1 row">
                          <div className="col-7 text-a-l">
                            <h6 className="mb-0 text-a-l fw-600">Facebook</h6>
                            <small className="text-muted text-a-l 5w-600">Not Connected</small>
                          </div>
                          <div className="col-5 text-end mt-sm-0 mt-2">
                            <button className="btn btn-label-secondary btn-icon"><i className="ti ti-link ti-sm" /></button>
                          </div>
                        </div>
                      </div>
                      <div className="d-flex mb-3">
                        <div className="flex-shrink-0">
                          <img src="../../assets/img/icons/brands/twitter.png" alt="twitter" className="me-3" height={38} />
                        </div>
                        <div className="flex-grow-1 row">
                          <div className="col-7 text-a-l">
                            <h6 className="mb-0 text-a-l fw-600">Twitter</h6>
                            <a href="https://twitter.com/pixinvents" className='fw-500' target="_blank">@Pixinvent</a>
                          </div>
                          <div className="col-5 text-end mt-sm-0 mt-2">
                            <button className="btn btn-label-danger btn-icon"><i className="ti ti-trash ti-sm" /></button>
                          </div>
                        </div>
                      </div>
                      <div className="d-flex mb-3">
                        <div className="flex-shrink-0">
                          <img src="../../assets/img/icons/brands/instagram.png" alt="instagram" className="me-3" height={38} />
                        </div>
                        <div className="flex-grow-1 row">
                          <div className="col-7 text-a-l">
                            <h6 className="mb-0 text-a-l fw-600">instagram</h6>
                            <a href="https://www.instagram.com/pixinvents/" className='fw-500' target="_blank">@Pixinvent</a>
                          </div>
                          <div className="col-5 text-end mt-sm-0 mt-2">
                            <button className="btn btn-label-danger btn-icon"><i className="ti ti-trash ti-sm" /></button>
                          </div>
                        </div>
                      </div>
                      <div className="d-flex mb-3">
                        <div className="flex-shrink-0">
                          <img src="../../assets/img/icons/brands/dribbble.png" alt="dribbble" className="me-3" height={38} />
                        </div>
                        <div className="flex-grow-1 row">
                          <div className="col-7 text-a-l">
                            <h6 className="mb-0 text-a-l fw-600">Dribbble</h6>
                            <small className="text-muted fw-500">Not Connected</small>
                          </div>
                          <div className="col-5 text-end mt-sm-0 mt-2">
                            <button className="btn btn-label-secondary btn-icon"><i className="ti ti-link ti-sm" /></button>
                          </div>
                        </div>
                      </div>
                      <div className="d-flex">
                        <div className="flex-shrink-0">
                          <img src="../../assets/img/icons/brands/behance.png" alt="behance" className="me-3" height={38} />
                        </div>
                        <div className="flex-grow-1 row">
                          <div className="col-7 text-a-l text-a-l">
                            <h6 className="mb-0 fw-600">Behance</h6>
                            <small className="text-muted fw-500">Not Connected</small>
                          </div>
                          <div className="col-5 text-end mt-sm-0 mt-2">
                            <button className="btn btn-label-secondary btn-icon"><i className="ti ti-link ti-sm" /></button>
                          </div>
                        </div>
                      </div>
                      {/* /Social Accounts */}
                    </div>
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
{/* / Layout wrapper */}

    </>
  )
}

export default ConnectionsSettings
