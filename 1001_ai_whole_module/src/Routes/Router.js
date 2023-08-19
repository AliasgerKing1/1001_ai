import React, { useEffect, useState } from 'react'
import {getUser} from '../Services/UserService'
import { useDispatch, useSelector } from 'react-redux'
import {UserDataRed} from '../Redux/UserReducer'
import {Navigate, useRoutes} from 'react-router-dom'
import Layouts from '../Layouts/Layouts'
import authRoutes from './Auth/AuthRoutes'
import Signup from '../components/pages/Signup/Signup'
import Signin from "../components/pages/Signin/Signin"
import Landing from "../components/pages/Landing/Landing"
import Error404 from '../components/pages/Error404/Error404'
import Home from '../components/pages/Home/Home'
let isTokenPresent = () => {
    const token = localStorage.getItem('whole_token');
    if(token) {
        return true
    } else {
        return false
    }
}


let Router = ()=> {
    let dispatch = useDispatch()
    let state = useSelector(state=>state.UserReducer)

    let userDataFun = async () => {
      let token = localStorage.getItem('whole_token');
      let result = await getUser(token)
      dispatch(UserDataRed(result.data[0]))
    }
    useEffect(()=>{
      if(state.length === undefined) {
        userDataFun()
      }
    }, [])
const router = useRoutes([
    {
        path : '/',
        element : isTokenPresent() ? (
            <Navigate to="/auth/home" replace />
        ) : (<Landing />)
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
        children: authRoutes
    },
    // {
    //     path : '/auth',
    //     element : <Layouts />,
    //     children: [
    //         ...authRoutes,
    //         {
    //             path: 'home',
    //             element: state.plan === 'free' ? (
    //                 <Navigate to="/error" replace />
    //             ) : (
    //                 <Home /> // Render your Home component
    //             )
    //         }
    //     ]
    // },
    {
        path : '/error',
        element : <Error404 />
    }
])

return (router)
}

export default Router