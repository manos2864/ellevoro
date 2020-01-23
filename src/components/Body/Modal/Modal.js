import React from 'react';
import {CSSTransition} from 'react-transition-group';

import LocalizedStrings from 'react-localization';
import localeFile from '../../../locale/content';
import {connect} from 'react-redux';

import image1 from '../../../assets/images/social/etable.jpg';
import css from './Modal.css';

const strings = new LocalizedStrings(localeFile);

const animationTiming = {
  enter: 400,
  exit: 1000
};

const Modal = React.memo((props) => {

  strings.setLanguage(props.languageCode);

  let url = "https://www.e-table.gr/en/restaurant/ellevoro";
  let data = null;
  let containerClass = [css.Modal];

  if (props.version === 'reservation') {
    containerClass.push(css.normal);
    data =
    <div>
      <div className="row">
        <div className="col-6 col-xlg-6 col-lg-6 col-md-6 col-sm-6">
          <img className={css.etableLogo} src={image1} alt="etable logo" />
        </div>
        <div className="col-6 col-xlg-6 col-lg-6 col-md-6 col-sm-6">
          <button type="button" className={['close', css.close].join(' ')} onClick={props.close}>&times;</button>
        </div>
      </div>
      <p>{strings.reservationModalDesc}</p>
      <a href={url} target="_blank" rel="noopener noreferrer"><button type="button" className={["btn btn-danger", css.submitBtn].join(' ')}>{strings.reservationModalBtn}</button></a>
    </div>;
  } else if (props.version === 'gallery') {
    containerClass.push(css.centered);
    if(props.image) {
    data =
      <div onClick={props.close} className="row">
        <div className="col-12">
          <button type="button" className={['close', css.close].join(' ')} onClick={props.close}>&times;</button>
        </div>
        <div className="col-12">
          <img className={css.imagePopup} src={props.image} alt={props.image + ' full screen'} />
        </div>
      </div>
    } else {
      props.close();
      data = null;
    }
  }

  if(props.languageCode === 'el') {
    url = "https://www.e-table.gr/restaurant/ellevoro";
  } else if (props.languageCode === 'en') {
    url = "https://www.e-table.gr/en/restaurant/ellevoro";
  }

  return (
    <CSSTransition in={props.show} timeout={animationTiming} mountOnEnter unmountOnExit
      classNames={{
        enter: '',
        enterActive: css.ModalOpen,
        exit: '',
        exitActive: css.ModalClosed
      }}>
    <div className={containerClass.join(' ')}>
      {data}
    </div>
  </CSSTransition>
  );
})

const mapStateToProps = state => {
  return {
    languageCode: state.languageCode
  }
}

export default connect(mapStateToProps)(Modal);
