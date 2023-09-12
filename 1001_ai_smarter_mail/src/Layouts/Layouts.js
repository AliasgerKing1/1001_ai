/* eslint-disable */
import React, { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

const Layouts = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const adminToken = localStorage.getItem("dev_system_token");

    if (!adminToken) {
      navigate("/signin");
    } 
  }, [localStorage.getItem("dev_system_token")]);
  return (
    <>
      <Outlet />
    </>
  )
}

export default Layouts
