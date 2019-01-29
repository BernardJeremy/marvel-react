import React from 'react';
import PropTypes from 'prop-types';

const MenuItemLink = (props) => (
  <a
    href={props.href}
    className={props.class}
  >
    {props.text}
  </a>
);

MenuItemLink.propTypes = {
  class: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default MenuItemLink;