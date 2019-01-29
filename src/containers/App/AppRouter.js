import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'

import HeroesList from '../HeroesList/HeroesList';
import ComicsList from '../ComicsList/ComicsList';

const AppRouter = () => (
  <Switch>
    <Route path="/heroes" exact component={HeroesList} />
    <Route path="/comics" exact component={ComicsList} />
    {/** Default route when no match found */}
    <Route render={() => <Redirect to="/heroes" />} /> 
  </Switch>
);

export default AppRouter;