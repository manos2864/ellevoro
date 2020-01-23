import React from 'react';
import LazyImage from '../../../../Hoc/LazyImage/LazyImage';

const Slideimage = (props) => (
  <div className={["carousel-item", props.active].join(' ')}>
    <LazyImage height={200} offset={100}>
      <img className="d-block w-100" src={props.image}
        alt={props.alt} />
    </LazyImage>
  </div>
);

export default Slideimage;
