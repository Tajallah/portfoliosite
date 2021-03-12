import React, { Component } from 'react';

const stl = {
    overflow: "hidden",
    height: "125%",
    width: "100%",
    backgroundColor: "#000",
    borderRadius: "80%",
    position: "absolute",
    width: "75%",
    top: "-10%",
    right: "-20%",
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