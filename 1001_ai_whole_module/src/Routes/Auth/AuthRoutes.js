
import Home from "./../../components/pages/Home/Home" 
import LockScreen from "./../../components/pages/LockScreen/LockScreen" 

let authRoutes = [
    {
        path: 'home',
        element : <Home />
},
    {
        path: 'lock/screen',
        element : <LockScreen />
},
]

export default authRoutes