import logo from './logo.svg';
import './App.css';

import React, { Component } from 'react'

export class App extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
       player_turn : "X",
       board : ["","","","","","","","","",]
    }
  }
  
  squareClicked(index){
    let player_turn = this.state.player_turn;
    let board = this.state.board;

    board[index] = player_turn;
   
    if(player_turn === "X")
    {
      player_turn = "O";
    }
    else
    {
      player_turn = "X";
    }

    this.setState({
      player_turn: player_turn,
      board : board
    })
    
     
    let winning_combos = [
      ["0", "1", "2"],
      ["3", "4", "5"],
      ["6", "7", "8"],
      ["0", "4", "8"],
      ["2", "4", "6"],
      ["0", "3", "6"],
      ["1", "4", "7"],
      ["2", "5", "8"]
    ]

   
    for(let i = 0; i < winning_combos.length; i++)
    {
      let winning_row = winning_combos[i];
      let p1 = winning_row[0];
      let p2 = winning_row[1];
      let p3 = winning_row[2]

      if(board[p1] != "" && board[p1] == board[p2] && board[p2] == board[p3] && board[p3] == board[p1])
      {
        alert("Congratulations "+ this.state.player_turn + "has won!");
      }
    }
  }
  
  render() {
    return (
      <div>
        <h1>TIC TAC TOE </h1>
        <div className = "board">
          {this.state.board.map((square, index)=>{
            return (<div onClick = {() => this.squareClicked(index)} className = "square">{square}</div>)
          })}
        </div>
      </div>
    )
  }
}

export default App;
