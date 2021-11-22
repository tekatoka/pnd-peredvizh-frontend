import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import ReactMarkdown from "react-markdown";
import {
  mapStateToProps,
  mapDispatchToProps,
} from "../../store/mapToProps/mapToProps";

import s from "./About.module.scss";

const About = (props) => {
  const slug = props.slug;
  const { isLoading, currentPage, getSubpageBySlug } = props;

  useEffect(() => {
    if (!currentPage || slug != currentPage.slug) {
      getSubpageBySlug(slug);
    }
  }, [currentPage]);

  return (
    <React.Fragment>
      {!isLoading && currentPage && (
        <div className={`${s.pageContent}`}>
          <h2 className={s.pageTitle}>{currentPage.title}</h2>
          <ReactMarkdown>{currentPage.content}</ReactMarkdown>
        </div>
      )}
    </React.Fragment>
  );
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(About)
);
