import React from 'react';
import css from './Instagram.css';
import LocalizedStrings from 'react-localization';
import localeFile from '../../../locale/content';

import {connect} from 'react-redux';

const strings = new LocalizedStrings(localeFile);

const Instagram = (props) => {

  strings.setLanguage(props.languageCode);

  return (
    <div className={css.Instagram}>
      <h2>{strings.instagramFollow}</h2>
      <iframe title="ellevoro instagram posts" src="//lightwidget.com/widgets/8b33a47f81ec5ea39c4dfcf5f98bc509.html"
      scrolling="no" allowtransparency="true" className="lightwidget-widget"
      ></iframe>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    languageCode: state.languageCode
  }
}

export default connect(mapStateToProps)(Instagram);
