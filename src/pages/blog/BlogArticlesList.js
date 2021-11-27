import React, { useEffect, useState } from "react";
import moment from "moment";
import { Col } from "reactstrap";
import {
  PageContent,
  PageTitle,
  DateElement,
  PageTitleCentered
} from "../../elements/PageElements";
import { Excerpt } from "./Excerpt";

import s from "./Blog.module.scss";

const BlogArticlesList = (props) => {
  const { blogArticlesList } = props;
  return (
    <React.Fragment>
      {blogArticlesList &&
        blogArticlesList.length > 0 &&
        (
          <Col md={4} xs={12}>
            <PageTitleCentered>Другое по теме:</PageTitleCentered>
            <div className={s.listWrapper}>
            {blogArticlesList.map((article, index) => {
              return <Excerpt item={article} key={index} />;
            })}
            </div>
          </Col>
        )}
    </React.Fragment>
  );
};

export default BlogArticlesList;
