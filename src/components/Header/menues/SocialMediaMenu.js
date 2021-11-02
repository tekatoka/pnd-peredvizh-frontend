import React from "react";
import {
  Nav,
  NavItem,
  NavLink
} from "reactstrap";

import s from "./../Header.module.scss";

import socialMediaMenu from "./data/socialMediaMenu.json";

const SocialMediaMenu = () => {
    return (
      <Nav id={s.socialMedia} className="ml-md-0">
      {
        socialMediaMenu.map(el => {
          return (
            <NavItem className={`${s.socialMediaItem} ${el.name.toLowerCase()}`}>
              <NavLink
                href={el.link}
                target="_blank"
              >
                <i className={`${s.headerIcon} fa ${el.icon}`} />
              </NavLink>
            </NavItem>
          )
        })
      }
      </Nav>
    )
}     


export { SocialMediaMenu}
