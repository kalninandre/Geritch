import React from 'react';

import { SubHeader } from '../../components';
import { images } from '../../constants';

import './FindUs.css'

const FindUs = () => {
  return (
    <div className='app__bg app__wrapper section__padding' id='contact'>
      <div className='app__wrapper-info footer-text'>
        <SubHeader title={'Contact'}/>
        <h1 className='headtext__cormorant'>Find Us</h1>
        <div className='app__wrapper-content footer-text'>
          <p className='p__opensans' style={{marginBottom:'16px'}}>Voluptate ullamco Lorem do consequat aliquip dolor ad.</p>

          <p 
          className='p__cormorant' 
          style={{color:'#DCCA87', 
          fontSize: '28px', 
          marginBottom:'16px'}}>
          Opening Hours
          </p>

          <p className='p__opensans' style={{marginBottom:'4px'}}>Mon - Fri: 10:00 AM - 02:00 AM</p>
          <p className='p__opensans'>Sat - Sun: 10:00 AM - 03:00 AM</p>
        </div>
      </div>

      <div className='app__wrapper-img footer-image'>
        <img src={images.findus} alt="find us"/>
      </div>
    </div>
  );
}

export default FindUs;
