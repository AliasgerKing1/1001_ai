import Home from '../../Components/pages/Home/Home'
import AccountSettings from '../../Components/pages/Settings/AccountSettings'
import BillingPlanSettings from '../../Components/pages/Settings/BillingPlanSettings'
import SecuritySettings from '../../Components/pages/Settings/SecuritySettings'
const authRoutes = [
    {
        path : 'home',
        element : <Home />
    },
    {
        path : 'settings/account',
        element : <AccountSettings />
    },
    {
        path : 'settings/security',
        element : <SecuritySettings />
    },
    {
        path : 'settings/billplans',
        element : <BillingPlanSettings />
    },
]

export default authRoutes