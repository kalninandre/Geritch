import React from 'react';

import { SubHeader } from '../../components';

import { images } from '../../constants';
import { data } from '../../constants'; 

import './Laurels.css';

const Laurels = () => {

  const AwardCard = ( {award: { imgUrl, title, subtitle }}) => {
    return (
      <div className='app__laurels-awards-card'>
        <img src={imgUrl} alt='award'/>
        <div className='app__laurels-awards-card-content'>
          <p className='p__cormorant' style={{color:'#DCCA87'}}>{title}</p>
          <p className='p__cormorant' style={{color:'#FFF'}}>{subtitle}</p>
        </div>
      </div>
    );
  };

  return (
    <div className='app__bg app__wrapper section__padding' id='awards'>
      
      <div className='app__wrapper-info'>
        <SubHeader title={'Awards and Recognition'}/>
        <h1 className='headtext__cormorant'>Our Larels</h1>

        <div className='app__laurels-awards'>
          {data.awards.map(award => (
          <AwardCard key={award.title} award={award}/>
          ))}
        </div>
      </div>

      <div className='app__wrapper-img laurels-image'>
        <img src={images.laurels} alt='laurels'/>      
      </div>
    </div>
  );
}

export default Laurels;
