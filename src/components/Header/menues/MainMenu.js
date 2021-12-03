import React from "react";
import {
  Nav,
  NavItem,
  NavLink,
  Collapse,
} from "reactstrap";

import BurgerIcon from "../../Icons/HeaderIcons/BurgerIcon";
import { SocialMediaMenu } from "../../SocialMediaLinks/SocialMediaMenu";
import s from "./../Header.module.scss";

import mainMenu from "./data/mainMenu.json";

const MainMenu = ({currentPath}) => {
    return (
          <Nav id="main-menu" className="ml-md-0">
          {
            mainMenu.map(el => {
              return (
                <NavItem className={s.mainMenuItem}>
                  <NavLink className={`${s.navItem} ${currentPath.includes(el.link) ? s.active : ''}`} href={el.link}>{el.name}</NavLink>
                </NavItem>
              )
            })
          }
          </Nav>
    )
}

const MainMenuMobile = ({handleClick, isOpen, currentPath,socialMediaMenu}) => {
    return (
    <>
    <div className={s.burger}>
        <NavLink
            onClick={handleClick}
            className={`${s.navItem} text-white`}
            href="#"
        >
            <BurgerIcon className="common-icon" />
        </NavLink>
    </div>
    <Collapse
    isOpen={isOpen}
    className={s.collapsedMenu}
    >          
      <Nav className={s.mobileNav}>
        {
          mainMenu.map(el => {

            return (
              <NavItem>
                <NavLink className={`${s.navItem} ${currentPath.includes(el.link) ? s.activeMobile : ''}`} href={el.link}>{el.name}</NavLink>
              </NavItem>
            )
          })
        }
        <SocialMediaMenu items={socialMediaMenu} />
      </Nav>
      
  </Collapse>
  </>
    )
}       


export { MainMenu, MainMenuMobile}
