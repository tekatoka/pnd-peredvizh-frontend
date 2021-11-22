import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import Hammer from "rc-hammerjs";
import { CookieNotice } from "../CookieNotice/CookieNotice";
import Routes from "../../Routes";

import Header from "../Header";
import {
  mapStateToProps,
  mapDispatchToProps,
} from "../../store/mapToProps/mapToProps";

import s from "./Layout.module.scss";

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
          <Routes />
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
