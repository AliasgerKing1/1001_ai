/*eslint-disable */
import React from 'react';

import Home from '../../components/pages/Home/Home';
import Profile from "../../components/pages/Profile/Profile"
import NotFoundError from "../../components/pages/NotFoundError/NotFoundError";
import SocialDetails from "../../components/pages/SocialDetails/SocialDetails"
import UserProfile from "../../components/pages/UserProfile/UserProfile"
import Users from '../../components/pages/Users/Users';
import Shop from '../../components/pages/Shop/Shop';
import FollowList from '../../components/pages/FollowList/FollowList';
import Feed from '../../components/pages/Feed/Feed';
import MemoryCard from '../../components/pages/games/MemoryCard/MemoryCard';
import Typetest from '../../components/pages/games/TypeTest/Typetest';
import SaveMan from '../../components/pages/games/SaveMan/SaveMan';
let useRoutes = [
  {
    path : "home",
    element: <Home/>
  },
  {
    path : "profile/:id",
    element: <Profile/>
  },
  {
    path : "profile/account/:id",
    element: <SocialDetails/>
  },
  {
    path : "profile/user/:id",
    element: <UserProfile/>
  },
  {
    path : "users",
    element: <Users/>
  },
  {
    path : "profile/follow/:id",
    element: <FollowList/>
  },
  {
    path : "social/feed/:id",
    element: <Feed/>
  },
  {
    path : "shop/:id",
    element: <Shop/>
  },
  {
    path : "game/memory/card",
    element: <MemoryCard/>
  },
  {
    path : "game/typing/test",
    element: <Typetest/>
  },
  {
    path : "game/save/man",
    element: <SaveMan/>
  },
  {
    path : "*",
    element: <NotFoundError />
  },

]
export default useRoutes;
