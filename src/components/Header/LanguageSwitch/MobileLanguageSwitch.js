import React from 'react';
import css from './LanguageSwitch.css';

import greekFlag from '../../../assets/images/flags/greek-flag-mobile.jpg';
import englishFlag from '../../../assets/images/flags/english-flag-mobile.jpg';

import * as actionCreators from '../../../store/actions/actionCreators';
import {connect} from 'react-redux';
import {NavLink} from 'react-router-dom';

import {SeoLinks} from '../../../Hoc/SeoLinks/SeoLinks';

const MobileLanguageSwitch = (props) => {
  return (
    <div className={css.MobileLanguageSwitch}>
      <NavLink title="Ελληνική Γλώσσα" to={window.location.href.includes('el') ? SeoLinks('/el/' + props.urlSuffix[0]) : SeoLinks('/el/' + props.urlSuffix[0])}><img src={greekFlag} className={props.languageCode === 'el' ? css.LanguageSwitchActive : null} alt="Greek Flag Icon" onClick={() => props.langHandler("el")}/></NavLink>
      <NavLink title="English Language" to={window.location.href.includes('en') ?  SeoLinks('/en/' + props.urlSuffix[1]) : SeoLinks('/en/' + props.urlSuffix[1])}><img src={englishFlag} className={props.languageCode === 'en' ? css.LanguageSwitchActive : null} alt="English Flag Icon" onClick={() => props.langHandler("en")}/></NavLink>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    languageCode: state.languageCode
  }
}

const mapDispatchToProps = dispatch => {
  return {
    langHandler: (langCode) => dispatch(actionCreators.changeLanguage(langCode))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MobileLanguageSwitch);
