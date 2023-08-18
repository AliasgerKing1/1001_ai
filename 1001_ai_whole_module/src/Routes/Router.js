import {Navigate, useRoutes} from 'react-router-dom'
import Layouts from '../Layouts/Layouts'
import authRoutes from './Auth/AuthRoutes'
import Signup from '../components/pages/Signup/Signup'
import Signin from "../components/pages/Signin/Signin"
let isTokenPresent = () => {
    const token = localStorage.getItem('token');
    if(token) {
        return true
    } else {
        return false
    }
}

let Router = ()=> {
const router = useRoutes([
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
        children : authRoutes
    }
])

return (router)
}

export default Router