import React from 'react'
import Footer from '../../shared/Footer'
import Sidebar from '../../shared/Sidebar'
import Header from '../../shared/Header'
import ProfileNav from '../../shared/ProfileNav'
import ProfileHeader from '../../shared/ProfileHeader'
import { useSelector } from 'react-redux'

const ProfileConnections = () => {
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
            <span className="text-muted fw-light fw-600">User Profile /</span> Connections
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
          {/* Connection Cards */}
          <div className="row g-4">
            <div className="col-xl-4 col-lg-6 col-md-6">
              <div className="card">
                <div className="card-body text-center">
                  <div className="dropdown btn-pinned">
                    <button type="button" className="btn dropdown-toggle hide-arrow p-0" data-bs-toggle="dropdown" aria-expanded="false"><i className="ti ti-dots-vertical text-muted" /></button>
                    <ul className="dropdown-menu dropdown-menu-end">
                      <li><a className="dropdown-item fw-600" href="javascript:void(0);">Share connection</a></li>
                      <li><a className="dropdown-item fw-600" href="javascript:void(0);">Block connection</a></li>
                      <li>
                        <hr className="dropdown-divider" />
                      </li>
                      <li><a className="dropdown-item text-danger fw-600" href="javascript:void(0);">Delete</a></li>
                    </ul>
                  </div>
                  <div className="mx-auto my-3">
                    <img src="/assets/img/avatars/3.png" alt="Avatar Image" className="rounded-circle w-px-100" />
                  </div>
                  <h4 className="mb-1 card-title fw-600">Mark Gilbert</h4>
                  <span className="pb-1 fw-500">UI Designer</span>
                  <div className="d-flex align-items-center justify-content-center my-3 gap-2">
                    <a href="javascript:;" className="me-1"><span className="badge bg-label-secondary fw-600">Figma</span></a>
                    <a href="javascript:;"><span className="badge bg-label-warning fw-600">Sketch</span></a>
                  </div>
                  <div className="d-flex align-items-center justify-content-around my-3 py-1">
                    <div>
                      <h4 className="mb-0 fw-600">18</h4>
                      <span className='fw-500'>Projects</span>
                    </div>
                    <div>
                      <h4 className="mb-0 fw-600">834</h4>
                      <span className='fw-500'>Tasks</span>
                    </div>
                    <div>
                      <h4 className="mb-0 fw-600">129</h4>
                      <span className='fw-500'>Connections</span>
                    </div>
                  </div>
                  <div className="d-flex align-items-center justify-content-center">
                    <a href="javascript:;" className="btn btn-primary d-flex align-items-center me-3 fw-600"><i className="ti-xs me-1 ti ti-user-check me-1" />Connected</a>
                    <a href="javascript:;" className="btn btn-label-secondary btn-icon"><i className="ti ti-mail ti-sm" /></a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6">
              <div className="card">
                <div className="card-body text-center">
                  <div className="dropdown btn-pinned">
                    <button type="button" className="btn dropdown-toggle hide-arrow p-0" data-bs-toggle="dropdown" aria-expanded="false"><i className="ti ti-dots-vertical text-muted" /></button>
                    <ul className="dropdown-menu dropdown-menu-end">
                      <li><a className="dropdown-item fw-600" href="javascript:void(0);">Share connection</a></li>
                      <li><a className="dropdown-item fw-600" href="javascript:void(0);">Block connection</a></li>
                      <li>
                        <hr className="dropdown-divider" />
                      </li>
                      <li><a className="dropdown-item text-danger fw-600" href="javascript:void(0);">Delete</a></li>
                    </ul>
                  </div>
                  <div className="mx-auto my-3">
                    <img src="/assets/img/avatars/12.png" alt="Avatar Image" className="rounded-circle w-px-100" />
                  </div>
                  <h4 className="mb-1 card-title fw-600">Eugenia Parsons</h4>
                  <span className="pb-1 fw-500">Developer</span>
                  <div className="d-flex align-items-center justify-content-center my-3 gap-2">
                    <a href="javascript:;" className="me-1"><span className="badge bg-label-danger fw-600">Angular</span></a>
                    <a href="javascript:;"><span className="badge bg-label-info fw-600">React</span></a>
                  </div>
                  <div className="d-flex align-items-center justify-content-around my-3 py-1">
                    <div>
                      <h4 className="mb-0 fw-600">112</h4>
                      <span className='fw-500'>Projects</span>
                    </div>
                    <div>
                      <h4 className="mb-0 fw-600">23.1k</h4>
                      <span className='fw-500'>Tasks</span>
                    </div>
                    <div>
                      <h4 className="mb-0 fw-600">1.28k</h4>
                      <span className='fw-500'>Connections</span>
                    </div>
                  </div>
                  <div className="d-flex align-items-center justify-content-center">
                    <a href="javascript:;" className="btn btn-label-primary d-flex align-items-center me-3 fw-600"><i className="ti-xs me-1 ti ti-user-plus me-1" />Connect</a>
                    <a href="javascript:;" className="btn btn-label-secondary btn-icon"><i className="ti ti-mail ti-sm" /></a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6">
              <div className="card">
                <div className="card-body text-center">
                  <div className="dropdown btn-pinned">
                    <button type="button" className="btn dropdown-toggle hide-arrow p-0" data-bs-toggle="dropdown" aria-expanded="false"><i className="ti ti-dots-vertical text-muted" /></button>
                    <ul className="dropdown-menu dropdown-menu-end">
                      <li><a className="dropdown-item fw-600" href="javascript:void(0);">Share connection</a></li>
                      <li><a className="dropdown-item fw-600" href="javascript:void(0);">Block connection</a></li>
                      <li>
                        <hr className="dropdown-divider" />
                      </li>
                      <li><a className="dropdown-item text-danger fw-600" href="javascript:void(0);">Delete</a></li>
                    </ul>
                  </div>
                  <div className="mx-auto my-3">
                    <img src="/assets/img/avatars/5.png" alt="Avatar Image" className="rounded-circle w-px-100" />
                  </div>
                  <h4 className="mb-1 card-title fw-600">Francis Byrd</h4>
                  <span className="pb-1 fw-500">Developer</span>
                  <div className="d-flex align-items-center justify-content-center my-3 gap-2">
                    <a href="javascript:;" className="me-1"><span className="badge bg-label-info fw-600">React</span></a>
                    <a href="javascript:;"><span className="badge bg-label-primary fw-600">HTML</span></a>
                  </div>
                  <div className="d-flex align-items-center justify-content-around my-3 py-1">
                    <div>
                      <h4 className="mb-0 fw-600">32</h4>
                      <span className='fw-500'>Projects</span>
                    </div>
                    <div>
                      <h4 className="mb-0 fw-600">1.25k</h4>
                      <span className='fw-500'>Tasks</span>
                    </div>
                    <div>
                      <h4 className="mb-0 fw-600">890</h4>
                      <span className='fw-500'>Connections</span>
                    </div>
                  </div>
                  <div className="d-flex align-items-center justify-content-center">
                    <a href="javascript:;" className="btn btn-label-primary d-flex align-items-center me-3 fw-600"><i className="ti-xs me-1 ti ti-user-plus me-1" />Connect</a>
                    <a href="javascript:;" className="btn btn-label-secondary btn-icon"><i className="ti ti-mail ti-sm" /></a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6">
              <div className="card">
                <div className="card-body text-center">
                  <div className="dropdown btn-pinned">
                    <button type="button" className="btn dropdown-toggle hide-arrow p-0" data-bs-toggle="dropdown" aria-expanded="false"><i className="ti ti-dots-vertical text-muted" /></button>
                    <ul className="dropdown-menu dropdown-menu-end">
                      <li><a className="dropdown-item fw-600" href="javascript:void(0);">Share connection</a></li>
                      <li><a className="dropdown-item fw-600" href="javascript:void(0);">Block connection</a></li>
                      <li>
                        <hr className="dropdown-divider" />
                      </li>
                      <li><a className="dropdown-item text-danger fw-600" href="javascript:void(0);">Delete</a></li>
                    </ul>
                  </div>
                  <div className="mx-auto my-3">
                    <img src="/assets/img/avatars/8.png" alt="Avatar Image" className="rounded-circle w-px-100" />
                  </div>
                  <h4 className="mb-1 card-title fw-600">Leon Lucas</h4>
                  <span className="pb-1 fw-500">UI/UX Designer</span>
                  <div className="d-flex align-items-center justify-content-center my-3 gap-2">
                    <a href="javascript:;" className="me-1"><span className="badge bg-label-secondary fw-600">Figma</span></a>
                    <a href="javascript:;" className="me-1"><span className="badge bg-label-warning fw-600">Sketch</span></a>
                    <a href="javascript:;"><span className="badge bg-label-primary">Photoshop</span></a>
                  </div>
                  <div className="d-flex align-items-center justify-content-around my-3 py-1">
                    <div>
                      <h4 className="mb-0 fw-600">86</h4>
                      <span className='fw-500'>Projects</span>
                    </div>
                    <div>
                      <h4 className="mb-0 fw-600">12.4k</h4>
                      <span className='fw-500'>Tasks</span>
                    </div>
                    <div>
                      <h4 className="mb-0 fw-600">890</h4>
                      <span className='fw-500'>Connections</span>
                    </div>
                  </div>
                  <div className="d-flex align-items-center justify-content-center">
                    <a href="javascript:;" className="btn btn-label-primary d-flex align-items-center me-3 fw-600"><i className="ti-xs me-1 ti ti-user-plus me-1" />Connect</a>
                    <a href="javascript:;" className="btn btn-label-secondary btn-icon"><i className="ti ti-mail ti-sm" /></a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6">
              <div className="card">
                <div className="card-body text-center">
                  <div className="dropdown btn-pinned">
                    <button type="button" className="btn dropdown-toggle hide-arrow p-0" data-bs-toggle="dropdown" aria-expanded="false"><i className="ti ti-dots-vertical text-muted" /></button>
                    <ul className="dropdown-menu dropdown-menu-end">
                      <li><a className="dropdown-item fw-600" href="javascript:void(0);">Share connection</a></li>
                      <li><a className="dropdown-item fw-600" href="javascript:void(0);">Block connection</a></li>
                      <li>
                        <hr className="dropdown-divider" />
                      </li>
                      <li><a className="dropdown-item text-danger fw-600" href="javascript:void(0);">Delete</a></li>
                    </ul>
                  </div>
                  <div className="mx-auto my-3">
                    <img src="/assets/img/avatars/9.png" alt="Avatar Image" className="rounded-circle w-px-100" />
                  </div>
                  <h4 className="mb-1 card-title fw-600">Jayden Rogers</h4>
                  <span className="pb-1 fw-500">Full Stack Developer</span>
                  <div className="d-flex align-items-center justify-content-center my-3 gap-2">
                    <a href="javascript:;" className="me-1"><span className="badge bg-label-info fw-600">React</span></a>
                    <a href="javascript:;" className="me-1"><span className="badge bg-label-danger fw-600">Angular</span></a>
                    <a href="javascript:;"><span className="badge bg-label-primary fw-600">HTML</span></a>
                  </div>
                  <div className="d-flex align-items-center justify-content-around my-3 py-1">
                    <div>
                      <h4 className="mb-0 fw-600">244</h4>
                      <span className='fw-500'>Projects</span>
                    </div>
                    <div>
                      <h4 className="mb-0 fw-600">23.8k</h4>
                      <span className='fw-500'>Tasks</span>
                    </div>
                    <div>
                      <h4 className="mb-0 fw-600">2.14k</h4>
                      <span className='fw-500'>Connections</span>
                    </div>
                  </div>
                  <div className="d-flex align-items-center justify-content-center">
                    <a href="javascript:;" className="btn btn-primary d-flex align-items-center me-3"><i className="ti-xs me-1 ti ti-user-check me-1" />Connected</a>
                    <a href="javascript:;" className="btn btn-label-secondary btn-icon"><i className="ti ti-mail ti-sm" /></a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6">
              <div className="card">
                <div className="card-body text-center">
                  <div className="dropdown btn-pinned">
                    <button type="button" className="btn dropdown-toggle hide-arrow p-0" data-bs-toggle="dropdown" aria-expanded="false"><i className="ti ti-dots-vertical text-muted" /></button>
                    <ul className="dropdown-menu dropdown-menu-end">
                      <li><a className="dropdown-item fw-600" href="javascript:void(0);">Share connection</a></li>
                      <li><a className="dropdown-item fw-600" href="javascript:void(0);">Block connection</a></li>
                      <li>
                        <hr className="dropdown-divider" />
                      </li>
                      <li><a className="dropdown-item text-danger fw-600" href="javascript:void(0);">Delete</a></li>
                    </ul>
                  </div>
                  <div className="mx-auto my-3">
                    <img src="/assets/img/avatars/10.png" alt="Avatar Image" className="rounded-circle w-px-100" />
                  </div>
                  <h4 className="mb-1 card-title fw-600">Jeanette Powell</h4>
                  <span className="pb-1 fw-500">SEO</span>
                  <div className="d-flex align-items-center justify-content-center my-3 gap-2">
                    <a href="javascript:;" className="me-1"><span className="badge bg-label-success fw-600">Writing</span></a>
                    <a href="javascript:;"><span className="badge bg-label-secondary fw-600">Analysis</span></a>
                  </div>
                  <div className="d-flex align-items-center justify-content-around my-3 py-1">
                    <div>
                      <h4 className="mb-0 fw-600">32</h4>
                      <span className='fw-500'>Projects</span>
                    </div>
                    <div>
                      <h4 className="mb-0 fw-600">1.28k</h4>
                      <span className='fw-500'>Tasks</span>
                    </div>
                    <div>
                      <h4 className="mb-0 fw-600">1.27k</h4>
                      <span className='fw-500'>Connections</span>
                    </div>
                  </div>
                  <div className="d-flex align-items-center justify-content-center">
                    <a href="javascript:;" className="btn btn-label-primary d-flex align-items-center me-3 fw-600"><i className="ti-xs me-1 ti ti-user-plus me-1" />Connect</a>
                    <a href="javascript:;" className="btn btn-label-secondary btn-icon"><i className="ti ti-mail ti-sm" /></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*/ Connection Cards */}
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

export default ProfileConnections