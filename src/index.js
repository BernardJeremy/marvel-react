import React from 'react';
import ReactDOM from 'react-dom';
import Typography from '@material-ui/core/Typography';

import { ApiKey } from './config/keys';


import Modal from './modal';

import './reset.css';
import './index.css';

class HeroCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      heroData: {},
    };
  }

  fetchHeroData() {
    fetch(`http://gateway.marvel.com:80/v1/public/characters/${this.props.heroId}?apikey=${ApiKey.publicApiKey}`)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            heroData: result.data.results[0]
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

class HeroesList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      heroesArray: [],
    };
  }

  componentDidMount() {
    fetch(`http://gateway.marvel.com:80/v1/public/characters?apikey=${ApiKey.publicApiKey}&limit=40`)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            heroesArray: result.data.results
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
      <section className="cards"> {
        this.state.heroesArray.map((hero, i) => {
          return <HeroCard
            heroId={hero.id}
            heroName={hero.name}
            heroImgSrc={hero.thumbnail.path + '.' + hero.thumbnail.extension}
            key={i}
          />
        })
      }
      </section>
    );
  }
}

// ========================================

ReactDOM.render(
  <HeroesList />,
  document.getElementById('root')
);
