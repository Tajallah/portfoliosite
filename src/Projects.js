import React, { Component } from 'react';
import { Link } from "react-router-dom"
import None from './none.svg';
import './App.css';

class Projects extends Component {
  render() {
    return (
      <div className="App">
          <img className="None" src={None} />
          <div className="Content-Box">
            <div className="Text-Header">This page is still under construction</div>
            <br></br>
            <div className="Text-Body">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec arcu et massa condimentum laoreet. Nullam justo urna, ultricies ac dolor sed, facilisis tincidunt quam. Nunc sem metus, bibendum et porta ac, maximus ut ipsum. Curabitur et varius mi. Cras maximus, dolor id condimentum tristique, enim massa pulvinar diam, sit amet porta nisi quam et dui. Quisque cursus ipsum nec libero fermentum, sed aliquet felis dictum. Sed vel dolor scelerisque, pulvinar urna quis, pharetra dolor. Donec at ultricies nisl, ac pretium turpis. Mauris non malesuada erat. Nunc et imperdiet nunc. Sed pellentesque metus tortor, a pellentesque nulla egestas nec. Duis imperdiet odio sit amet faucibus euismod. Nullam pulvinar eu metus sit amet varius. Nulla consequat aliquam tellus et vestibulum.
    
            <br></br><Link to="/" className="Text-Button">Take me back</Link>
          </div>
          <br></br><br></br>
          <div className="attribution">Icons made by <a href="https://www.flaticon.com/authors/roundicons" title="Roundicons">Roundicons</a>,{' '}
          <a href="https://www.flaticon.com/authors/iconixar" title="iconixar">iconixar</a>,{' '}
          <a href="https://www.flaticon.com/authors/smashicons" title="Smashicons">Smashicons</a> and{' '}
          <a href="https://www.freepik.com" title="Freepik">Freepik</a>,{' '}
          from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
          </div>
      </div>
    );
  }
}

export default Projects;