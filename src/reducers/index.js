import { combineReducers } from 'redux'
import stopwatch from './stopwatch'
import {reducer as formReducer } from 'redux-form'
const rootReducer = combineReducers({
  stopwatch,
  form: formReducer
})

export default rootReducer
