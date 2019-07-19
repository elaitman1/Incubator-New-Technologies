import React from 'react'
import UpdatedComponent from './withCounterHOC'

// class ClickCounter extends React.Component{
//
//   render(){
//     const {handleAdd, handleReset, counter} = this.props
//     return(
//       <div >
//       <button onClick={handleAdd}>add</button>
//       <div>{counter}</div>
//       <button onClick={handleReset}>reset</button>
//       <br />
//       <br />
//       <br />
//     </div>
//     )
//   }
//
// }

const ClickCounter = ({handleAdd, handleReset, counter}) => {
  return <>
  <button onClick={handleAdd}>add</button>
  <div>{counter}</div>
  <button onClick={handleReset}>reset</button>
  </>
}




export default UpdatedComponent(ClickCounter)
