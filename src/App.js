import React, { Component } from 'react';
import Header from './Components/Header/header';
import Footer from './Components/Footer/footer';
import Content from './Components/Content/Content';
import './App.css';

class App extends Component {

  state = {
  }
  render() {
    return (
      <div className="App">
        <Header/>
        <Content/>
        <Footer/>
      </div>
    );
  }
}

export default App;
