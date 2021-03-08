import React, { Component } from 'react';
import { Link } from "react-router-dom"
import './App.css';

class Entry extends Component {
  render() {
    return (
      <div className="App">

          <div className="Content-Box">
            <div className="Text-Header">Hello there,</div>
            <br></br>
            <div className="Text-Body">I’m a self-taught software developer and technology
            enthusiast with a particular interest in artifical intelligence
            and decentralized network applications.<br></br><br>
            </br>This is my portfolio/blog<br></br><br></br>
            <Link to="/aboutme" className="Text-Button">I'd like to know more</Link>
          </div>
          </div>
      </div>
    );
  }
}

export default Entry;