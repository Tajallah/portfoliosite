import React, { Component } from 'react';
import Particles from "react-tsparticles";
import particlesOptions from "./particles.json";

 
class Particle extends Component {

  render() {
    return (
      <div className="Particle-Box">
        <Particles options={particlesOptions}/> 
      </div>
    );
  }  
}
export default Particle