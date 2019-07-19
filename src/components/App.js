import React, {Suspense, lazy} from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux'
import { Grid } from 'semantic-ui-react'

const WrappedMap = lazy(() => import('./Map'))
const StopWatch = lazy(() => import('./StopWatch'))
const ReduxForm = lazy(() => import('./ReduxForm'))
const ClickCounter = lazy(() => import('./ClickCounter'))
const HoverCounter = lazy(() => import('./HoverCounter'))


const App = () => (
  <Grid align="center" celled padded style={{height: '100vh'}}>
  <Suspense fallback={<h1>Still Loading...</h1>}>
    <Grid.Row style={{height: '50%'}}>
      <Grid.Column width={5}>
      <WrappedMap
      googleMapURL={"https://maps.googleapis.com/maps/api/js?key={here}&v=3.exp&libraries=geometry,drawing,places&key=AIzaSyAPn53_Wsk8zZ1pejFk09piJawMPOWwDOk"}
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
        <ClickCounter />
        <HoverCounter />
      </Grid.Column>
      <Grid.Column width={6}>
        <p>Four</p>
      </Grid.Column>
      <Grid.Column width={5}>
        <p>Five</p>
      </Grid.Column>
    </Grid.Row>
  </Suspense>
  </Grid>
)


const mapStateToProps = state => ({
  // todosCount: state.todos.length,
  // completedCount: getCompletedTodoCount(state)
})

export default connect(
  mapStateToProps
)(App);
