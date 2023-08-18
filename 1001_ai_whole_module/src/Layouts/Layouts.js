import React, { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

const Layouts = () => {
    const navigate = useNavigate();

    useEffect(()=> {
        const token = localStorage.getItem("token")
        if(!token) {
            navigate("/signin")
        }
    }, [localStorage.getItem("token")])
  return (
    <>
      <Outlet />
    </>
  )
}

export default Layouts
