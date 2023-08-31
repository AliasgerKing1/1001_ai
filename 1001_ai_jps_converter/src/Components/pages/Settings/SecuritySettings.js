import React from 'react'
import Footer from '../../shared/Footer'
import Sidebar from '../../shared/Sidebar'
import Header from '../../shared/Header'
import SettingNav from '../../shared/SettingNav'
import {apiKeyList} from '../../../json/bin'

const SecuritySettings = () => {
  return (
    <>
{/* Layout wrapper */}
<div className="layout-wrapper layout-content-navbar">
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
            <span className="text-muted fw-light fw-600">Account Settings /</span> Security
          </h4>
          <div className="row">
            <div className="col-md-12">
<SettingNav />
              {/* Change Password */}
              <div className="card mb-4">
                <h5 className="card-header text-a-l fw-bold">Change Password</h5>
                <div className="card-body">
                  <form id="formAccountSettings">
                    <div className="row">
                      <div className="mb-3 col-md-6 form-password-toggle">
                        <label className="form-label fl fw-600" htmlFor="currentPassword">Current Password</label>
                        <div className="input-group input-group-merge">
                          <input className="form-control" type="password" name="currentPassword" id="currentPassword" placeholder="············" />
                          <span className="input-group-text cursor-pointer"><i className="ti ti-eye-off" /></span>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="mb-3 col-md-6 form-password-toggle">
                        <label className="form-label fl fw-600" htmlFor="newPassword">New Password</label>
                        <div className="input-group input-group-merge">
                          <input className="form-control" type="password" id="newPassword" name="newPassword" placeholder="············" />
                          <span className="input-group-text cursor-pointer"><i className="ti ti-eye-off" /></span>
                        </div>
                      </div>
                      <div className="mb-3 col-md-6 form-password-toggle">
                        <label className="form-label fl fw-600" htmlFor="confirmPassword">Confirm New Password</label>
                        <div className="input-group input-group-merge">
                          <input className="form-control" type="password" name="confirmPassword" id="confirmPassword" placeholder="············" />
                          <span className="input-group-text cursor-pointer"><i className="ti ti-eye-off" /></span>
                        </div>
                      </div>
                      <div className="col-12 mb-4">
                        <h6 className=' text-a-l fw-600'>Password Requirements:</h6>
                        <ul className="ps-3 mb-0">
                          <li className="mb-1 text-a-l fw-500">Minimum 8 characters long - the more, the better</li>
                          <li className="mb-1 text-a-l fw-500">At least one lowercase character</li>
                          <li className=' text-a-l fw-500'>At least one number, symbol, or whitespace character</li>
                        </ul>
                      </div>
                      <div>
                        <button type="submit" className="btn btn-primary me-2 fl fw-600">Save changes</button>
                        <button type="reset" className="btn btn-label-secondary fl fw-600">Cancel</button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              {/*/ Change Password */}
              {/* Two-steps verification */}
              <div className="card mb-4">
                <h5 className="card-header text-a-l fw-bold">Two-steps verification</h5>
                <div className="card-body">
                  <h5 className="mb-3 text-a-l fw-600">Two factor authentication is not enabled yet.</h5>
                  <p className="w-75 text-a-l fw-500">Two-factor authentication adds an additional layer of security to your account by requiring more than just a password to log in.
                    <a href="javascript:void(0);">Learn more.</a>
                  </p>
                  <button className="btn btn-primary mt-2 fl fw-600" data-bs-toggle="modal" data-bs-target="#enableOTP">Enable two-factor authentication</button>
                </div>
              </div>
              {/* Modal */}
              {/* Enable OTP Modal */}
              <div className="modal fade" id="enableOTP" tabIndex={-1} aria-hidden="true">
                <div className="modal-dialog modal-simple modal-enable-otp modal-dialog-centered">
                  <div className="modal-content p-3 p-md-5">
                    <div className="modal-body">
                      <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                      <div className="text-center mb-4">
                        <h3 className="mb-2 fw-600">Enable One Time Password</h3>
                        <p className='fw-500'>Verify Your Mobile Number for SMS</p>
                      </div>
                      <p className='text-a-l fw-500'>Enter your mobile phone number with country code and we will send you a verification code.</p>
                      <form id="enableOTPForm" className="row g-3" onsubmit="return false">
                        <div className="col-12">
                          <label className="form-label fl fw-500" htmlFor="modalEnableOTPPhone">Phone Number</label>
                          <div className="input-group">
                            <span className="input-group-text fw-600">IND (+91)</span>
                            <input type="text" id="modalEnableOTPPhone" name="modalEnableOTPPhone" className="form-control phone-number-otp-mask" placeholder="653 745 0111" />
                          </div>
                        </div>
                        <div className="col-12">
                          <button type="submit" className="btn btn-primary me-sm-3 me-1 fw-600">Submit</button>
                          <button type="button" className="btn btn-label-secondary fw-600" data-bs-dismiss="modal" aria-label="Close">Cancel</button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              {/*/ Enable OTP Modal */}
              {/* /Modal */}
              {/*/ Two-steps verification */}
              {/* Create an API key */}
              <div className="card mb-4">
                <h5 className="card-header text-a-l fw-bold">Create an API key</h5>
                <div className="row">
                  <div className="col-md-5 order-md-0 order-1">
                    <div className="card-body">
                      <form id="formAccountSettingsApiKey" method="POST" onsubmit="return false">
                        <div className="row">
                          <div className="mb-3 col-12">
                            <label htmlFor="apiAccess" className="form-label fl fw-600">Choose the Api key type you want to create</label>
                            <select id="apiAccess" className="select2 form-select fw-600">
                              <option value>Choose Key Type</option>
                              <option value="full">Full Control</option>
                              <option value="modify">Modify</option>
                              <option value="read-execute">Read &amp; Execute</option>
                              <option value="folders">List Folder Contents</option>
                              <option value="read">Read Only</option>
                              <option value="read-write">Read &amp; Write</option>
                            </select>
                          </div>
                          <div className="mb-3 col-12">
                            <label htmlFor="apiKey" className="form-label fl fw-600">Name the API key</label>
                            <input type="text" className="form-control fw-600" id="apiKey" name="apiKey" placeholder="Server Key 1" />
                          </div>
                          <div className="col-12">
                            <button type="submit" className="btn btn-primary me-2 d-grid w-100 fw-600">Create Key</button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="col-md-7 order-md-1 order-0">
                    <div className="text-center mt-4 mx-3 mx-md-0">
                      <img src="../../assets/img/illustrations/girl-with-laptop.png" className="img-fluid" alt="Api Key Image" width={202} />
                    </div>
                  </div>
                </div>
              </div>
              {/*/ Create an API key */}
              {/* API Key List & Access */}
              <div className="card mb-4">
                <h5 className="card-header text-a-l fw-bold">API Key List &amp; Access</h5>
                <div className="card-body">
                  <p className='text-a-l fw-600'>An API key is a simple encrypted string that identifies an application without any principal. They are useful for accessing public data anonymously, and are used to associate API requests with your project for quota and billing.</p>
                  <div className="row">
                <div className="col-md-12">
                {apiKeyList?.map((keyDetails, index) => (
  <div className="bg-lighter rounded p-3 mb-3 position-relative">
  <div className="dropdown api-key-actions">
    <a className="btn dropdown-toggle text-muted hide-arrow p-0 fr" data-bs-toggle="dropdown"><i className="ti ti-dots-vertical ti-sm" /></a>
    <div className="dropdown-menu dropdown-menu-end">
      <a href="javascript:;" className="dropdown-item fw-600"><i className="ti ti-pencil me-2" />Edit</a>
      <a href="javascript:;" className="dropdown-item fw-600"><i className="ti ti-trash me-2" />Delete</a>
    </div>
  </div>
  <div className="d-flex align-items-center mb-3">
    <h4 className="mb-0 me-3 fw-600">{keyDetails && keyDetails?.keyName}</h4>
    <span className="badge bg-label-primary fw-600">{keyDetails && keyDetails?.keyType}</span>
  </div>
  <div className="d-flex align-items-center mb-3">
    <p className="me-2 mb-0 fw-medium fw-600">{keyDetails && keyDetails?.key}</p>
    <span className="text-muted cursor-pointer"><i className="ti ti-copy ti-sm" /></span>
  </div>
  <div className="d-flex align-items-center">
  <span className="text-muted fw-500">Created on {keyDetails && keyDetails?.createdOnDate}</span>
</div>
</div>
))}

  {/* <div className="bg-lighter rounded p-3 position-relative mb-3">
    <div className="dropdown api-key-actions">
      <a className="btn dropdown-toggle text-muted hide-arrow p-0 fr" data-bs-toggle="dropdown"><i className="ti ti-dots-vertical ti-sm" /></a>
      <div className="dropdown-menu dropdown-menu-end">
        <a href="javascript:;" className="dropdown-item fw-600"><i className="ti ti-pencil me-2" />Edit</a>
        <a href="javascript:;" className="dropdown-item fw-600"><i className="ti ti-trash me-2" />Delete</a>
      </div>
    </div>
    <div className="d-flex align-items-center mb-3">
      <h4 className="mb-0 me-3 fw-600">Server Key 2</h4>
      <span className="badge bg-label-primary fw-600">Read Only</span>
    </div>
    <div className="d-flex align-items-center mb-3">
      <p className="me-2 mb-0 fw-medium fw-600">bb98e571-a2e2-4de8-90a9-2e231b5e99</p>
      <span className="text-muted cursor-pointer"><i className="ti ti-copy ti-sm" /></span>
    </div>
    <div className="d-flex align-items-center">
    <span className="text-muted fw-500">Created on 12 Feb 2021, 10:30 GTM+2:30</span>
  </div>
  </div>
  <div className="bg-lighter rounded p-3 position-relative">
    <div className="dropdown api-key-actions">
      <a className="btn dropdown-toggle text-muted hide-arrow p-0 fr" data-bs-toggle="dropdown"><i className="ti ti-dots-vertical ti-sm" /></a>
      <div className="dropdown-menu dropdown-menu-end">
        <a href="javascript:;" className="dropdown-item fw-600"><i className="ti ti-pencil me-2" />Edit</a>
        <a href="javascript:;" className="dropdown-item fw-600"><i className="ti ti-trash me-2" />Delete</a>
      </div>
    </div>
    <div className="d-flex align-items-center mb-3">
      <h4 className="mb-0 me-3 fw-600">Server Key 3</h4>
      <span className="badge bg-label-primary fw-600">Full Access</span>
    </div>
    <div className="d-flex align-items-center mb-3">
      <p className="me-2 mb-0 fw-medium fw-600">2e915e59-3105-47f2-8838-6e46bf83b711</p>
      <span className="text-muted cursor-pointer"><i className="ti ti-copy ti-sm" /></span>
    </div>
    <div className="d-flex align-items-center">
    <span className="text-muted fw-500">Created on 28 Dec 2020, 12:21 GTM+4:10</span>
  </div>
  </div> */}
</div>

                  </div>
                </div>
              </div>
              {/*/ API Key List & Access */}
              {/* Recent Devices */}
              <div className="card mb-4">
                <h5 className="card-header text-a-l fw-bold">Recent Devices</h5>
                <div className="table-responsive">
                  <table className="table border-top">
                    <thead className="table-light">
                      <tr>
                        <th className="text-truncate text-a-l fw-600">Browser</th>
                        <th className="text-truncate text-a-l fw-600">Device</th>
                        <th className="text-truncate text-a-l fw-600">Location</th>
                        <th className="text-truncate text-a-l fw-600">Recent Activities</th>
                      </tr>
                    </thead>
                    <tbody className="table-border-bottom-0">
                      <tr>
                        <td className="text-truncate text-a-l fw-600"><i className="ti ti-brand-windows text-info me-2 ti-sm" /> <span className="fw-medium fw-600">Chrome on Windows</span></td>
                        <td className="text-truncate text-a-l fw-600">HP Spectre 360</td>
                        <td className="text-truncate text-a-l fw-600">Switzerland</td>
                        <td className="text-truncate text-a-l fw-600">10, July 2021 20:07</td>
                      </tr>
                      <tr>
                        <td className="text-truncate text-a-l fw-600"><i className="ti ti-device-mobile text-danger me-2 ti-sm" /> <span className="fw-medium fw-600">Chrome on iPhone</span></td>
                        <td className="text-truncate text-a-l fw-600">iPhone 12x</td>
                        <td className="text-truncate text-a-l fw-600">Australia</td>
                        <td className="text-truncate text-a-l fw-600">13, July 2021 10:10</td>
                      </tr>
                      <tr>
                        <td className="text-truncate text-a-l fw-600"><i className="ti ti-brand-android text-success me-2 ti-sm" /> <span className="fw-medium fw-600">Chrome on Android</span></td>
                        <td className="text-truncate text-a-l fw-600">Oneplus 9 Pro</td>
                        <td className="text-truncate text-a-l fw-600">Dubai</td>
                        <td className="text-truncate text-a-l fw-600">14, July 2021 15:15</td>
                      </tr>
                      <tr>
                        <td className="text-truncate text-a-l fw-600"><i className="ti ti-brand-apple me-2 ti-sm" /> <span className="fw-medium fw-600">Chrome on MacOS</span></td>
                        <td className="text-truncate text-a-l fw-600">Apple iMac</td>
                        <td className="text-truncate text-a-l fw-600">India</td>
                        <td className="text-truncate text-a-l fw-600">16, July 2021 16:17</td>
                      </tr>
                      <tr>
                        <td className="text-truncate text-a-l fw-600"><i className="ti ti-brand-windows text-info me-2 ti-sm" /> <span className="fw-medium fw-600">Chrome on Windows</span></td>
                        <td className="text-truncate text-a-l fw-600">HP Spectre 360</td>
                        <td className="text-truncate text-a-l fw-600">Switzerland</td>
                        <td className="text-truncate text-a-l fw-600">20, July 2021 21:01</td>
                      </tr>
                      <tr>
                        <td className="text-truncate text-a-l fw-600"><i className="ti ti-brand-android text-success me-2 ti-sm" /> <span className="fw-medium fw-600">Chrome on Android</span></td>
                        <td className="text-truncate text-a-l fw-600">Oneplus 9 Pro</td>
                        <td className="text-truncate text-a-l fw-600">Dubai</td>
                        <td className="text-truncate text-a-l fw-600">21, July 2021 12:22</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              {/*/ Recent Devices */}
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

export default SecuritySettings
