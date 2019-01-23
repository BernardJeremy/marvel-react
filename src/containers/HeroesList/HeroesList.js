import React from 'react';

import HeroCard from './HeroCard'

import './index.css';

const PUBLIC_MARVEL_API_KEY = process.env.REACT_APP_PUBLIC_MARVEL_API_KEY;  

export default class HeroesList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      heroesArray: [],
    };
  }

  componentDidMount() {
    fetch(`http://gateway.marvel.com:80/v1/public/characters?apikey=${PUBLIC_MARVEL_API_KEY}&limit=40`)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            heroesArray: result.data.results,
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
