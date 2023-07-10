
import { useRoutes } from "react-router-dom"

import React from 'react'
import Home from "../components/pages/home/Home.js"
const Router = () => {
    const router = useRoutes([
        {
            path: "/",
            element: <Home />
        },
    ])
    return (router)
}

export default Router

