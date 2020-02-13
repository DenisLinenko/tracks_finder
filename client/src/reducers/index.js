import { combineReducers } from 'redux'
import tracks from './tracks'


export default (history) =>
  combineReducers({
    tracks,
  })
