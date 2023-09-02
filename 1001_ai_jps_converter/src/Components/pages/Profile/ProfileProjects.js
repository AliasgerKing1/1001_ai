import React from 'react'
import Footer from '../../shared/Footer'
import Sidebar from '../../shared/Sidebar'
import Header from '../../shared/Header'
import ProfileNav from '../../shared/ProfileNav'
import ProfileHeader from '../../shared/ProfileHeader'
import { useSelector } from 'react-redux'

const ProfileProjects = () => {
  let state = useSelector(state => state.userReducer)

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
            <span className="text-muted fw-light fw-600">User Profile /</span> Projects
          </h4>
          {/* Header */}
          <ProfileHeader state={state} />
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
          {/* Project Cards */}
          <div className="row g-4">
            <div className="col-xl-4 col-lg-6 col-md-6">
              <div className="card">
                <div className="card-header">
                  <div className="d-flex align-items-start">
                    <div className="d-flex align-items-start">
                      <div className="avatar me-2">
                        <img src="/assets/img/icons/brands/social-label.png" alt="Avatar" className="rounded-circle" />
                      </div>
                      <div className="me-2 ms-1 text-a-l">
                        <h5 className="mb-0"><a href="javascript:;" className="stretched-link text-body fw-600">Social Banners</a></h5>
                        <div className="client-info"><span className="fw-medium fw-600">Client: </span><span className="text-muted fw-500">Christian Jimenez</span></div>
                      </div>
                    </div>
                    <div className="ms-auto">
                      <div className="dropdown zindex-2">
                        <button type="button" className="btn dropdown-toggle hide-arrow p-0" data-bs-toggle="dropdown" aria-expanded="false"><i className="ti ti-dots-vertical text-muted" /></button>
                        <ul className="dropdown-menu dropdown-menu-end">
                          <li><a className="dropdown-item fw-600" href="javascript:void(0);">Rename project</a></li>
                          <li><a className="dropdown-item fw-600" href="javascript:void(0);">View details</a></li>
                          <li><a className="dropdown-item fw-600" href="javascript:void(0);">Add to favorites</a></li>
                          <li>
                            <hr className="dropdown-divider" />
                          </li>
                          <li><a className="dropdown-item text-danger" href="javascript:void(0);">Leave Project</a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-body">
                  <div className="d-flex align-items-center flex-wrap">
                    <div className="bg-lighter px-3 py-2 rounded me-auto mb-3">
                      <h6 className="mb-0 fw-600">$24.8k <span className="text-body fw-500">/ $18.2k</span></h6>
                      <span className='fw-500'>Total Budget</span>
                    </div>
                    <div className="text-end mb-3">
                      <h6 className="mb-0 fw-600">Start Date: <span className="text-body fw-500">14/2/21</span></h6>
                      <h6 className="mb-1 fw-600">Deadline: <span className="text-body fw-500">28/2/22</span></h6>
                    </div>
                  </div>
                  <p className="mb-0 text-a-l fw-500">We are Consulting, Software Development and Web Development Services.</p>
                </div>
                <div className="card-body border-top">
                  <div className="d-flex align-items-center mb-3">
                    <h6 className="mb-1 fw-600">All Hours: <span className="text-body fw-500">380/244</span></h6>
                    <span className="badge bg-label-success ms-auto fw-600">28 Days left</span>
                  </div>
                  <div className="d-flex justify-content-between align-items-center mb-2 pb-1">
                    <small className='fw-500'>Task: 290/344</small>
                    <small className="fw-500">95% Completed</small>
                  </div>
                  <div className="progress mb-2" style={{height: 8}}>
                    <div className="progress-bar" role="progressbar" style={{width: '95%'}} aria-valuenow={95} aria-valuemin={0} aria-valuemax={100} />
                  </div>
                  <div className="d-flex align-items-center pt-1">
                    <div className="d-flex align-items-center">
                      <ul className="list-unstyled d-flex align-items-center avatar-group mb-0 zindex-2 mt-1">
                        <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" title="Vinnie Mostowy" className="avatar avatar-sm pull-up">
                          <img className="rounded-circle" src="/assets/img/avatars/5.png" alt="Avatar" />
                        </li>
                        <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" title="Allen Rieske" className="avatar avatar-sm pull-up">
                          <img className="rounded-circle" src="/assets/img/avatars/12.png" alt="Avatar" />
                        </li>
                        <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" title="Julee Rossignol" className="avatar avatar-sm pull-up me-2">
                          <img className="rounded-circle" src="/assets/img/avatars/6.png" alt="Avatar" />
                        </li>
                        <li><small className="text-muted fw-500">280 Members</small></li>
                      </ul>
                    </div>
                    <div className="ms-auto">
                      <a href="javascript:void(0);" className="text-body fw-500"><i className="ti ti-message-dots ti-sm" /> 15</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6">
              <div className="card">
                <div className="card-header">
                  <div className="d-flex align-items-start">
                    <div className="d-flex align-items-start">
                      <div className="avatar me-2">
                        <img src="/assets/img/icons/brands/react-label.png" alt="Avatar" className="rounded-circle" />
                      </div>
                      <div className="me-2 ms-1 text-a-l">
                        <h5 className="mb-0"><a href="javascript:;" className="stretched-link text-body fw-600">Admin Template</a></h5>
                        <div className="client-info"><span className="fw-medium fw-600">Client: </span><span className="text-muted fw-500">Jeffrey Phillips</span></div>
                      </div>
                    </div>
                    <div className="ms-auto">
                      <div className="dropdown zindex-2">
                        <button type="button" className="btn dropdown-toggle hide-arrow p-0" data-bs-toggle="dropdown" aria-expanded="false"><i className="ti ti-dots-vertical text-muted" /></button>
                        <ul className="dropdown-menu dropdown-menu-end">
                          <li><a className="dropdown-item fw-600" href="javascript:void(0);">Rename project</a></li>
                          <li><a className="dropdown-item fw-600" href="javascript:void(0);">View details</a></li>
                          <li><a className="dropdown-item fw-600" href="javascript:void(0);">Add to favorites</a></li>
                          <li>
                            <hr className="dropdown-divider" />
                          </li>
                          <li><a className="dropdown-item text-danger" href="javascript:void(0);">Leave Project</a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-body">
                  <div className="d-flex align-items-center flex-wrap">
                    <div className="bg-lighter px-3 py-2 rounded me-auto mb-3">
                      <h6 className="mb-0 fw-600">$2.4k <span className="text-body fw-500">/ 1.8k</span></h6>
                      <span className='fw-500'>Total Budget</span>
                    </div>
                    <div className="text-end mb-3">
                      <h6 className="mb-0 fw-600">Start Date: <span className="text-body fw-500">18/8/21</span></h6>
                      <h6 className="mb-1 fw-600">Deadline: <span className="text-body fw-500">21/6/22</span></h6>
                    </div>
                  </div>
                  <p className="mb-0 text-a-l fw-500">Time is our most valuable asset, that's why we want to help you save it by creating…</p>
                </div>
                <div className="card-body border-top">
                  <div className="d-flex align-items-center mb-3">
                    <h6 className="mb-1 fw-600">All Hours: <span className="text-body fw-500">98/135</span></h6>
                    <span className="badge bg-label-warning ms-auto fw-600">15 Days left</span>
                  </div>
                  <div className="d-flex justify-content-between align-items-center mb-2 pb-1">
                    <small className='fw-500'>Task: 12/90</small>
                    <small className="fw-500">42% Completed</small>
                  </div>
                  <div className="progress mb-2" style={{height: 8}}>
                    <div className="progress-bar" role="progressbar" style={{width: '42%'}} aria-valuenow={42} aria-valuemin={0} aria-valuemax={100} />
                  </div>
                  <div className="d-flex align-items-center pt-1">
                    <div className="d-flex align-items-center">
                      <ul className="list-unstyled d-flex align-items-center avatar-group mb-0 zindex-2">
                        <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" title="Kaith D'souza" className="avatar avatar-sm pull-up">
                          <img className="rounded-circle" src="/assets/img/avatars/5.png" alt="Avatar" />
                        </li>
                        <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" title="John Doe" className="avatar avatar-sm pull-up">
                          <img className="rounded-circle" src="/assets/img/avatars/1.png" alt="Avatar" />
                        </li>
                        <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" title="Alan Walker" className="avatar avatar-sm pull-up me-2">
                          <img className="rounded-circle" src="/assets/img/avatars/6.png" alt="Avatar" />
                        </li>
                        <li><small className="text-muted fw-500">1.1k Members</small></li>
                      </ul>
                    </div>
                    <div className="ms-auto">
                      <a href="javascript:void(0);" className="text-body fw-500"><i className="ti ti-message-dots ti-sm" /> 236</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6">
              <div className="card">
                <div className="card-header">
                  <div className="d-flex align-items-start">
                    <div className="d-flex align-items-start">
                      <div className="avatar me-2">
                        <img src="/assets/img/icons/brands/vue-label.png" alt="Avatar" className="rounded-circle" />
                      </div>
                      <div className="me-2 ms-1 text-a-l">
                        <h5 className="mb-0"><a href="javascript:;" className="stretched-link text-body fw-600">App Design</a></h5>
                        <div className="client-info"><span className="fw-medium fw-600">Client: </span><span className="text-muted fw-500">Ricky McDonald</span></div>
                      </div>
                    </div>
                    <div className="ms-auto">
                      <div className="dropdown zindex-2">
                        <button type="button" className="btn dropdown-toggle hide-arrow p-0" data-bs-toggle="dropdown" aria-expanded="false"><i className="ti ti-dots-vertical text-muted" /></button>
                        <ul className="dropdown-menu dropdown-menu-end">
                          <li><a className="dropdown-item fw-600" href="javascript:void(0);">Rename project</a></li>
                          <li><a className="dropdown-item fw-600" href="javascript:void(0);">View details</a></li>
                          <li><a className="dropdown-item fw-600" href="javascript:void(0);">Add to favorites</a></li>
                          <li>
                            <hr className="dropdown-divider" />
                          </li>
                          <li><a className="dropdown-item text-danger" href="javascript:void(0);">Leave Project</a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-body">
                  <div className="d-flex align-items-center flex-wrap">
                    <div className="bg-lighter px-3 py-2 rounded me-auto mb-3">
                      <h6 className="mb-0 fw-600">$980 <span className="text-body fw-normal" fw-500>/ $420</span></h6>
                      <span className='fw-500'>Total Budget</span>
                    </div>
                    <div className="text-end mb-3">
                      <h6 className="mb-0 fw-600">Start Date: <span className="text-body fw-500">24/7/21</span></h6>
                      <h6 className="mb-1 fw-600">Deadline: <span className="text-body fw-500">8/10/21</span></h6>
                    </div>
                  </div>
                  <p className="mb-0 text-a-l fw-500">App design combines the user interface (UI) and user experience (UX).</p>
                </div>
                <div className="card-body border-top">
                  <div className="d-flex align-items-center mb-3">
                    <h6 className="mb-1 fw-600">All Hours: <span className="text-body fw-500">880/421</span></h6>
                    <span className="badge bg-label-danger ms-auto fw-600">45 Days left</span>
                  </div>
                  <div className="d-flex justify-content-between align-items-center mb-2 pb-1">
                    <small className='fw-500'>Task: 22/140</small>
                    <small className="fw-500">68% Completed</small>
                  </div>
                  <div className="progress mb-2" style={{height: 8}}>
                    <div className="progress-bar" role="progressbar" style={{width: '68%'}} aria-valuenow={68} aria-valuemin={0} aria-valuemax={100} />
                  </div>
                  <div className="d-flex align-items-center pt-1">
                    <div className="d-flex align-items-center">
                      <ul className="list-unstyled d-flex align-items-center avatar-group mb-0 zindex-2">
                        <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" title="Jimmy Ressula" className="avatar avatar-sm pull-up">
                          <img className="rounded-circle" src="/assets/img/avatars/4.png" alt="Avatar" />
                        </li>
                        <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" title="Kristi Lawker" className="avatar avatar-sm pull-up">
                          <img className="rounded-circle" src="/assets/img/avatars/2.png" alt="Avatar" />
                        </li>
                        <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" title="Danny Paul" className="avatar avatar-sm pull-up me-2">
                          <img className="rounded-circle" src="/assets/img/avatars/7.png" alt="Avatar" />
                        </li>
                        <li><small className="text-muted fw-500">458 Members</small></li>
                      </ul>
                    </div>
                    <div className="ms-auto">
                      <a href="javascript:void(0);" className="text-body fw-500"><i className="ti ti-message-dots ti-sm" /> 98</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6">
              <div className="card">
                <div className="card-header">
                  <div className="d-flex align-items-start">
                    <div className="d-flex align-items-start">
                      <div className="avatar me-2">
                        <img src="/assets/img/icons/brands/html-label.png" alt="Avatar" className="rounded-circle" />
                      </div>
                      <div className="me-2 ms-1 text-a-l">
                        <h5 className="mb-0"><a href="javascript:;" className="stretched-link text-body fw-600">Create Website</a></h5>
                        <div className="client-info"><span className="fw-medium fw-600">Client: </span><span className="text-muted fw-500">Hulda Wright</span></div>
                      </div>
                    </div>
                    <div className="ms-auto">
                      <div className="dropdown zindex-2">
                        <button type="button" className="btn dropdown-toggle hide-arrow p-0" data-bs-toggle="dropdown" aria-expanded="false"><i className="ti ti-dots-vertical text-muted" /></button>
                        <ul className="dropdown-menu dropdown-menu-end">
                          <li><a className="dropdown-item fw-600" href="javascript:void(0);">Rename project</a></li>
                          <li><a className="dropdown-item fw-600" href="javascript:void(0);">View details</a></li>
                          <li><a className="dropdown-item fw-600" href="javascript:void(0);">Add to favorites</a></li>
                          <li>
                            <hr className="dropdown-divider" />
                          </li>
                          <li><a className="dropdown-item text-danger" href="javascript:void(0);">Leave Project</a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-body">
                  <div className="d-flex align-items-center flex-wrap">
                    <div className="bg-lighter px-3 py-2 rounded me-auto mb-3">
                      <h6 className="mb-0 fw-600">$8.5k <span className="text-body fw-500">/ $2.43k</span></h6>
                      <span className='fw-500'>Total Budget</span>
                    </div>
                    <div className="text-end mb-3">
                      <h6 className="mb-0 fw-600">Start Date: <span className="text-body fw-500">10/2/19</span></h6>
                      <h6 className="mb-1 fw-600">Deadline: <span className="text-body fw-500">12/9/22</span></h6>
                    </div>
                  </div>
                  <p className="mb-0 text-a-l fw-500">Your domain name should reflect your products or services so that your...</p>
                </div>
                <div className="card-body border-top">
                  <div className="d-flex align-items-center mb-3">
                    <h6 className="mb-1 fw-600">All Hours: <span className="text-body fw-500">1.2k/820</span></h6>
                    <span className="badge bg-label-warning ms-auto">126 Days left</span>
                  </div>
                  <div className="d-flex justify-content-between align-items-center mb-2 pb-1">
                    <small className='fw-500'>Task: 237/420</small>
                    <small className="fw-500">72% Completed</small>
                  </div>
                  <div className="progress mb-2" style={{height: 8}}>
                    <div className="progress-bar" role="progressbar" style={{width: '72%'}} aria-valuenow={72} aria-valuemin={0} aria-valuemax={100} />
                  </div>
                  <div className="d-flex align-items-center pt-1">
                    <div className="d-flex align-items-center">
                      <ul className="list-unstyled d-flex align-items-center avatar-group mb-0 zindex-2">
                        <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" title="Andrew Tye" className="avatar avatar-sm pull-up">
                          <img className="rounded-circle" src="/assets/img/avatars/6.png" alt="Avatar" />
                        </li>
                        <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" title="Rishi Swaat" className="avatar avatar-sm pull-up">
                          <img className="rounded-circle" src="/assets/img/avatars/9.png" alt="Avatar" />
                        </li>
                        <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" title="Rossie Kim" className="avatar avatar-sm pull-up me-2">
                          <img className="rounded-circle" src="/assets/img/avatars/12.png" alt="Avatar" />
                        </li>
                        <li><small className="text-muted fw-500">137 Members</small></li>
                      </ul>
                    </div>
                    <div className="ms-auto">
                      <a href="javascript:void(0);" className="text-body fw-500"><i className="ti ti-message-dots ti-sm" /> 120</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6">
              <div className="card">
                <div className="card-header">
                  <div className="d-flex align-items-start">
                    <div className="d-flex align-items-start">
                      <div className="avatar me-2">
                        <img src="/assets/img/icons/brands/figma-label.png" alt="Avatar" className="rounded-circle" />
                      </div>
                      <div className="me-2 ms-1 text-a-l">
                        <h5 className="mb-0"><a href="javascript:;" className="stretched-link text-body fw-600">Figma Dashboard</a></h5>
                        <div className="client-info"><span className="fw-medium fw-600">Client: </span><span className="text-muted fw-500">Jerry Greene</span></div>
                      </div>
                    </div>
                    <div className="ms-auto">
                      <div className="dropdown zindex-2">
                        <button type="button" className="btn dropdown-toggle hide-arrow p-0" data-bs-toggle="dropdown" aria-expanded="false"><i className="ti ti-dots-vertical text-muted" /></button>
                        <ul className="dropdown-menu dropdown-menu-end">
                          <li><a className="dropdown-item fw-600" href="javascript:void(0);">Rename project</a></li>
                          <li><a className="dropdown-item fw-600" href="javascript:void(0);">View details</a></li>
                          <li><a className="dropdown-item fw-600" href="javascript:void(0);">Add to favorites</a></li>
                          <li>
                            <hr className="dropdown-divider" />
                          </li>
                          <li><a className="dropdown-item text-danger" href="javascript:void(0);">Leave Project</a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-body">
                  <div className="d-flex align-items-center flex-wrap">
                    <div className="bg-lighter px-3 py-2 rounded me-auto mb-3">
                      <h6 className="mb-0 fw-600">$52.7k <span className="text-body fw-norma fw-500l">/ $28.4k</span></h6>
                      <span className='fw-500'>Total Budget</span>
                    </div>
                    <div className="text-end mb-3">
                      <h6 className="mb-0 fw-600">Start Date: <span className="text-body fw-500">12/12/20</span></h6>
                      <h6 className="mb-1 fw-600">Deadline: <span className="text-body fw-500">25/12/21</span></h6>
                    </div>
                  </div>
                  <p className="mb-0 text-a-l fw-500">Use this template to organize your design project. Some of the key features are…</p>
                </div>
                <div className="card-body border-top">
                  <div className="d-flex align-items-center mb-3">
                    <h6 className="mb-1 fw-600">All Hours: <span className="text-body fw-500">142/420</span></h6>
                    <span className="badge bg-label-danger ms-auto fw-600">5 Days left</span>
                  </div>
                  <div className="d-flex justify-content-between align-items-center mb-2 pb-1">
                    <small className='fw-500'>Task: 29/285</small>
                    <small className="fw-500">35% Completed</small>
                  </div>
                  <div className="progress mb-2" style={{height: 8}}>
                    <div className="progress-bar" role="progressbar" style={{width: '35%'}} aria-valuenow={35} aria-valuemin={0} aria-valuemax={100} />
                  </div>
                  <div className="d-flex align-items-center pt-1">
                    <div className="d-flex align-items-center">
                      <ul className="list-unstyled d-flex align-items-center avatar-group mb-0 zindex-2">
                        <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" title="Kim Merchent" className="avatar avatar-sm pull-up">
                          <img className="rounded-circle" src="/assets/img/avatars/10.png" alt="Avatar" />
                        </li>
                        <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" title="Sam D'souza" className="avatar avatar-sm pull-up">
                          <img className="rounded-circle" src="/assets/img/avatars/13.png" alt="Avatar" />
                        </li>
                        <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" title="Nurvi Karlos" className="avatar avatar-sm pull-up me-2">
                          <img className="rounded-circle" src="/assets/img/avatars/5.png" alt="Avatar" />
                        </li>
                        <li><small className="text-muted fw-500">82 Members</small></li>
                      </ul>
                    </div>
                    <div className="ms-auto">
                      <a href="javascript:void(0);" className="text-body fw-500"><i className="ti ti-message-dots ti-sm" /> 20</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6">
              <div className="card">
                <div className="card-header">
                  <div className="d-flex align-items-start">
                    <div className="d-flex align-items-start">
                      <div className="avatar me-2">
                        <img src="/assets/img/icons/brands/xd-label.png" alt="Avatar" className="rounded-circle" />
                      </div>
                      <div className="me-2 ms-1 text-a-l">
                        <h5 className="mb-0"><a href="javascript:;" className="stretched-link text-body fw-600">Logo Design</a></h5>
                        <div className="client-info"><span className="fw-medium fw-600">Client: </span><span className="text-muted fw-500">Olive Strickland</span></div>
                      </div>
                    </div>
                    <div className="ms-auto">
                      <div className="dropdown zindex-2">
                        <button type="button" className="btn dropdown-toggle hide-arrow p-0" data-bs-toggle="dropdown" aria-expanded="false"><i className="ti ti-dots-vertical text-muted" /></button>
                        <ul className="dropdown-menu dropdown-menu-end">
                          <li><a className="dropdown-item fw-600" href="javascript:void(0);">Rename project</a></li>
                          <li><a className="dropdown-item fw-600" href="javascript:void(0);">View details</a></li>
                          <li><a className="dropdown-item fw-600" href="javascript:void(0);">Add to favorites</a></li>
                          <li>
                            <hr className="dropdown-divider" />
                          </li>
                          <li><a className="dropdown-item text-danger" href="javascript:void(0);">Leave Project</a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-body">
                  <div className="d-flex align-items-center flex-wrap">
                    <div className="bg-lighter px-3 py-2 rounded me-auto mb-3">
                      <h6 className="mb-0 fw-600">$1.3k <span className="text-body fw-500">/ $655</span></h6>
                      <span className='fw-500'>Total Budget</span>
                    </div>
                    <div className="text-end mb-3">
                      <h6 className="mb-0 fw-600">Start Date: <span className="text-body fw-500">17/8/21</span></h6>
                      <h6 className="mb-1 fw-600">Deadline: <span className="text-body fw-500">02/11/21</span></h6>
                    </div>
                  </div>
                  <p className="mb-0 text-a-l fw-500">Premium logo designs created by top logo designers. Create the branding of business.</p>
                </div>
                <div className="card-body border-top">
                  <div className="d-flex align-items-center mb-3">
                    <h6 className="mb-1 fw-600">All Hours: <span className="text-body fw-500">580/445</span></h6>
                    <span className="badge bg-label-success ms-auto">4 Days left</span>
                  </div>
                  <div className="d-flex justify-content-between align-items-center mb-2 pb-1">
                    <small className='fw-500'>Task: 290/290</small>
                    <small className="fw-500">100% Completed</small>
                  </div>
                  <div className="progress mb-2" style={{height: 8}}>
                    <div className="progress-bar" role="progressbar" style={{width: '100%'}} aria-valuenow={100} aria-valuemin={0} aria-valuemax={100} />
                  </div>
                  <div className="d-flex align-items-center pt-1">
                    <div className="d-flex align-items-center">
                      <ul className="list-unstyled d-flex align-items-center avatar-group mb-0 zindex-2">
                        <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" title="Kim Karlos" className="avatar avatar-sm pull-up">
                          <img className="rounded-circle" src="/assets/img/avatars/3.png" alt="Avatar" />
                        </li>
                        <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" title="Katy Turner" className="avatar avatar-sm pull-up">
                          <img className="rounded-circle" src="/assets/img/avatars/9.png" alt="Avatar" />
                        </li>
                        <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" title="Peter Adward" className="avatar avatar-sm pull-up me-2">
                          <img className="rounded-circle" src="/assets/img/avatars/6.png" alt="Avatar" />
                        </li>
                        <li><small className="text-muted fw-500">16 Members</small></li>
                      </ul>
                    </div>
                    <div className="ms-auto">
                      <a href="javascript:void(0);" className="text-body fw-500"><i className="ti ti-message-dots ti-sm" /> 37</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*/ Project Cards */}
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

export default ProfileProjects
