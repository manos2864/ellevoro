import React from 'react';
import css from './Footer.css';
import LocalizedStrings from 'react-localization';
import localeFile from '../../locale/content';
import LazyImage from '../../Hoc/LazyImage/LazyImage';
import CookieConsent from "react-cookie-consent";

import {SeoLinks} from '../../Hoc/SeoLinks/SeoLinks';
import image1 from '../../assets/images/social/tripadvisor-el.png';
import image2 from '../../assets/images/social/tripadvisor-en.PNG';

import SocialIcons from './SocialIcons/SocialIcons';
import {Link} from 'react-router-dom';

import {connect} from 'react-redux';
const strings = new LocalizedStrings(localeFile);

const Footer = (props) => {

  strings.setLanguage(props.languageCode);
  let tripURL = "https://www.tripadvisor.com/Restaurant_Review-g189400-d11917392-Reviews-Ellevoro-Athens_Attica.html";

  if (props.languageCode === 'el') {
    tripURL = "https://www.tripadvisor.com.gr/Restaurant_Review-g189400-d11917392-Reviews-Ellevoro-Athens_Attica.html";
  } else if (props.languageCode === 'en') {
    tripURL = "https://www.tripadvisor.com/Restaurant_Review-g189400-d11917392-Reviews-Ellevoro-Athens_Attica.html";
  }

  return (
    <footer id="footer" className={[css['page-footer'], 'pt-4'].join(' ')}>
      <CookieConsent
        location="bottom"
        buttonText={strings.cookieReminderBtn}
        cookieName="ellevoroCookie"
        style={{ background: "rgba(215, 205, 203, 0.9)", color: "#2e2e2e", textAlign: "center", display: "inline-block", alignItems: "center"} }
        buttonStyle={{ background: "#2e2e2e", color: "#d7cdcb", fontSize: "17px", borderRadius: "4px", display: "inline-block" }}
        expires={150}>
        {strings.cookieReminder}
      </CookieConsent>
      <div className={[css['container-fluid'], 'text-center'].join(' ')}>
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-6" >
            <h5 className="text-uppercase">{strings.footerTitle}</h5>
            <ul className="list-unstyled">
              <div>
                <li>{strings.footerAddress}</li>
                <li>{strings.footerCity}</li>
                <li>{strings.footerTelephone}</li>
                <li className={css.tooltip}><p>{strings.footerOpeningHoursSeeText}</p><span className={css.tooltipText}>{strings.footerOpeningHours}</span></li>
              </div>
            </ul>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-6 d-none d-sm-block">
            <h5 className="text-uppercase">{strings.footerUsefulLink}</h5>
            <ul className="list-unstyled">
              <li>
                <Link title={strings.navContact} to={SeoLinks("/" + strings.hreflangCode + "/" + strings.urlnavContact + "/")}>{strings.navContact}</Link>
              </li>
              <li>
                <Link title={strings.navMenu} to={SeoLinks("/" + strings.hreflangCode + "/" + strings.urlnavMenu + "/")}>{strings.navMenu}</Link>
              </li>
              <li>
                <Link title={strings.navPhotos} to={SeoLinks("/" + strings.hreflangCode + "/" + strings.urlnavPhotos + "/")}>{strings.navPhotos}</Link>
              </li>
              <li>
                <Link title={strings.navCookie} to={SeoLinks("/" + strings.hreflangCode + "/" + strings.urlnavCookie + "/")}>{strings.navCookie}</Link>
              </li>
            </ul>
          </div>
          <div className="col-lg-4 col-md-12 col-sm-12">
            <h5 className="text-uppercase">{strings.footerFollow}</h5>
            <ul className="list-unstyled">
              <SocialIcons facebook instagram tripadvisor/>
            </ul>
            <a target="_blank" rel="noopener noreferrer" href={tripURL}>
              <LazyImage height={200} offset={100}>
                {props.languageCode === 'el' ? <img src={image1} alt="trip advisor προτεινεται το εστιατοριο"/> : <img src={image2} alt="trip advisor recommended restaurant"/>}
              </LazyImage>
            </a>
          </div>
        </div>
      </div>
      <div className="footer-copyright text-center py-3">
        ® Ellevoro Restaurant {new Date().getFullYear()}. All rights reserved.
      </div>
    </footer>
  );
}

const mapStateToProps = state => {
  return {
    languageCode: state.languageCode
  }
}

export default connect(mapStateToProps)(Footer);
