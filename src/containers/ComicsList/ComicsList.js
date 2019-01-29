import React from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types';

import DataList from '../../components/DataList/DataList'
import DataCard from '../../components/DataList/DataCard'

import { updateComicsList } from './actions';

const PUBLIC_MARVEL_API_KEY = process.env.REACT_APP_PUBLIC_MARVEL_API_KEY;  

class ComicsList extends React.Component {
   componentDidMount() {
    fetch(`https://gateway.marvel.com/v1/public/comics?apikey=${PUBLIC_MARVEL_API_KEY}&limit=40`)
      .then(res => res.json())
      .then(
        (result) => {
          this.props.onComicsListUpdate(result.data.results);
        },
        (error) => {
          // TODO
        }
      )
  }

  render() {
    return (
      <DataList> {
        this.props.comicsArray.map((comicsElem, i) => {
          return <DataCard
            imgSrc={comicsElem.thumbnail.path + '.' + comicsElem.thumbnail.extension}
            buttonText={comicsElem.title}
            modalTitle={comicsElem.title}
            modalDescription={comicsElem.description}
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
    comicsArray: state.comicsList.comicsArray,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onComicsListUpdate: comicsData => {
      dispatch(updateComicsList(comicsData))
    }
  }
}

ComicsList.propTypes = {
  comicsArray: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      thumbnail: PropTypes.shape({
        path: PropTypes.string.isRequired,
        extension: PropTypes.string.isRequired,
      }).isRequired,
      description: PropTypes.string,
    }).isRequired
  ).isRequired,
  onComicsListUpdate: PropTypes.func.isRequired
}

const ComicsListContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ComicsList)


export default ComicsListContainer
