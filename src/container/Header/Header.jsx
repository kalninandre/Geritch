import React from 'react';

import { images } from '../../constants'
import { SubHeader } from '../../components';

import './Header.css';

const Header = () => {
  return (
    <div className='app__header app__wrapper section__padding' id='home'>
        <div className='app__wrapper-info'>
          <SubHeader title={'Chase the new flavour'}/>
          <h1 className='app__header-h1'>The key to fine dining</h1>
          <p className='p__opensans' style={{ margin:'16px 0' }}>
            Voluptate incididunt aliqua veniam reprehenderit excepteur veniam do tempor adipisicing tempor deserunt laborum ea. Nisi et labore anim minim nisi. Id ad in magna et aute dolor reprehenderit ex veniam.
          </p>
          <button type='button' className='custom__button'>Explore Menu</button>
        </div>
    
        <div className='app__wrapper-img'>
          <img src={images.welcome} alt='header'/>
        </div>
    </div>
  );
}

export default Header;
