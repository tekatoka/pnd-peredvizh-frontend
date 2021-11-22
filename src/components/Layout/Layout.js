import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Switch, Route, withRouter, Redirect } from "react-router";
import Hammer from "rc-hammerjs";
import { CookieNotice } from "../CookieNotice/CookieNotice";

import Startpage from "../../pages/startpage/Startpage";
import Subpage from "../../pages/subpages/Subpage";

import Header from "../Header";
import {
  mapStateToProps,
  mapDispatchToProps,
} from "../../store/mapToProps/mapToProps";

import s from "./Layout.module.scss";
import EventsList from "../../pages/events/EventsList";
import PeopleList from "../../pages/people/PeopleList";
import PersonPage from "../../pages/people/PersonPage";
import EventPage from "../../pages/events/EventPage";
import NotFoundPage from "../../pages/404";
import Loader from "../Loader/Loader";

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

  useEffect(() => {
    if (window.performance) {
      //trigger only on page refresh
      if (performance.navigation.type == 1) {
        props.resetStore();
      }
    }
  }, []);

  return (
    <div className={s.wrap}>
      <Header />
      <Hammer>
        <main className={s.content}>
          {props.isLoading && <Loader />}
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
              path="/events/:slug"
              render={(props) => <EventPage {...props} />}
            />

            <Route
              path="/events"
              render={(props) => <EventsList {...props} slug={`events`} />}
            />

            <Route
              path="/people/:slug"
              render={(props) => <PersonPage {...props} slug={`people`} />}
            />

            <Route
              path="/people"
              render={(props) => <PeopleList {...props} />}
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
            <Route
              path="*"
              render={(props) => <NotFoundPage {...props} slug={`404`} />}
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Layout));
