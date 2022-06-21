import React from 'react';
import './Footer.css';
import Wave from '../../img/wave.png';
import Github from '@iconscout/react-unicons/icons/uil-github'
import Linkedin from '@iconscout/react-unicons/icons/uil-linkedin'
import Facebook from '@iconscout/react-unicons/icons/uil-facebook'

const Footer = () => {
  return (
    <div className="footer">
        <img src={Wave} alt="" style={{width: '100%'}} />
        <div className="f-content">
            <span>Purveshdeora70@gmail.com</span>
            <div className="f-icons">
                <a href="https://github.com/purveshdeora70" target='github'>
                  <Github color='white' size='3rem' />
                </a>
                <a href="https://www.linkedin.com/in/purvesh-deora-70/" target='linkedin'>
                  <Linkedin color='white' size='3rem' />
                </a>
                <a href="https://www.instagram.com/purveshdeora70/" target='instagram'>
                  <Facebook color='white' size='3rem' />
                </a>
            </div>
        </div>
    </div>
  )
}

export default Footer;