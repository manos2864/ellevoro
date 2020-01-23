import React, {Fragment} from 'react';
import {Helmet} from 'react-helmet';
import ScrollAnimation from 'react-animate-on-scroll';
import LocalizedStrings from 'react-localization';
import localeFile from '../../../locale/content';
import LazyImage from '../../../Hoc/LazyImage/LazyImage';

import {connect} from 'react-redux';

import css from './Quote.css';

const strings = new LocalizedStrings(localeFile);

const Quote = (props) => {

  strings.setLanguage(props.languageCode);

  return(
    <Fragment>
    <Helmet>
      <link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css" />
    </Helmet>
    <LazyImage height={200} offset={100}>
      <div className={css.QuoteImage}>
      <div className={[css.QuoteContainer].join(' ')}>
          <h1>{strings.quoteTitle}</h1>
  				<div id={css['fade-quote']}>
  			    	<blockquote>
                <ScrollAnimation animateIn='zoomIn' animateOnce={true}>
  			    		       <div className={css.quote}><p><i className="fa fa-quote-left fa-2x"></i> {strings.quoteDesc} <i className="fa fa-quote-right fa-2x"></i></p></div>
                </ScrollAnimation>
              </blockquote>
      		    	<div className="profile-container">
      		    	    <div className={css['profile-circle']}></div>
      		    	    <div className={css['profile-circle']}></div>
      		    	    <div className={css['profile-circle']}></div>
      		    	</div>
  				</div>
        </div>
    	</div>
    </LazyImage>
  </Fragment>
  );
}

const mapStateToProps = state => {
  return {
    languageCode: state.languageCode
  }
}

export default connect(mapStateToProps)(Quote);
