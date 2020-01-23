import React from 'react';
import css from './LoadingScreen.css';
import image from '../../../assets/images/loading/loading-eclipse-optimized.gif';
import LocalizedStrings from 'react-localization';
import localeFile from '../../../locale/content';
import LazyImage from '../../../Hoc/LazyImage/LazyImage';

import {connect} from 'react-redux';

const strings = new LocalizedStrings(localeFile);

const LoadingScreen = (props) => {

  strings.setLanguage(props.languageCode);

  return (
    <div className={css.loadingScreen}>
      <div className={css.loadingElements}>
        <LazyImage height={200} offset={100}>
          <img src={image} alt="Loading Logo" />
        </LazyImage>
        <h2>{strings.loading}</h2>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    languageCode: state.languageCode
  }
}

export default connect(mapStateToProps)(LoadingScreen);
