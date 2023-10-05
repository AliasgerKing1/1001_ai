import Home from '../Components/Pages/Home/Home'
import MyAccount from '../Components/Pages/MyAccount/MyAccount'
import Shop from '../Components/Pages/Shop/Shop'
const authRoutes = [
    {
        path : "home",
        element : <Home />
    },
    {
        path : "account",
        element : <MyAccount />
    },
    {
        path : "shop/:category",
        element : <Shop />
    },
]

export default authRoutes