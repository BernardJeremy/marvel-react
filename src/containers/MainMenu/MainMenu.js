import React from 'react';
import { Link } from 'react-router-dom'

import Menu from '../../components/Menu/Menu'

import './menu.css';

const MENU_ITEM_CLASS = "menu-item";
const MENU_ITEM_LIST= [
  {
    target: "/heroes",
    text: "Heroes",
  },
  {
    target: "/comics",
    text: "Comics",
  },
];

export default function MainMenu(props) {
  return (
    <Menu
      class="main-menu"
    >
      {
        MENU_ITEM_LIST.map((item, i) => {
          return <Link
            to={item.target}
            className={MENU_ITEM_CLASS}
            key={i}
          >
          {item.text}
          </Link>
        })
      }
    </Menu>
  );
}

MainMenu.propTypes = {
};