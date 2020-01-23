import React from 'react';
import css from './FloatingBoxes.css';
import image1 from '../../../assets/images/history/skepastaries.jpg';
import image2 from '../../../assets/images/history/karveli-psomi.jpg';
import LazyImage from '../../../Hoc/LazyImage/LazyImage';
import ScrollAnimation from 'react-animate-on-scroll';

const FloatingBoxes = (props) => {
return <div className={[css.floatingBoxes, css.shadow].join(' ')}>
<div className={css.imageContainerTop}>
  <ScrollAnimation animateIn='bounceInLeft' animateOnce={true}>
    <LazyImage height={200} offset={100}>
      <img className={css.topImage} src={image2} alt="paradosiaka faghta" />
    </LazyImage>
  </ScrollAnimation>
</div>
<div className={css.boxes}>
  <h1>{props.title}</h1>
  <div className="row">
    <div className={['col-md-6', css.borderRight].join(' ')}>
      <ScrollAnimation animateIn='fadeIn'>
        <p>{props.left}</p>
      </ScrollAnimation>
    </div>
    <div className="col-md-6">
      <ScrollAnimation animateIn='fadeIn'>
        <p>{props.right}</p>
      </ScrollAnimation>
    </div>
  </div>
  </div>
  <div className={css.imageContainer}>
    <ScrollAnimation animateIn='fadeIn' animateOnce={true}>
      <LazyImage height={200} offset={100}>
        <img className={css.bottomImage} src={image1} alt="skepastaries" />
      </LazyImage>
    </ScrollAnimation>
  </div>
</div>
}

export default FloatingBoxes;
