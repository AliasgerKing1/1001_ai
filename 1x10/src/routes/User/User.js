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
        path: "bill",
        element: <UserBilling />
    },
    {
        path: "user/:id/setting",
        element: <Setting />
    },
    {
        path: "user/:id/profile",
        element: <Profile />
    },
]

export default userRoutes