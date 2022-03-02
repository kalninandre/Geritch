import React from 'react';

import { images } from '../../constants';
import { SubHeader } from '../../components';

import './Chef.css';

const Chef = () => {
  return (
    <div className='app__bg app__wrapper section__padding' id='chef'>
      <div className='app__wrapper-img app__wrapper-img-reverse'>
        <img src={images.chef} alt='chef'/>
      </div>

      <div className='app__wrapper-info'>
        <SubHeader title={"Chef's Word"}/>
        <h1 className='headtext__cormorant'>What We Believe In</h1>

        <div className='app__chef-content'>
          <div className='app__chef-content-quote'>
            <img src={images.quote} alt='quote'/>
            <p className='p__opensans'>Lorem ipsum dolor sit amet, consectetur adipiscing elit auctor sit.</p>
          </div>
          <p className='p__opensans'>auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit. Nulla scelerisque scelerisque congue ac consequat, aliquam molestie lectus eu. Congue iaculis integer curabitur semper sit nunc.</p>

          <div className='app__chef-content-signature'>
            <p className='p__cormorant' style={{color:'#DCCA87'}}>Kevin Luo</p>
            <p className='p__opensans'>Chef and Founder</p>
            <img src={images.sign} alt='sign'/>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Chef;