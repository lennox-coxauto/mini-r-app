import React from 'react';
import './contentScreen.css';
import { logSomething } from '../lib/script';



const result = logSomething();
console.log(result)

export default function Content() {

  return (
    <div className='contentScreen'>
        {/* in-line styling */}
        <h1 style={{color: 'red'}}>LOADING...</h1>

        <button className='contentScreenButton'><span className='contentScreenButtonText'>CLICK</span></button>
    </div>
  )
};

