/* eslint-disable */
import {useRoutes, Navigate} from 'react-router-dom'
import Layouts from '../Layouts/Layouts'
import AuthRoutes from './Auth/AuthRoutes'
const Router = () => {
    let isTokenPresent = () => {
        const token = localStorage.getItem('token');
        if(token) {
            return true
        } else {
            return false
        }
    }
    const router = useRoutes([

{
path : '/auth',
element : <Layouts />,
children : AuthRoutes
}
 ])
 return (router)
}

export default Router
