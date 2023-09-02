import React from 'react'

const ProfileHeader = ({state}) => {
  return (
    <>
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
                        <h4 className='fw-bold'>
                          {state?.f_name?.length == 0 ? "Name " : state?.f_name} &nbsp;
                          {state?.l_name?.length == 0 ? "Surname" : state?.l_name}
                        </h4>
                        <ul className="list-inline mb-0 d-flex align-items-center flex-wrap justify-content-sm-start justify-content-center gap-2">
                          <li className="list-inline-item d-flex gap-1 fw-600">
                            <i className="ti ti-color-swatch fw-600" /> Full Stack Developer
                          </li>
                          <li className="list-inline-item d-flex gap-1 fw-600">
                            <i className="ti ti-map-pin fw-600" /> Indore City
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
    </>
  )
}

export default ProfileHeader
