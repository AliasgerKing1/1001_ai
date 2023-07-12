import { useRoutes } from "react-router-dom"

import React from 'react'
import Error404 from "../components/pages/Error404/Error404"
import Layouts from "../Layouts/Layouts"
import adminRoutes from "./Admin/Admin"
import SignIn from "../components/pages/SignIn/SignIn"
import Landing from "../components/pages/Landing/Landing"
const Router = () => {
    const router = useRoutes([
        {
            path: "/",
            element: <Landing />
        },
        {
            path: "/signin",
            element: <SignIn />
        },
        {
            path: "auth",
            element: <Layouts />,
            children: adminRoutes
        },
        {
            path: "*",
            element: <Error404 />
        }
    ])
    return (router)
}

export default Router
