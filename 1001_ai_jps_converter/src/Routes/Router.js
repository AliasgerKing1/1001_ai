
// let isTokenPresent = () => {
//     const token = localStorage.getItem('whole_token');
//     if(token) {
//         return true
//     } else {
//         return false
//     }
// }


import {useRoutes} from 'react-router-dom'
import Layouts from '../Layouts/Layouts'
import AuthRoutes from './Auth/AuthRoutes'
import Root from '../Components/pages/Root/Root'
import Signup from '../Components/pages/Signup/Signup'
import Signin from '../Components/pages/Signin/Signin'
const Router = () => {
 const router = useRoutes([
{
path : '/',
element : <Root />
},
{
path : '/signup',
element : <Signup />
},
{
path : '/signin',
element : <Signin />
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
