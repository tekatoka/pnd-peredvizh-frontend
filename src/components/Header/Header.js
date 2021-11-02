import { connect } from "react-redux";
import React from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router";
import {
  Navbar
} from "reactstrap";

import { MainMenu, MainMenuMobile } from "./menues/MainMenu";
import { HashTagMenu, HashTagMenuMobile } from "./menues/HashTagMenu";
import { SocialMediaMenu } from "./menues/SocialMediaMenu";

import s from "./Header.module.scss";
import "animate.css";

class Header extends React.Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    sidebarPosition: PropTypes.string.isRequired,
  };

  constructor(props) {
    super(props);

    this.onDismiss = this.onDismiss.bind(this);
    this.toggleSearchOpen = this.toggleSearchOpen.bind(this);

    this.state = {
      currentPath: '',
      mobileMenuOpen: false,
      visible: true,
      messagesOpen: false,
      supportOpen: false,
      settingsOpen: false,
      searchFocused: false,
      searchOpen: false,
      notificationsOpen: false,
    };
  }

  componentDidMount() {
    this.setState({
      currentPath: window.location.pathname
    })
  }

  onDismiss() {
    this.setState({ visible: false });
  }

  toggleSearchOpen() {
    this.setState({
      searchOpen: !this.state.searchOpen,
      mobileMenuOpen: false
    });
  }

  toggleMobileMenu = () => {
    this.setState({
      mobileMenuOpen: !this.state.mobileMenuOpen,
      searchOpen: false
    })
  }

  render() {

    return (

      <Navbar className={`d-print-none `}>
        <header className={s.logo}>
            <a href="./"><span style={{color: "#3c484f"}}>ПЕРЕ</span><span className="fw-bold">ДВИЖ</span></a>
        </header>
        <div className={`${s.root}`}>

          <SocialMediaMenu />
          <MainMenu currentPath={this.state.currentPath} />
        </div>
        <HashTagMenu toggleSearchOpen={this.toggleSearchOpen} />
        <HashTagMenuMobile searchOpen={this.state.searchOpen} />
        <MainMenuMobile handleClick={this.toggleMobileMenu} isOpen={this.state.mobileMenuOpen} currentPath={this.state.currentPath} />
      </Navbar>

      
    );
  }
}

function mapStateToProps(store) {
  return {
    isSidebarOpened: store.navigation.sidebarOpened,
    sidebarVisibility: store.navigation.sidebarVisibility,
    sidebarPosition: store.navigation.sidebarPosition,
  };
}

export default withRouter(connect(mapStateToProps)(Header));
