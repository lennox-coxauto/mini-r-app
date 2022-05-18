import React from 'react';
import './contentScreen.css';
import log from '../lib/script';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';


log("hello world")



export default function Content() {

/* FIRST TASK 
* @DESC
*   Make it so that you have a counter thats displayed in your content.
*   Every time you click the button, the counter will increment by 1
*   The content should reflect the new counter value.
*/

/* SECOND TASK 
* @DESC
*   When the component starts up, have it make an ajax call to https://online.carshop.com/tenant-data/tenant.json
*   Set the title of the page to the "Title" of that api
*/


  // useState for managing data / state (data) management.
  // called a hook in react called useState inside function component
  // useState declare a state variable to call the clicks variable

  const [clicks , incrementCounter] = useState(10) // 0 as initial state. Stored 0 in state
  //const [data , apiCall ] = useState(10) 
  
  const URL = "https://online.carshop.com/tenant-data/tenant.json";

  const params = {
      method: 'GET',
      url: URL
  };
  
  useEffect(() => {
    
    const returnedData = async () => {
        try {
            const response = await axios(params);
            const { title } = response.data;
            log(title);
            return title;

        } catch (error) {
            if ( error instanceof ReferenceError ) log('reference error');
            if ( error instanceof TypeError ) log('type error');
            else console.error(error);
        }
    }

    returnedData().then(resp => document.title = resp);
  });



  const increment = () => { incrementCounter(clicks + 1) };
  const decrement = () => { incrementCounter(clicks - 1) };

  // Fix me up so that I can use the attributes on the button to control how much to increment by
  const handleClick = () => { 
  };

  
  return (
    <div className='contentScreen'>
        {/* in-line styling */}
        <h1><span style={{color: 'green'}}>Counts:</span> &nbsp; { clicks }</h1>

        <div className='contentScreen-clickButtons'>
            <button className='contentScreenButton' title='Increment Counter' onClick={increment}><span className='contentScreenButtonText'><i>IncrementCounter<br /></i>{clicks}</span></button> &nbsp;
            <button className='contentScreenButton' title='Decrement Counter' onClick={decrement}><span className='contentScreenButtonText'><i>decrementCounter<br /></i>{clicks}</span></button>
            
            <button 
              className='contentScreenButton' 
              title='Increment Counter'
              data-increment="2"
              onClick={handleClick}>
                 <i>Increment by 2</i><br /> {clicks}
            </button>

            <button 
              className='contentScreenButton' 
              title='Increment Counter'
              data-increment="-2"
              onClick={handleClick}>
                 <i>Decrement by 2</i><br /> {clicks}
            </button>
        </div>
    </div>
  )
};




