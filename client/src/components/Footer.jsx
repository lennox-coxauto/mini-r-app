import React from "react";


const customFooterStyle = {
    position: 'absolute',
    textAlign: 'center',
    bottom: '0px',
    width: '100%',
    height: '1.9rem',
    marginTop: '20px'
}
const customFooterParagraphStyle = {
    color: '#000000'
}
  




const Footer = ()  => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer style={customFooterStyle}>
      <p style={customFooterParagraphStyle}>Copyright &copy; {currentYear}</p>
    </footer>
  );
}

export default Footer;