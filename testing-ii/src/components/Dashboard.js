import React from 'react';

// provide a button that the person in charge can press every time there is a strike, ball, foul or hit.
// there is NO need to specify the type of hit (single, double, etc).
// changes recorded on this component should update the information shown by the Display component.

function Dashboard(props) {
  

  return (
    <>
      <button data-testid='strikebtn' onClick={props.increaseStrike}>Strike</button>
      <button data-testid='ballbtn' onClick={props.increaseBall}>Ball</button>
      <button data-testid='hitbtn' onClick={props.recordedHit}>Hit</button>
      <button data-testid='foulbtn' onClick={props.increaseFoul}>Foul</button>
        
    </>
  );
}

export default Dashboard;





