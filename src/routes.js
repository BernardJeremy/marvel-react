import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import HeroesList from './containers/HeroesList/HeroesList';

const AppRouter = () => (
  <Router>
      {["/", "/heroes"].map((path, index) => 
        <Route path={path} component={HeroesList} key={index} />
    )}

      {/*<Route path="/comics" exact component={Index} />*/}
  </Router>
);

export default AppRouter;