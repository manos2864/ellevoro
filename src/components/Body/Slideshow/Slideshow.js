import React from 'react';

import css from './Slideshow.css';
import slideImage1 from '../../../assets/images/slideshow/slideshow-1.jpg';
import slideImage2 from '../../../assets/images/slideshow/slideshow-2.jpg';
import slideImage3 from '../../../assets/images/slideshow/slideshow-3.jpg';
import Slideimage from './Slideimage/Slideimage';

const Slideshow = () => (
  <div className={css.carouselContainer}>
    <div className={css.responsiveCarousel}>
      <div id="carouselExampleFade" className={[css.carousel, 'slide carousel-fade'].join(' ')} data-ride="carousel">
        <div className="carousel-inner">
          <Slideimage image={slideImage1} alt="Ellevoro restaurant" active='active' />
          <Slideimage image={slideImage2} alt="Ellevoro restaurant" active='' />
          <Slideimage image={slideImage3} alt="Ellevoro restaurant" active='' />
        </div>
        <a className="carousel-control-prev" href="#carouselExampleFade" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleFade" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    </div>
  </div>
);

export default Slideshow;
