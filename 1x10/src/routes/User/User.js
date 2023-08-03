// import CrmTable from "../../components/pages/CrmTable/CrmTable"
import CommunityFeed from "../../components/pages/CommunityFeed/CommunityFeed"
import FinetuneModel from "../../components/pages/FinetuneModel/FinetuneModel"
import Home from "../../components/pages/Home/Home"
import ImageGeneration from "../../components/pages/ImageGeneration/ImageGeneration"
import PersonalFeed from "../../components/pages/PersonalFeed/PersonalFeed"
import Pricing from "../../components/pages/Pricing/Pricing"
// import CrmRoleTable from "../../components/pages/CrmRoleTable/CrmRolTable"
// import DataList from "../../components/pages/dataList/DataList"
// import AddMember from "../../components/pages/AddMember/AddMember"
// import LockScreen from "../../components/pages/LockScreen/LockScreen"
let userRoutes = [
    {
        path: "home",
        element: <Home />
    },
    {
        path: "pricing",
        element: <Pricing />
    },
    {
        path: "community",
        element: <CommunityFeed />
    },
    {
        path: "personal",
        element: <PersonalFeed />
    },
    {
        path: "models",
        element: <FinetuneModel />
    },
    {
        path: "image/generation",
        element: <ImageGeneration />
    },
]

export default userRoutes