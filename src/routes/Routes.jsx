import { Route, Routes } from "react-router-dom";
import AdminLayout from "../layouts/AdminLayout";

import {
  AuthDefaultPage,
  DefaultHomePage,
  DefaultPage,
} from "../layouts/DefaultPage";
import { AuthLayout } from "../layouts/AuthLayout";
import ProtectedLayout from "../layouts/ProtectedLayout";
import { AddBets } from "../pages/AddBets";
import { AdminHomepage } from "../pages/AdminHomepage";
import { GameBets } from "../pages/GameBets";
import { Games } from "../pages/Games";
import { Homepage } from "../pages/Homepage";
import { Ranking } from "../pages/Ranking";
import { Rules } from "../pages/Rules";
import { Signin } from "../pages/Signin";
import { SignUp } from "../pages/Signup";
import { UserBets } from "../pages/UserBets";
import { Results } from "../pages/Results";
import { UsersPayment } from "../pages/UsersPayment";

export const Router = () => {
  return (
    <Routes>
      <Route element={<AuthLayout />}>
        <Route element={<AuthDefaultPage />}>
          <Route path="/" element={<Signin />} />
          <Route path="/sign-up" element={<SignUp />} />
        </Route>
      </Route>
      <Route element={<ProtectedLayout />}>
        <Route element={<DefaultHomePage />}>
          <Route path="/homepage" element={<Homepage />} />
        </Route>
        <Route element={<DefaultPage />}>
          <Route path="/add-bets" element={<AddBets />} />
          <Route path="/ranking" element={<Ranking />} />
          <Route path="/games" element={<Games />} />
          <Route path="/rules" element={<Rules />} />
          <Route path="/bets/game/:gameId" element={<GameBets />} />
          <Route path="/bets/user/:userId" element={<UserBets />} />
        </Route>
      </Route>
      <Route element={<AdminLayout />}>
        <Route element={<DefaultHomePage />}>
          <Route path="/admin/homepage" element={<AdminHomepage />} />
        </Route>
        <Route element={<DefaultPage />}>
          <Route path="/admin/add-result" element={<Results />} />
          <Route path="/admin/users-payment" element={<UsersPayment />} />
        </Route>
      </Route>
    </Routes>
  );
};
