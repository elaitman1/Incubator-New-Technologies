import * as types from '../constants/ActionTypes'

const initialState =
  {
    startClicked:false,
  }

// export default function stopwatch(state = initialState, action){
//   switch(action.type){
//     case types.START_CLICKED:
//       return {
//         ...state
//       }
//     default:
//       return state
//   }
// }

export default function stopwatch(state = initialState, action){
  switch(action.type){
    case types.CHANGE_START_CLICKED_STATUS:
      return {
        ...state,
        startClicked:action.payload,
        }
    default:
      return state
  }
}
