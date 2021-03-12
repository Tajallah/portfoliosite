import React, { Component } from 'react';
import Home from './Homepage';
import TopBar from './Navbar';
import Particle from './Background';
import AboutMe from './aboutMe'
import Fade from './Fade'
import Projects from './Projects'
import './index.css';

import {
    Switch,
    Route,
    BrowserRouter as Router,
  } from "react-router-dom";

  import {
    TransitionGroup,
    CSSTransition
  } from "react-transition-group";

class Main extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    render() {
     return (
        <Router>
            <TopBar />
            <Route render={({location}) => (
            <TransitionGroup>
            <CSSTransition
            mountOnEnter={false}
            unmountOnExit={true}
            classNames="move"
            key={location.key}
            timeout={
                {appear:1000,
                enter:1400,
                exit:1000}
            }>
                <div className="move">
                <Switch location={location}>
                    <Route path="/aboutme" component={AboutMe} />
                    <Route path="/projects" component={Projects} />
                    <Route path="/" component={Home} />
                </Switch>
                </div>
            </CSSTransition>
            </TransitionGroup> )} />
            <Fade />
            <Particle />
        </Router>
      );
    }
  }

export default Main    