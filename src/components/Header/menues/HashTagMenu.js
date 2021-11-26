import React from "react";
import {
  Nav,
  NavItem,
  NavLink,
  Collapse
} from "reactstrap";

import s from "./../Header.module.scss";

import hashTags from "./data/hashTags.json";

const HashTagMenu = ({toggleSearchOpen}) => {
    return (
      <div className={s.miniSearch}>
        <NavLink
          onClick={toggleSearchOpen}
          className={s.navItem}
          href="#"
        >
          <i className={`common-icon fa fa-hashtag`} />
          {
            //<SearchIcon addId='header-search' className={s.headerIcon} />
          }
        </NavLink>
      </div>
    )
}

const HashTagMenuMobile = ({searchOpen}) => {
    return (
      <Collapse
        className={`${s.collapsedMenu}`}
        isOpen={searchOpen}
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
    )
}       


export { HashTagMenu, HashTagMenuMobile }
