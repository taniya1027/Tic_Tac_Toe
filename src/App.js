import logo from './logo.svg';
import './App.css';

import React, { Component } from 'react'

export class App extends Component {
  constructor(props) {
    super(props)
    let player_turn = "X";
    this.state = {
       board : ["X","","","","","","","","",]
    }
  }
  
  render() {
    return (
      <div>
        <h1>TIC TAC TOE </h1>
        <div className = "board">
          {this.state.board.map((square)=>{
            return <div className = "square">{square}</div>
          })}
        </div>
      </div>
    )
  }
}

export default App;
