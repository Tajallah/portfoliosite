import React, { Component } from 'react';
import './App.css';

class TopBar extends Component {
  render() {
    return (
      <div className="App">
          <div className="Top-Nav">
            contact{' · '}
            about me{' · '}
            <a href="https://github.com/Tajallah">github</a>{' · '}
            <a href="https://www.linkedin.com/in/tajallah-sims-97521413b/">linkedin</a>{' · '}
            <a href="https://www.kaggle.com/tajallah">kaggle</a>{' · '}
            projects
          </div>
      </div>
    );
  }
}

export default TopBar;