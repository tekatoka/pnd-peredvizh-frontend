import React from "react";
import { Nav, NavItem, NavLink } from "reactstrap";

import s from "./SocialMediaMenu.module.scss";

const SocialMediaMenu = ({ items }) => {
  return (
    <Nav className="ml-md-0">
      {items &&
        Object.keys(items).map((key) => {
          let icon;

          switch (key.toLowerCase()) {
            case "facebook":
              icon = "fa-facebook";
              break;
            case "instagram":
              icon = "fa-instagram";
              break;
            case "twitter":
              icon = "fa-twitter";
              break;
            case "vkontakte":
              icon = "fa-vk";
              break;
            case "website":
              icon = "fa-link";
              break;
            case "email":
              icon = "fa-envelope";
              break;
          }

          return (
            icon &&
            items[key] && (
              <NavItem className={`${s.socialMediaItem} ${key.toLowerCase()}`}>
                <NavLink href={items[key]} target="_blank">
                  <i className={`common-icon fa ${icon}`} />
                </NavLink>
              </NavItem>
            )
          );
        })}
    </Nav>
  );
};

export { SocialMediaMenu };
