import React, { Component } from 'react';
import { Link } from "react-router-dom"
import california from './california.svg';
import blackCat from './black-cat.svg';
import server from './server.svg';
import ai from './ai.svg';
import './App.css';

class AboutMe extends Component {
  render() {
    return (
      <div className="App">
          <img className="imageA" src={california} />
          <img className="imageB" src={blackCat} />
          <img className="imageC" src={server} />
          <img className="imageD" src={ai} />
          <div className="Content-Box">
            <div className="Text-Header">Me,</div>
            <br></br>
            <div className="Text-Body">I've been writing code as a hobby since
            around 17 and I love cats. I'm a vegetarian from the LA area who hates talking about
            themself and loves learning new things.<br></br><br></br>
            Regarding code, I'm a full stack developer with expertise in
            backend technologies and automation. My professional background
            is mostly related to information technology so I know my way
            around a Linux box and am no stranger to automating "the boring
            stuff". This website was built with React and is hosted on a cloud provider in a Docker container.<br></br><br></br>I have a passion for data science and
            analytics and tend to spend more time than I should reading
            ml-related papers. One day I'll get around to using
            Kaggle as more than just place to bum datasets.<br></br>
            <br></br><Link to="/" className="Text-Button">Take me back</Link>
            <Link to="/projects" className="Text-Button">Show me some projects</Link>
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

export default AboutMe;
