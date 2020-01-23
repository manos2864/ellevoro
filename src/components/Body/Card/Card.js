import React, {Fragment} from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import LocalizedStrings from 'react-localization';
import localeFile from '../../../locale/content';
import LazyImage from '../../../Hoc/LazyImage/LazyImage';

import image1 from '../../../assets/images/description/sofia.jpg';
import css from './Card.css';

import {connect} from 'react-redux';
const strings = new LocalizedStrings(localeFile);

const Card = (props) => {

  strings.setLanguage(props.languageCode);

  return(
    <Fragment>
      <div className={[css.textBorder, 'col-xlg-6 col-lg-6 col-md-12'].join(' ')}>
        <h1 className="text-center">{strings.cardTitle}</h1>
        <div className={[css.baroque_texture].join(' ')}></div>
        <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
          <p>{strings.cardDescription}</p>
        </ScrollAnimation>
      </div>
      <div className={[css.imageBorder, 'col-xlg-6 col-lg-6 col-md-12'].join(' ')}>
        <ScrollAnimation animateIn='bounceInRight' animateOnce={true}>
          <LazyImage height={200} offset={100}>
            <img src={image1} className="rounded" alt={strings.cardAltImage} />
          </LazyImage>
        </ScrollAnimation>
      </div>
    </Fragment>
  );
};

const mapStateToProps = state => {
  return {
    languageCode: state.languageCode
  }
}

export default connect(mapStateToProps)(Card);
