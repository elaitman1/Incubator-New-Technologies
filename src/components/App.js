import React from 'react';
import { connect } from 'react-redux'
import StopWatch from './StopWatch'

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
