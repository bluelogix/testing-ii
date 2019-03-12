import React from 'react';

// provide a button that the person in charge can press every time there is a strike, ball, foul or hit.
// there is NO need to specify the type of hit (single, double, etc).
// changes recorded on this component should update the information shown by the Display component.

function Dashboard(props) {
  

  return (
    <>
      <button>Strike</button>
      <button>Ball</button>
      <button>Hit</button>
      <button>Foul</button>
        
    </>
  );
}

export default Dashboard;





