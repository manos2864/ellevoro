import React, {Component, Fragment} from 'react';
import {Helmet} from 'react-helmet';

import LanguageSwitch from '../../components/Header/LanguageSwitch/LanguageSwitch';
import NavBar from '../../components/Header/NavBar/NavBar';
import css from './History.css';
import Footer from '../../components/Footer/Footer';
import LocalizedStrings from 'react-localization';
import localeFile from '../../locale/content';
import SeoData from '../../components/Header/SeoData/SeoData';
import {SeoLinks} from '../../Hoc/SeoLinks/SeoLinks';
import FloatingBoxes from '../../components/Body/FloatingBoxes/FloatingBoxes';
import {connect} from 'react-redux';

const strings = new LocalizedStrings(localeFile);

class History extends Component {
  render() {

    strings.setLanguage(this.props.languageCode);

    return(
      <Fragment>
          <Helmet htmlAttributes={{lang: strings.hreflangCode}}>
            <title>{strings.historyTitle}</title>
            <meta name="description" content={strings.historyDescription} />
            <link rel="canonical" href={SeoLinks(strings.baseUrl + strings.hreflangCode + "/" + strings.urlnavHistory + "/")} />

            <link rel="alternate" href={strings.hreflangCode === "el" ? SeoLinks(strings.baseUrl + localeFile.en.hreflangCode + "/" + localeFile.en.urlnavHistory + "/") : SeoLinks(strings.baseUrl + localeFile.el.hreflangCode + "/" + localeFile.el.urlnavHistory + "/")} hreflang={strings.hreflangCode === "el" ? localeFile.en.hreflangCode : localeFile.el.hreflangCode} />

            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css" />
          </Helmet>
          <SeoData baseUrl={SeoLinks(strings.baseUrl)} siteName={strings.companyName} currentUrl={SeoLinks(strings.baseUrl + strings.hreflangCode + "/" + strings.urlnavHistory + "/")} titlePage={strings.historyTitle} descPage={strings.historyDescription} lang={strings.hreflangCode}  imageUrl={SeoLinks(strings.baseUrl + "static/media/restaurant.bc3b1320.jpg")} />
          <div className={[css['container-fluid']].join(' ')}>
            <div className={[css.row, css.topBar].join(' ')}>
              <div className="col">
                <LanguageSwitch urlSuffix={[localeFile.el.urlnavHistory, localeFile.en.urlnavHistory]} />
              </div>
            </div>
            <div className={css.row}>
              <div className="col">
                <NavBar urlSuffix={[localeFile.el.urlnavHistory, localeFile.en.urlnavHistory]} />
              </div>
            </div>
            <div className={css.bgColor}>
              <FloatingBoxes title={strings.navHistory} left={strings.historyDescLeft} right={strings.historyDescRight}/>
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

export default connect(mapStateToProps)(History);
