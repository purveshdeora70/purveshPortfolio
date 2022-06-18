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
        <span>
        I provide web development services. I create website for people
        <br />
        and provide them services.
        </span>
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
            heading={'Design'}
            detail={"Figma, Sketch, Phtoshop, Adobe"} />
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
          heading={"Developer"}
          detail={"Html, Css, JavaScript, React, Express, Mongodb"}
           />
        </motion.div>
        {/* #rd Card */}
        <motion.div
        initial={{ top: "19rem", left: "25rem" }}
        whileInView={{ left: "12rem" }}
        transition={transition}
        // style={{top: "19rem", left: "12rem"}}
        >
          <Card
          emoji={Humble}
          heading={"UI/UX"}
          detail={"Provides Best User Interface."}
          color='rgba(252, 166, 31, 0.45)'
          />
        </motion.div>
        <div className="blur s-blur2" style={{background: "var(--purple)"}}></div>
        </div>
    </div>
  )
}

export default Services