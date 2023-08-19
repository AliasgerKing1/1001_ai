import React, { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

const Layouts = () => {
    const navigate = useNavigate();

    useEffect(() => {
      const adminToken = localStorage.getItem("whole_token");
      const lockScreenToken = localStorage.getItem("whole_lock_screen_token");
  
      if (!adminToken && !lockScreenToken) {
        navigate("/signin");
      } else if (!lockScreenToken) {
        navigate("/auth/lock/screen");
      } 
    }, [localStorage.getItem("whole_token"), localStorage.getItem("whole_lock_screen_token")]);
  return (
    <>
      <Outlet />
    </>
  )
}

export default Layouts
