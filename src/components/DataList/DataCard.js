import React from 'react';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';

import Modal from '../Modal/Modal';

import './index.css';

const DataCard = (props) => (
  <article>
    <img className="hero-img" src={props.imgSrc} alt=" " />
    <Modal
      buttonText={props.buttonText}
    >
      <Typography variant="h6" id="modal-title">
        {props.modalTitle}
      </Typography>
      <Typography variant="subtitle1" id="simple-modal-description">
        {props.modalDescription}
      </Typography>
    </Modal>
  </article>
);

DataCard.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  modalTitle: PropTypes.string.isRequired,
  modalDescription: PropTypes.string,
};

export default DataCard; 