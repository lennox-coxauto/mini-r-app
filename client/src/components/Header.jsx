import React from 'react';

// inline-styling
const customHeaderStyle = {
  backgroundColor: 'rgb(41,41,41, .9)',
  height: '80px',
  width: '100%',
  position: 'relative',
  top: '0px'
}

const customH1Style = {
  color: '#fff',
  fontFamily: 'San-serif',
  fontWeight: '200',
  paddingTop: '14px'
}


const Header = () => {
  return (
    <div>
        <header style={customHeaderStyle}>
            <h1 style={customH1Style}>Starter</h1>
        </header>
    </div>
  )
}


export default Header