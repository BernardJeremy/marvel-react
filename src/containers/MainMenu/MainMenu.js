import React from 'react';
import { Link } from 'react-router-dom'

import Menu from '../../components/Menu/Menu'

import './menu.css';

const MENU_ITEM_LIST = [
  {
    target: "/heroes",
    text: "Heroes",
  },
  {
    target: "/comics",
    text: "Comics",
  },
];

const MainMenu = (props) => (
  <Menu class="main-menu" >
    {
      MENU_ITEM_LIST.map((item, i) => {
        return <Link
          to={item.target}
          className="menu-item"
          key={i}
        >
          {item.text}
        </Link>
      })
    }
  </Menu>
)

export default MainMenu;