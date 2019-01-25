import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import HeroesList from './containers/HeroesList/HeroesList';
import MainMenu from './containers/MainMenu/MainMenu';

import reducers from './reducers/index';

const store = createStore(reducers);

ReactDOM.render(
  <Provider store={store}>
    <MainMenu 
      items={[
        {
          target: "#1",
          text: "Heroes",
        },
        {
          target: "#2",
          text: "Comics",
        },
      ]}
    />,
    <HeroesList />,
  </Provider>,
  document.getElementById('root')
);
