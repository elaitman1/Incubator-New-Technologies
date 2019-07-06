import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/App';
import configureStore from './store/configureStore';
import { Grid } from 'semantic-ui-react'

const cacheStore = window.localStorage.getItem('store') || {};
const store = configureStore(cacheStore);

render(
  <Provider store={store}>
  <Grid align="center" celled padded style={{height: '100vh'}}>
    <Grid.Row style={{height: '50%'}}>
      <Grid.Column width={5}>
        <p>One</p>
      </Grid.Column>
      <Grid.Column width={6}>
        <App />
      </Grid.Column>
      <Grid.Column width={5}>
        <p>Three</p>
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
  </Provider>,
  document.getElementById('root'),
);

//i must redux form, map, jest with tests, react native.
