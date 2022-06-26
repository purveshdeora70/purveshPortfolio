import React, {useRef,useState,useContext} from 'react';
import './Contact.css';
import emailjs from '@emailjs/browser';
import {themeContext} from '../../Context';

const Contact = () =>{
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    const form = useRef();
    const [done, setDone] = useState(false);

    const serviceId = process.env.REACT_APP_SERVICE_ID;
    const templeteID = process.env.REACT_APP_TEMPLATE_ID;
    const publicKey = process.env.REACT_APP_PUBLIC_KEY;

    const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(serviceId, templeteID, form.current, publicKey)
    .then((result) => {
        console.log(result.text);
        setDone(true);
        e.target.reset();
      }, (error) => {
          console.log(error.text);
      });
  };


  return (
    <div className="contact-form" id='Contact'>
        <div className="w-left">
        <div className="awesome">
            <span style={{color: darkMode? 'white': ''}}>Get in touch</span>
            <span>Contact me</span>
            <div className="blur s-blur1" style={{background: "#ABF1FF94"}}></div>
        </div>
        </div>

        <div className="c-right">
            <form id='contact-form-reset' ref={form} onSubmit={sendEmail}>
                <input type="text" name="user_name" className='user' placeholder='Name' required />
                <input type="email" name="user_email" className='user' placeholder='Email' required />
                <textarea name="message" className='user' placeholder='Message' required></textarea>
                <input type="submit" value="Send" className='button' />
                <span>{done && "Thanks for contacting me!"}</span>
                <div className="blur c-blur1" style={{background: "var(--purple)"}}></div>
            </form>
        </div>
    </div>
  )
}

export default Contact