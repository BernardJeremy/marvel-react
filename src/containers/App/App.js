import React from 'react'
import AppRouter from './AppRouter'

import MainMenu from '../MainMenu/MainMenu';

const App = () => (
  <div>
     <MainMenu
        items={[
          {
            target: "/heroes",
            text: "Heroes",
          },
          {
            target: "/comics",
            text: "Comics",
          },
        ]}
      />,
    <AppRouter />
  </div>
)

export default App
