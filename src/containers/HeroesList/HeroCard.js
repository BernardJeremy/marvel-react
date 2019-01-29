import React from 'react';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';

import Modal from '../../components/Modal';

import './reset.css';
import './index.css';

const HeroCard = (props) => (
  <article>
    <img className="hero-img" src={props.heroImgSrc} alt=" " />
    <Modal
      buttonText={props.heroName}
    >
      <Typography variant="h6" id="modal-title">
        {props.heroName}
      </Typography>
      <Typography variant="subtitle1" id="simple-modal-description">
        {props.heroDescription}
      </Typography>
    </Modal>
  </article>
);

HeroCard.propTypes = {
  heroImgSrc: PropTypes.string.isRequired,
  heroName: PropTypes.string.isRequired,
  heroDescription: PropTypes.string.isRequired,
};

export default HeroCard; 