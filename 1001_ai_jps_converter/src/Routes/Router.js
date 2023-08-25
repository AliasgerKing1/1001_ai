
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
const Router = () => {
 const router = useRoutes([
{
path : '/',
element : <Root />
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
