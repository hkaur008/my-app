import React, { Component } from 'react';

import './App.css';
import Player from './components/player.js';
class App extends Component {
constructor(props)
{super(props)
  this.state ={
    board : Array(9).fill(null),
  player:null,
winner:null
}
}
checkWinner(){
  let winLines=
  [[ "0","1","2"],
  [ "3","4","5"],
  [ "6","7","8"],
  [ "0","3","6"],
  [ "1","4","7"],
  [ "2","5","8"],
  [ "0","4","8"],
  [ "2","4","6"]]

  for(let index=0;index<winLines.length;index++)
  { const[a,b,c]=winLines[index];
  if(this.state.board[a]&& this.state.board[a]===this.state.board[b]&&this.state.board[b]===this.state.board[c])
{ 
  alert('you won');this.setState(
{winner:this.state.player})
}

}
}
handleClick(index)
{
  if(this.state.player&& !this.state.winner)
  {let newboard=this.state.board
  if(this.state.board[index]===null&& !this.state.winner)
{  newboard[index]=this.state.player
  let newplayer=this.state.player==="X"? "O":"X"
  this.setState({board:newboard,
  player:newplayer
  })
this.checkWinner()
}

console.log(index)}}
setPlayer(player){
console.log(player);
this.setState({player:player})
}
render(){
  const Box=this.state.board.map((box, index) => <div className="box" key={index} 
  onClick={() =>this.handleClick(index)}>{box}</div> )
  return (
<div className="container">
     <h1>tic toe tac
     </h1>
     <Player player={(e) =>this.setPlayer(e)} />
     <br/>
     <div className="board">
      {Box}
    </div>
    </div> 

  );}
}

export default App;
