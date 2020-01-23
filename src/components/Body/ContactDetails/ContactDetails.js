import React, {Fragment} from 'react';
import css from './ContactDetails.css';
import LocalizedStrings from 'react-localization';
import ContactForm from '../ContactForm/ContactForm';
import localeFile from '../../../locale/content';
import {connect} from 'react-redux';
import EntryCard from '../EntryCard/EntryCard';
import image from '../../../assets/images/contact/restaurant.jpg';

const strings = new LocalizedStrings(localeFile);

const ContactDetails = (props) => {

  strings.setLanguage(props.languageCode);

  return (
    <Fragment>
      <EntryCard version='contact' cardTitle={strings.contactCardTitle} cardDesc={{desc: strings.contactCardDesc, address: strings.footerAddress, city: strings.footerCity, tel: strings.footerTelephone, openingHours: strings.footerOpeningHours}} image={image} />
      <div className={css.contactForm}>
        <h5>{strings.contactSendusMessage}</h5>
        <hr />
        <p>{strings.contactSendusDesc}</p>
        <ContactForm />
      </div>
    </Fragment>
  );
}

const mapStateToProps = state => {
  return {
    languageCode: state.languageCode
  }
}

export default connect(mapStateToProps)(ContactDetails);
