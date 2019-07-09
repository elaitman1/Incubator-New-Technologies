import React from 'react';
import { connect } from 'react-redux'
import StopWatch from './StopWatch'
import { Grid } from 'semantic-ui-react'
import WrappedMap from './Map'
import ReduxForm from './ReduxForm'

const App = () => (
  <Grid align="center" celled padded style={{height: '100vh'}}>
    <Grid.Row style={{height: '50%'}}>
      <Grid.Column width={5}>
      <WrappedMap
      googleMapURL={"https://maps.googleapis.com/maps/api/js?key=AIzaSyC4R6AN7SmujjPUIGKdyao2Kqitzr1kiRg&v=3.exp&libraries=geometry,drawing,places&key=AIzaSyAPn53_Wsk8zZ1pejFk09piJawMPOWwDOk"}
      loadingElement={<div style={{height:"100%"}}/>}
      containerElement={<div style={{height:"100%"}}/>}
      mapElement={<div style={{height:"85%"}}/>}
      />
      </Grid.Column>
      <Grid.Column width={6}>
        <StopWatch />
      </Grid.Column>
      <Grid.Column width={5}>
        <ReduxForm />
      </Grid.Column>
    </Grid.Row>
    <Grid.Row style={{height: '50%'}}>
      <Grid.Column width={5}>
        <p>Three</p>
      </Grid.Column>
      <Grid.Column width={6}>
        <p>Four</p>
      </Grid.Column>
      <Grid.Column width={5}>
        <p>Five</p>
      </Grid.Column>
    </Grid.Row>
  </Grid>
)


const mapStateToProps = state => ({
  // todosCount: state.todos.length,
  // completedCount: getCompletedTodoCount(state)
})

export default connect(
  mapStateToProps
)(App);
