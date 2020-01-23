import React from 'react';
import css from './Map.css';

const Map = () => {

  return (
    <div className={css.map}>
      <iframe title="google maps ellevoro restaurant" src="https://snazzymaps.com/embed/185703"></iframe>
    </div>
  );
}

export default Map;
