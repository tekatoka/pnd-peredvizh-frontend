import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { Row } from "reactstrap";
import ReactMarkdown from "react-markdown";
import {
  mapStateToProps,
  mapDispatchToProps,
} from "../../store/mapToProps/mapToProps";
import { PageContent, PageTitle } from "../../elements/PageElements";
import BlogArticle from "./BlogArticle";
import BlogArticlesList from "./BlogArticlesList";

import s from "./Blog.module.scss";

const BlogPage = (props) => {
  const slug = props.match.params.slug;
  
  const {
    isLoading,
    blogArticlesList,
    selectedBlogArticle,
    getBlogArticles,
    getBlogArticleBySlug,
  } = props;

  const [visibleArticle, setVisibleArticle] = useState();
  const [otherArticles, setOtherArticles] = useState([]);

  useEffect(() => {
    if (!blogArticlesList) {
      getBlogArticles();
    }
  }, [props]);

  useEffect(() => {
    if (blogArticlesList && blogArticlesList.length > 0) {
      let article;
      if (slug) {
        article = blogArticlesList.find((a) => {
          return a.slug === slug;
        });
      } else {
        article = blogArticlesList[0];
      }

      setVisibleArticle(article);
      setOtherArticles(
        blogArticlesList.filter((a) => {
          return a.id !== article.id;
        })
      );
      window.scrollTo({top: 0, behavior: 'smooth'});
    }
  }, [blogArticlesList, slug]);

  return (
    <React.Fragment>
      {!isLoading && blogArticlesList && visibleArticle && (
        <PageContent>
          <Row className="full-width">
            <BlogArticle selectedBlogArticle={visibleArticle} />
            <BlogArticlesList blogArticlesList={otherArticles} />
          </Row>
        </PageContent>
      )}
    </React.Fragment>
  );
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(BlogPage)
);
