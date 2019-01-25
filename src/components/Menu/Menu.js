import React from 'react';
import PropTypes from 'prop-types';

export default function Menu(props) {
  return (
    <nav className={props.class}>
      {props.children}
    </nav>
  );
}

Menu.propTypes = {
  class: PropTypes.string.isRequired,
};