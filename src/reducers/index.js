import { combineReducers } from 'redux'
import heroesList from './heroesList'
import comicsList from './comicsList'

export default combineReducers({
  heroesList,
  comicsList,
})
