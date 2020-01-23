import React, {Component, Fragment} from 'react';
import {Helmet} from 'react-helmet';

import LanguageSwitch from '../../components/Header/LanguageSwitch/LanguageSwitch';
import NavBar from '../../components/Header/NavBar/NavBar';
import css from './Error.css';
import Footer from '../../components/Footer/Footer';
import LocalizedStrings from 'react-localization';
import localeFile from '../../locale/content';
import SeoData from '../../components/Header/SeoData/SeoData';
import {SeoLinks} from '../../Hoc/SeoLinks/SeoLinks';

import {connect} from 'react-redux';

const strings = new LocalizedStrings(localeFile);

class Error extends Component {
  render() {

    strings.setLanguage(this.props.languageCode);

    return(
      <Fragment>
          <Helmet htmlAttributes={{lang: strings.hreflangCode}}>
            <title>{strings.notFoundTitle}</title>
            <meta name="description" content={strings.notFoundDesc} />
            <link rel="canonical" href={SeoLinks(strings.baseUrl + "404/")} />
            <link rel="alternate" href={strings.hreflangCode === "el" ? SeoLinks(strings.baseUrl + "404/") : SeoLinks(strings.baseUrl + "404/")} hreflang={strings.hreflangCode === "el" ? localeFile.en.hreflangCode : localeFile.el.hreflangCode} />
          </Helmet>
          <SeoData baseUrl={SeoLinks(strings.baseUrl)} siteName={strings.companyName} currentUrl={SeoLinks(strings.baseUrl + "404/")} titlePage={strings.notFoundTitle} descPage={strings.notFoundDesc} lang={strings.hreflangCode}  imageUrl={SeoLinks(strings.baseUrl + "static/media/restaurant.bc3b1320.jpg")} />
          <div className={[css['container-fluid']].join(' ')}>
            <div className={[css.row, css.topBar].join(' ')}>
              <div className="col">
                <LanguageSwitch urlSuffix={['404', '404']} />
              </div>
            </div>
            <div className={css.row}>
              <div className="col">
                <NavBar urlSuffix={['404', '404']} />
              </div>
            </div>
            <div className={[css.row, css.content].join(' ')}>
              <div className="col">
                <div className={css.notfoundContainer}>
                  <div className={css.notfound}>
                    <div className={css['notfound-404']}>
                      <h1>4<span>0</span>4</h1>
                    </div>
                  </div>
                </div>
                <h1>{strings.notFoundMessage}</h1>
                <p>{strings.notFoundDesc}</p>
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

export default connect(mapStateToProps)(Error);
