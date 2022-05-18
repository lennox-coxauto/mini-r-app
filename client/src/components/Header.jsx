import React from 'react';

// inline-styling
const customHeaderStyle = {
  backgroundColor: 'black',
  margin: '20px',
  height: '80px',
  padding: '16px 32px',
  boxShadow: '0 0 10px 0 rgba(0, 0, 0, 0.3)'
}
const customH1Style = {
  color: '#fff',
  fontFamily: 'San-serif',
  fontWeight: '200'
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