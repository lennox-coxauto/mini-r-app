import React from "react";


const customFooterStyle = {
    position: 'absolute',
    textAlign: 'center',
    bottom: '0',
    width: '100%',
    height: '2.5rem'
}
const customFooterParagraphStyle = {
    color: '#000000'
}
  




const Footer = ()  => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer style={customFooterStyle}>
      <p style={customFooterParagraphStyle}>Made with ❤️ by Tope {currentYear}</p>
    </footer>
  );
}

export default Footer;