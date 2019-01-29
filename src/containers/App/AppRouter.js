import React from 'react';
import { Switch, Route } from 'react-router-dom'

import HeroesList from '../HeroesList/HeroesList';

const AppRouter = () => (
  <Switch>
      {["/", "*/heroes"].map((path, index) => 
        <Route exact path={path} component={HeroesList} key={index} />
    )}
    {/*<Route path="/comics" exact component={Index} />*/}
  </Switch>
);

export default AppRouter;