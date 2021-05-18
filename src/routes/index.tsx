import React from "react";
import { Switch, Route } from "react-router-dom";

import Login from "../pages/Login";
import Registration from '../pages/Registration';


const Routes: React.FC = () => {

  return (
    <Switch>
      <Route path="/" exact component={Login} />
      <Route path="/registration" exact component={Registration} />
    </Switch>
  );
};

export default Routes;
