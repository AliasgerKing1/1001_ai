import React from 'react'
import Footer from '../../shared/Footer'
import Sidebar from '../../shared/Sidebar'
import Header from '../../shared/Header'
import ProfileNav from '../../shared/ProfileNav'
const ProfileTeam = () => {
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
            <span className="text-muted fw-light fw-600">User Profile /</span> Teams
          </h4>
          {/* Header */}
          <div className="row">
            <div className="col-12">
              <div className="card mb-4">
                <div className="user-profile-header-banner">
                  <img src="../../assets/img/pages/profile-banner.png" alt="Banner image" className="rounded-top" />
                </div>
                <div className="user-profile-header d-flex flex-column flex-sm-row text-sm-start text-center mb-4">
                  <div className="flex-shrink-0 mt-n2 mx-sm-0 mx-auto">
                    <img src="../../assets/img/avatars/14.png" alt="user image" className="d-block h-auto ms-0 ms-sm-4 rounded user-profile-img" />
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
                <ProfileNav />
            </div>
          </div>
          {/*/ Navbar pills */}
          {/* Teams Cards */}
          <div className="row g-4">
            <div className="col-xl-4 col-lg-6 col-md-6">
              <div className="card">
                <div className="card-body">
                  <div className="d-flex align-items-center mb-3">
                    <a href="javascript:;" className="d-flex align-items-center">
                      <div className="avatar me-2">
                        <img src="../../assets/img/icons/brands/react-label.png" alt="Avatar" className="rounded-circle" />
                      </div>
                      <div className="me-2 text-body h5 mb-0 fw-600">
                        React Developers
                      </div>
                    </a>
                    <div className="ms-auto">
                      <ul className="list-inline mb-0 d-flex align-items-center">
                        <li className="list-inline-item me-0"><a href="javascript:void(0);" className="d-flex align-self-center text-body"><i className="ti ti-star text-muted me-1" /></a></li>
                        <li className="list-inline-item">
                          <div className="dropdown">
                            <button type="button" className="btn dropdown-toggle hide-arrow p-0" data-bs-toggle="dropdown" aria-expanded="false"><i className="ti ti-dots-vertical text-muted" /></button>
                            <ul className="dropdown-menu dropdown-menu-end">
                              <li><a className="dropdown-item fw-600" href="javascript:void(0);">Rename Team</a></li>
                              <li><a className="dropdown-item fw-600" href="javascript:void(0);">View Details</a></li>
                              <li><a className="dropdown-item fw-600" href="javascript:void(0);">Add to favorites</a></li>
                              <li>
                                <hr className="dropdown-divider" />
                              </li>
                              <li><a className="dropdown-item text-danger" href="javascript:void(0);">Delete Team</a></li>
                            </ul>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <p className="mb-3 text-a-l fw-500">We don’t make assumptions about the rest of your technology stack, so you can develop new features in React.</p>
                  <div className="d-flex align-items-center pt-1">
                    <div className="d-flex align-items-center">
                      <ul className="list-unstyled d-flex align-items-center avatar-group mb-0">
                        <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" title="Vinnie Mostowy" className="avatar avatar-sm pull-up">
                          <img className="rounded-circle" src="../../assets/img/avatars/5.png" alt="Avatar" />
                        </li>
                        <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" title="Allen Rieske" className="avatar avatar-sm pull-up">
                          <img className="rounded-circle" src="../../assets/img/avatars/12.png" alt="Avatar" />
                        </li>
                        <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" title="Julee Rossignol" className="avatar avatar-sm pull-up">
                          <img className="rounded-circle" src="../../assets/img/avatars/6.png" alt="Avatar" />
                        </li>
                        <li className="avatar avatar-sm">
                          <span className="avatar-initial rounded-circle pull-up" data-bs-toggle="tooltip" data-bs-placement="top" title="8 more">+8</span>
                        </li>
                      </ul>
                    </div>
                    <div className="ms-auto">
                      <a href="javascript:;" className="me-2"><span className="badge bg-label-primary fw-600">React</span></a>
                      <a href="javascript:;"><span className="badge bg-label-warning fw-600">Vue.JS</span></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6">
              <div className="card">
                <div className="card-body">
                  <div className="d-flex align-items-center mb-3">
                    <a href="javascript:;" className="d-flex align-items-center">
                      <div className="avatar me-2">
                        <img src="../../assets/img/icons/brands/vue-label.png" alt="Avatar" className="rounded-circle" />
                      </div>
                      <div className="me-2 text-body h5 mb-0 fw-600">
                        Vue.js Dev Team
                      </div>
                    </a>
                    <div className="ms-auto">
                      <ul className="list-inline mb-0 d-flex align-items-center">
                        <li className="list-inline-item me-0"><a href="javascript:void(0);" className="d-flex align-self-center text-body"><i className="ti ti-star text-muted me-1" /></a></li>
                        <li className="list-inline-item">
                          <div className="dropdown">
                            <button type="button" className="btn dropdown-toggle hide-arrow p-0" data-bs-toggle="dropdown" aria-expanded="false"><i className="ti ti-dots-vertical text-muted" /></button>
                            <ul className="dropdown-menu dropdown-menu-end">
                              <li><a className="dropdown-item fw-600" href="javascript:void(0);">Rename Team</a></li>
                              <li><a className="dropdown-item fw-600" href="javascript:void(0);">View Details</a></li>
                              <li><a className="dropdown-item fw-600" href="javascript:void(0);">Add to favorites</a></li>
                              <li>
                                <hr className="dropdown-divider" />
                              </li>
                              <li><a className="dropdown-item text-danger" href="javascript:void(0);">Delete Team</a></li>
                            </ul>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <p className="mb-3 text-a-l fw-500">The development of Vue and its ecosystem is guided by an international team, some of whom have chosen to be featured below.</p>
                  <div className="d-flex align-items-center pt-1">
                    <div className="d-flex align-items-center">
                      <ul className="list-unstyled d-flex align-items-center avatar-group mb-0">
                        <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" title="Kaith D'souza" className="avatar avatar-sm pull-up">
                          <img className="rounded-circle" src="../../assets/img/avatars/5.png" alt="Avatar" />
                        </li>
                        <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" title="John Doe" className="avatar avatar-sm pull-up">
                          <img className="rounded-circle" src="../../assets/img/avatars/1.png" alt="Avatar" />
                        </li>
                        <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" title="Alan Walker" className="avatar avatar-sm pull-up">
                          <img className="rounded-circle" src="../../assets/img/avatars/6.png" alt="Avatar" />
                        </li>
                        <li className="avatar avatar-sm">
                          <span className="avatar-initial rounded-circle pull-up" data-bs-toggle="tooltip" data-bs-placement="top" title="14 more">+14</span>
                        </li>
                      </ul>
                    </div>
                    <div className="ms-auto">
                      <a href="javascript:;"><span className="badge bg-label-danger fw-600">Developer</span></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6">
              <div className="card">
                <div className="card-body">
                  <div className="d-flex align-items-center mb-3">
                    <a href="javascript:;" className="d-flex align-items-center">
                      <div className="avatar me-2">
                        <img src="../../assets/img/icons/brands/xd-label.png" alt="Avatar" className="rounded-circle" />
                      </div>
                      <div className="me-2 text-body h5 mb-0 fw-600">
                        Creative Designers
                      </div>
                    </a>
                    <div className="ms-auto">
                      <ul className="list-inline mb-0 d-flex align-items-center">
                        <li className="list-inline-item me-0"><a href="javascript:void(0);" className="d-flex align-self-center text-body"><i className="ti ti-star text-muted me-1" /></a></li>
                        <li className="list-inline-item">
                          <div className="dropdown">
                            <button type="button" className="btn dropdown-toggle hide-arrow p-0" data-bs-toggle="dropdown" aria-expanded="false"><i className="ti ti-dots-vertical text-muted" /></button>
                            <ul className="dropdown-menu dropdown-menu-end">
                              <li><a className="dropdown-item fw-600" href="javascript:void(0);">Rename Team</a></li>
                              <li><a className="dropdown-item fw-600" href="javascript:void(0);">View Details</a></li>
                              <li><a className="dropdown-item fw-600" href="javascript:void(0);">Add to favorites</a></li>
                              <li>
                                <hr className="dropdown-divider" />
                              </li>
                              <li><a className="dropdown-item text-danger" href="javascript:void(0);">Delete Team</a></li>
                            </ul>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <p className="mb-3 text-a-l fw-500">A design or product team is more than just the people on it. A team includes the people, the roles they play.</p>
                  <div className="d-flex align-items-center pt-1">
                    <div className="d-flex align-items-center">
                      <ul className="list-unstyled d-flex align-items-center avatar-group mb-0">
                        <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" title="Jimmy Ressula" className="avatar avatar-sm pull-up">
                          <img className="rounded-circle" src="../../assets/img/avatars/4.png" alt="Avatar" />
                        </li>
                        <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" title="Kristi Lawker" className="avatar avatar-sm pull-up">
                          <img className="rounded-circle" src="../../assets/img/avatars/2.png" alt="Avatar" />
                        </li>
                        <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" title="Danny Paul" className="avatar avatar-sm pull-up">
                          <img className="rounded-circle" src="../../assets/img/avatars/7.png" alt="Avatar" />
                        </li>
                        <li className="avatar avatar-sm">
                          <span className="avatar-initial rounded-circle pull-up" data-bs-toggle="tooltip" data-bs-placement="top" title="19 more">+19</span>
                        </li>
                      </ul>
                    </div>
                    <div className="ms-auto">
                      <a href="javascript:;" className="me-2"><span className="badge bg-label-warning">Sketch</span></a>
                      <a href="javascript:;"><span className="badge bg-label-danger fw-600">XD</span></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6">
              <div className="card">
                <div className="card-body">
                  <div className="d-flex align-items-center mb-3">
                    <a href="javascript:;" className="d-flex align-items-center">
                      <div className="avatar me-2">
                        <img src="../../assets/img/icons/brands/support-label.png" alt="Avatar" className="rounded-circle" />
                      </div>
                      <div className="me-2 text-body h5 mb-0 fw-600">
                        Support Team
                      </div>
                    </a>
                    <div className="ms-auto">
                      <ul className="list-inline mb-0 d-flex align-items-center">
                        <li className="list-inline-item me-0"><a href="javascript:void(0);" className="d-flex align-self-center text-body"><i className="ti ti-star text-muted me-1" /></a></li>
                        <li className="list-inline-item">
                          <div className="dropdown">
                            <button type="button" className="btn dropdown-toggle hide-arrow p-0" data-bs-toggle="dropdown" aria-expanded="false"><i className="ti ti-dots-vertical text-muted" /></button>
                            <ul className="dropdown-menu dropdown-menu-end">
                              <li><a className="dropdown-item fw-600" href="javascript:void(0);">Rename Team</a></li>
                              <li><a className="dropdown-item fw-600" href="javascript:void(0);">View Details</a></li>
                              <li><a className="dropdown-item fw-600" href="javascript:void(0);">Add to favorites</a></li>
                              <li>
                                <hr className="dropdown-divider" />
                              </li>
                              <li><a className="dropdown-item text-danger" href="javascript:void(0);">Delete Team</a></li>
                            </ul>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <p className="mb-3 text-a-l fw-500">Support your team. Your customer support team is fielding the good, the bad, and the ugly day in and day out.</p>
                  <div className="d-flex align-items-center pt-1">
                    <div className="d-flex align-items-center">
                      <ul className="list-unstyled d-flex align-items-center avatar-group mb-0">
                        <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" title="Andrew Tye" className="avatar avatar-sm pull-up">
                          <img className="rounded-circle" src="../../assets/img/avatars/6.png" alt="Avatar" />
                        </li>
                        <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" title="Rishi Swaat" className="avatar avatar-sm pull-up">
                          <img className="rounded-circle" src="../../assets/img/avatars/9.png" alt="Avatar" />
                        </li>
                        <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" title="Rossie Kim" className="avatar avatar-sm pull-up">
                          <img className="rounded-circle" src="../../assets/img/avatars/12.png" alt="Avatar" />
                        </li>
                        <li className="avatar avatar-sm">
                          <span className="avatar-initial rounded-circle pull-up" data-bs-toggle="tooltip" data-bs-placement="top" title="14 more">+21</span>
                        </li>
                      </ul>
                    </div>
                    <div className="ms-auto">
                      <a href="javascript:;"><span className="badge bg-label-info fw-600">Zendesk</span></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6">
              <div className="card">
                <div className="card-body">
                  <div className="d-flex align-items-center mb-3">
                    <a href="javascript:;" className="d-flex align-items-center">
                      <div className="avatar me-2">
                        <img src="../../assets/img/icons/brands/social-label.png" alt="Avatar" className="rounded-circle" />
                      </div>
                      <div className="me-2 text-body h5 mb-0 fw-600">
                        Digital Marketing
                      </div>
                    </a>
                    <div className="ms-auto">
                      <ul className="list-inline mb-0 d-flex align-items-center">
                        <li className="list-inline-item me-0"><a href="javascript:void(0);" className="d-flex align-self-center text-body"><i className="ti ti-star text-muted me-1" /></a></li>
                        <li className="list-inline-item">
                          <div className="dropdown">
                            <button type="button" className="btn dropdown-toggle hide-arrow p-0" data-bs-toggle="dropdown" aria-expanded="false"><i className="ti ti-dots-vertical text-muted" /></button>
                            <ul className="dropdown-menu dropdown-menu-end">
                              <li><a className="dropdown-item fw-600" href="javascript:void(0);">Rename Team</a></li>
                              <li><a className="dropdown-item fw-600" href="javascript:void(0);">View Details</a></li>
                              <li><a className="dropdown-item fw-600" href="javascript:void(0);">Add to favorites</a></li>
                              <li>
                                <hr className="dropdown-divider" />
                              </li>
                              <li><a className="dropdown-item text-danger" href="javascript:void(0);">Delete Team</a></li>
                            </ul>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <p className="mb-3 text-a-l fw-500">Digital marketing refers to advertising delivered through digital channels such as search engines, websites…</p>
                  <div className="d-flex align-items-center pt-1">
                    <div className="d-flex align-items-center">
                      <ul className="list-unstyled d-flex align-items-center avatar-group mb-0">
                        <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" title="Kim Merchent" className="avatar avatar-sm pull-up">
                          <img className="rounded-circle" src="../../assets/img/avatars/10.png" alt="Avatar" />
                        </li>
                        <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" title="Sam D'souza" className="avatar avatar-sm pull-up">
                          <img className="rounded-circle" src="../../assets/img/avatars/13.png" alt="Avatar" />
                        </li>
                        <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" title="Nurvi Karlos" className="avatar avatar-sm pull-up">
                          <img className="rounded-circle" src="../../assets/img/avatars/5.png" alt="Avatar" />
                        </li>
                        <li className="avatar avatar-sm">
                          <span className="avatar-initial rounded-circle pull-up" data-bs-toggle="tooltip" data-bs-placement="top" title="53 more">+53</span>
                        </li>
                      </ul>
                    </div>
                    <div className="ms-auto">
                      <a href="javascript:;" className="me-2"><span className="badge bg-label-primary fw-600">Twitter</span></a>
                      <a href="javascript:;"><span className="badge bg-label-success">Email</span></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6">
              <div className="card">
                <div className="card-body">
                  <div className="d-flex align-items-center mb-3">
                    <a href="javascript:;" className="d-flex align-items-center">
                      <div className="avatar me-2">
                        <img src="../../assets/img/icons/brands/event-label.png" alt="Avatar" className="rounded-circle" />
                      </div>
                      <div className="me-2 text-body h5 mb-0 fw-600">
                        Event
                      </div>
                    </a>
                    <div className="ms-auto">
                      <ul className="list-inline mb-0 d-flex align-items-center">
                        <li className="list-inline-item me-0"><a href="javascript:void(0);" className="d-flex align-self-center text-body"><i className="ti ti-star text-muted me-1" /></a></li>
                        <li className="list-inline-item">
                          <div className="dropdown">
                            <button type="button" className="btn dropdown-toggle hide-arrow p-0" data-bs-toggle="dropdown" aria-expanded="false"><i className="ti ti-dots-vertical text-muted" /></button>
                            <ul className="dropdown-menu dropdown-menu-end">
                              <li><a className="dropdown-item fw-600" href="javascript:void(0);">Rename Team</a></li>
                              <li><a className="dropdown-item fw-600" href="javascript:void(0);">View Details</a></li>
                              <li><a className="dropdown-item fw-600" href="javascript:void(0);">Add to favorites</a></li>
                              <li>
                                <hr className="dropdown-divider" />
                              </li>
                              <li><a className="dropdown-item text-danger" href="javascript:void(0);">Delete Team</a></li>
                            </ul>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <p className="mb-3 text-a-l fw-500">Event is defined as a particular contest which is part of a program of contests. An example of an event is the long…</p>
                  <div className="d-flex align-items-center pt-1">
                    <div className="d-flex align-items-center">
                      <ul className="list-unstyled d-flex align-items-center avatar-group mb-0">
                        <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" title="Vinnie Mostowy" className="avatar avatar-sm pull-up">
                          <img className="rounded-circle" src="../../assets/img/avatars/9.png" alt="Avatar" />
                        </li>
                        <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" title="Allen Rieske" className="avatar avatar-sm pull-up">
                          <img className="rounded-circle" src="../../assets/img/avatars/8.png" alt="Avatar" />
                        </li>
                        <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" title="Julee Rossignol" className="avatar avatar-sm pull-up">
                          <img className="rounded-circle" src="../../assets/img/avatars/7.png" alt="Avatar" />
                        </li>
                        <li className="avatar avatar-sm">
                          <span className="avatar-initial rounded-circle pull-up" data-bs-toggle="tooltip" data-bs-placement="top" title="32 more">+32</span>
                        </li>
                      </ul>
                    </div>
                    <div className="ms-auto">
                      <a href="javascript:;"><span className="badge bg-label-success fw-600">Hubilo</span></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6">
              <div className="card">
                <div className="card-body">
                  <div className="d-flex align-items-center mb-3">
                    <a href="javascript:;" className="d-flex align-items-center">
                      <div className="avatar me-2">
                        <img src="../../assets/img/icons/brands/figma-label.png" alt="Avatar" className="rounded-circle" />
                      </div>
                      <div className="me-2 text-body h5 mb-0 fw-600">
                        Figma Resources
                      </div>
                    </a>
                    <div className="ms-auto">
                      <ul className="list-inline mb-0 d-flex align-items-center">
                        <li className="list-inline-item me-0"><a href="javascript:void(0);" className="d-flex align-self-center text-body"><i className="ti ti-star text-muted me-1" /></a></li>
                        <li className="list-inline-item">
                          <div className="dropdown">
                            <button type="button" className="btn dropdown-toggle hide-arrow p-0" data-bs-toggle="dropdown" aria-expanded="false"><i className="ti ti-dots-vertical text-muted" /></button>
                            <ul className="dropdown-menu dropdown-menu-end">
                              <li><a className="dropdown-item fw-600" href="javascript:void(0);">Rename Team</a></li>
                              <li><a className="dropdown-item fw-600" href="javascript:void(0);">View Details</a></li>
                              <li><a className="dropdown-item fw-600" href="javascript:void(0);">Add to favorites</a></li>
                              <li>
                                <hr className="dropdown-divider" />
                              </li>
                              <li><a className="dropdown-item text-danger" href="javascript:void(0);">Delete Team</a></li>
                            </ul>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <p className="mb-3 text-a-l fw-500">Explore, install, use, and remix thousands of plugins and files published to the Figma Community by designers and developers.</p>
                  <div className="d-flex align-items-center pt-1">
                    <div className="d-flex align-items-center">
                      <ul className="list-unstyled d-flex align-items-center avatar-group mb-0">
                        <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" title="Andrew Mostowy" className="avatar avatar-sm pull-up">
                          <img className="rounded-circle" src="../../assets/img/avatars/5.png" alt="Avatar" />
                        </li>
                        <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" title="Micky Ressula" className="avatar avatar-sm pull-up">
                          <img className="rounded-circle" src="../../assets/img/avatars/1.png" alt="Avatar" />
                        </li>
                        <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" title="Michel Pal" className="avatar avatar-sm pull-up">
                          <img className="rounded-circle" src="../../assets/img/avatars/6.png" alt="Avatar" />
                        </li>
                        <li className="avatar avatar-sm">
                          <span className="avatar-initial rounded-circle pull-up" data-bs-toggle="tooltip" data-bs-placement="top" title="22 more">+22</span>
                        </li>
                      </ul>
                    </div>
                    <div className="ms-auto">
                      <a href="javascript:;" className="me-2"><span className="badge bg-label-success fw-600">UI/UX</span></a>
                      <a href="javascript:;"><span className="badge bg-label-secondary fw-600">Figma</span></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6">
              <div className="card">
                <div className="card-body">
                  <div className="d-flex align-items-center mb-3">
                    <a href="javascript:;" className="d-flex align-items-center">
                      <div className="avatar me-2">
                        <img src="../../assets/img/icons/brands/html-label.png" alt="Avatar" className="rounded-circle" />
                      </div>
                      <div className="me-2 text-body h5 mb-0 fw-600">
                        Only Beginners
                      </div>
                    </a>
                    <div className="ms-auto">
                      <ul className="list-inline mb-0 d-flex align-items-center">
                        <li className="list-inline-item me-0"><a href="javascript:void(0);" className="d-flex align-self-center text-body"><i className="ti ti-star text-muted me-1" /></a></li>
                        <li className="list-inline-item">
                          <div className="dropdown">
                            <button type="button" className="btn dropdown-toggle hide-arrow p-0" data-bs-toggle="dropdown" aria-expanded="false"><i className="ti ti-dots-vertical text-muted" /></button>
                            <ul className="dropdown-menu dropdown-menu-end">
                              <li><a className="dropdown-item fw-600" href="javascript:void(0);">Rename Team</a></li>
                              <li><a className="dropdown-item fw-600" href="javascript:void(0);">View Details</a></li>
                              <li><a className="dropdown-item fw-600" href="javascript:void(0);">Add to favorites</a></li>
                              <li>
                                <hr className="dropdown-divider" />
                              </li>
                              <li><a className="dropdown-item text-danger" href="javascript:void(0);">Delete Team</a></li>
                            </ul>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <p className="mb-3 text-a-l fw-500">Learn the basics of how websites work, front-end vs back-end, and using a code editor. Learn basic HTML, CSS, and…</p>
                  <div className="d-flex align-items-center pt-1">
                    <div className="d-flex align-items-center">
                      <ul className="list-unstyled d-flex align-items-center avatar-group mb-0">
                        <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" title="Kim Karlos" className="avatar avatar-sm pull-up">
                          <img className="rounded-circle" src="../../assets/img/avatars/3.png" alt="Avatar" />
                        </li>
                        <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" title="Katy Turner" className="avatar avatar-sm pull-up">
                          <img className="rounded-circle" src="../../assets/img/avatars/9.png" alt="Avatar" />
                        </li>
                        <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" title="Peter Adward" className="avatar avatar-sm pull-up">
                          <img className="rounded-circle" src="../../assets/img/avatars/5.png" alt="Avatar" />
                        </li>
                        <li className="avatar avatar-sm">
                          <span className="avatar-initial rounded-circle pull-up" data-bs-toggle="tooltip" data-bs-placement="top" title="41 more">+41</span>
                        </li>
                      </ul>
                    </div>
                    <div className="ms-auto">
                      <a href="javascript:;" className="me-2"><span className="badge bg-label-info fw-600">CSS</span></a>
                      <a href="javascript:;"><span className="badge bg-label-warning fw-600">HTML</span></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*/ Teams Cards */}
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

export default ProfileTeam
