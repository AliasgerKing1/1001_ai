import React, {useState} from 'react'
import { NavLink } from 'react-router-dom'

const ProfileNav = () => {
    let [whichProfileOptionSelected, setWhichProfileOptionSelected] = useState(0)
  
    const handleTabClick = (tabIndex) => {
      // Set the selected tab index
      setWhichProfileOptionSelected(tabIndex);
    };
  return (
    <>
                    <ul className="nav nav-pills flex-column flex-sm-row mb-4">
                <li className="nav-item" onClick={()=>handleTabClick(0)}><NavLink className={`nav-link fw-600 cursor-pointer ${whichProfileOptionSelected !== 0 ? "active" : ""}`} to='/auth/profile/user'><i className="ti ti-user-check me-1 ti-xs" /> Profile</NavLink></li>
                <li className="nav-item" onClick={()=>handleTabClick(1)}><NavLink className={`nav-link fw-600 cursor-pointer ${whichProfileOptionSelected == 1 ? "active" : ""}`} to='/auth/profile/team'><i className="ti ti-users me-1 ti-xs" /> Teams</NavLink></li>
                <li className="nav-item" onClick={()=>handleTabClick(2)}><NavLink className={`nav-link fw-600 cursor-pointer ${whichProfileOptionSelected == 2 ? "active" : ""}`} to='/auth/profile/projects'><i className="ti ti-layout-grid me-1 ti-xs" /> Projects</NavLink></li>
                <li className="nav-item" onClick={()=>handleTabClick(3)}><NavLink className={`nav-link fw-600 cursor-pointer ${whichProfileOptionSelected == 3 ? "active" : ""}`} to='/auth/profile/connections'><i className="ti ti-link me-1 ti-xs" /> Connections</NavLink></li>
              </ul>
    </>
  )
}

export default ProfileNav
