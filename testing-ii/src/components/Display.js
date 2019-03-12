import React from 'react';

// display the count of balls and strikes for the at-bat.
// should be updated when the user records activity on the Dashboard component.

function Display(props) {
  

  return (
      <>
      <h3>Batter Up!</h3>
        <p> Balls {props.balls}</p>
        <p> Strikes {props.strikes}</p>
   
    </>
  );
}

export default Display;





