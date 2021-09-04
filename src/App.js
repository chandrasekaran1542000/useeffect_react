import React, { useState, useEffect } from 'react';
import './style.css';

const Practice = props => {
  const [value, setValue] = useState(0);

  const Click = () => {
    setValue(value + 1);
  };
  useEffect(() => {
    console.log('useEffect called!');
    return()=>{
      console.log("cleaned up");
    }
  }, [value]);
  return (
    <div>
      <h1>
        {value} {props.name}
      </h1>
      <button onClick={Click}>BUTTON</button>
    </div>
  );
};
export default function App() {
  return (
    <div>
      <h1>Hello chandra!</h1>
      <Practice name="times" />
    </div>
  );
}
