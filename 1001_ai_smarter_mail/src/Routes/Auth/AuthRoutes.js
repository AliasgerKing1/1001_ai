/* eslint-disable */
import Calender from '../../Components/Pages/Calender'
import CreateApp from '../../Components/Pages/CreateApp'
import GUIEditor from '../../Components/Pages/GUIEditor'
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
        path : 'calender',
        element : <Calender />
    },
    {
        path : 'figma',
        element : <GUIEditor />
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