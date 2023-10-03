import React from 'react'
import {useRoutes, Navigate} from 'react-router-dom'
import rootRoutes from './rootRoutes'
import Layouts from '../Layouts/Layouts'

import Root from '../Components/Pages/Root/Root'
import Signin from '../Components/Pages/Signin/Signin'
import Signup from '../Components/Pages/Signup/Signup'
const Router = () => {
    let isTokenPresent = () => {
        const token = localStorage.getItem('martToken');
        if(token) {
            return true
        } else {
            return false
        }
    }
    const router = useRoutes([
        {
            path : '/',
            element : isTokenPresent() ? (
                <Navigate to="/auth/home" replace />
            ) : (<Root />)
            },
        {
            path : '/signin',
            element : isTokenPresent() ? (
                <Navigate to="/auth/home" replace />
            ) : (<Signin />)
            },
        {
            path : '/signup',
            element : isTokenPresent() ? (
                <Navigate to="/auth/home" replace />
            ) : (<Signup />)
            },
            {
                path : '/auth',
                element : <Layouts />,
                children : rootRoutes
                }
    ])
  return (router)
}

export default Router
