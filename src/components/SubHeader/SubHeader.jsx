import React from 'react';

import { images } from '../../constants'

const SubHeader = (props) => {
  return (
    <div>
      <p className='p__cormorant'>{props.title}</p>
      <img src={images.spoon} className='spoon-img' alt='img spoon'/>
    </div>
  );
}

export default SubHeader;
