import React, {useContext} from 'react';
import './Services.css';
import Card from '../Card/Card';
import HeartEmoji from '../../img/heartemoji.png';
import Glasses from '../../img/glasses.png';
import Humble from '../../img/humble.png';
import Resume from './Purvesh deora.pdf';
import {motion} from 'framer-motion';
import {themeContext} from '../../Context'

const Services = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  const transition = {duration: 1, type: 'spring'}

  return (
    <div className="services" id='Services'>
        {/* left side */}
        <div className="awesome">
        <span style={{ color: darkMode ? "white" : "" }}>My Awesome</span>
        <span>services</span>
        <span></span>
        <p>
        <span className='title'>Web development - </span>
        A website sets an impression about the brand. It must be built with two primary goals: 
        First it needs to work with all devices. Secondly it needs to be fast.
        <br /><br />
        <span className='title'>UI/UX designing - </span>
        An application should be designed for the people who will use it, so that's exactly what I do. 
        User focused design should be the primary goal of any application.
        <br /><br />
        <span className='title'>Development - </span>
        Experience in more than one programming language. like Javascript & Python. Also familiar with 
        tools like Android studio, Adobe Illustrator, Firebase.

        </p>
        <a href={Resume} download>
        <button className="button s-button">Download CV</button>
        </a>
        <div className="blur s-blur1" style={{background: "#ABF1FF94"}}></div>
        </div>
        {/* right side */}
        <div className="cards">
        <motion.div
        initial={{ left: "25rem" }}
        whileInView={{ left: "14rem" }}
        transition={transition}
        // style={{left: '14rem'}}
        >
            <Card
            emoji={HeartEmoji}
            heading={'UI/UX designing'}
            title={"TECHNOLOGIES:"}
            detail={"Phtoshop, ADOBE XD, ADOBE ILLUSTRATOR, VIDEO EDITOR"} 
            />
        </motion.div>
        {/* Second Card */}
        <motion.div
        initial={{ left: "-11rem", top: "12rem" }}
        whileInView={{ left: "-4rem" }}
        transition={transition}
        // style={{top: '12rem', left: '-4rem'}}
        >
          <Card
          emoji={Glasses}
          heading={"Web development"}
          title={"TECHNOLOGIES:"}
          detail={"HTML, CSS, JS, REACT JS, JSON, NODEJS, FIREBASE, MONGODB, EXPRESS JS, SQL, BOOTSTRAP"}
           />
        </motion.div>
        {/* #rd Card */}
        <motion.div
        initial={{ top: "21.5rem", left: "25rem" }}
        whileInView={{ left: "12rem" }}
        transition={transition}
        // style={{top: "19rem", left: "12rem"}}
        >
          <Card
          emoji={Humble}
          heading={"Development"}
          title={"TECHNOLOGIES:"}
          detail={"JAVASCRIPT, REACT JS, EXPRESS, NODE JS, MONGOOSE"}
          color='rgba(252, 166, 31, 0.45)'
          />
        </motion.div>
        <div className="blur s-blur2" style={{background: "var(--purple)"}}></div>
        </div>
    </div>
  )
}

export default Services