import React, {useContext} from 'react';
import './Works.css';
// import Fiverr from '../../img/fiverr.png';
// import Shopify from '../../img/Shopify.png';
import Technokraft from '../../img/Technokraft.png';
import Docty from '../../img/Docty.png';
import TravelBureau from '../../img/Travel_Bureau.png';
import {themeContext} from '../../Context';
import {motion} from 'framer-motion';
import {Link} from 'react-scroll';

const Works = () => {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;

  // transition
  return (
    <div className="works" id='Works'>
        <div className='awesome'>
            <span style={{ color: darkMode ? "white" : "" }}>Works for All these</span>
            <span>Brands & Clients</span>
            {/* <span>
            Lorem ispum is simpley dummy text of printing of printing Lorem
            <br />
            ispum is simpley dummy text of printingLorem ispum is simpley dummy
            <br />
            y dummy text of printingLorem
            <br />
            ispum is simpley dummy text of printing
            </span> */}
            <Link to="Contact" smooth={true} spy={true}>
                <button className="button s-button">Hire Me</button>
            </Link>
            <div className="blur s-blur1" style={{background: "#ABF1FF94"}}></div>
        </div>
        {/* right side */}
        <div className="w-right">
            <motion.div
                initial={{ rotate: 45 }}
                whileInView={{ rotate: 0 }}
                viewport={{ margin: "-40px" }}
                transition={{ duration: 3.5, type: "spring" }}
                className="w-mainCircle"
                >
                <div className="w-secCircle">
                    <img src={Technokraft} alt="" />
                </div>
                <div className="w-secCircle">
                    <img src={TravelBureau} alt="" />
                </div>
                <div className="w-secCircle">
                    <img src={Docty} alt="" />
                </div>
                {/* <div className="w-secCircle">
                    <img src={Fiverr} alt="" />
                </div>
                <div className="w-secCircle">
                    <img src={Shopify} alt="" />
                </div> */}
            </motion.div>
            {/* background circle */}
            <div className="w-backCircle blueCircle"></div>
            <div className="w-backCircle yellowCircle"></div>
        </div>
    </div>
  )
}

export default Works;