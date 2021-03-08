import React, { Component } from 'react';
import './App.css';
import TopBar from './Navbar';
import Entry from './Entry';

class Home extends Component {
  render() {
    return (
      <div className="App">
          <TopBar />
          <Entry />
      </div>
    );
  }
}

export default Home;
