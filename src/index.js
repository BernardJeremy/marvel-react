import React from 'react';
import ReactDOM from 'react-dom';

import { ApiKey } from './config/keys';

import './reset.css';
import './index.css';

function HeroCard(props) {
  return (
    <article>
      <img className="hero-img" src={props.heroImgSrc} alt=" " />
      <h1 className="hero-name">
        {props.heroName}
      </h1>
    </article>
  );
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
        this.state.heroesArray.map((heroData, i) => {
          return <HeroCard 
            heroName={ heroData.name }
            heroImgSrc={ heroData.thumbnail.path + '.' + heroData.thumbnail.extension }
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
