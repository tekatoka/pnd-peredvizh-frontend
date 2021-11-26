import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { mapStateToProps } from "../../store/mapToProps/mapToProps";

const BlogArticleBreadcrumb = (props) => {
  const { blogArticlesList } = props;
  const slug = props.match.params.slug;
  return (
    blogArticlesList &&
    blogArticlesList.length > 0 && (
      <span>
        {
          blogArticlesList.find((a) => {
            return a.slug == slug;
          }).Title
        }
      </span>
    )
  );
};

export default connect(mapStateToProps)(BlogArticleBreadcrumb);
