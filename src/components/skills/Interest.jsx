import React, { Component } from 'react';
import classes from './Interest.module.css';
// import ScrollAnimation from 'react-animate-on-scroll';
import 'animate.css/animate.min.css';

export default function Interest() {
  return (
    <div className={classes.box} id='interest'>
      {/* <ScrollAnimation
        offset={0}
        animateIn='fadeInLeft'
        duration={2.4}
        animateOnce={true}
        initiallyVisible={true}
      > */}
      <span className={classes.head}>WHAT I DO?</span>
      <h2 className={classes.heading}>HERE ARE SOME OF MY EXPERTISE</h2>
      <div className={classes.Interest}>
      
        <div className={classes.other}>
          <h3>Web Development</h3>
          <p>
            Javascript/ HTML/ CSS, ReactJs, Redux, Tailwind, CSS, UI Libraries (React-Bootstrap), Unit Testing, NodeJs.
          </p>
        </div>
        <div className={classes.app}>
          <h3>Expanded Expertise</h3>
          <p>
           GitHub, Postman, Database design, Express.js, MongoDB, MERN Stack, MYSQL, mongoose, NOSQL.
          </p>
        </div>
        <div className={classes.web}>
          <h3>Fundamental skills</h3>
          <p>
            Object oriented programming, Java(core), Oprating System, Database managment System,Data structures and algorithm, Problem solving.

          </p>
        </div>

        {/* </ScrollAnimation> */}
      </div>
      {/* </ScrollAnimation> */}
    </div>

    
  );
} 
  