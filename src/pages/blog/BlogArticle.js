import React, { useEffect, useState } from "react";
import moment from "moment";
import { Col } from "reactstrap";
import ReactMarkdown from "react-markdown";
import { Link } from "react-router-dom";
import {
  DateElement,
  PageTitle,
  MetadataContainer,
  AuthorElement,
} from "../../elements/PageElements";
import { CloudinaryLazyImage } from "../../components/Gallery/CloudinaryLazyImage";
import s from "./Blog.module.scss";

const BlogArticle = (props) => {
  const { selectedBlogArticle } = props;

  const articleUrl = "/context/" + selectedBlogArticle.slug;
  return (
    <React.Fragment>
      {selectedBlogArticle && (
        <Col md={8} xs={12}>
          <Link to={articleUrl}>
            <PageTitle>{selectedBlogArticle.Title}</PageTitle>
          </Link>
          {selectedBlogArticle.Image &&
            selectedBlogArticle.Image.provider_metadata && (
              <div>
                <CloudinaryLazyImage
                  type={"fixed"}
                  imagePublicId={
                    selectedBlogArticle.Image.provider_metadata.public_id
                  }
                  description={selectedBlogArticle.Image.alternativeText}
                  maxWidth={800}
                  maxHeight={442}
                />
              </div>
            )}
          <MetadataContainer>
            <DateElement>{`${moment(selectedBlogArticle.published_at).format(
              "DD/MM/YYYY" // | HH:mm
            )}`}</DateElement>{" "}
            |
            <span className={s.author}>
              {selectedBlogArticle.Author
                ? selectedBlogArticle.Author
                : `${selectedBlogArticle.created_by.firstname} ${selectedBlogArticle.created_by.lastname}`}
            </span>
          </MetadataContainer>
          <ReactMarkdown>{selectedBlogArticle.Text}</ReactMarkdown>
        </Col>
      )}
    </React.Fragment>
  );
};

export default BlogArticle;
