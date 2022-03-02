import React from 'react';

import { images } from '../../constants';

import './AboutUs.css';

const AboutUs = () => {
  return (

    <div className='app__aboutus app__bg flex__center section__padding' id='about'>
      <div className='app__aboutus-overlay flex__center'>
        <img src={images.G} alt='g'/>
      </div>

      <div className='app__aboutus-content flex__center'>
        <div className='app__aboutus-content-about'>
          <h1 className='headtext__cormorant'>About Us</h1>
          <img src={images.spoon} alt='about spoon' style={{transform:'rotate(180deg)'}} className='spoon-img'/>
          <p className='p__opensans'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic, quis dolor ex blanditiis unde nobis. Incidunt eos voluptas totam dignissimos velit nulla, perferendis amet minima aliquid exercitationem at ullam a.</p>
          <button type='button' className='custom__button' id='first-button'>Know More</button>
        </div>


        <div className='app__aboutus-content-history'>
          <h1 className='headtext__cormorant'>Our History</h1>
          <img src={images.spoon} alt='about spoon'/>
          <p className='p__opensans'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic, quis dolor ex blanditiis unde nobis. Incidunt eos voluptas totam dignissimos velit nulla, perferendis amet minima aliquid exercitationem at ullam a.</p>
          <button type='button' className='custom__button' id='second-button'>Know More </button>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;