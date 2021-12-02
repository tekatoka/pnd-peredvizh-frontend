import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import Hammer from "rc-hammerjs";
import { CookieNotice } from "../CookieNotice/CookieNotice";
import Routes from "../../Routes";
import _ from "lodash";

import Header from "../Header";
import {
  mapStateToProps,
  mapDispatchToProps,
} from "../../store/mapToProps/mapToProps";
import RouteChangeTracker from "../../RouteChangeTracker";

import s from "./Layout.module.scss";

import Loader from "../Loader/Loader";
import ScrollButton from "../ScrollButton/ScrollButton";

const Layout = (props) => {
  const { history, toggleModal, isLoading, resetStore } = props;
  useEffect(() => {
    const close = (e) => {
      if (e.keyCode === 27) {
        toggleModal(false);
      }
    };

    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, []);

  useEffect(() => {
    if (window.performance) {
      //trigger only on page refresh
      if (performance.navigation.type == 1) {
        resetStore();
      }
    }
    toggleModal(false);
  }, []);

  useEffect(
    () =>
      history.listen(() => {
        // do something on route change
        toggleModal(false);
      }),
    []
  );

  return (
    <div className={s.wrap}>
      <RouteChangeTracker />
      <Header />
      <Hammer>
        <main className={s.content}>
          {isLoading && <Loader />}
          <Routes />
          <ScrollButton />
          <footer className={s.contentFooter}>
            <div className={`${s.footerLinksLeft}`}>
              <a href="/">peredvizh.org</a>
            </div>
            <div className={`${s.footerLinksRight}`}>
              <a href="/impressum">Impressum</a>
              <a href="/privacy">Datenschutzerklärung</a>
              <span className={s.copyRight}>
                <a href="https://panda-platforma.berlin" target="_blank">
                  &copy; {new Date().getFullYear()} by PANDA platforma
                </a>
              </span>
            </div>
          </footer>
          <CookieNotice />
        </main>
      </Hammer>
    </div>
  );
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Layout));
