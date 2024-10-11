import React from 'react'

const Event = () => {
    const handleClick = () =>{
        alert('You click the button')
    };
  return (
    <div>
<h1>we are learning events</h1>
<button onClick={handleClick}>Click this button</button>
    </div>
  );
};

export default Event
