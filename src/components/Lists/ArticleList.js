import React from "react";
import moment from "moment";
import { Link } from "react-router-dom";

export const ArticleList = ({ articles }) => {
  return (
    articles && (
      <>
        <h3>Контекст</h3>
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
