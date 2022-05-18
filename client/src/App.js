import React from 'react';
import './styles/App.css';


// import components
import Header from './components/Header';
import Footer from './components/Footer';
import Content from './components/Content'




const App = () => {

  return (
    <div className="App">
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App;