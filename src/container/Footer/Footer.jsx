import React from 'react';

import { images } from '../../constants';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi'

import './Footer.css';

const Footer = () => {
  return (
    <div className='app__footer-links section__padding'>
      <div className='app__footer-links-contact'>
        <h1 className='headtext__cormorant'>Contact Us</h1>
        <p className='p__opensans'>New York, NY - 10019, USA</p>
        <p className='p__opensans'>+1 212-314-1230</p>
      </div>

    <div className='app__footer-links-logo'>
      <img src={images.gericht} alt='footer'/>
      <p className='p__opensans'>The best way to find yourself is to lose yourself in the service of others.</p>
      <img src={images.spoon} alt='footer spoon'/>
      <div className='app_footer-links-icons' style={{marginTop:'20px'}}>
        <FiFacebook style={{color:'#FFF'}} fontSize={28}/>
        <FiTwitter style={{color:'#FFF'}} fontSize={28}/>
        <FiInstagram style={{color:'#FFF'}} fontSize={28}/>
      </div>
        <p className='p__opensans' style={{marginTop:'16px'}}>2021 Gerítch. All Rights Reserverd.</p>
    </div>

      <div className='app__footer-links-work'>
        <h1 className='headtext__cormorant'>Working Hours</h1>
        <p className='p__opensans' style={{marginBottom:'4px'}}>Mon - Fri: 10:00 AM - 02:00 AM</p>
        <p className='p__opensans'>Sat - Sun: 10:00 AM - 03:00 AM</p>
      </div>
    </div>
  );
}

export default Footer;
