import React, { useEffect, useMemo, useState } from "react";
import moment from "moment";
import { Col } from "reactstrap";
import {
  PageContent,
  PageTitle,
  DateElement,
  PageTitleCentered,
} from "../../elements/PageElements";
import { Excerpt } from "./Excerpt";
import Pagination from "../../components/Pagination/Pagination";

import s from "./Blog.module.scss";

const BlogArticlesList = (props) => {
  const { blogArticlesList } = props;

  const [currentPage, setCurrentPage] = useState(1);

  const PageSize = 4;

  const currentData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return blogArticlesList.slice(firstPageIndex, lastPageIndex);
  }, [currentPage]);

  return (
    <React.Fragment>
      {blogArticlesList && blogArticlesList.length > 0 && (
        <Col md={4} xs={12}>
          <PageTitleCentered>Другое по теме:</PageTitleCentered>
          <div className={s.listWrapper}>
            {/* {blogArticlesList.map((article, index) => {
              return <Excerpt item={article} key={index} />;
            })} */}

            {currentData.map((article, index) => {
              return <Excerpt item={article} key={index} />;
            })}

            <Pagination
              className={s.paginationBar}
              currentPage={currentPage}
              totalCount={blogArticlesList.length}
              pageSize={PageSize}
              onPageChange={(page) => setCurrentPage(page)}
            />
          </div>
        </Col>
      )}
    </React.Fragment>
  );
};

export default BlogArticlesList;
