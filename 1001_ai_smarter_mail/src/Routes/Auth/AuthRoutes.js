/* eslint-disable */
import CreateApp from '../../Components/Pages/CreateApp'
import Home from '../../Components/Pages/Home'
import Signin_basic from '../../InitDesigns/Apps/Signin/Vuexy_Basic_Signin'
import Signin_cover from '../../InitDesigns/Apps/Signin/Vuexy_Cover_Signin'
const authRoutes = [
    {
        path : 'create/app',
        element : <CreateApp />
    },
    {
        path : 'home',
        element : <Home />
    },
    {
        path : 'signin/basic',
        element : <Signin_basic />
    },
    {
        path : 'signin/cover',
        element : <Signin_cover />
    },
]

export default authRoutes