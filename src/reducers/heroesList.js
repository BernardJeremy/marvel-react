import {
  UPDATE_HEROES_LIST,
} from '../containers/HeroesList/actions'

export default function heroesList(state = {heroesArray: []}, action) {
  switch (action.type) {
    case UPDATE_HEROES_LIST:
      return {heroesArray: action.heroesList}
    default:
      return state
  }
}
