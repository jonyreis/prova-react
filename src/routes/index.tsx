import React from "react";
import { Switch, Route } from "react-router-dom";

import Login from "../pages/Login";
import Logout from "../pages/Logout";


const Routes: React.FC = () => {

  return (
    <Switch>
      <Route path="/" exact component={Login} />
      <Route path="/logout" exact component={Logout} />
    </Switch>
  );
};

export default Routes;
