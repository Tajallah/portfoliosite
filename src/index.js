import React from 'react';
import ReactDOM from 'react-dom';
import Main from './Main'

import './index.css';

const rootElement = document.getElementById("root");
document.body.style.overflow = "hidden"
ReactDOM.render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>,
  rootElement
);
