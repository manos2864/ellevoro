import React, {Fragment} from 'react';
import css from './Parallax.css';
import LocalizedStrings from 'react-localization';
import localeFile from '../../../locale/content';

import {connect} from 'react-redux';

const strings = new LocalizedStrings(localeFile);

const Parallax = (props) => {

  strings.setLanguage(props.languageCode);

  return (
    <Fragment>
      <div className={css.parallax}><div className={css.parallaxText}>{strings.descriptionTitle}</div></div>
    </Fragment>
  );
}

const mapStateToProps = state => {
  return {
    languageCode: state.languageCode
  }
}

export default connect(mapStateToProps)(Parallax);
