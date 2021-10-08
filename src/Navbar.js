import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";

class TopBar extends Component {
  render() {
    return (
          <nav>
            <Link to="/aboutme">about me</Link>{' · '}
            <Link to="/contact">contact</Link>{' · '}
            <a href="https://github.com/Tajallah">github</a>{' · '}
            <a href="https://www.linkedin.com/in/tajallah-sims-97521413b/">linkedin</a>{' · '}
            <a href="https://www.kaggle.com/tajallah">kaggle</a>{' · '}
            <Link to="https://github.com/Tajallah">projects</Link>
          </nav>
    );
  }
}

export default TopBar;