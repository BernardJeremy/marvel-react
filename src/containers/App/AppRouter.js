import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'

import HeroesList from '../HeroesList/HeroesList';

const AppRouter = () => (
  <Switch>
    <Route path="/heroes" component={HeroesList} />
    {/*<Route path="/comics" exact component={Index} />*/}
    {/** Default route when no match found */}
    <Route render={() => <Redirect to="/heroes" />} /> 
  </Switch>
);

export default AppRouter;