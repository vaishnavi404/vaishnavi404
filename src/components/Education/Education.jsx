import React, { Component } from 'react';
import classes from './Education.module.css';
// import ScrollAnimation from 'react-animate-on-scroll';
import 'animate.css/animate.min.css';
import { MdSchool } from 'react-icons/md';
import { MdWork } from 'react-icons/md';
import { FaSchool } from 'react-icons/fa';

class Education extends Component {
  render() {
    return (
      <div className={classes.box} id='education'>
        {/* <ScrollAnimation
          offset={0}
          animateIn='fadeInLeft'
          duration={2}
          animateOnce={true}
          initiallyVisible={true}
        > */}
        <span className={classes.head}>MY JOURNEY</span>
        <section className={classes.container}>
          <div>
            <div className={classes.row}>
              <div className={classes.row_md_12}>
                <div className={classes.timeline_centered}>
                  {/* <ScrollAnimation
                      offset={0}
                      animateIn='fadeInLeft'
                      duration={2.4}
                      animateOnce={true}
                      initiallyVisible={true}
                    > */}
                  <article className={classes.timeline_entry}>
                    <div className={`${classes.timeline_icon} ${classes.timeline_icon_5}`}>
                      <MdWork />
                    </div>
                    <div className={classes.label}>
                      <h2>
                        Experience <span>Nov(2023)-Present</span>
                      </h2>
                      <p>
                        I am currently working as <b>Software Developer Engineer</b> at{' '}
                        <a target='_blank' href='https://www.sodalessolutions.com/'>
                          <b>Sodales Labs</b>
                        </a>{' '}
                        <i>
                          As a backend developer, I specialize in designing databases for various
                          EHS software modules, ensuring scalability and robustness. I excel in
                          creating essential services like .xsjs and .xsodata for multiple modules
                          and role-based applications. Leveraging Node.js and Express.js, I've
                          developed reliable backend solutions for in-house applications deployed on
                          Cloudfoundry.
                        </i>
                      </p>
                    </div>
                  </article>

                  <article className={classes.timeline_entry}>
                    <div className={`${classes.timeline_icon} ${classes.timeline_icon_4}`}>
                      <MdWork />
                    </div>
                    <div className={classes.label}>
                      <h2>Internship <span>Oct(2022)-Apr(2023)</span></h2>
                      
                      <p>
                        During my internship at Bajaj Finance Ltd in Pune, I developed a user-friendly SQL Query Builder software using React.js and Node.js,
                        facilitating collaboration between technical and non-technical stakeholders.
                        Additionally, I automated ETL workflows with Pentaho, significantly
                        enhancing data management efficiency and facilitating informed
                        decision-making within the organization.
                      </p>
                    </div>
                  </article>

                  <article className={classes.timeline_entry}>
                    <div className={classes.timeline_icon}>
                      <MdSchool />
                    </div>
                    <div className={classes.label}>
                      <h2>
                        Undergraduation at VIIT <span>2019-2023</span>
                      </h2>
                      <p>
                        I completed my undergraduation in CSE (Computer Science and Engineering)
                        from{' '}
                        <a href='https://www.viit.ac.in/'>
                          Vishwakarma institute of information technologies
                        </a>{' '}
                        with securing 8.9 cgpa.
                      </p>
                    </div>
                  </article>
                  {/* </ScrollAnimation> */}
                  {/* <ScrollAnimation
                      offset={0}
                      animateIn='fadeInLeft'
                      duration={2.4}
                      animateOnce={true}
                      initiallyVisible={true}
                    > */}
                  <article className={classes.timeline_entry}>
                    <div className={`${classes.timeline_icon} ${classes.timeline_icon_2}`}>
                      <FaSchool />
                    </div>
                    <div className={classes.label}>
                      <h2>
                        Higher Education <span>2017-2019</span>
                      </h2>
                      <p>
                        I have completed my higher education from Residential junior college
                        Ahmednagar with major subjects as Physics,Chemistry & Maths with 70% merit
                        in HSC board.{' '}
                      </p>
                    </div>
                    <div className={classes.timeline_entry_inner}>
                      <div className={classes.timeline_icon_3 || classes.color_none}></div>
                    </div>
                  </article>
                  {/* </ScrollAnimation> */}

                  {/* <ScrollAnimation
                      offset={0}
                      animateIn='fadeInLeft'
                      duration={2.4}
                      animateOnce={true}
                      initiallyVisible={true}
                    > */}

                  {/* </ScrollAnimation> */}
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* </ScrollAnimation> */}
      </div>
    );
  }
}

export default Education;
