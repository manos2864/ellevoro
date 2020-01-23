import React, {Component, Suspense} from 'react';
import css from './App.css';
import {Route, Switch, Redirect} from 'react-router-dom';

import {PrerenderedComponent} from 'react-prerendered-component';

import LoadingScreen from '../components/Body/LoadingScreen/LoadingScreen';

import LocalizedStrings from 'react-localization';
import localeFile from '../locale/content';
import {connect} from 'react-redux';
import * as actionCreators from '../store/actions/actionCreators';

const prefetchMap = new WeakMap();

const prefetchLazy = (LazyComponent) => {
  if (!prefetchMap.has(LazyComponent)) {
    prefetchMap.set(LazyComponent, LazyComponent._ctor());
  }
  return prefetchMap.get(LazyComponent);
};

const prerenderedLazy = dynamicImport => {
const LazyComponent = React.lazy(dynamicImport);
return React.memo(props => (
    <PrerenderedComponent live={prefetchLazy(LazyComponent)}>
      <LazyComponent {...props} />
    </PrerenderedComponent>
  ));
};

const AsyncHome = prerenderedLazy(() => import('./Home/Home'));
const AsyncMenu = prerenderedLazy(() => import('./Menu/Menu'));
const AsyncPhotos = prerenderedLazy(() => import('./Photos/Photos'));
const AsyncContact = prerenderedLazy(() => import('./Contact/Contact'));
const AsyncError = prerenderedLazy(() => import('./Error/Error'));
const AsyncCookie = prerenderedLazy(() => import('./Cookies/Cookies'));
const AsyncHistory = prerenderedLazy(() => import('./History/History'));

const strings = new LocalizedStrings(localeFile);

class App extends Component {

  render() {

    // Below Code is responsible for localized direct URLs (For example, when you write the direct URL "/el/μενου" and the browser show the page translated)
    if (window.location.href.includes("/en/") || window.location.href.includes("/en")) {
      localStorage.setItem('languageCode', 'en');
      this.props.langHandler("en");
      strings.setLanguage('en');
    } else if (window.location.href.includes("/el/") || window.location.href.includes("/el")) {
      localStorage.setItem('languageCode', 'el');
      this.props.langHandler("el");
      strings.setLanguage('el');
    }

    return (
      <div className={css.App}>
        <Switch>
          <Route exact path={'/el/istoria/'} render={() => (
            <Suspense fallback={<LoadingScreen/>}>
              <AsyncHistory />
            </Suspense>
          )} />
          <Route exact path={'/en/history/'} render={() => (
            <Suspense fallback={<LoadingScreen/>}>
              <AsyncHistory />
            </Suspense>
          )} />
          <Route exact path={'/el/eikones/'} render={() => (
            <Suspense fallback={<LoadingScreen/>}>
              <AsyncPhotos />
            </Suspense>
          )} />
          <Route exact path={'/en/photos/'} render={() => (
            <Suspense fallback={<LoadingScreen/>}>
              <AsyncPhotos />
            </Suspense>
          )} />
          <Route exact path={'/el/epikoinonia/'} render={() => (
            <Suspense fallback={<LoadingScreen/>}>
              <AsyncContact />
            </Suspense>
          )} />
          <Route exact path={'/en/contact/'} render={() => (
            <Suspense fallback={<LoadingScreen/>}>
              <AsyncContact />
            </Suspense>
          )} />
          <Route exact path={'/en/menu/'} render={() => (
            <Suspense fallback={<LoadingScreen/>}>
              <AsyncMenu />
            </Suspense>
          )} />
          <Route exact path={'/el/menou/'} render={() => (
            <Suspense fallback={<LoadingScreen/>}>
              <AsyncMenu />
            </Suspense>
          )} />
          <Route exact path={'/el/politiki-cookie/'} render={() => (
            <Suspense fallback={<LoadingScreen/>}>
              <AsyncCookie />
            </Suspense>
          )} />
          <Route exact path={'/en/cookie-policy/'} render={() => (
            <Suspense fallback={<LoadingScreen/>}>
              <AsyncCookie />
            </Suspense>
          )} />
          <Route exact path='/el/' render={() => (
            <Suspense fallback={<LoadingScreen/>}>
              <AsyncHome />
            </Suspense>
          )} />
          <Route exact path='/en/' render={() => (
            <Suspense fallback={<LoadingScreen/>}>
              <AsyncHome />
            </Suspense>
          )} />
          <Route exact path='/' render={() => (
            <Suspense fallback={<LoadingScreen/>}>
              <AsyncHome />
            </Suspense>
          )} />
          <Route exact path="/404/" render={() => (
            <Suspense fallback={<LoadingScreen/>}>
              <AsyncError />
            </Suspense>
          )} />
          <Redirect to="/404/" />
      </Switch>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    langHandler: (langCode) => dispatch(actionCreators.changeLanguage(langCode))
  }
}

export default  connect(null, mapDispatchToProps)(App);
