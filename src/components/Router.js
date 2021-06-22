import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import App from "../App";
import AddTeam from './AddTeam';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path='/add' component={AddTeam}/>
    </Switch>
  </BrowserRouter>
);

export default Router; 