import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { useSelector, RootStateOrAny } from 'react-redux';

import Login from "../pages/Login";
import Registration from '../pages/Registration';
import ForgotPassword from "../pages/ForgotPassword";
import Home from "../pages/Home";
import NewBet from "../pages/NewBet";
import ResetPassword from "../pages/ResetPassword";
import Account from "../pages/Account";


const Routes: React.FC = () => {
  const { auth } = useSelector((state: RootStateOrAny) => state)

  const publicRoute = (Component: React.FC) =>
  auth.token ? () => <Redirect to="/home" /> : Component

  const privateRoute = (Component: React.FC) =>
  auth.token ? Component : () => <Redirect to="/" />

  return (
    <Switch>
      <Route path="/" exact component={publicRoute(Login)} />
      <Route path="/registration" exact component={publicRoute(Registration)} />
      <Route path="/forgot-password" exact component={publicRoute(ForgotPassword)} />
      <Route path="/reset-password" exact component={publicRoute(ResetPassword)} />
      <Route path="/home" exact component={privateRoute(Home)} />
      <Route path="/new-bet" exact component={privateRoute(NewBet)} />
      <Route path="/account" exact component={privateRoute(Account)} />
    </Switch>
  );
};

export default Routes;
