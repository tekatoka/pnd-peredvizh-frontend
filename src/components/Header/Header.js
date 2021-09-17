import { connect } from "react-redux";
import React from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router";
import {
  Navbar,
  Nav,
  NavItem,
  NavLink,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Input,
  UncontrolledAlert,
  Dropdown,
  Collapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Badge,
  ButtonGroup,
  Button,
  Form,
  FormGroup,
} from "reactstrap";
import BurgerIcon from "../Icons/HeaderIcons/BurgerIcon";

import s from "./Header.module.scss";
import "animate.css";

import mainMenu from "./mainMenu.json";
import hashTags from "./hashTags.json";

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

          <Nav className="ml-md-0">
          {
            mainMenu.map(el => {
              return (
                <NavItem className={s.mainMenuItem}>
                  <NavLink className={`${s.navItem} ${this.state.currentPath == el.link ? s.active : ''}`} href={el.link}>{el.name}</NavLink>
                </NavItem>
              )
            })
          }
          </Nav>
        </div>

        <div className={s.miniSearch}>
          <NavLink
            onClick={this.toggleSearchOpen}
            className={s.navItem}
            href="#"
          >
            <i className={`${s.headerIcon} fa fa-hashtag`} />
            {
              //<SearchIcon addId='header-search' className={s.headerIcon} />
            }
          </NavLink>
        </div>
        <Collapse
            className={`${s.collapsedMenu}`}
            isOpen={this.state.searchOpen}
          >
            <Nav className={s.mobileNav}>
              {
                hashTags.map(el => {
                  return (
                    <NavItem>
                      <NavLink className={`${s.navItem} ${s.hashTagItem}`} href={el.link}>{el.name}</NavLink>
                    </NavItem>
                  )
                })
              }
            </Nav>
        </Collapse>

        <div className={s.burger}>
          <NavLink
              onClick={this.toggleMobileMenu}
              className={`${s.navItem} text-white`}
              href="#"
            >
              <BurgerIcon className={s.headerIcon} />
            </NavLink>
        </div>
        <Collapse
          isOpen={this.state.mobileMenuOpen}
          className={s.collapsedMenu}
          >          
            <Nav className={s.mobileNav}>
              {
                mainMenu.map(el => {

                  return (
                    <NavItem>
                      <NavLink className={`${s.navItem} ${this.state.currentPath == el.link ? s.activeMobile : ''}`} href={el.link}>{el.name}</NavLink>
                    </NavItem>
                  )
                })
              }
            </Nav>
        </Collapse>        
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
