import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import ReactMarkdown from "react-markdown";
import {
  mapStateToProps,
  mapDispatchToProps,
} from "../../store/mapToProps/mapToProps";
import { PageContent, PageTitle } from "../../elements/PageElements";

import s from "./Blog.module.scss";

const BlogArticlesList = (props) => {
  const { isLoading, blogArticlesList, getBlogArticles } = props;

  useEffect(() => {
    if (!blogArticlesList) {
      getBlogArticles();
    }
  }, []);

  return (
    <React.Fragment>
      {!isLoading && blogArticlesList && (
        <PageContent>
          <PageTitle>КОНТЕКСТ</PageTitle>
          {/* <ReactMarkdown>{currentPage.content}</ReactMarkdown> */}
        </PageContent>
      )}
    </React.Fragment>
  );
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(BlogArticlesList)
);
