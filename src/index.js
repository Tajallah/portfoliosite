import React from 'react';
import ReactDOM from 'react-dom';
import Home from './Homepage';
import TopBar from './Navbar';
import Particle from './Background';
import Fade from './Fade'
import './index.css';

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <TopBar />
    <Home />
    <Fade />
    <Particle />
  </React.StrictMode>,
  rootElement
);
