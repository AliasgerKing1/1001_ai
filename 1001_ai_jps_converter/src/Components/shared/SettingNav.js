import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
const SettingNav = () => {
  let [whichSettingSelected, setWhichSettingSelected] = useState(0)
  
  const handleTabClick = (tabIndex) => {
    // Set the selected tab index
    setWhichSettingSelected(tabIndex);
  };
  return (
    <>
                    <ul className="nav nav-pills flex-column flex-md-row mb-4">
                <li className="nav-item" onClick={()=>handleTabClick(0)}><NavLink className={`nav-link fw-600 cursor-pointer ${whichSettingSelected !== 0 ? "active" : ""}`} to='/auth/settings/account'><i className="ti-xs ti ti-users me-1"/> Account</NavLink></li>
                <li className="nav-item" onClick={()=>handleTabClick(1)}><NavLink className={`nav-link fw-600 cursor-pointer ${whichSettingSelected == 1 ? "active" : ""}`} to='/auth/settings/security'><i className="ti-xs ti ti-lock me-1"/> Security</NavLink></li>
                <li className="nav-item" onClick={()=>handleTabClick(2)}><NavLink className={`nav-link fw-600 cursor-pointer ${whichSettingSelected == 2 ? "active" : ""}`} to='/auth/settings/billplans'><i className="ti-xs ti ti-file-description me-1" /> Billing &amp; Plans</NavLink></li>
                <li className="nav-item" onClick={()=>handleTabClick(3)}><a className={`nav-link fw-600 cursor-pointer ${whichSettingSelected == 3 ? "active" : ""}`}><i className="ti-xs ti ti-bell me-1" /> Notifications</a></li>
                <li className="nav-item" onClick={()=>handleTabClick(4)}><a className={`nav-link fw-600 cursor-pointer ${whichSettingSelected == 4 ? "active" : ""}`}><i className="ti-xs ti ti-link me-1" /> Connections</a></li>
              </ul>
              </>
  )
}

export default SettingNav
