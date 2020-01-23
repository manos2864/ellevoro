import React from 'react';
import { ReCaptcha } from 'react-recaptcha-google';
import css from './Recaptcha.css';

let captchaDemo = null;

export const onLoadRecaptcha = () => {
  if (captchaDemo) {
      captchaDemo.reset();
  }
}

const Recaptcha = (props) => {
  const cssError = [];

  if (props.error) {
    cssError.push(css.error);
  }

  return <div className={cssError.join(' ')}>{<ReCaptcha
          ref={(el) => {captchaDemo = el;}}
          size="normal"
          data-theme="light"
          render="explicit"
          sitekey="6LdgFLkUAAAAAGNleG8gXNmhg3s5Yo2Z0i4Tuqsz"
          onLoad={onLoadRecaptcha}
          onSuccess={props.verifyCallback}
        />}</div>
}

export default Recaptcha;
