import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import Body from './components/Body.js';

import { render } from '@testing-library/react';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header /> 
        <Body />    
        <Footer />
      </div>
    );
  }                       
}

export default App;
