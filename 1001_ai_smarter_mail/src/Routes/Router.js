/* eslint-disable */
import {useRoutes, Navigate} from 'react-router-dom'
import Layouts from '../Layouts/Layouts'
import AuthRoutes from './Auth/AuthRoutes'
import Signin from '../Components/Pages/Signin'
const Router = () => {
    let isTokenPresent = () => {
        const token = localStorage.getItem("dev_system_token");
        if(token) {
            return true
        } else {
            return false
        }
    }
    const router = useRoutes([
        {
            path : '/signin',
            element : isTokenPresent() ? (<Navigate to="/auth/home" replace />) : (<Signin />)
        },
{
path : '/auth',
element : <Layouts />,
children : AuthRoutes
},
 ])
 return (router)
}

export default Router
