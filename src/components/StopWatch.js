import React from "react";
import styled from 'styled-components'
import { Grid } from 'semantic-ui-react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {clicked} from '../actions'

class StopWatch extends React.Component{

  state = {
    runningTime: 0,
  };

  handleClick = (event) => {
    if(event.target.innerHTML === "Start"){
      debugger
      const startTime = Date.now() - this.state.runningTime;
      this.timer = setInterval(() => {
        this.setState({ runningTime: Date.now() - startTime });
      }, 10)
      this.props.clicked('true')
    }else{
      clearInterval(this.timer);
      this.props.addTodo('false')
    }
  }

  handleReset = () => {
    this.setState({ runningTime: 0, status: false });
  };

  render() {
    const Title = styled.h1`
      font-size: 1.5em;
      text-align: center;
      color: palevioletred;`

  //   const Button = styled.button`
  //   /* Adapt the colors based on primary prop */
  //   background: ${props => props.primary ? "palevioletred" : "white"};
  //   color: ${props => props.primary ? "white" : "palevioletred"};
  //
  //   font-size: 1em;
  //   margin: 1em;
  //   padding: 0.25em 1em;
  //   border: 2px solid palevioletred;
  //   border-radius: 3px;
  // `;

  //   const ButtonTwo = styled.button`
  //   display: inline-block;
  //   color: palevioletred;
  //   font-size: 1em;
  //   margin: 1em;
  //   padding: 0.25em 1em;
  //   border: 2px solid palevioletred;
  //   border-radius: 3px;
  //   display: block;
  // `;

      const { status, runningTime } = this.state;
      let centiseconds = ("0" + (Math.floor(runningTime / 10) % 100)).slice(-2);
      let seconds = ("0" + (Math.floor(runningTime / 1000) % 60)).slice(-2);
      let minutes = ("0" + (Math.floor(runningTime / 60000) % 60)).slice(-2);
      let hours = ("0" + Math.floor(runningTime / 3600000)).slice(-2);
      return (
        <>
        <Grid celled style={{marginTop:'10%'}}>
          <Grid.Row>
          <Grid.Column width={5}>
          </Grid.Column>
          <Grid.Column width={6}>
          <div>
          <Title>Stop Watch</Title>
          <Title>{hours} : {minutes} : {seconds} : {centiseconds}</Title>
          <button style={{
            color: 'palevioletred',
            fontSize: '1em',
            margin: '1em',
            padding: '0.25em 1em',
            border: '2px solid palevioletred',
            borderRadius: '3px' }} onClick={this.handleClick}>{status ? 'Stop' : 'Start'}</button>
            <button style={{
              color: 'palevioletred',
              fontSize: '1em',
              margin: '1em',
              padding: '0.25em 1em',
              border: '2px solid palevioletred',
              borderRadius: '3px' }}onClick={this.handleReset}>Reset</button>
              </div>
          </Grid.Column>
          <Grid.Column width={5}>
          </Grid.Column>
          </Grid.Row>
        </Grid>
              </>
      );
    }
  }
  StopWatch.defaultProps = {
    centiseconds: '00',
    seconds:'00',
    minutes: '00',
    hours:'00',
  }

  StopWatch.propTypes = {
    //
  }

const mapStateToProps = (state) => {
  debugger
  const { stopwatch } = state
    return {clicked: stopwatch.status}
}



export default connect(mapStateToProps)(StopWatch);

//one time stays at the same time one increases and we subtract the difference to get the seconds

// if the inner is start thenwe change it stop and we start the timer. we must also start the running time. then when it is done, we must stop. so to start we need running time and clicked to be true or false
