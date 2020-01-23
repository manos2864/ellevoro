import React, {Component, Fragment} from 'react';
import {Helmet} from 'react-helmet';

import LanguageSwitch from '../../components/Header/LanguageSwitch/LanguageSwitch';
import NavBar from '../../components/Header/NavBar/NavBar';
import css from './Photos.css';
import Footer from '../../components/Footer/Footer';
import Gallery from '../../components/Body/Gallery/Gallery';
import LocalizedStrings from 'react-localization';
import localeFile from '../../locale/content';
import EntryCard from '../../components/Body/EntryCard/EntryCard';
import SeoData from '../../components/Header/SeoData/SeoData';

import image1 from '../../assets/images/food/gallery/2.jpg';
import image2 from '../../assets/images/food/gallery/3.jpg';
import image3 from '../../assets/images/food/gallery/4.jpg';
import image4 from '../../assets/images/food/gallery/arnakia-faba-rebu8ia-petimize.jpg';
import image5 from '../../assets/images/food/gallery/fakes-smurnaikes-kapnisth-regga.jpg';
import image6 from '../../assets/images/food/gallery/gluko-sokolata-xalba-karamela.jpg';
import image7 from '../../assets/images/food/gallery/keftedakia-krema-kalampokiou.jpg';
import image8 from '../../assets/images/food/gallery/kotopoulo-antho-alatiou.jpg';
import image9 from '../../assets/images/food/gallery/mosxarisia-oura-pikantiko-traxana.jpg';
import image10 from '../../assets/images/food/gallery/5.jpg';
import image11 from '../../assets/images/food/gallery/tarta-agria-manitaria.jpg';
import image12 from '../../assets/images/food/gallery/patzari-se-3-ufes.jpg';
import {SeoLinks} from '../../Hoc/SeoLinks/SeoLinks';

import {connect} from 'react-redux';

const strings = new LocalizedStrings(localeFile);

class Photos extends Component {

  state = {
    images: [image1, image2, image3, image4, image5, image6, image7, image8, image9, image10, image11, image12]
  }

  render() {

    strings.setLanguage(this.props.languageCode);

    return(
      <Fragment>
          <Helmet htmlAttributes={{lang: strings.hreflangCode}}>
            <title>{strings.photosTitle}</title>
            <meta name="description" content={strings.photosDescription} />
            <link rel="canonical" href={SeoLinks(strings.baseUrl + strings.hreflangCode + "/" + strings.urlnavPhotos + "/")} />
            <link rel="alternate" href={strings.hreflangCode === "el" ? SeoLinks(strings.baseUrl + localeFile.en.hreflangCode + "/" + localeFile.en.urlnavPhotos + "/") : SeoLinks(strings.baseUrl + localeFile.el.hreflangCode + "/" + localeFile.el.urlnavPhotos + "/")} hreflang={strings.hreflangCode === "el" ? localeFile.en.hreflangCode : localeFile.el.hreflangCode} />
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css" />
            <link href="css/mdb.min.css" rel="stylesheet" />
          </Helmet>
          <SeoData baseUrl={SeoLinks(strings.baseUrl)} siteName={strings.companyName} currentUrl={SeoLinks(strings.baseUrl + strings.hreflangCode + "/" + strings.urlnavPhotos + "/")} titlePage={strings.photosTitle} descPage={strings.photosDescription} lang={strings.hreflangCode} imageUrl={SeoLinks(strings.baseUrl + "static/media/restaurant.bc3b1320.jpg")} />
          <div className={css['container-fluid']}>
            <div className={[css.row, css.topBar].join(' ')}>
              <div className="col">
                <LanguageSwitch urlSuffix={[localeFile.el.urlnavPhotos, localeFile.en.urlnavPhotos]} />
              </div>
            </div>
            <div className={css.row}>
              <div className="col">
                <NavBar urlSuffix={[localeFile.el.urlnavPhotos, localeFile.en.urlnavPhotos]} />
              </div>
            </div>
            <div className={css.bgColor}>
              <div className={css.photosMainImage}></div>
              <div className={[css.row, 'pt-0', css.fullWidth].join(' ')}>
                <div className="col">
                  <EntryCard version='only-text' cardTitle={strings.navPhotos} cardDesc={{desc: strings.photosDesc}}/>
                </div>
              </div>
              <div className={["row", css.galleryContainer].join(' ')}>
                <Gallery image={this.state.images} altImage={strings.photoAlt} />
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

export default connect(mapStateToProps)(Photos);
