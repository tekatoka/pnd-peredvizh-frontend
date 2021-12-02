import React from "react";
import moment from "moment";
import { Link } from "react-router-dom";
import { PageSubtitle } from "../../elements/PageElements";

export const ArticleList = ({ articles }) => {
  return (
    articles && (
      <>
        <PageSubtitle>Контекст</PageSubtitle>
        {articles.map((e, index) => {
          return (
            <div key={index}>
              <Link to={`/context/${e.slug}`}>
                {moment(e.published_at).format("DD/MM/YYYY")} |{" "}
                {e.Title}
              </Link>
            </div>
          );
        })}
      </>
    )
  );
};
