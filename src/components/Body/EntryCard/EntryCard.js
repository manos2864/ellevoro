import React, { Fragment } from 'react';
import css from './EntryCard.css';
import LazyImage from '../../../Hoc/LazyImage/LazyImage';

const EntryCard = (props) => {

  let contactData = null;

  if (props.version === 'contact') {
    contactData =
    <div className={["card mb-3", css.entryCard, css.shadow].join(' ')}>
      <div className="row no-gutters">
        <div className="col-md-6">
          <div className="card-body">
            <h1 className="card-title">{props.cardTitle}</h1>
            <hr />
            <p className="card-text">{props.cardDesc.desc}</p>
            <ul>
              <div>
                <li className="card-text">{props.cardDesc.address}</li>
                <li className="card-text">{props.cardDesc.city}</li>
              </div>
              <li className="card-text">{props.cardDesc.tel}</li>
              <li className="card-text">{props.cardDesc.openingHours}</li>
            </ul>
          </div>
        </div>
        <div className="col-md-6">
          <LazyImage height={200} offset={100}>
            <img src={props.image} className="card-img" alt="ellevoro Rovertou Galli 2 Athens Greece next to akropolis museum" />
          </LazyImage>
        </div>
      </div>
    </div>;
  } else if (props.version === 'only-text') {
    contactData =
    <div className={["card mb-0", css.entryCard].join(' ')}>
      <div className="row no-gutters text-center">
        <div className="col">
          <div className="card-body">
            <h1 className="card-title">{props.cardTitle}</h1>
            <hr />
            <p className="card-text">{props.cardDesc.desc}{props.cardDesc.jsxLink}</p>
          </div>
        </div>
      </div>
    </div>;
  }


  return(
    <Fragment>
      {contactData}
    </Fragment>
  );
}

export default EntryCard;
