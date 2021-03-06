import { connect } from "react-redux";
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router";
import { Navbar } from "reactstrap";
import {
  mapStateToProps,
  mapDispatchToProps,
} from "../../store/mapToProps/mapToProps";
import { MainMenu, MainMenuMobile } from "./menues/MainMenu";
import { HashTagMenu, HashTagMenuMobile } from "./menues/HashTagMenu";
import { SocialMediaMenu } from "../SocialMediaLinks/SocialMediaMenu";

import s from "./Header.module.scss";
import "animate.css";

import socialMediaMenu from "./menues/data/socialMediaMenu.json";

const Header = (props) => {
  const { hashtagsList, getAllHashtags } = props;

  const [currentPath, setCurrentPath] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isHashtagsOpen, setIsHashtagsOpen] = useState(false);

  useEffect(() => {
    setCurrentPath(window.location.pathname);
  }, []);

  useEffect(() => {
    if (!Array.isArray(hashtagsList)) {
      getAllHashtags();
    }
  }, [props]);

  const toggleHashtagsOpen = () => {
    setIsHashtagsOpen(!isHashtagsOpen);
    setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setIsHashtagsOpen(false);
  };

  return (
    <Navbar className={`d-print-none `}>
      <header className={s.logo}>
        <a href="./">
          <span style={{ color: "#3c484f" }}>ПЕРЕ</span>
          <span className="fw-bold">ДВИЖ</span>
          <span className={s.currentYear}>2021</span>
        </a>
      </header>
      <div className={`${s.root}`}>
        <SocialMediaMenu items={socialMediaMenu} />
        <MainMenu currentPath={currentPath} />
      </div>
      <HashTagMenu toggleHashtagsOpen={toggleHashtagsOpen} />
      <HashTagMenuMobile isHashtagsOpen={isHashtagsOpen} hashtagsList={hashtagsList} />
      <MainMenuMobile
        handleClick={toggleMobileMenu}
        isOpen={isMobileMenuOpen}
        currentPath={currentPath}
        socialMediaMenu={socialMediaMenu}
      />
    </Navbar>
  );
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Header)
);
