import React from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types';

import DataList from '../../components/DataList/DataList'
import DataCard from '../../components/DataList/DataCard'

import { updateHeroesList } from './actions';

const PUBLIC_MARVEL_API_KEY = process.env.REACT_APP_PUBLIC_MARVEL_API_KEY;  

class HeroesList extends React.Component {
   componentDidMount() {
    fetch(`https://gateway.marvel.com/v1/public/characters?apikey=${PUBLIC_MARVEL_API_KEY}&limit=40`)
      .then(res => res.json())
      .then(
        (result) => {
          this.props.onHeroesListUpdate(result.data.results);
        },
        (error) => {
          // TODO
        }
      )
  }

  render() {
    return (
      <DataList> {
        this.props.heroesArray.map((hero, i) => {
          return <DataCard
            imgSrc={hero.thumbnail.path + '.' + hero.thumbnail.extension}
            buttonText={hero.name}
            modalTitle={hero.name}
            modalDescription={hero.description}
            key={i}
          />
        })
      }
      </DataList>
    );
  }
}

const mapStateToProps = state => {
  return {
    heroesArray: state.heroesList.heroesArray,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onHeroesListUpdate: heroesData => {
      dispatch(updateHeroesList(heroesData))
    }
  }
}

HeroesList.propTypes = {
  heroesArray: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      thumbnail: PropTypes.shape({
        path: PropTypes.string.isRequired,
        extension: PropTypes.string.isRequired,
      }).isRequired,
      description: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  onHeroesListUpdate: PropTypes.func.isRequired
}

const HeroesListContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(HeroesList)


export default HeroesListContainer
