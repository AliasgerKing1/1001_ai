import {useRoutes, Navigate} from 'react-router-dom'
import Layouts from '../Layouts/Layouts'
import AuthRoutes from './Auth/AuthRoutes'
import Root from '../Components/pages/Root/Root'
import Signup from '../Components/pages/Signup/Signup'
import Signin from '../Components/pages/Signin/Signin'
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
children : AuthRoutes
}
 ])
 return (router)
}

export default Router
