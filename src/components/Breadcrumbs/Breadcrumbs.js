import React, { useState, useEffect } from "react";
import withBreadcrumbs from "react-router-breadcrumbs-hoc";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import {
  mapStateToProps,
  mapDispatchToProps,
} from "./../../store/mapToProps/mapToProps";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";
import PoetBreadcrumb from "./PoetBreadcrumb";
import EventBreadcrumb from "./EventBreadcrumb";
import TeamMemberBreadcrumb from "./TeamMemberBreadcrumb";
import BlogArticleBreadcrumb from "./BlogArticleBreadcrumb";

// define custom breadcrumbs for certain routes.
// breadcumbs can be components or strings.
const routes = [
  { path: "/poets/:slug", breadcrumb: PoetBreadcrumb },
  { path: "/events/:slug", breadcrumb: EventBreadcrumb },
  { path: "/team/:slug", breadcrumb: TeamMemberBreadcrumb },
  { path: "/context/:slug", breadcrumb: BlogArticleBreadcrumb },

  { path: "/", breadcrumb: "Главная" },
  { path: "/about", breadcrumb: "О проекте" },
  { path: "/context", breadcrumb: "Контекст" },
  { path: "/events", breadcrumb: "События" },
  { path: "/poets", breadcrumb: "Поэты" },
  { path: "/team", breadcrumb: "Команда" },
  { path: "/impressum", breadcrumb: "Импрессум" },
  { path: "/privacy", breadcrumb: "Защита данных" },
  { path: "/hashtags", breadcrumb: "Hashtags" },
];

// map, render, and wrap the breadcrumb components
const Breadcrumbs = ({ breadcrumbs }) => {
  return (
    <Breadcrumb>
      {breadcrumbs.map(({ match, breadcrumb }) => (
        <BreadcrumbItem key={match.url}>
          <a href={match.url}>
            {match.url == "/" ? (
              <i className="fa fa-home common-icon" />
            ) : (
              breadcrumb
            )}
          </a>
        </BreadcrumbItem>
      ))}
    </Breadcrumb>
  );
};

//export default ;

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(withBreadcrumbs(routes)(Breadcrumbs))
);
