import { useRoutes } from "react-router-dom"

import React from 'react'
import Signup from "../components/User/pages/Signup/Signup"
import Error404 from "../components/User/pages/Error404/Error404"
import Layouts from "../Layouts/Layouts"
import userRoutes from "./User/User"
import SignIn from "../components/User/pages/SignIn/SignIn"
import Landing from "../components/User/pages/Landing/Landing"
const Router = () => {
    const router = useRoutes([
        {
            path: "/",
            element: <Landing />
        },
        {
            path: "/signup",
            element: <Signup />
        },
        {
            path: "/signin",
            element: <SignIn />
        },
        {
            path: "auth",
            element: <Layouts />,
            children: userRoutes
        },
        {
            path: "*",
            element: <Error404 />
        }
    ])
    return (router)
}

export default Router
