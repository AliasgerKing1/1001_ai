import React from 'react'
import {NavLink} from 'react-router-dom'
const Header2 = () => {
  return (
    <>
              <nav className="layout-navbar container-xxl navbar navbar-expand-xl navbar-detached align-items-center bg-navbar-theme" id="layout-navbar">
          <div className="layout-menu-toggle navbar-nav align-items-xl-center me-3 me-xl-0   d-xl-none ">
            <a className="nav-item nav-link px-0 me-xl-4" href="javascript:void(0)">
              <i className="ti ti-menu-2 ti-sm" />
            </a>
          </div>
          <div className="navbar-nav-right d-flex align-items-center" id="navbar-collapse">
            <ul className="navbar-nav flex-row align-items-center ms-auto">
              {/* Language */}
              <li className="nav-item dropdown-language dropdown me-2 me-xl-0">
                <a className="nav-link dropdown-toggle hide-arrow" href="javascript:void(0);" data-bs-toggle="dropdown">
                  <i className="ti ti-language rounded-circle ti-md" />
                </a>
                <ul className="dropdown-menu dropdown-menu-end">
                  <li>
                    <a className="dropdown-item" href="javascript:void(0);" data-language="en">
                      <span className="align-middle">English</span>
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="javascript:void(0);" data-language="fr">
                      <span className="align-middle">French</span>
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="javascript:void(0);" data-language="de">
                      <span className="align-middle">German</span>
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="javascript:void(0);" data-language="pt">
                      <span className="align-middle">Portuguese</span>
                    </a>
                  </li>
                </ul>
              </li>
              {/*/ Language */}
              {/* Style Switcher */}
              <li className="nav-item dropdown-style-switcher dropdown me-2 me-xl-0">
                <a className="nav-link dropdown-toggle hide-arrow" href="javascript:void(0);" data-bs-toggle="dropdown">
                  <i className="ti ti-md ti-sun" />
                </a>
                <ul className="dropdown-menu dropdown-menu-end dropdown-styles">
                  <li>
                    <a className="dropdown-item" href="javascript:void(0);" data-theme="light">
                      <span className="align-middle"><i className="ti ti-sun me-2" />Light</span>
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="javascript:void(0);" data-theme="dark">
                      <span className="align-middle"><i className="ti ti-moon me-2" />Dark</span>
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="javascript:void(0);" data-theme="system">
                      <span className="align-middle"><i className="ti ti-device-desktop me-2" />System</span>
                    </a>
                  </li>
                </ul>
              </li>
              {/* / Style Switcher*/}
              {/* Signup */}
              <li className="nav-item navbar-dropdown dropdown-user dropdow me-2">
                <NavLink to='/signin' className='btn btn-secondary'>Sign In</NavLink>
              </li>
              {/*/ Signup */}
              {/* Signin */}
              <li className="nav-item navbar-dropdown dropdown-user dropdown me-2">
                <NavLink to='/signup' className='btn btn-primary'>Sign Up</NavLink>
              </li>
              {/*/ Signin */}
            </ul>
          </div>
          {/* Search Small Screens */}
          <div className="navbar-search-wrapper search-input-wrapper  d-none ">
            <input type="text" className="form-control search-input container-xxl border-0" placeholder="Search..." aria-label="Search..." />
            <i className="ti ti-x ti-sm search-toggler cursor-pointer" />
          </div>
        </nav>
    </>
  )
}

export default Header2
