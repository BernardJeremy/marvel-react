import React from 'react';
import { Link } from 'react-router-dom'

import Menu from '../../components/Menu/Menu'

import './menu.css';

const MENU_ITEM_CLASS = "menu-item";

export default function MainMenu(props) {
  return (
    <Menu
      class="main-menu"
    >
      {
        props.items.map((item, i) => {
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