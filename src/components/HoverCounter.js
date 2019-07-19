import React, { Component} from 'react'
import UpdatedComponent from './withCounterHOC'

const HoverCounter = ({handleAdd, handleReset, counter}) =>
<>
<h1 onMouseOver={handleAdd}>On Mouse Over: {counter}</h1>
<button onClick={handleReset}>reset</button>
</>

export default UpdatedComponent(HoverCounter)
