import * as types from '../constants/ActionTypes'

export const changeStartClickedStatus = value => {

  return ({
    type: types.CHANGE_START_CLICKED_STATUS,
    payload: !value
  })
}
