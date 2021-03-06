import React from "react";
import { Nav, NavItem, NavLink, Collapse } from "reactstrap";

import s from "./../Header.module.scss";

import hashTags from "./data/hashTags.json";

const HashTagMenu = ({ toggleHashtagsOpen }) => {
  return (
    <div className={s.miniSearch}>
      <NavLink onClick={toggleHashtagsOpen} className={s.navItem} href="#">
        <i className={`common-icon fa fa-hashtag`} />
        {
          //<SearchIcon addId='header-search' className={s.headerIcon} />
        }
      </NavLink>
    </div>
  );
};

const HashTagMenuMobile = ({ isHashtagsOpen, hashtagsList }) => {
  return (
    hashtagsList && (
      <Collapse className={`${s.collapsedMenu}`} isOpen={isHashtagsOpen}>
        <Nav className={`${s.mobileNav} ${s.hashTagMenu}`}>
          {hashtagsList.map((el) => {
            return (
              <NavItem>
                <NavLink className={`${s.navItem} ${s.hashTagItem}`} href={"/hashtags/" + el}>
                  #{el}
                </NavLink>
              </NavItem>
            );
          })}
        </Nav>
      </Collapse>
    )
  );
};

export { HashTagMenu, HashTagMenuMobile };
