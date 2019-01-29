import React from 'react';
import PropTypes from 'prop-types';

const Menu = (props) => ( 
  <nav className={props.class}>
    {props.children}
  </nav>
);

Menu.propTypes = {
  class: PropTypes.string.isRequired,
};

export default Menu;