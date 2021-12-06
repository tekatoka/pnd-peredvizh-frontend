import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { mapStateToProps } from "../../store/mapToProps/mapToProps";

const BlogArticleBreadcrumb = (props) => {
  const { blogArticlesList } = props;
  const [blogArticle, setBlogArticle] = useState();
  const slug = props.match.params.slug;

useEffect(() => {
  blogArticlesList &&
  setBlogArticle(blogArticlesList.find((a) => {
    return a.slug == slug;
  }))
}, [])

  return (
    blogArticlesList &&
    blogArticlesList.length > 0 && (
      <span>
        {
         blogArticle ? blogArticle.Title : "Страница не найдена"
        }
      </span>
    )
  );
};

export default connect(mapStateToProps)(BlogArticleBreadcrumb);
