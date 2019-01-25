import React from 'react';

import Menu from '../../components/Menu/Menu'
import MenuItemLink from '../../components/Menu/MenuItem'

import './menu.css';

const MENU_ITEM_CLASS = "menu-item";

export default function MainMenu(props) {
  return (
    <Menu
      class="main-menu"
    >
      {
        props.items.map((item, i) => {
          return <MenuItemLink
            class={MENU_ITEM_CLASS}
            href={item.target}
            text={item.text}
            key={i}
          />
        })
      }
    </Menu>
  );
}

MainMenu.propTypes = {
};