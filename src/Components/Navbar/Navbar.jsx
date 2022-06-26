import React, {useContext} from 'react';
import Toggle from '../Toggle/Toggle';
import './Navbar.css'
import {Link} from 'react-scroll';
import {themeContext} from '../../Context'


const Navbar = () => {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
  return (
    <div className="n-wrapper" style={{ backgroundColor: darkMode ? "black" : "" }} id='Navbar'>
        <div className="n-left">
            <div className="n-name">Purvesh</div>
            <Toggle />
        </div>
        <div className="n-right">
            <div className="n-list">
                <ul style={{listStyleType: 'none'}}>
                <li>
                    <Link spy={true} to='Intro' smooth={true} activeClass='active'>
                        Home
                    </Link>
                </li>
                <li>
                    <Link spy={true} to='Services' smooth={true}>
                        Servicess
                    </Link>
                </li>
                <li>
                    <Link spy={true} to='Experience' smooth={true}>
                        Experience
                    </Link>
                </li>
                <li>
                    <Link spy={true} to='Portfolio' smooth={true}>
                        Portfolio
                    </Link>
                </li>
                {/* <li>
                    <Link spy={true} to='Testimonials' smooth={true}>
                        Testimonials
                    </Link>
                </li> */}
                </ul>
            </div>

            <Link to="Contact" spy={true} smooth={true}>
                <button className="button n-button">Contact</button>
            </Link>
        </div>
    </div>
  )
}

export default Navbar;