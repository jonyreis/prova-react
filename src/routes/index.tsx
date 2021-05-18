import React from "react";
import { Switch, Route } from "react-router-dom";

import Login from "../pages/Login";
import Registration from '../pages/Registration';
import ResetPassword from "../pages/ResetPassword";


const Routes: React.FC = () => {

  return (
    <Switch>
      <Route path="/" exact component={Login} />
      <Route path="/registration" exact component={Registration} />
      <Route path="/reset-password" exact component={ResetPassword} />
    </Switch>
  );
};

export default Routes;
