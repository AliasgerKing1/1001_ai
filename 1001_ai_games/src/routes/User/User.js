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
import Quiz from '../../components/pages/games/Quiz/Quiz';
import WordScramble from '../../components/pages/games/WordScramble/WordScramble';
import TicTacToe from '../../components/pages/games/TicTacToe/TicTacToe';
import GuessTheNumber from '../../components/pages/games/GuessTheNumber/GuessTheNumber';
import GuessTheName from '../../components/pages/games/GuessTheName/GuessTheName';
import RockPaperScissor from '../../components/pages/games/RockPaperScissor/RockPaperScissor';
import Snake from '../../components/pages/games/Snake/Snake';
import NumberGame from '../../components/pages/games/2048/2048';
import CandyCrush from '../../components/pages/games/CandyCrush/CandyCrush';
import BlackJack from '../../components/pages/games/BlackJack/BlackJack';
import GamesList from '../../components/pages/GamesList/GamesList';
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
    path : "game/quiz",
    element: <Quiz/>
  },
  {
    path : "game/word/scramble",
    element: <WordScramble/>
  },
  {
    path : "game/tictactoe",
    element: <TicTacToe/>
  },
  {
    path : "game/guess/number",
    element: <GuessTheNumber/>
  },
  {
    path : "game/guess/name",
    element: <GuessTheName/>
  },
  {
    path : "game/rockpaperscissor",
    element: <RockPaperScissor/>
  },
  {
    path : "game/snake",
    element: <Snake/>
  },
  {
    path : "game/strategy/2048",
    element: <NumberGame/>
  },
  {
    path : "game/candycrush",
    element: <CandyCrush/>
  },
  {
    path : "game/blackjack",
    element: <BlackJack/>
  },
  {
    path : "games/list",
    element: <GamesList/>
  },
  {
    path : "*",
    element: <NotFoundError />
  },

]
export default useRoutes;
