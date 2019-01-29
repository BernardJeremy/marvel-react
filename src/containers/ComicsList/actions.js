/*
 * action types
 */

export const UPDATE_COMICS_LIST = 'UPDATE_COMICS_LIST'

/*
 * action creators
 */

export function updateComicsList(comicsList) {
  return { type: UPDATE_COMICS_LIST, comicsList }
}
