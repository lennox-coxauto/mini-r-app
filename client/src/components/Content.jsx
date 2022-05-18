import React from 'react';
import './contentScreen.css';
import log from '../lib/script';
import { useState } from 'react';

log("hello world")



export default function Content() {

  // useState for managing data / state (data) management.
  // called a hook in react called useState inside function component
  // useState declare a state variable to call the clicks variable

  const [clicks , incrementCounter] = useState(10) // 0 as initial state. Stored 0 in state

  const increment = () => { incrementCounter(clicks + 1) }
  const decrement = () => { incrementCounter(clicks - 1) }

  
  return (
    <div className='contentScreen'>
        {/* in-line styling */}
        <h1><span style={{color: 'green'}}>Counts:</span> &nbsp; { clicks }</h1>

        <div className='contentScreen-clickButtons'>
            <button className='contentScreenButton' title='Increment Counter' onClick={increment}><span className='contentScreenButtonText'><i>IncrementCounter<br /></i>{clicks}</span></button> &nbsp;
            <button className='contentScreenButton' title='Decrement Counter' onClick={decrement}><span className='contentScreenButtonText'><i>decrementCounter<br /></i>{clicks}</span></button>
        </div>
    </div>
  )
};




