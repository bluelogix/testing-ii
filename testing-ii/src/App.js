import React, { Component } from 'react';
import Display from './components/Display'
import Dashboard from './components/Dashboard'

import './App.css';



class App extends Component {
  state = {
    balls: 0, //max 4 
    strikes: 0 // max 3
  }


increaseBall = e => {
  if(this.state.balls === 4) {
    this.setState({
      balls: 0
    })
  }else {
    this.setState(prevState => {
    return{
      balls: ++prevState.balls 
        }
     }
    )
  }
}

increaseStrike = e => {
  if(this.state.strikes === 3) {
    this.setState({
      strikes: 0
    })
  } else {
    this.setState(prevState => {
    return{
      strikes: ++prevState.strikes
        }
    
      }
    ) 
  }
}

// a foul increases strikes up to 2. With no strikes, a foul makes it 1 strike. With 1 strike, a foul makes it 2 strikes. With two strikes a foul has no effect, count stays at 2 strikes.

increaseFoul = e => {
  e.preventDefault();
  if(this.state.strikes === 2) {
    this.setState({
      strikes: this.state.strikes
    })
  } else {
  this.setState(prevState => {
    return{
      strikes: ++prevState.strikes
       }
    
    }
  )
}
  
}

recordedHit = e => {
  this.setState({
    balls: 0,
    strikes: 0
    }
  )
}





  render() {
    return (
      <div className="App">
          <Display balls={this.state.balls} strikes={this.state.strikes} />
          <Dashboard increaseBall={this.increaseBall} increaseStrike={this.increaseStrike} recordedHit={this.recordedHit} increaseFoul={this.increaseFoul} />

      </div>
    );
  }
}

export default App;
