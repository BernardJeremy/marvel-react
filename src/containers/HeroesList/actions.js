/*
 * action types
 */

export const UPDATE_HEROES_LIST = 'UPDATE_HEROES_LIST'
export const UPDATE_HERO_DATA = 'UPDATE_HERO_DATA'

/*
 * action creators
 */

export function updateHeroesList(heroesList) {
  return { type: UPDATE_HEROES_LIST, heroesList }
}

export function updateHeroData(heroData) {
  return { type: UPDATE_HERO_DATA, heroData }
}
