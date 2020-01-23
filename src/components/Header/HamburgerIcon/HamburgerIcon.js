import React from 'react';
import css from './HamburgerIcon.css';

const HamburgerIcon = () => (
  <button className={["navbar-toggler", css.navBarToggler].join(' ')} type="button" data-toggle="collapse" data-target=".dual-collapse2">
      <div className={css["animated-icon"]}><span></span><span></span><span></span></div>
  </button>
);

export default HamburgerIcon;
