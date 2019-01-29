import {
  UPDATE_COMICS_LIST,
} from '../containers/ComicsList/actions'

export default function comicsList(state = {comicsArray: []}, action) {
  switch (action.type) {
    case UPDATE_COMICS_LIST:
      return {comicsArray: action.comicsList}
    default:
      return state
  }
}
