import React, {Component, Fragment} from 'react';
import {Helmet} from 'react-helmet';

import css from './Contact.css';

import { loadReCaptcha } from 'react-recaptcha-google';
import LanguageSwitch from '../../components/Header/LanguageSwitch/LanguageSwitch';
import NavBar from '../../components/Header/NavBar/NavBar';
import Footer from '../../components/Footer/Footer';
import LocalizedStrings from 'react-localization';
import Map from '../../components/Body/Map/Map';
import ContactDetails from '../../components/Body/ContactDetails/ContactDetails';
import localeFile from '../../locale/content';
import SeoData from '../../components/Header/SeoData/SeoData';
import {SeoLinks} from '../../Hoc/SeoLinks/SeoLinks';

import {connect} from 'react-redux';
const strings = new LocalizedStrings(localeFile);

class Contact extends Component {

  componentDidMount() {
    loadReCaptcha();
  }

  render() {

    strings.setLanguage(this.props.languageCode);

    return (
      <Fragment>
          <Helmet htmlAttributes={{lang: strings.hreflangCode}}>
            <title>{strings.contactTitle}</title>
            <meta name="description" content={strings.contactDescription} />
            <link rel="canonical" href={SeoLinks(strings.baseUrl + strings.hreflangCode + "/" + strings.urlnavContact + "/")} />
            <link rel="alternate" href={strings.hreflangCode === "el" ? SeoLinks(strings.baseUrl + localeFile.en.hreflangCode + "/" + localeFile.en.urlnavContact + "/") : SeoLinks(strings.baseUrl + localeFile.el.hreflangCode + "/" + localeFile.el.urlnavContact + "/")} hreflang={strings.hreflangCode === "el" ? localeFile.en.hreflangCode : localeFile.el.hreflangCode} />
          </Helmet>
          <SeoData baseUrl={SeoLinks(strings.baseUrl)} siteName={strings.companyName} currentUrl={SeoLinks(strings.baseUrl + strings.hreflangCode + "/" + strings.urlnavContact + "/")} titlePage={strings.contactTitle} descPage={strings.contactDescription} lang={strings.hreflangCode}  imageUrl={SeoLinks(strings.baseUrl + "static/media/restaurant.bc3b1320.jpg")} />
          <div className={[css['container-fluid']].join(' ')}>
            <div className={[css.row, css.topBar].join(' ')}>
              <div className="col">
                <LanguageSwitch  urlSuffix={[localeFile.el.urlnavContact, localeFile.en.urlnavContact]} />
              </div>
            </div>
            <div className={[css.row, css.navbar].join(' ')}>
              <div className="col">
                <NavBar urlSuffix={[localeFile.el.urlnavContact, localeFile.en.urlnavContact]} />
              </div>
            </div>
            <div className={css.bgColor}>
              <div className={[css.row].join(' ')}>
                <div className={['col', css.map].join(' ')}>
                  <Map />
                </div>
              </div>
              <div className={[css.row, 'pb-3', css.fullWidth].join(' ')}>
                <div className={['col', css.contactDetails].join(' ')}>
                  <ContactDetails />
                </div>
              </div>
            </div>
            <div className={[css.row, css.footer].join(' ')}>
              <div className="col">
                <Footer />
              </div>
            </div>
          </div>
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    languageCode: state.languageCode
  }
}

export default connect(mapStateToProps)(Contact);
