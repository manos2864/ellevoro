import React from 'react';
import LazyLoad from 'react-lazyload';

const LazyImage = (props) => {
  return (
    <LazyLoad height={props.height} offset={props.offset} once>
      {props.children}
    </LazyLoad>
  )
}

export default LazyImage;
