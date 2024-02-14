import React from 'react';
const Player = (props)=> {
   return (
      <h2>I'm a Player: My name {props.name} and my score is {props.score}</h2>
   );
}
export default Player;