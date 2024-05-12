import React, { Component } from 'react';
import classes from './About.module.css';
// import ScrollAnimation from 'react-animate-on-scroll';
import 'animate.css/animate.min.css';

class About extends Component {
  render() {
    return (
      <div className={classes.box} id='about'>
        {/* <ScrollAnimation
          offset={0}
          animateIn='fadeInLeft'
          duration={2.4}
          animateOnce={true}
          initiallyVisible={true}
        > */}
        <span className={classes.head}>ABOUT ME</span>
        <h2 className={classes.heading}>Who Am I?</h2>
        <div className={classes.About}>
          <p>
            Hi! this is <b>Vaishnavi</b>. I am a passionate developer having experience in{' '}
            <b>React js</b> & <b>Node js</b> development complemented by backend expertise and
            I'm currently working at{' '}
            <b>
              <a className={classes.link} target='_blank' href='https://www.sodalessolutions.com/'>
               SodalesLabs
              </a>
            </b>{' '}
            as a <b>Software Developer Engineer.</b> I am much interested in developing new things
            which excite me a lot. :)
          </p>
          <p className={classes.br}>
            I love exploring new technologies and being a practitioner, I like to stay on top of
            latest trends. I try to leave every line of code I write more readable, accessible, and
            modular. My problem-solving mindset and active GitHub profile showcase my commitment to
            innovative and collaborative coding.
          </p>
        </div>
        {/* </ScrollAnimation> */}
      </div>
    );
  }
}

export default About;
   