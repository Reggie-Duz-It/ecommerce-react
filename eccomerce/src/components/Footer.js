import React from 'react'
import FooterLogo from '../assets/images/zchan.png';
const spanStyle = {
    fontSize: '3em',
    color: 'Tomato',
}

const Footer = () => {
  return (
    <div id='bottom'>
        <img id='footerlogo' src={FooterLogo} height='90' width='180' alt='footerlogo' />
        <p id='reserved'>All Rights Reserved</p>
        <p id='copy'>Copyright &copy; 2022 www.zchan.net</p>

        <h3 id='contactfooter'>Contact Us</h3>
        
        <a href='https://www.facebook.com' aria-label='Facebook'>
            <span id='fb' style={spanStyle}>
               <i class='fa-brands fa-facebook'></i>
            </span>
        </a>
        <a href='https://www.instagram.com' aria-label='Instagram'>
            <span id='ig' style={spanStyle}>
               <i class='fa-brands fa-instagram'></i>
            </span>
        </a>

        <a href='https://www.twitter.com' aria-label='Twitter'>
            <span id='tw' style={spanStyle}>
               <i class='fa-brands fa-twitter-square'></i>
            </span>
        </a>
    </div>
  )
}

export default Footer