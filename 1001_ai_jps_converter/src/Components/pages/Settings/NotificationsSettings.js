import React from 'react'

import Footer from '../../shared/Footer'
import Sidebar from '../../shared/Sidebar'
import Header from '../../shared/Header'
import SettingNav from '../../shared/SettingNav'

import { useSelector } from 'react-redux'

const NotificationsSettings = () => {
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
            <span className="text-muted fw-light fw-600">Account Settings /</span> Notifications
          </h4>
          <div className="row">
            <div className="col-md-12">
              <ul className="nav nav-pills flex-column flex-md-row mb-4">
<SettingNav />
              </ul>
              <div className="card">
                {/* Notifications */}
                <h5 className="card-header pb-1 fw-bold text-a-l">Recent Devices</h5>
                <div className="card-body text-a-l fw-600">
                  <span>We need permission from your browser to show notifications. <span className="notificationRequest"><span className="fw-medium fw-620">Request Permission</span></span></span>
                  <div className="error" />
                </div>
                <div className="table-responsive">
                  <table className="table table-striped border-top">
                    <thead>
                      <tr>
                        <th className="text-nowrap text-a-l fw-620">Type</th>
                        <th className="text-nowrap text-a-l fw-620 text-center">Email</th>
                        <th className="text-nowrap text-a-l fw-620 text-center">Browser</th>
                        <th className="text-nowrap text-a-l fw-620 text-center">App</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="text-nowrap text-a-l fw-600">New for you</td>
                        <td>
                          <div className="form-check d-flex justify-content-center">
                            <input className="form-check-input" type="checkbox" id="defaultCheck1" defaultChecked />
                          </div>
                        </td>
                        <td>
                          <div className="form-check d-flex justify-content-center">
                            <input className="form-check-input" type="checkbox" id="defaultCheck2" defaultChecked />
                          </div>
                        </td>
                        <td>
                          <div className="form-check d-flex justify-content-center">
                            <input className="form-check-input" type="checkbox" id="defaultCheck3" defaultChecked />
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="text-nowrap text-a-l fw-600">Account activity</td>
                        <td>
                          <div className="form-check d-flex justify-content-center">
                            <input className="form-check-input" type="checkbox" id="defaultCheck4" defaultChecked />
                          </div>
                        </td>
                        <td>
                          <div className="form-check d-flex justify-content-center">
                            <input className="form-check-input" type="checkbox" id="defaultCheck5" defaultChecked />
                          </div>
                        </td>
                        <td>
                          <div className="form-check d-flex justify-content-center">
                            <input className="form-check-input" type="checkbox" id="defaultCheck6" defaultChecked />
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="text-nowrap text-a-l fw-600">A new browser used to sign in</td>
                        <td>
                          <div className="form-check d-flex justify-content-center">
                            <input className="form-check-input" type="checkbox" id="defaultCheck7" defaultChecked />
                          </div>
                        </td>
                        <td>
                          <div className="form-check d-flex justify-content-center">
                            <input className="form-check-input" type="checkbox" id="defaultCheck8" defaultChecked />
                          </div>
                        </td>
                        <td>
                          <div className="form-check d-flex justify-content-center">
                            <input className="form-check-input" type="checkbox" id="defaultCheck9" />
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="text-nowrap text-a-l fw-600">A new device is linked</td>
                        <td>
                          <div className="form-check d-flex justify-content-center">
                            <input className="form-check-input" type="checkbox" id="defaultCheck10" defaultChecked />
                          </div>
                        </td>
                        <td>
                          <div className="form-check d-flex justify-content-center">
                            <input className="form-check-input" type="checkbox" id="defaultCheck11" />
                          </div>
                        </td>
                        <td>
                          <div className="form-check d-flex justify-content-center">
                            <input className="form-check-input" type="checkbox" id="defaultCheck12" />
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="card-body">
                  <h6 className='text-a-l fw-600'>When should we send you notifications?</h6>
                  <form action="javascript:void(0);">
                    <div className="row">
                      <div className="col-sm-6">
                        <select id="sendNotification" className="form-select fw-600" name="sendNotification">
                          <option selected>Only when I'm online</option>
                          <option>Anytime</option>
                        </select>
                      </div>
                      <div className="mt-3">
                        <button type="submit" className="btn btn-primary me-2 fl fw-600">Save changes</button>
                        <button type="button" className="btn btn-label-secondary fl fw-600">Discard</button>
                      </div>
                    </div>
                  </form>
                </div>
                {/* /Notifications */}
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

export default NotificationsSettings
