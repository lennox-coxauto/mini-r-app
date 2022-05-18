import React from 'react';
import './contentScreen.css';
import { log } from '../lib/script';



log("hello world")

export default function Content() {

  return (
    <div className='contentScreen'>
        {/* in-line styling */}
        <h1 style={{color: 'red'}}>LOADING...</h1>

        <button className='contentScreenButton'><span className='contentScreenButtonText'>CLICK</span></button>
    </div>
  )
};

