import { useRoutes, Navigate } from "react-router-dom"

import React from 'react'
import Error404 from "../components/pages/Error404/Error404"
import Layouts from "../Layouts/Layouts"
import adminRoutes from "./Admin/Admin"
import SignIn from "../components/pages/SignIn/SignIn"
import Landing from "../components/pages/Landing/Landing"
import ForgetLockScreenPass from "../components/pages/ForgetLockScreenPass/ForgetLockScreenPass"
import LockScreenNewPass from "../components/pages/LockScreenNewPass/LockScreenNewPass"

const isBothTokensPresent = () => {
    const adminToken = localStorage.getItem("admin_token");
    const lockScreenToken = localStorage.getItem("lock_screen_token");
    if (adminToken && (lockScreenToken || !lockScreenToken)) {
        return true
      } else {
        return false
      }
  };
const Router = () => {
    const router = useRoutes([
        {
            path: "/",
            element: <Landing />
        },
        {
            path: "/signin",
            element: isBothTokensPresent() ? (
              <Navigate to="/auth/home" replace />
            ) : (
              <SignIn />
            )
          },
        {
            path: "auth",
            element: <Layouts />,
            children: adminRoutes
        },
        {
          path: "lock/screen/forget",
          element: <ForgetLockScreenPass />
      },
        {
          path: "lock/screen/create/new",
          element: <LockScreenNewPass />
      },
        {
            path: "*",
            element: <Error404 />
        }
    ])
    return (router)
}

export default Router
