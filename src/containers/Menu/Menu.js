import React, {Component, Fragment} from 'react';
import {Helmet} from 'react-helmet';

import LanguageSwitch from '../../components/Header/LanguageSwitch/LanguageSwitch';
import NavBar from '../../components/Header/NavBar/NavBar';
import css from './Menu.css';
import Footer from '../../components/Footer/Footer';
import LocalizedStrings from 'react-localization';
import localeFile from '../../locale/content';
import SeoData from '../../components/Header/SeoData/SeoData';
import {SeoLinks} from '../../Hoc/SeoLinks/SeoLinks';
import MenuCatalog from "../../components/Body/MenuCatalog/MenuCatalog";

import {connect} from 'react-redux';

const strings = new LocalizedStrings(localeFile);

class Menu extends Component {
  render() {

    strings.setLanguage(this.props.languageCode);

    return(
      <Fragment>
          <Helmet htmlAttributes={{lang: strings.hreflangCode}}>
            <title>{strings.menuTitle}</title>
            <meta name="description" content={strings.menuDescription} />
            <link rel="canonical" href={SeoLinks(strings.baseUrl + strings.hreflangCode + "/" + strings.urlnavMenu + "/")} />
            <link rel="alternate" href={strings.hreflangCode === "el" ? SeoLinks(strings.baseUrl + localeFile.en.hreflangCode + "/" + localeFile.en.urlnavMenu + "/") : SeoLinks(strings.baseUrl + localeFile.el.hreflangCode + "/" + localeFile.el.urlnavMenu + "/")} hreflang={strings.hreflangCode === "el" ? localeFile.en.hreflangCode : localeFile.el.hreflangCode} />
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css" />
          </Helmet>
          <SeoData baseUrl={SeoLinks(strings.baseUrl)} siteName={strings.companyName} currentUrl={SeoLinks(strings.baseUrl + strings.hreflangCode + "/" + strings.urlnavMenu + "/")} titlePage={strings.menuTitle} descPage={strings.menuDescription} lang={strings.hreflangCode} imageUrl={SeoLinks(strings.baseUrl + "static/media/restaurant.bc3b1320.jpg")} />
          <div className={[css['container-fluid']].join(' ')}>
            <div className={[css.row, css.topBar].join(' ')}>
              <div className="col">
                <LanguageSwitch urlSuffix={[localeFile.el.urlnavMenu, localeFile.en.urlnavMenu]} />
              </div>
            </div>
            <div className={css.row}>
              <div className="col">
                <NavBar urlSuffix={[localeFile.el.urlnavMenu, localeFile.en.urlnavMenu]} />
              </div>
            </div>
            <div className={css.bgColor}>
              <MenuCatalog />
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

export default connect(mapStateToProps)(Menu);
