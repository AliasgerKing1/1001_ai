import Home from '../../Components/Pages/Home/Home'
import CreateApp from '../../Components/Pages/CreateApp/CreateApp'

const authRoutes = [
    {
        path : 'home',
        element : <Home />
    },
    {
        path : 'create/app',
        element : <CreateApp />
    },
]

export default authRoutes