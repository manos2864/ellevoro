import React, {Fragment} from 'react';
import css from './MenuCatalog.css';
import ScrollAnimation from 'react-animate-on-scroll';
import LocalizedStrings from 'react-localization';
import localeFile from '../../../locale/content';
import image1 from '../../../assets/images/food/taramas-skordopsomo.jpg';
import image2 from '../../../assets/images/food/salata-grebena.jpg';
import image3 from '../../../assets/images/food/bodino-poure-kolokuthas.jpg';
import image4 from '../../../assets/images/food/epidorpio.jpg';
import EntryCard from '../../../components/Body/EntryCard/EntryCard';

import LazyImage from '../../../Hoc/LazyImage/LazyImage';

import {connect} from 'react-redux';

const strings = new LocalizedStrings(localeFile);

const MenuCatalog = (props) => {

  strings.setLanguage(props.languageCode);

  return (
    <Fragment>
      <div className={css.menuCatalogImage}></div>
      <div className={['row'].join(' ')}>
        <div className="col">
          <EntryCard version='only-text' cardTitle={strings.navMenu} cardDesc={{desc: strings.menuPageDesc, jsxLink: <a style={{textDecoration: 'underline', color: '#d7cdcb'}} href={strings.baseUrl + strings.hreflangCode + '/' + strings.urlnavContact}>{strings.contactSendusMessage}</a>}}/>
        </div>
      </div>
      <div className={['row', css.MenuCatalog , css.hrCustom].join(' ')}>
        <div className={["col-xlg-6 col-lg-6", css.leftAlign, css.textAlign, css.imageAlign].join(' ')}>
          <ScrollAnimation animateIn='bounceInLeft' animateOnce={true}>
            <h2>{strings.menuColdStartersTitle}</h2>
            <p>{strings.menuColdStarters}</p>
          </ScrollAnimation>
        </div>
        <div className={["col-xlg-6 col-lg-6", css.rightAlign, css.textAlign, css.imageAlign].join(' ')}>
          <ScrollAnimation animateIn='bounceInRight' animateOnce={true}>
            <LazyImage height={200} offset={100}>
              <img src={image1} alt="taramas me skordopsomo" />
            </LazyImage>
          </ScrollAnimation>
        </div>
      </div>
      <div className={['row', css.MenuCatalog].join(' ')}>
        <div className={["col-xlg-6 col-lg-6", css.rightAlign, css.textAlign, css.imageAlign].join(' ')}>
          <ScrollAnimation animateIn='bounceInLeft' animateOnce={true}>
            <LazyImage height={200} offset={100}>
              <img src={image2} alt="salata grebena" />
            </LazyImage>
          </ScrollAnimation>
        </div>
        <div className={["col-xlg-6 col-lg-6", css.leftAlign, css.textAlign, css.imageAlign].join(' ')}>
          <ScrollAnimation animateIn='bounceInRight' animateOnce={true}>
            <h2>{strings.menuSaladsTitle}</h2>
            <p>{strings.menuSalads}</p>
          </ScrollAnimation>
        </div>
      </div>
      <div className={['row', css.MenuCatalog].join(' ')}>
        <div className={["col-xlg-6 col-lg-6", css.leftAlign, css.textAlign, css.imageAlign].join(' ')}>
          <ScrollAnimation animateIn='bounceInLeft' animateOnce={true}>
            <h2>{strings.menuHotAppetizersTitle}</h2>
            <p>{strings.menuHotAppetizers}</p>
          </ScrollAnimation>
        </div>
        <div className={["col-xlg-6 col-lg-6", css.rightAlign, css.textAlign, css.imageAlign].join(' ')}>
          <ScrollAnimation animateIn='bounceInRight' animateOnce={true}>
            <LazyImage height={200} offset={100}>
              <img src={image3} alt="bodino me poure kolokuthas" />
            </LazyImage>
          </ScrollAnimation>
        </div>
      </div>
      <div className={['row', css.MenuCatalog].join(' ')}>
        <div className={["col-xlg-6 col-lg-6", css.rightAlign, css.textAlign, css.imageAlign].join(' ')}>
          <ScrollAnimation animateIn='bounceInLeft' animateOnce={true}>
            <LazyImage height={200} offset={100}>
              <img src={image4} alt="epidorpio" />
            </LazyImage>
          </ScrollAnimation>
        </div>
        <div className={["col-xlg-6 col-lg-6", css.leftAlign, css.textAlign, css.imageAlign].join(' ')}>
          <ScrollAnimation animateIn='bounceInRight' animateOnce={true}>
            <h2>{strings.menuDessertsTitle}</h2>
            <p>{strings.menuDesserts}</p>
          </ScrollAnimation>
        </div>
      </div>
    </Fragment>
  )
}

const mapStateToProps = state => {
  return {
    languageCode: state.languageCode
  }
}

export default connect(mapStateToProps)(MenuCatalog);
