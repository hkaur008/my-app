import React, { Component } from 'react';
import './player.css';

class Player extends Component {
handleForm(e)
{e.preventDefault();
this.props.player(e.target.player.value)
}


render(){ return (<div className="container">
     <form onSubmit={(e) => this.handleForm(e)}>
         
     CHOOSE PLAYER
     <br/>O:
     <label><input type="radio" name="player" className="option" value="0"></input></label>

      X: <label><input type="radio" name="player" className="option" value="X"></input></label>
      <input type="submit" value="start"></input>
     <hr/>
     
     </form>
    </div> 

  );}
}

export default Player;