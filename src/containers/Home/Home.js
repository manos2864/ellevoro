import React, {Component, Fragment} from 'react';
import {Helmet} from 'react-helmet';

import LanguageSwitch from '../../components/Header/LanguageSwitch/LanguageSwitch';
import Parallax from '../../components/Body/Parallax/Parallax';
import NavBar from '../../components/Header/NavBar/NavBar';
import css from './Home.css';
import Card from '../../components/Body/Card/Card';
import Quote from '../../components/Body/Quote/Quote';
import Footer from '../../components/Footer/Footer';
import LocalizedStrings from 'react-localization';
import localeFile from '../../locale/content';
import SeoData from '../../components/Header/SeoData/SeoData';
import {SeoLinks} from '../../Hoc/SeoLinks/SeoLinks';

import {connect} from 'react-redux';

const strings = new LocalizedStrings(localeFile);

class Home extends Component {
  render() {

    strings.setLanguage(this.props.languageCode);

    return(
      <Fragment>
          {/* 1. For a New Page Change All Helmet */}
          <Helmet htmlAttributes={{lang: strings.hreflangCode}}>
            <title>{strings.pageHome}</title>
            <meta name="description" content={strings.pageDescription} />
            <link rel="canonical" href={SeoLinks(strings.baseUrl + strings.hreflangCode + "/")} />
            <link rel="alternate" href={strings.hreflangCode === "el" ? SeoLinks(strings.baseUrl + localeFile.en.hreflangCode + "/") : SeoLinks(strings.baseUrl + localeFile.el.hreflangCode + "/")} hreflang={strings.hreflangCode === "el" ? localeFile.en.hreflangCode : localeFile.el.hreflangCode} />
            {/* <script src="https://cdn.lightwidget.com/widgets/lightwidget.js" async type="text/javascript" /> */}
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css" />
          </Helmet>
          <SeoData baseUrl={SeoLinks(strings.baseUrl)} siteName={strings.companyName} currentUrl={SeoLinks(strings.baseUrl + strings.hreflangCode + "/")} titlePage={strings.pageHome} descPage={strings.pageDescription} lang={strings.hreflangCode}  imageUrl={SeoLinks(strings.baseUrl + "static/media/restaurant.bc3b1320.jpg")} />
          <div className={[css['container-fluid']].join(' ')}>
            <div className={[css.row, css.topBar].join(' ')}>
              <div className="col">
                {/* 2. For a New Page Change LanguageSwitch 0 el, 1 en */}
                <LanguageSwitch  urlSuffix={['', '']} />
              </div>
            </div>
            <div className={css.row}>
              <div className="col">
                {/* 3. For a New Page Change NavBar 0 el, 1 en */}
                <NavBar urlSuffix={['', '']} />
              </div>
            </div>
            <div className={css.bgColor}>
              <div className={[css.row, css.fullWidth].join(' ')}>
                <div className="col">
                  <Parallax />
                </div>
              </div>
              <div className={['row', css.introduction].join(' ')}>
                <Card />
              </div>
              <div className={[css.row, css.quote].join(' ')}>
                <Quote />
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

export default connect(mapStateToProps)(Home);
