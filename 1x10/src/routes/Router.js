import { useRoutes, Navigate } from "react-router-dom"

import React from 'react'
// import Error404 from "../components/pages/Error404/Error404"
import Layouts from "../Layouts/Layouts"
import userRoutes from "./User/User"
import SignIn from "../components/pages/SignIn/SignIn"
import SignUp from "../components/pages/SignUp/SignUp"
import Landing from "../components/pages/Landing/Landing"


const isTokenPresent = () => {
    const userToken = localStorage.getItem("token");
    if (userToken) {
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
            element: isTokenPresent() ? (
              <Navigate to="/auth/home" replace />
            ) : (
              <SignIn />
            )
          },
        {
            path: "/signup",
            element: isTokenPresent() ? (
              <Navigate to="/auth/home" replace />
            ) : (
              <SignUp />
            )
          },
        {
            path: "auth",
            element: <Layouts />,
            children: userRoutes
        },
        // {
        //     path: "*",
        //     element: <Error404 />
        // }
    ])
    return (router)
}

export default Router
