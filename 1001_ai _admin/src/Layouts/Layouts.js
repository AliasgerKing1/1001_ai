import React, { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

const Layouts = () => {
  let navigate = useNavigate();
  useEffect(() => {
    if(!localStorage.getItem("admin_token")) {
        navigate("/")
    }
  }, [localStorage.getItem("admin_token")])
  return (
    <div>
      <Outlet />
    </div>
  )
}

export default Layouts
