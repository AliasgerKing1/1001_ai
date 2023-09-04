/* eslint-disable */
import React, { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

const Layouts = () => {
  const navigate = useNavigate();

  // useEffect(() => {
  //   const userToken = localStorage.getItem("token");

  //   if (!userToken) {
  //     navigate("/signin");
  //   } 
  // }, [localStorage.getItem("token")]);
  return (
    <>
      <Outlet />
    </>
  )
}

export default Layouts
