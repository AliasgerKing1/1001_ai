import Signin_basic from '../../InitDesigns/Apps/Signin/vuexy_basic_signin'
import Signin_cover from '../../InitDesigns/Apps/Signin/vuexy_cover_signin'
const authRoutes = [
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