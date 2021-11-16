import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Switch, Route, withRouter, Redirect } from "react-router";
import Hammer from "rc-hammerjs";
import { CookieNotice } from "../CookieNotice/CookieNotice";

import Startpage from "../../pages/startpage/Startpage";
import { Subpage } from "../../pages/subpages/Subpage";

import Header from "../Header";
import { toggleModal } from "../../actions/modal";
import s from "./Layout.module.scss";
import EventsList from "../../pages/events/EventsList";
import { PeopleList } from "../../pages/people/PeopleList";
import { Person } from "../../pages/people/Person";

const Layout = (props) => {
  useEffect(() => {
    const close = (e) => {
      if (e.keyCode === 27) {
        props.toggleModal(false);
      }
    };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, []);

  return (
    <div className={s.wrap}>
      <Header />
      <Hammer>
        <main className={s.content}>
          <Switch>
            <Route
              path="/"
              exact
              render={(props) => <Startpage {...props} />}
            />
            <Route
              path="/about"
              render={(props) => <Subpage {...props} slug={`about`} />}
            />
            <Route
              path="/events"
              render={(props) => <EventsList {...props} slug={`events`} />}
            />
            
            <Route
              path="/people/:id"
              render={(props) => <Person {...props} slug={`people`} />}
            />

            <Route
              path="/people"
              render={(props) => <PeopleList {...props} slug={`people`} />}
            />
            <Route
              path="/impressum"
              render={(props) => <Subpage {...props} slug={`impressum`} />}
            />
            <Route
              path="/app/main"
              exact
              render={() => <Redirect to="/app/main/dashboard" />}
            />
          </Switch>

          <footer className={s.contentFooter}>
            <span className={`${s.footerLinksLeft}`}>
              <a href="/">peredvizh.org</a>
            </span>
            <span className={`${s.footerLinksRight} pull-right`}>
              <a href="/impressum">Impressum</a>
              <a href="#">Datenschutz</a>
              <a href="https://panda-platforma.berlin" target="_blank">
                &copy; {new Date().getFullYear()} by PANDA platforma
              </a>
            </span>
          </footer>
          <CookieNotice />
        </main>
      </Hammer>
    </div>
  );
};

function mapStateToProps(store) {
  return {
    modalVisible: store.modal.modalVisible,
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    toggleModal: (showModal) => {
      dispatch(toggleModal(showModal));
    },
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Layout));
