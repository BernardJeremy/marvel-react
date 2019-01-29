/*
 * action types
 */

export const UPDATE_HEROES_LIST = 'UPDATE_HEROES_LIST'

/*
 * action creators
 */

export function updateHeroesList(heroesList) {
  return { type: UPDATE_HEROES_LIST, heroesList }
}
