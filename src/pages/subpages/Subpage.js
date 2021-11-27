import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import ReactMarkdown from "react-markdown";
import {
  mapStateToProps,
  mapDispatchToProps,
} from "../../store/mapToProps/mapToProps";
import { PageContent, PageTitleCentered } from "../../elements/PageElements";

import s from "./Subpage.module.scss";

const Subpage = (props) => {
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
        <PageContent>
          <PageTitleCentered>{currentPage.title}</PageTitleCentered>
          <ReactMarkdown>{currentPage.content}</ReactMarkdown>
        </PageContent>
      )}
    </React.Fragment>
  );
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Subpage)
);
