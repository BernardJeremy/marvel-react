import React from 'react';
import Typography from '@material-ui/core/Typography';

import Modal from '../../components/Modal';

import './reset.css';
import './index.css';

const PUBLIC_MARVEL_API_KEY = process.env.REACT_APP_PUBLIC_MARVEL_API_KEY;  

export default class HeroCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      heroData: {},
      alreadyDisplay: false,
    };
  }

  fetchHeroData() {
    if (this.state.alreadyDisplay) {
      return;
    }
    fetch(`http://gateway.marvel.com:80/v1/public/characters/${this.props.heroId}?apikey=${PUBLIC_MARVEL_API_KEY}`)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            heroData: result.data.results[0],
            alreadyDisplay: true,
          });
        },
        (error) => {
          this.setState({
            error
          });
        }
      )
  }

  render() {
    return (
      <article>
        <img className="hero-img" src={this.props.heroImgSrc} alt=" " />
        <Modal 
          buttonText={this.props.heroName}
          onDisplay={this.fetchHeroData.bind(this)}
        >
          <Typography variant="h6" id="modal-title">
            {this.props.heroName}
          </Typography>
          <Typography variant="subtitle1" id="simple-modal-description">
            {this.state.heroData.description}
          </Typography>
        </Modal>
      </article>
    );
  }
}
