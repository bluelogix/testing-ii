import React, { Component } from 'react';
import Display from './components/Display'
import Dashboard from './components/Dashboard'

import './App.css';


// Count Rules
// balls and strikes reset to 0 when a player reaches 3 strikes or 4 balls.
// balls and strikes reset to 0 when a hit is recorded.
// a foul increases strikes up to 2. With no strikes, a foul makes it 1 strike. With 1 strike, a foul makes it 2 strikes. With two strikes a foul has no effect, count stays at 2 strikes.

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

increaseFoul = e => {
  this.setState(prevState => {
    return{
      strikes: prevState.strikes++
       }
    
    }
  )
}





  render() {
    return (
      <div className="App">
          <Display balls={this.state.balls} strikes={this.state.strikes} />
          <Dashboard increaseBall={this.increaseBall} increaseStrike={this.increaseStrike}/>

      </div>
    );
  }
}

export default App;
