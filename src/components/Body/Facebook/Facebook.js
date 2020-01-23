import React from 'react';
import {FacebookProvider, Page} from 'react-facebook';
import css from './Facebook.css';

const Facebook = () => (
  <div className={css.facebook}>
    <FacebookProvider appId="2468835703345512">
      <Page href="https://www.facebook.com/ellevoro" hideCover={false} width="500" height="500" showFacepile={false} smallHeader={true} adaptContainerWidth={true} tabs="timeline" />
    </FacebookProvider>
  </div>
);

export default Facebook;
