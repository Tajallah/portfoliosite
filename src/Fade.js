import React, { Component } from 'react';

const stl = {
    background: 'linear-gradient(to right, rgba(58,63,74,0), rgba(58,63,74,0.05), rgba(58,63,74,0.1), rgba(58,63,74,0.2), rgba(58,63,74,0.9), rgba(58,63,74,1)',
    position: "absolute",
    width: "100%",
    height: "100%",
    zIndex: "-100"
  }
 
class Fade extends Component {
  render() {
    return (
      <div style={stl}>
          {' '}
      </div>
    );
  }  
}
export default Fade