import React from 'react';
import css from './Backdrop.css';

const Backdrop = React.memo((props) => {
  let showBackdrop = null;

  if(props.show) {
    showBackdrop = <div className={css.Backdrop} onClick={props.close}></div>
  } else {
    showBackdrop = null;
  }

  return showBackdrop;

})

export default Backdrop;
