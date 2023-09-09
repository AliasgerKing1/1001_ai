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

 ])
 return (router)
}

export default Router
