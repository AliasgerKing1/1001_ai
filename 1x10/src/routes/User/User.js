import CommunityFeed from "../../components/pages/CommunityFeed/CommunityFeed"
import FinetuneModel from "../../components/pages/FinetuneModel/FinetuneModel"
import Home from "../../components/pages/Home/Home"
import ImageGeneration from "../../components/pages/ImageGeneration/ImageGeneration"
import PersonalFeed from "../../components/pages/PersonalFeed/PersonalFeed"
import Pricing from "../../components/pages/Pricing/Pricing"
import ChatBot from "../../components/pages/ChatBot/ChatBot"
import Documentation from "../../components/pages/Documentation/Documentation"
import Faq from "../../components/pages/Faq/Faq"
import Contact from "../../components/pages/Contact/Contact"
import ChangeLog from "../../components/pages/ChangeLog/ChangeLog"
import UserBilling from "../../components/pages/UserBilling/UserBilling"
import Setting from "../../components/pages/Setting/Setting"
import Profile from "../../components/pages/Profile/Profile"
import OtherProfile from "../../components/pages/OtherProfile/OtherProfile"

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
        path: "personal/:id",
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
    {
        path: "chat",
        element: <ChatBot />
    },
    {
        path: "documentation",
        element: <Documentation />
    },
    {
        path: "faq",
        element: <Faq />
    },
    {
        path: "contact",
        element: <Contact />
    },
    {
        path: "changelog",
        element: <ChangeLog />
    },
    {
        path: ":id/bill",
        element: <UserBilling />
    },
    {
        path: "user/setting/:id",
        element: <Setting />
    },
    {
        path: "user/profile/:id",
        element: <Profile />
    },
    {
        path: "user/profile/open/:id",
        element: <OtherProfile />
    },
]

export default userRoutes