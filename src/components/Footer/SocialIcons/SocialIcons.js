import React from 'react';
import css from './SocialIcons.css';
import LazyImage from '../../../Hoc/LazyImage/LazyImage';

import facebook from '../../../assets/images/social/facebook.png';
import instagram from '../../../assets/images/social/instagram.png';
import tripadvisor from '../../../assets/images/social/tripadvisor.png';

const SocialIcons = (props) => {
  const social = [];
  let i = 0;
  if(props.facebook) {
    social.push(<a title="Ellevoro Facebook" href="https://www.facebook.com/ellevoro"><img src={facebook} alt="Ellevoro facebook" width="50px" height="50px"/></a>);
  } if (props.instagram) {
    social.push(<a title="Ellevoro Instagram" href="https://www.instagram.com/ellevoro/"><img src={instagram} alt="Ellevoro instagram" width="50px" height="50px" /></a>);
  } if (props.tripadvisor) {
    social.push(<a title="Ellevoro TripAdvisor" href="https://www.tripadvisor.com.gr/Restaurant_Review-g189400-d11917392-Reviews-Ellevoro-Athens_Attica.html"><img src={tripadvisor} alt="Ellevoro Trip Advisor" width="50px" height="50px" /></a>);
  }

  return(
    <li className="list-unstyled">
      <LazyImage height={200} offset={100}>
        {social.map(icon => <div className={css.socialIcons} key={i++}>{icon}</div>)}
      </LazyImage>
    </li>
  );
};

export default SocialIcons;
