import React from 'react';
import './Footer.css';
import Wave from '../../img/wave.png';
import Github from '@iconscout/react-unicons/icons/uil-github'
import Linkedin from '@iconscout/react-unicons/icons/uil-linkedin'
import Facebook from '@iconscout/react-unicons/icons/uil-facebook'
import Instagram from '@iconscout/react-unicons/icons/uil-instagram'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CallIcon from '@mui/icons-material/Call';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
const Footer = () => {
  return (
    <div className="footer">
        <img src={Wave} alt="" style={{width: '100%'}} />
        <div className="f-content">
            <div className='contact-contain'>
              <div className='f-address'>
                <LocationOnIcon />
                <span>Mumbai, Chowpatty</span>
              </div>
              <div className='f-address'>
                <CallIcon />
                <span>7021745056</span>
              </div>
              <div className='f-address'>
              <AlternateEmailIcon />
                <span>Purveshdeora70@gmail.com</span>
              </div>
            </div>
            <div className="f-icons">
                <a href="https://github.com/purveshdeora70" target='github'>
                  <Github color='white' size='3rem' />
                </a>
                <a href="https://www.linkedin.com/in/purvesh-deora-70/" target='linkedin'>
                  <Linkedin color='white' size='3rem' />
                </a>
                <a href="https://www.facebook.com/madhu.sudhandeora/" target='facebook'>
                  <Facebook color='white' size='3rem' />
                </a>                
                <a href="https://www.instagram.com/purveshdeora70/" target='instagram'>
                  <Instagram color='white' size='3rem' />
                </a>                
            </div>
        </div>
    </div>
  )
}

export default Footer;