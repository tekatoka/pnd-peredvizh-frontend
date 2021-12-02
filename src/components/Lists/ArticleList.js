import React from "react";
import moment from "moment";
import { Link } from "react-router-dom";
import { PageSubtitle } from "../../elements/PageElements";
import s from "./List.module.scss";

export const ArticleList = ({ articles }) => {
  return (
    articles && (
      <>
        <PageSubtitle>Контекст</PageSubtitle>
        <div className={s.block}>
          {articles.map((e, index) => {
            return (
              <div key={index}>
                <Link to={`/context/${e.slug}`} className="inverted">
                  {moment(e.published_at).format("DD/MM/YYYY")} | {e.Title}
                </Link>
              </div>
            );
          })}
        </div>
      </>
    )
  );
};
