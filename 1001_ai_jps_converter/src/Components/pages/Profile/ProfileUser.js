import React from 'react'
import Footer from '../../shared/Footer'
import Sidebar from '../../shared/Sidebar'
import Header from '../../shared/Header'
import ProfileNav from '../../shared/ProfileNav'
const ProfileUser = () => {
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
          <h4 className="py-3 mb-4 text-a-l  fw-bold">
            <span className="text-muted fw-light fw-600">User Profile /</span> Profile
          </h4>
          {/* Header */}
          <div className="row">
            <div className="col-12">
              <div className="card mb-4">
    <div className="user-profile-header-banner">
  <img src="/assets/img/pages/profile-banner.png" alt="Banner image" className="rounded-top" />
</div>

                <div className="user-profile-header d-flex flex-column flex-sm-row text-sm-start text-center mb-4">
                  <div className="flex-shrink-0 mt-n2 mx-sm-0 mx-auto">
                    <img src="/assets/img/avatars/14.png" alt="user image" className="d-block h-auto ms-0 ms-sm-4 rounded user-profile-img" />
                  </div>
                  <div className="flex-grow-1 mt-3 mt-sm-5">
                    <div className="d-flex align-items-md-end align-items-sm-start align-items-center justify-content-md-between justify-content-start mx-4 flex-md-row flex-column gap-4">
                      <div className="user-profile-info">
                        <h4 className='fw-bold'>John Doe</h4>
                        <ul className="list-inline mb-0 d-flex align-items-center flex-wrap justify-content-sm-start justify-content-center gap-2">
                          <li className="list-inline-item d-flex gap-1 fw-600">
                            <i className="ti ti-color-swatch fw-600" /> UX Designer
                          </li>
                          <li className="list-inline-item d-flex gap-1 fw-600">
                            <i className="ti ti-map-pin fw-600" /> Vatican City
                          </li>
                          <li className="list-inline-item d-flex gap-1 fw-600">
                            <i className="ti ti-calendar fw-600" /> Joined April 2021
                          </li>
                        </ul>
                      </div>
                      <a href="javascript:void(0)" className="btn btn-primary fw-600">
                        <i className="ti ti-check me-1" />Connected
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*/ Header */}
          {/* Navbar pills */}
          <div className="row">
            <div className="col-md-12">
              <ul className="nav nav-pills flex-column flex-sm-row mb-4">
<ProfileNav />
              </ul>
            </div>
          </div>
          {/*/ Navbar pills */}
          {/* User Profile Content */}
          <div className="row">
            <div className="col-xl-4 col-lg-5 col-md-5">
              {/* About User */}
              <div className="card mb-4">
                <div className="card-body text-a-l">
                  <small className="card-text text-uppercase fw-600">About</small>
                  <ul className="list-unstyled mb-4 mt-3">
                    <li className="d-flex align-items-center mb-3"><i className="ti ti-user text-heading" /><span className="fw-medium mx-2 text-heading fw-600">Full Name:</span> <span className='fw-600'>John Doe</span></li>
                    <li className="d-flex align-items-center mb-3"><i className="ti ti-check text-heading" /><span className="fw-medium mx-2 text-heading fw-600">Status:</span> <span className='fw-600'>Active</span></li>
                    <li className="d-flex align-items-center mb-3"><i className="ti ti-crown text-heading" /><span className="fw-medium mx-2 text-heading fw-600">Role:</span> <span className='fw-600'>Developer</span></li>
                    <li className="d-flex align-items-center mb-3"><i className="ti ti-flag text-heading" /><span className="fw-medium mx-2 text-heading fw-600">Country:</span> <span className='fw-600'>USA</span></li>
                    <li className="d-flex align-items-center mb-3"><i className="ti ti-file-description text-heading" /><span className="fw-medium mx-2 text-heading fw-600">Languages:</span> <span className='fw-600'>English</span></li>
                  </ul>
                  <small className="card-text text-uppercase fw-600">Contacts</small>
                  <ul className="list-unstyled mb-4 mt-3">
                    <li className="d-flex align-items-center mb-3"><i className="ti ti-phone-call" /><span className="fw-medium mx-2 text-heading fw-600">Contact:</span> <span className='fw-600'>(123) 456-7890</span></li>
                    <li className="d-flex align-items-center mb-3"><i className="ti ti-brand-skype" /><span className="fw-medium mx-2 text-heading fw-600">Skype:</span> <span className='fw-600'>john.doe</span></li>
                    <li className="d-flex align-items-center mb-3"><i className="ti ti-mail" /><span className="fw-medium mx-2 text-heading fw-600">Email:</span> <span className='fw-600'>john.doe@example.com</span></li>
                  </ul>
                  <small className="card-text text-uppercase fw-600">Teams</small>
                  <ul className="list-unstyled mb-0 mt-3">
                    <li className="d-flex align-items-center mb-3"><i className="ti ti-brand-angular text-danger me-2" />
                      <div className="d-flex flex-wrap"><span className="fw-medium me-2 text-heading fw-600">Backend Developer</span><span className='fw-600'>(126 Members)</span></div>
                    </li>
                    <li className="d-flex align-items-center"><i className="ti ti-brand-react-native text-info me-2" />
                      <div className="d-flex flex-wrap"><span className="fw-medium me-2 text-heading fw-600">React Developer</span><span className='fw-600'>(98 Members)</span></div>
                    </li>
                  </ul>
                </div>
              </div>
              {/*/ About User */}
              {/* Profile Overview */}
              <div className="card mb-4">
                <div className="card-body">
                  <p className="card-text text-uppercase text-a-l fw-600">Overview</p>
                  <ul className="list-unstyled mb-0">
                    <li className="d-flex align-items-center mb-3"><i className="ti ti-check" /><span className="fw-medium mx-2 fw-600">Task Compiled:</span> <span className='fw-600'>13.5k</span></li>
                    <li className="d-flex align-items-center mb-3"><i className="ti ti-layout-grid" /><span className="fw-medium mx-2 fw-600">Projects Compiled:</span> <span className='fw-600'>146</span></li>
                    <li className="d-flex align-items-center"><i className="ti ti-users" /><span className="fw-medium mx-2 fw-600">Connections:</span> <span className='fw-600'>897</span></li>
                  </ul>
                </div>
              </div>
              {/*/ Profile Overview */}
            </div>
            <div className="col-xl-8 col-lg-7 col-md-7">
              {/* Activity Timeline */}
              <div className="card card-action mb-4">
                <div className="card-header align-items-center">
                  <h5 className="card-action-title mb-0 fw-bold text-a-l">Activity Timeline</h5>
                  <div className="card-action-element">
                    <div className="dropdown">
                      <button type="button" className="btn dropdown-toggle hide-arrow p-0" data-bs-toggle="dropdown" aria-expanded="false"><i className="ti ti-dots-vertical text-muted" /></button>
                      <ul className="dropdown-menu dropdown-menu-end">
                        <li><a className="dropdown-item fw-600" href="javascript:void(0);">Share timeline</a></li>
                        <li><a className="dropdown-item fw-600" href="javascript:void(0);">Suggest edits</a></li>
                        <li>
                          <hr className="dropdown-divider" />
                        </li>
                        <li><a className="dropdown-item fw-600" href="javascript:void(0);">Report bug</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="card-body pb-0">
                  <ul className="timeline ms-1 mb-0">
                    <li className="timeline-item timeline-item-transparent">
                      <span className="timeline-point timeline-point-primary" />
                      <div className="timeline-event">
                        <div className="timeline-header">
                          <h6 className="mb-0 fw-600">Client Meeting</h6>
                          <small className="text-muted fw-500">Today</small>
                        </div>
                        <p className="mb-2 text-a-l fw-500">Project meeting with john @10:15am</p>
                        <div className="d-flex flex-wrap">
                          <div className="avatar me-2">
                            <img src="/assets/img/avatars/3.png" alt="Avatar" className="rounded-circle" />
                          </div>
                          <div className="ms-1">
                            <h6 className="mb-0 fw-600">Lester McCarthy (Client)</h6>
                            <span className='fw-500'>CEO of Infibeam</span>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="timeline-item timeline-item-transparent">
                      <span className="timeline-point timeline-point-success" />
                      <div className="timeline-event">
                        <div className="timeline-header">
                          <h6 className="mb-0 fw-600">Create a new project for client</h6>
                          <small className="text-muted fw-500">2 Day Ago</small>
                        </div>
                        <p className="mb-0 text-a-l fw-500">Add files to new design folder</p>
                      </div>
                    </li>
                    <li className="timeline-item timeline-item-transparent">
                      <span className="timeline-point timeline-point-danger" />
                      <div className="timeline-event">
                        <div className="timeline-header">
                          <h6 className="mb-0 fw-600">Shared 2 New Project Files</h6>
                          <small className="text-muted fw-500">6 Day Ago</small>
                        </div>
                        <p className="mb-2 text-a-l fw-500">Sent by Mollie Dixon <img src="/assets/img/avatars/4.png" className="rounded-circle me-3" alt="avatar" height={24} width={24} /></p>
                        <div className="d-flex flex-wrap gap-2 pt-1">
                          <a href="javascript:void(0)" className="me-3 fw-500">
                            <img src="/assets/img/icons/misc/doc.png" alt="Document image" width={15} className="me-2" />
                            <span className="fw-medium text-heading fw-500">App Guidelines</span>
                          </a>
                          <a href="javascript:void(0)"className='fw-500'>
                            <img src="/assets/img/icons/misc/xls.png" alt="Excel image" width={15} className="me-2" />
                            <span className="fw-medium text-heading fw-500">Testing Results</span>
                          </a>
                        </div>
                      </div>
                    </li>
                    <li className="timeline-item timeline-item-transparent border-transparent">
                      <span className="timeline-point timeline-point-info" />
                      <div className="timeline-event">
                        <div className="timeline-header">
                          <h6 className="mb-0 fw-600">Project status updated</h6>
                          <small className="text-muted fw-500">10 Day Ago</small>
                        </div>
                        <p className="mb-0 text-a-l fw-500">Woocommerce iOS App Completed</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              {/*/ Activity Timeline */}
              <div className="row">
                {/* Connections */}
                <div className="col-lg-12 col-xl-6">
                  <div className="card card-action mb-4">
                    <div className="card-header align-items-center">
                      <h5 className="card-action-title mb-0 text-a-l fw-bold">Connections</h5>
                      <div className="card-action-element">
                        <div className="dropdown">
                          <button type="button" className="btn dropdown-toggle hide-arrow p-0" data-bs-toggle="dropdown" aria-expanded="false"><i className="ti ti-dots-vertical text-muted" /></button>
                          <ul className="dropdown-menu dropdown-menu-end">
                            <li><a className="dropdown-item fw-600" href="javascript:void(0);">Share connections</a></li>
                            <li><a className="dropdown-item fw-600" href="javascript:void(0);">Suggest edits</a></li>
                            <li>
                              <hr className="dropdown-divider" />
                            </li>
                            <li><a className="dropdown-item fw-600" href="javascript:void(0);">Report bug</a></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="card-body">
                      <ul className="list-unstyled mb-0">
                        <li className="mb-3">
                          <div className="d-flex align-items-start">
                            <div className="d-flex align-items-start">
                              <div className="avatar me-2">
                                <img src="/assets/img/avatars/2.png" alt="Avatar" className="rounded-circle" />
                              </div>
                              <div className="me-2 ms-1">
                                <h6 className="mb-0 fw-600">Cecilia Payne</h6>
                                <small className="text-muted fw-500">45 Connections</small>
                              </div>
                            </div>
                            <div className="ms-auto">
                              <button className="btn btn-label-primary btn-icon btn-sm"><i className="ti ti-user-check ti-xs" /></button>
                            </div>
                          </div>
                        </li>
                        <li className="mb-3">
                          <div className="d-flex align-items-start">
                            <div className="d-flex align-items-start">
                              <div className="avatar me-2">
                                <img src="/assets/img/avatars/3.png" alt="Avatar" className="rounded-circle" />
                              </div>
                              <div className="me-2 ms-1">
                                <h6 className="mb-0 fw-600">Curtis Fletcher</h6>
                                <small className="text-muted fw-500">1.32k Connections</small>
                              </div>
                            </div>
                            <div className="ms-auto">
                              <button className="btn btn-primary btn-icon btn-sm"><i className="ti ti-user-x ti-xs" /></button>
                            </div>
                          </div>
                        </li>
                        <li className="mb-3">
                          <div className="d-flex align-items-start">
                            <div className="d-flex align-items-start">
                              <div className="avatar me-2">
                                <img src="/assets/img/avatars/10.png" alt="Avatar" className="rounded-circle" />
                              </div>
                              <div className="me-2 ms-1">
                                <h6 className="mb-0 fw-600">Alice Stone</h6>
                                <small className="text-muted fw-500">125 Connections</small>
                              </div>
                            </div>
                            <div className="ms-auto">
                              <button className="btn btn-primary btn-icon btn-sm"><i className="ti ti-user-x ti-xs" /></button>
                            </div>
                          </div>
                        </li>
                        <li className="mb-3">
                          <div className="d-flex align-items-start">
                            <div className="d-flex align-items-start">
                              <div className="avatar me-2">
                                <img src="/assets/img/avatars/7.png" alt="Avatar" className="rounded-circle" />
                              </div>
                              <div className="me-2 ms-1">
                                <h6 className="mb-0 fw-600">Darrell Barnes</h6>
                                <small className="text-muted fw-500">456 Connections</small>
                              </div>
                            </div>
                            <div className="ms-auto">
                              <button className="btn btn-label-primary btn-icon btn-sm"><i className="ti ti-user-check ti-xs" /></button>
                            </div>
                          </div>
                        </li><li className="mb-3">
                          <div className="d-flex align-items-start">
                            <div className="d-flex align-items-start">
                              <div className="avatar me-2">
                                <img src="/assets/img/avatars/12.png" alt="Avatar" className="rounded-circle" />
                              </div>
                              <div className="me-2 ms-1">
                                <h6 className="mb-0 fw-600">Eugenia Moore</h6>
                                <small className="text-muted fw-500">1.2k Connections</small>
                              </div>
                            </div>
                            <div className="ms-auto">
                              <button className="btn btn-label-primary btn-icon btn-sm"><i className="ti ti-user-check ti-xs" /></button>
                            </div>
                          </div>
                        </li>
                        <li className="text-center">
                          <a href="#" className='cursor-pointer fw-600'>View all connections</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                {/*/ Connections */}
                {/* Teams */}
                <div className="col-lg-12 col-xl-6">
                  <div className="card card-action mb-4">
                    <div className="card-header align-items-center">
                      <h5 className="card-action-title mb-0 text-a-l fw-bold">Teams</h5>
                      <div className="card-action-element">
                        <div className="dropdown">
                          <button type="button" className="btn dropdown-toggle hide-arrow p-0" data-bs-toggle="dropdown" aria-expanded="false"><i className="ti ti-dots-vertical text-muted" /></button>
                          <ul className="dropdown-menu dropdown-menu-end">
                            <li><a className="dropdown-item fw-600" href="javascript:void(0);">Share teams</a></li>
                            <li><a className="dropdown-item fw-600" href="javascript:void(0);">Suggest edits</a></li>
                            <li>
                              <hr className="dropdown-divider" />
                            </li>
                            <li><a className="dropdown-item fw-600" href="javascript:void(0);">Report bug</a></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="card-body">
                      <ul className="list-unstyled mb-0">
                        <li className="mb-3">
                          <div className="d-flex align-items-center">
                            <div className="d-flex align-items-start">
                              <div className="avatar me-2">
                                <img src="/assets/img/icons/brands/react-label.png" alt="Avatar" className="rounded-circle" />
                              </div>
                              <div className="me-2 ms-1">
                                <h6 className="mb-0 fw-600">React Developers</h6>
                                <small className="text-muted fw-500">72 Members</small>
                              </div>
                            </div>
                            <div className="ms-auto">
                              <a className='cursor-pointer'><span className="badge bg-label-danger fw-600">Developer</span></a>
                            </div>
                          </div>
                        </li>
                        <li className="mb-3">
                          <div className="d-flex align-items-center">
                            <div className="d-flex align-items-start">
                              <div className="avatar me-2">
                                <img src="/assets/img/icons/brands/support-label.png" alt="Avatar" className="rounded-circle" />
                              </div>
                              <div className="me-2 ms-1">
                                <h6 className="mb-0 fw-600">Support Team</h6>
                                <small className="text-muted fw-500">122 Members</small>
                              </div>
                            </div>
                            <div className="ms-auto">
                              <a className='cursor-pointer'><span className="badge bg-label-primary fw-600">Support</span></a>
                            </div>
                          </div>
                        </li>
                        <li className="mb-3">
                          <div className="d-flex align-items-center">
                            <div className="d-flex align-items-start">
                              <div className="avatar me-2">
                                <img src="/assets/img/icons/brands/figma-label.png" alt="Avatar" className="rounded-circle" />
                              </div>
                              <div className="me-2 ms-1">
                                <h6 className="mb-0 fw-600">UI Designers</h6>
                                <small className="text-muted fw-500">7 Members</small>
                              </div>
                            </div>
                            <div className="ms-auto">
                              <a className='cursor-pointer'><span className="badge bg-label-info fw-600">Designer</span></a>
                            </div>
                          </div>
                        </li>
                        <li className="mb-3">
                          <div className="d-flex align-items-center">
                            <div className="d-flex align-items-start">
                              <div className="avatar me-2">
                                <img src="/assets/img/icons/brands/vue-label.png" alt="Avatar" className="rounded-circle" />
                              </div>
                              <div className="me-2 ms-1">
                                <h6 className="mb-0 fw-600">Vue.js Developers</h6>
                                <small className="text-muted fw-500">289 Members</small>
                              </div>
                            </div>
                            <div className="ms-auto">
                              <a className='cursor-pointer'><span className="badge bg-label-danger fw-600">Developer</span></a>
                            </div>
                          </div>
                        </li>
                        <li className="mb-3">
                          <div className="d-flex align-items-center">
                            <div className="d-flex align-items-start">
                              <div className="avatar me-2">
                                <img src="/assets/img/icons/brands/twitter-label.png" alt="Avatar" className="rounded-circle" />
                              </div>
                              <div className="me-2 ms-1">
                                <h6 className="mb-0 fw-600">Digital Marketing</h6>
                                <small className="text-muted fw-500">24 Members</small>
                              </div>
                            </div>
                            <div className="ms-auto">
                              <a className='cursor-pointer'><span className="badge bg-label-secondary fw-600">Marketing</span></a>
                            </div>
                          </div>
                        </li>
                        <li className="text-center">
                          <a href="#" className='cursor-pointer fw-600'>View all teams</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                {/*/ Teams */}
              </div>
              {/* Projects table */}
         <div className="card mb-4">
  <div className="card-datatable table-responsive">
    <div id="DataTables_Table_0_wrapper" className="dataTables_wrapper dt-bootstrap5 no-footer"><div className="card-header pb-0 pt-sm-0"><div className="head-label text-center"><h5 className="card-title mb-4 fl mt-4 fw-600">Projects</h5></div><div className="d-flex justify-content-center justify-content-md-end"><div id="DataTables_Table_0_filter" className="dataTables_filter"><label>Search: <input type="search" className="form-control" placeholder aria-controls="DataTables_Table_0" /></label></div></div></div><table className="datatables-projects table border-top dataTable no-footer dtr-column" id="DataTables_Table_0" aria-describedby="DataTables_Table_0_info">
        <thead>
          <tr><th className="control sorting_disabled dtr-hidden" rowSpan={1} colSpan={1} style={{width: 0, display: 'none'}} aria-label /><th className="sorting_disabled dt-checkboxes-cell dt-checkboxes-select-all" rowSpan={1} colSpan={1} style={{width: 0}} data-col={1} aria-label><input type="checkbox" className="form-check-input" /></th><th className="sorting sorting_desc fw-600 text-a-l" tabIndex={0} aria-controls="DataTables_Table_0" rowSpan={1} colSpan={1} style={{width: '42.9167px'}} aria-sort="descending" aria-label="Name: activate to sort column ascending">Name</th><th className="sorting fw-600 text-a-l" tabIndex={0} aria-controls="DataTables_Table_0" rowSpan={1} colSpan={1} style={{width: 57}} aria-label="Leader: activate to sort column ascending">Leader</th><th className="sorting_disabled fw-600 text-a-l" rowSpan={1} colSpan={1} style={{width: '40.7667px'}} aria-label="Team">Team</th><th className="w-px-200 sorting fw-600 text-a-l" tabIndex={0} aria-controls="DataTables_Table_0" rowSpan={1} colSpan={1} style={{width: '178.75px'}} aria-label="Status: activate to sort column ascending">Status</th><th className="sorting_disabled fw-600 text-a-l" rowSpan={1} colSpan={1} style={{width: '64.5667px'}} aria-label="Actions">Actions</th></tr>
        </thead><tbody><tr className="odd fw-500"><td colSpan={6} className="dataTables_empty" valign="top">Loading...</td></tr></tbody>
      </table><div className="row mx-2"><div className="col-sm-12 col-md-6"><div className="dataTables_info text-a-l mt-4 fw-500" id="DataTables_Table_0_info" role="status" aria-live="polite">Showing 0 to 0 of 0 entries</div></div><div className="col-sm-12 col-md-6"><div className="dataTables_paginate paging_simple_numbers" id="DataTables_Table_0_paginate"><ul className="pagination fr"><li className="paginate_button page-item previous disabled pt-3 pe-2" id="DataTables_Table_0_previous"><a aria-controls="DataTables_Table_0" aria-disabled="true" aria-role="link" data-dt-idx="previous" tabIndex={0} className="page-link fw-600">Previous</a></li><li className="paginate_button page-item next disabled pt-3" id="DataTables_Table_0_next"><a aria-controls="DataTables_Table_0" aria-disabled="true" aria-role="link" data-dt-idx="next" tabIndex={0} className="page-link fw-600">Next</a></li></ul></div></div></div></div>
  </div>
</div>

              {/*/ Projects table */}
            </div>
          </div>
          {/*/ User Profile Content */}
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

export default ProfileUser
