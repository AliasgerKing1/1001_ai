import { useRoutes, Navigate } from "react-router-dom"

// import React from 'react'
// import Error404 from "../components/pages/Error404/Error404"
// import Error500 from "../components/pages/Error500/Error500"
import Layouts from "../Layouts/Layouts"
import gameRoutes from "./Game/Game"
// import SignIn from "../components/pages/SignIn/SignIn"
// import SignUp from "../components/pages/SignUp/SignUp"
// import Landing from "../components/pages/Landing/Landing"


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
        // {
        //     path: "/",
        //     element: isTokenPresent() ? (
        //       <Navigate to="/auth/home" replace />
        //     ) : (
        //       <Landing />
        //     )
        // },
        // {
        //     path: "/signin",
        //     element: isTokenPresent() ? (
        //       <Navigate to="/auth/home" replace />
        //     ) : (
        //       <SignIn />
        //     )
        //   },
        // {
        //     path: "/signup",
        //     element: isTokenPresent() ? (
        //       <Navigate to="/auth/home" replace />
        //     ) : (
        //       <SignUp />
        //     )
        //   },
        //   {
        //     path: "/error500",
        //     element: <Error500 />
        // },
        {
            path: "auth",
            element: <Layouts />,
            children: gameRoutes
        },
        // {
        //     path: "*",
        //     element: <Error404 />
        // }
    ])
    return (router)
}

export default Router
