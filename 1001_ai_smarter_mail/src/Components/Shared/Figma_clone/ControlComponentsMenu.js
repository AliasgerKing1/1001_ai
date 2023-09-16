import React from 'react'
import { NavLink } from 'react-router-dom'
import { useDispatch } from 'react-redux'
const ControlComponentsMenu = () => {
  let dispatch = useDispatch()
  return (
    <>
<aside id="layout-menu" className="layout-menu menu-vertical menu bg-menu-theme" data-bg-class="bg-menu-theme" style={{touchAction: 'none', userSelect: 'none'}}>
{/* onClick={()=>dispatch(selectToggleRed(false))} */}
{/* , overflowY : 'scroll', height : 'auto' */}
<div className="app-brand demo">
  <NavLink to="/auth/home" className="app-brand-link">
    <span className="app-brand-logo demo">
      <svg width={32} height={22} viewBox="0 0 32 22" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M0.00172773 0V6.85398C0.00172773 6.85398 -0.133178 9.01207 1.98092 10.8388L13.6912 21.9964L19.7809 21.9181L18.8042 9.88248L16.4951 7.17289L9.23799 0H0.00172773Z" fill="#7367F0" />
        <path opacity="0.06" fillRule="evenodd" clipRule="evenodd" d="M7.69824 16.4364L12.5199 3.23696L16.5541 7.25596L7.69824 16.4364Z" fill="#161616" />
        <path opacity="0.06" fillRule="evenodd" clipRule="evenodd" d="M8.07751 15.9175L13.9419 4.63989L16.5849 7.28475L8.07751 15.9175Z" fill="#161616" />
        <path fillRule="evenodd" clipRule="evenodd" d="M7.77295 16.3566L23.6563 0H32V6.88383C32 6.88383 31.8262 9.17836 30.6591 10.4057L19.7824 22H13.6938L7.77295 16.3566Z" fill="#7367F0" />
      </svg>
    </span>
    <span className="app-brand-text demo menu-text fw-bold">Vuexy</span>
  </NavLink>
  <a href="javascript:void(0);" className="layout-menu-toggle menu-link text-large ms-auto">
    <i className="ti menu-toggle-icon d-none d-xl-block ti-sm align-middle" />
    <i className="ti ti-x d-block d-xl-none ti-sm align-middle" />
  </a>
</div>
<div className="menu-inner-shadow" />
<ul className="menu-inner py-1">
<li className="menu-item">
    <NavLink className="menu-link fs-1">
      <i className="menu-icon tf-icons ti ti-frame fs-2" />
      <div data-i18n="Chat" className="truncate-text">My Profile</div>
    </NavLink>
  </li>
<li className="menu-item ms-2">
    <NavLink className="menu-link fs-1">
      <i className="menu-icon tf-icons ti ti-layout-2 fs-2" />
      <div data-i18n="Chat" className="truncate-text">Auto Layout(Vertical)</div>
    </NavLink>
  </li>
  
  <li className="menu-item ms-4">
    <NavLink className="menu-link fs-1">
      <i className="menu-icon tf-icons ti ti-rectangle fs-2" />
      <div data-i18n="Create_App" className="truncate-text">Rectangle</div>
    </NavLink>
  </li>
  <li className="menu-item ms-4">
    <NavLink className="menu-link fs-1">
      <i className="menu-icon tf-icons ti ti-letter-t fs-2" />
      <div data-i18n="Create_App" className="truncate-text">Heading</div>
    </NavLink>
  </li>
  <li className="menu-item ms-4">
    <NavLink className="menu-link fs-1">
      <i className="menu-icon tf-icons ti ti-letter-t fs-2" />
      <div data-i18n="Create_App" className="truncate-text">Text</div>
    </NavLink>
  </li>
  <li className="menu-item ms-4">
    <NavLink className="menu-link fs-1">
    <i className="menu-icon tf-icons ti ti-layout-2 fs-2" />
      <div data-i18n="Chat" className="truncate-text">Auto Layout(Horizontal)</div>
    </NavLink>
  </li>

  <li className="menu-item ms-5">
    <NavLink className="menu-link fs-1">
    <i className="menu-icon tf-icons ti ti-layout-2 fs-2" />
      <div data-i18n="Chat" className="truncate-text">Auto Layout(Horizontal)</div>
    </NavLink>
    </li>
  <li className="menu-item ms-5">
    <NavLink className="menu-link fs-1">
    <i className="menu-icon tf-icons ti ti-layout-2 fs-2" />
      <div data-i18n="Chat" className="truncate-text">Auto Layout(Vertical)</div>
    </NavLink>
    </li>
  <li className="menu-item ms-5 ps-3">
    <NavLink className="menu-link fs-1">
      <i className="menu-icon tf-icons ti ti-polygon fs-2" />
      <div data-i18n="Support" className="truncate-text">Polygon</div>
    </NavLink>
  </li>
  <li className="menu-item ms-5 ps-3">
    <NavLink className="menu-link fs-1">
    <i className="menu-icon tf-icons ti ti-layout-2 fs-2" />
      <div data-i18n="Chat" className="truncate-text">Auto Layout(Horizontal)</div>
    </NavLink>
  </li>
  <li className="menu-item ms-5 ps-5">
    <NavLink className="menu-link fs-1">
    <i className="menu-icon tf-icons ti ti-layout-2 fs-2" />
      <div data-i18n="Chat" className="truncate-text">Auto Layout(Horizontal)</div>
    </NavLink>
  </li>
</ul>
</aside>
    </>
  )
}

export default ControlComponentsMenu


{/* Dashboards */}
  {/* <li className="menu-item">
    <a href="javascript:void(0);" className="menu-link fs-1 menu-toggle">
      <i className="menu-icon tf-icons ti ti-smart-home" />
      <div data-i18n="Dashboards">Dashboards</div>
      <div className="badge bg-primary rounded-pill ms-auto">3</div>
    </a>
    <ul className="menu-sub">
      <li className="menu-item">
        <a href="index.html" className="menu-link fs-1">
          <div data-i18n="Analytics">Analytics</div>
        </a>
      </li>
      <li className="menu-item">
        <a href="dashboards-crm.html" className="menu-link fs-1">
          <div data-i18n="CRM">CRM</div>
        </a>
      </li>
      <li className="menu-item">
        <a href="app-ecommerce-dashboard.html" className="menu-link fs-1">
          <div data-i18n="eCommerce">eCommerce</div>
        </a>
      </li>
      <li className="menu-item">
        <a href="app-logistics-dashboard.html" className="menu-link fs-1">
          <div data-i18n="Logistics">Logistics</div>
        </a>
      </li>
      <li className="menu-item">
        <a href="app-academy-dashboard.html" className="menu-link fs-1">
          <div data-i18n="Academy">Academy</div>
        </a>
      </li>
    </ul>
  </li> */}
  {/* Apps & Pages */}
  {/* <li className="menu-header small text-uppercase">
    <span className="menu-header-text fl fw-600">Apps</span>
  </li> */}