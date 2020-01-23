import React, {Component} from 'react';
import logo from '../../../assets/images/logo-frame.png';
import css from './NavBar.css';

import Modal from '../../Body/Modal/Modal';
import Backdrop from '../../Body/Backdrop/Backdrop';

import HamburgerIcon from '../HamburgerIcon/HamburgerIcon';
import LocalizedStrings from 'react-localization';
import localeFile from '../../../locale/content';
import MobileLanguageSwitch from '../LanguageSwitch/MobileLanguageSwitch';
import {SeoLinks} from '../../../Hoc/SeoLinks/SeoLinks';

import {NavLink} from 'react-router-dom';
import {connect} from 'react-redux';

const strings = new LocalizedStrings(localeFile);

class NavBar extends Component {

  state = {
    show: false
  }

  reservationHandlerOpen = () => {
    this.setState({show: true});
  }

  reservationHandlerClose = () => {
    this.setState({show: false});
  }

  render() {
    strings.setLanguage(this.props.languageCode);
    return(
      <nav id="header" className={['navbar navbar-expand-lg navbar-light', css.NavBar].join(' ')}>
        <HamburgerIcon />
          <div className={css.BrandCompanyName}><h2>{strings.companyName}</h2></div>
          <NavLink exact className={["navbar-brand", css.BrandMobile].join(' ')} to={SeoLinks("/" + strings.hreflangCode + "/")}><img src={logo} alt={strings.companyName + " logo"} /></NavLink>
          <div className={["navbar-collapse collapse w-100 dual-collapse2 order-1 order-md-0", css.leftNav].join(' ')}>
              <ul className={['navbar-nav ml-auto text-center', css.navLine].join(' ')}>
                <li className="nav-item">
                    <NavLink exact activeClassName='active' title={strings.navHome} className="nav-link" to={SeoLinks("/" + strings.hreflangCode + "/")}>{strings.navHome}</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink exact activeClassName='active' title={strings.navMenu} className="nav-link" to={SeoLinks("/" + strings.hreflangCode + "/" + strings.urlnavMenu + "/")}>{strings.navMenu}</NavLink>
                </li>
                <li className="nav-item">
                    <Backdrop close={this.reservationHandlerClose} show={this.state.show} />
                    <Modal show={this.state.show} close={this.reservationHandlerClose} version="reservation"/>
                    <div className={["nav-link", css.clickEffect].join(' ')} onClick={this.reservationHandlerOpen}>{strings.navReservation}</div>
                </li>
              </ul>
          </div>
          <div className={["mx-auto", css.Brand].join(' ')}>
              <NavLink exact className={["navbar-brand"].join(' ')} title={strings.navHome} to={SeoLinks("/" + strings.hreflangCode + "/")}><img src={logo} alt={strings.companyName + " logo"} width="180" height="180" /></NavLink>
          </div>
          <div className={["navbar-collapse collapse w-100 dual-collapse2 order-2 order-md-2", css.rightNav].join(' ')}>
            <ul className={['navbar-nav mr-auto text-center', css.navLine].join(' ')}>
                <li className="nav-item">
                    <NavLink exact activeClassName='active' title={strings.navHistory} className="nav-link" to={SeoLinks("/" + strings.hreflangCode + "/" + strings.urlnavHistory + "/")}>{strings.navHistory}</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink exact activeClassName='active' title={strings.navPhotos} className="nav-link" to={SeoLinks("/" + strings.hreflangCode + "/" + strings.urlnavPhotos + "/")}>{strings.navPhotos}</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink exact activeClassName='active' title={strings.navContact} className="nav-link" to={SeoLinks("/" + strings.hreflangCode + "/" + strings.urlnavContact + "/")}>{strings.navContact}</NavLink>
                </li>
            </ul>
          </div>
        <div className={["navbar-collapse collapse dual-collapse2 order-2 order-md-2", css.MobileLanguageSwitch].join(' ')}>
            <ul className={['navbar-nav mr-auto text-center', css.navLine].join(' ')}>
                <li className="nav-item">
                    {/* En suffix in 1 and El suffic in 0 */}
                    <MobileLanguageSwitch urlSuffix={[this.props.urlSuffix[0], this.props.urlSuffix[1]]} />
                </li>
            </ul>
        </div>
      </nav>
    );
  }
}

const mapStateToProps = state => {
  return {
    languageCode: state.languageCode
  }
}

export default connect(mapStateToProps)(NavBar);
