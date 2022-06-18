import React, {useContext} from 'react';
import './Intro.css';
import Vector1 from '../../img/Vector1.png';
import Vector2 from '../../img/Vector2.png';
import boy from '../../img/boy1.png';
import glassesimoji from '../../img/glassesimoji.png'
import thumbup from '../../img/thumbup.png';
import Crown from '../../img/crown.png'
import FloatingDiv from '../FloatingDiv/FloatingDiv';
import Github from '../../img/github.png';
import LinkedIn from '../../img/linkedin.png';
import Instagram from '../../img/instagram.png';
import {themeContext} from '../../Context';
import {motion} from 'framer-motion';
import {Link} from 'react-scroll';

const Intro = () => {
    const transition = {duration: 2, type: 'spring'}
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;

    return (
        <div className="intro" id='Intro'>
            <div className="i-left">
                <div className="i-name">
                    <span style={{ color: darkMode ? "white" : "" }}>Hy! I Am</span>
                    <span>Purvesh Deora</span>
                    <span>Full Stack Web Developer with good level of experience in front-end and back-end development, producting the Quality work</span>
                </div>
                <Link to="Contact" smooth={true} spy={true}>
                    <button className="button i-button">Hire me</button>
                </Link>
                <div className="i-icons">
                    <img src={Github} alt="" />
                    <img src={LinkedIn} alt="" />
                    <img src={Instagram} alt="" />
                </div>
            </div>
            <div className="i-right">
                <img src={Vector1} alt="" />
                <img src={Vector2} alt="" />
                <img src={boy} alt="" />
                <motion.img
                initial={{left: '-36%'}}
                whileInView={{left: '-24%'}}
                transition={transition}
                src={glassesimoji} alt="" />
                <motion.div
                initial={{top: '-4%', left: '74%'}}
                whileInView={{left: '68%'}}
                transition={transition}
                className='floating-div'
                // style={{top: '-4%', left: '68%'}}
                >
                    <FloatingDiv image={Crown} txt1='Web' txt2='Developer'/>
                </motion.div>
                <motion.div
                initial={{left: '9rem', top: '18rem'}}
                whileInView={{left: '0rem'}}
                transition={transition}
                className='floating-div'
                // style={{top: '18rem', left: '0rem'}}
                >
                    <FloatingDiv image={thumbup} txt1='Best Design' txt2='Award' />
                </motion.div>
                {/* blur divs */}
                <div className="blur" style={{background: "rgb (238 210 255)"}}></div>
                <div className="blur" style={{background: "#C1F5FF", top: "17rem", width: "21rem", height: "11rem", left: "-9rem"}}></div>
            </div>
        </div>
    )
}

export default Intro;