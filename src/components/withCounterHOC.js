import React from 'react'

const UpdatedComponent = (OriginalComponent) => {
  class NewComponent extends React.Component{

    state = {
      counter:0,
    }

    handleReset = () => (
      this.setState(prevState => {
        return {counter: 0}
      })
    )
    handleAdd = () =>(
      this.setState(prevState => {
        return {counter: prevState.counter + 1}
      })
    )

    render(){
      return <OriginalComponent handleAdd={this.handleAdd} counter={this.state.counter} handleReset={this.handleReset}
      />
    }
  }
  return NewComponent
}

export default UpdatedComponent
