import React, {useState}  from 'react';
import Recaptcha, {onLoadRecaptcha} from './Recaptcha/Recaptcha';
import css from './ContactForm.css';
import LocalizedStrings from 'react-localization';
import localeFile from '../../../locale/content';
import ZapierForm from 'react-zapier-form';
import {connect} from 'react-redux';
const strings = new LocalizedStrings(localeFile);

const ContactForm = (props) => {

  strings.setLanguage(props.languageCode);

  const [enteredName, setEnteredName] = useState('');
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredMessage, setEnteredMessage] = useState('');
  const [codeCaptcha, setCodeCaptcha] = useState('');
  const [errorCaptcha, setErrorCaptcha] = useState(false);

  if (!Recaptcha) {

    onLoadRecaptcha();

  }


  // const submitHandler = event => {
  //
  //   if (codeCaptcha) {
  //
  //     onLoadRecaptcha();
  //     setErrorCaptcha(false);
  //     setCodeCaptcha('');
  //     setEnteredMessage('');
  //     setEnteredEmail('');
  //     setEnteredName('');
  //
  //     return true;
  //
  //   } else {
  //
  //     onLoadRecaptcha();
  //     setErrorCaptcha(true);
  //
  //     return false;
  //
  //   }
  // };

  const verifyCallback = (recaptchaToken) => {
    setCodeCaptcha(recaptchaToken);
    setErrorCaptcha(false);
  }

  return(
    <ZapierForm action={codeCaptcha && 'https://hooks.zapier.com/hooks/catch/1419959/o28dbec/'}>
       {({ error, loading, success }) => {
          return (
             <div>
                {!success && !loading &&
                  <div className='container-fluid'>
                    <div className='row'>
                      <div className={["col-12 col-lg-6 col-md-6 col-sm-12", css.space].join(' ')}>
                        <input placeholder={strings.contactFullnamePlaceholder} required type='text' name='Name' id='name' value={enteredName} onChange= {event => setEnteredName(event.target.value)} />
                      </div>
                      <div className={["col-12 col-lg-6 col-md-6 col-sm-12", css.space].join(' ')}>
                        <input placeholder={strings.contactEmailPlaceholder} required type='email' name='Email' id='email' value={enteredEmail} onChange= {event => setEnteredEmail(event.target.value)} />
                      </div>
                    </div>
                    <div className='row'>
                      <div className={["col", css.space].join(' ')}>
                        <textarea placeholder={strings.contactTextareaPlaceholder} id='message' name='Message' rows="4" cols="50" value={enteredMessage} onChange= {event => setEnteredMessage(event.target.value)} />
                      </div>
                    </div>
                    <div className='row'>
                      <div className="col">
                        <button className={["btn btn-light", css.sendBtn].join(' ')}  disabled={!codeCaptcha && true} type="submit">{strings.contactSendButton}</button>
                        <div className={css.recaptcha}>
                          <Recaptcha verifyCallback={verifyCallback} error={errorCaptcha} />
                        </div>
                      </div>
                    </div>
                  </div>
                }
                {loading && <div className={css.formMessage}>{strings.loading}</div>}
                {error && <div className={css.formMessage}>{strings.contactError}</div>}
                {success && <div className={css.formMessage}>{strings.contactSuccess}</div>}
             </div>
          )
       }}
    </ZapierForm>
  );
}

const mapStateToProps = state => {
  return {
    languageCode: state.languageCode
  }
}

export default connect(mapStateToProps)(ContactForm);
