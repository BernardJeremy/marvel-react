import {
  UPDATE_HEROES_LIST,
  UPDATE_HERO_DATA,
} from '../containers/HeroesList/actions'

export default function heroesList(state = {heroesArray: []}, action) {
  switch (action.type) {
    case UPDATE_HEROES_LIST:
      return {...state, heroesArray: action.heroesList}
    case UPDATE_HERO_DATA:
      const updatedHeroesArray = state.map((hero) => {
        if (action.heroData.id === hero.id) {
          return Object.assign({}, hero, {
            description: action.heroData.description
          });
        }
        return hero;
      })
      return {...state, heroesArray: updatedHeroesArray};
    default:
      return state
  }
}
