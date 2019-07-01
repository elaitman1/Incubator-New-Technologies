import React from 'react';
import { connect } from 'react-redux'
import StopWatch from './StopWatch'
import styled from 'styled-components'
import { Grid} from 'semantic-ui-react'

const App = () => (
      <>
      <StopWatch />
    </>
)


const mapStateToProps = state => ({
  // todosCount: state.todos.length,
  // completedCount: getCompletedTodoCount(state)
})

export default connect(
  mapStateToProps
)(App);
