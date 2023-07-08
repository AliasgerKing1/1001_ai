import Home from "../../components/pages/Home/Home"
import DataList from "../../components/pages/dataList/DataList"
let userRoutes = [
    {
        path: "home",
        element: <Home />
    },
    {
        path: "data/list",
        element: <DataList />
    }
]

export default userRoutes