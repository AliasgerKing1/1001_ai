
import React, { useEffect } from 'react'
import { Outlet,useNavigate } from 'react-router-dom'
const Layouts = () => {
  let navigate = useNavigate();
  useEffect(()=> {
    if(! localStorage.getItem("token")) {
      navigate("/")
      }
  })

  return (
    <div>
<Outlet/>
    </div>
  )
}

export default Layouts