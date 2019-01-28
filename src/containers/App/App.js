import React from 'react'
import AppRouter from './AppRouter'

import MainMenu from '../MainMenu/MainMenu';

const App = () => (
  <div>
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
    <AppRouter />
  </div>
)

export default App
