import * as types from '../constants/ActionTypes'

const initialState =
  {
    clicked:false,
  }

export default function stopwatch(state = initialState, action){
  switch(action.type){
    case types.CLICKED:
      return {
        ...state,
          status:true,
        }
    default:
      return state
  }
}
