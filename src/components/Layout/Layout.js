import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Switch, Route, withRouter, Redirect } from 'react-router';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Hammer from 'rc-hammerjs';
import { CookieNotice } from '../CookieNotice/CookieNotice';

import Startpage from '../../pages/startpage/Startpage';
import { Subpage } from '../../pages/subpages/Subpage';

import Header from '../Header';
import { openSidebar, closeSidebar } from '../../actions/navigation';
import s from './Layout.module.scss';
import { EventsList } from '../../pages/events/EventsList';
import { PeopleList } from '../../pages/people/PeopleList';

class Layout extends React.Component {
  static propTypes = {
    sidebarStatic: PropTypes.bool,
    sidebarOpened: PropTypes.bool,
    dispatch: PropTypes.func.isRequired,
  };

  static defaultProps = {
    sidebarStatic: false,
    sidebarOpened: false,
  };
  constructor(props) {
    super(props);

    this.state = {
      modalVisible: false
    };

    this.handleSwipe = this.handleSwipe.bind(this);
    this.setWrapperRef = this.setWrapperRef.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }

  toggleModal = (show) => {
    this.setState({
      modalVisible: show
    });

    if(show) {
      document.addEventListener('mousedown', this.handleClickOutside);
    } else {
      document.removeEventListener('mousedown', this.handleClickOutside);
    }
  };

  handleSwipe(e) {
    if ('ontouchstart' in window) {
      if (e.direction === 4 && !this.state.chatOpen) {
        this.props.dispatch(openSidebar());
        return;
      }

      if (e.direction === 2 && this.props.sidebarOpened) {
        this.props.dispatch(closeSidebar());
        return;
      }

      this.setState({ chatOpen: e.direction === 2 });
    }
  }

  setWrapperRef(node) {
    this.wrapperRef = node;
  }

  handleClickOutside(event) {
    if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
      this.setState({
        modalVisible: false
      });
    }
  }

  render() {
    return (
        <div className={s.wrap}>
          <Header />
          <Hammer onSwipe={this.handleSwipe}>

            <main className={s.content}>
                  <Switch>
                    <Route path="/" exact render={(props) => <Startpage {...props} toggleModal={this.toggleModal} setWrapperRef={this.setWrapperRef} modalVisible={this.state.modalVisible} />} />
                    <Route path="/about" render={(props) => <Subpage {...props} slug={`about`} />} />
                    <Route path="/events" render={(props) => <EventsList {...props} slug={`events`} toggleModal={this.toggleModal} setWrapperRef={this.setWrapperRef} modalVisible={this.state.modalVisible} />} />
                    <Route path="/people" render={(props) => <PeopleList {...props} slug={`people`} toggleModal={this.toggleModal} setWrapperRef={this.setWrapperRef} modalVisible={this.state.modalVisible} />} />
                    <Route path="/impressum" render={(props) => <Subpage {...props} slug={`impressum`} />} />
                    <Route path="/app/main" exact render={() => <Redirect to="/app/main/dashboard" />} />
                  </Switch>

              <footer className={s.contentFooter}>
                <span className={`${s.footerLinksLeft}`}>
                  <a href="/">peredvizh.org</a>
                </span>
                <span className={`${s.footerLinksRight} pull-right`}>
                  <a href="/impressum">Impressum</a>
                  <a href="#">Datenschutz</a>
                  <a href="https://panda-platforma.berlin" target="_blank">&copy; {(new Date().getFullYear())} by PANDA platforma</a>
                </span>
              </footer>
              <CookieNotice />
            </main>
          </Hammer>
        </div>
    );
  }
}

function mapStateToProps(store) {
  return {
    sidebarOpened: store.navigation.sidebarOpened,
    sidebarPosition: store.navigation.sidebarPosition,
    sidebarVisibility: store.navigation.sidebarVisibility,
  };
}

export default withRouter(connect(mapStateToProps)(Layout));
