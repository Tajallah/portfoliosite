import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <style>
          @import url('https://fonts.googleapis.com/css2?family=Montserrat+Alternates:wght@100;400&display=swap');
          </style>
          <div className="Top-Nav">
            contact
          </div>
          <div className="Top-Nav">
            about me
          </div>
          <div className="Top-Nav">
            <a href="https://github.com/Tajallah">github</a>
          </div>
          <div className="Top-Nav">
            <a href="https://www.linkedin.com/in/tajallah-sims-97521413b/">linkedin</a>
          </div>
          <div className="Top-Nav">
            <a href="https://www.kaggle.com/tajallah">kaggle</a>
          </div>
          <div className="Top-Nav">
            projects
          </div>
          <div className="Content-Box">
            <div className="Text-Header">Hello there,</div>
            <br></br>
            <div className="Text-Body">I’m a self-taught software developer and technology
            enthusiast with a particular interest in artifical intelligence
            and decentralized network applications.<br></br><br>
            </br>This is my portfolio/blog<br></br><br></br>
            <a className="Text-Button">I'd like to know more</a>
          </div>
          </div>
      </div>
    );
  }
}

export default App;
