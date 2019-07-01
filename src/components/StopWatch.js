import React from "react";
import styled from 'styled-components'

class StopWatch extends React.Component{

  // handleClick = (event) => {
  //   let x = 0
  //   while(x >= 0){
  //     if(event.value.innerHTML === 'start'){
  //       <div>
  //       {x+=1}
  //       </div>
  //     }else{
  //       <div>{x}</div>
  //     }
  //   }
  // }

  render() {
    return <>
    // <h1>Stop Watch</h1>
    <div>0ms</div>
    <br />
    <button>start</button>
    <button>stop</button>
    </>
  }
}

export default StopWatch

// redux form, native, maps,
