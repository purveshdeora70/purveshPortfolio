import React from 'react';
import './Card.css'

function Card({emoji, heading, detail, color,title}) {
  return (
    <div className="card" style={{borderColor: {color}}}>
        <img src={emoji} alt="" />
        <span>{heading}</span>
        <span>{title}</span>
        <span>{detail}</span>
        <button className='c-button'>LEARN MORE</button>
    </div>
  )
}

export default Card;