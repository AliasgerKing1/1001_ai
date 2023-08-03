import React, { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

const Layouts = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const adminToken = localStorage.getItem("admin_token");
    const lockScreenToken = localStorage.getItem("lock_screen_token");

    if (!adminToken && !lockScreenToken) {
      navigate("/signin");
    } else if (!lockScreenToken) {
      navigate("/auth/lock/screen");
    } 
  }, [localStorage.getItem("admin_token"), localStorage.getItem("lock_screen_token")]);
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default Layouts;
