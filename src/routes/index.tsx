import React from 'react';

import { Switch, Route, Redirect } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import Import from '../pages/Import';
import Register from '../pages/Register';

const Routes: React.FC = () => (
  <Switch>
    <Redirect exact from="/" to="/dashboard" />
    <Route exact path="/dashboard" component={Dashboard} />
    <Route path="/import" component={Import} />
    <Route path="/register" component={Register} />
  </Switch>
);

export default Routes;
