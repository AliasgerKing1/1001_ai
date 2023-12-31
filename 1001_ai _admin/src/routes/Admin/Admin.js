import CrmTable from "../../components/pages/CrmTable/CrmTable"
import Home from "../../components/pages/Home/Home"
import CrmRoleTable from "../../components/pages/CrmRoleTable/CrmRolTable"
import DataList from "../../components/pages/dataList/DataList"
import AddMember from "../../components/pages/AddMember/AddMember"
import LockScreen from "../../components/pages/LockScreen/LockScreen"
let adminRoutes = [
    {
        path: "home",
        element: <Home />
    },
    {
        path: "data/list",
        element: <DataList />
    },
    {
        path: "crm/table",
        element: <CrmTable />
    },
    {
        path: "crm/roles",
        element: <CrmRoleTable />
    },
    {
        path: "crm/add/member",
        element: <AddMember />
    },
    {
        path: "lock/screen",
        element: <LockScreen />
    },
]

export default adminRoutes