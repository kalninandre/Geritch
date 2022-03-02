import React, { useRef } from 'react';

import { BsInstagram, BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';

import { SubHeader } from '../../components';
import { images } from '../../constants';

import './Gallery.css';

const gallery = [images.gallery01, images.gallery02, images.gallery03, images.gallery04]

const Gallery = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    
    if (direction === 'left')
    {
      scrollRef.current.scrollLeft -= 200;
    }
    else
    {
      scrollRef.current.scrollLeft += 200;
    }
  };

  return (
    <div className='app__gallery flex__center section__padding'>
      <div className='app__gallery-content'>
        <SubHeader title ={'Instagram'}/>
        <h1 className='headtext__cormorant'>Photo Gallery</h1>
        <p className='p__opensans' style={{color: '#FFF', marginTop:'16px'}}>
          Anim amet ipsum occaecat amet elit et ea ullamco commodo sunt magna laborum exercitation tempor.
        </p>
        <button type="button" className="custom__button">Know More</button>
      </div>

      <div className='app__gallery-images'>
        <div className='app__gallery-images-container' ref={scrollRef}>
          {gallery.map((image, index) => (
            <div className='app__gallery-images-card flex__center' key={`image-gallery-${index + 1}`}>
              <img src={image} alt='gallery'/>
              <BsInstagram className='app__gallery-images-icon' style={{color:'#FFF'}} fontSize={35}/>
            </div>
          ))}
        </div>

        <div className='app__gallery-images-arrows'>
          <BsArrowLeftShort onClick={() => scroll('left')} className='app__gallery-arrow'/>
          <BsArrowRightShort onClick={() => scroll('right')} className='app__gallery-arrow'/>
        </div>
      </div>
    </div>
  );
}

export default Gallery;
