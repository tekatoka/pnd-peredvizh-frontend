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
import Notifications from "../Notifications";
import PowerIcon from "../Icons/HeaderIcons/PowerIcon";
import BellIcon from "../Icons/HeaderIcons/BellIcon";
import SettingsIcon from "../Icons/HeaderIcons/SettingsIcon";
import MessageIcon from "../Icons/HeaderIcons/MessageIcon";
import BurgerIcon from "../Icons/HeaderIcons/BurgerIcon";
import SearchIcon from "../Icons/HeaderIcons/SearchIcon";
import ArrowIcon from "../Icons/HeaderIcons/ArrowIcon";


import { logoutUser } from "../../actions/user";
import {
  openSidebar,
  closeSidebar,
  changeSidebarPosition,
  changeSidebarVisibility,
} from "../../actions/navigation";

import sender1 from "../../assets/people/a1.jpg";
import sender2 from "../../assets/people/a5.jpg";
import sender3 from "../../assets/people/a4.jpg";

import avatar from "../../assets/people/a7.jpg";

import s from "./Header.module.scss";
import "animate.css";

import mainMenu from "./mainMenu.json";

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

    const menu = mainMenu;

    return (

      <Navbar className={`d-print-none `}>
        <header className={s.logo}>
            <a href="./"><span style={{color: "#3c484f"}}>ПЕРЕ</span><span className="fw-bold">ДВИЖ</span></a>
        </header>
        <div className={`${s.root}`}>

          <Nav className="ml-md-0">
          {
            menu.map(el => {
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
                <SearchIcon addId='header-search' className={s.headerIcon} />
              </NavLink>
        </div>
        <Collapse
            className={`${s.searchCollapse} ml-lg-0 mr-md-3`}
            isOpen={this.state.searchOpen}
          >
          <InputGroup className={`input-group-no-border ${s.searchForm}`}>
            <InputGroupAddon addonType="prepend">
              <InputGroupText className={s.inputGroupText}>
                <SearchIcon className={s.headerIcon} />
              </InputGroupText>
            </InputGroupAddon>
            <Input
              id="search-input"
              className="input-transparent"
              placeholder="Поиск..."
            />
          </InputGroup>
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
          className={s.burgerMenu}
          >          
            <Nav className={s.mobileNav}>
              {
                menu.map(el => {

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
