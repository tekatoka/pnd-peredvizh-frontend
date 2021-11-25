import React from "react";
import moment from "moment";
import { Link } from "react-router-dom";
import {
  PageContent,
  PageTitle,
  DateElement,
} from "../../elements/PageElements";
import s from "./Blog.module.scss";
import ReactMarkdown from "react-markdown";

const truncate = (str) => {
  return str.length > 200 ? str.substring(0, 199) + "..." : str;
};

export const Excerpt = (props) => {
  const { item } = props;
  return (
    <div className={s.excerptWrapper}>
      <Link to={`/context/${item.slug}`}>
        <DateElement>{`${moment(item.published_at).format(
          "DD/MM/YYYY"
        )}`}</DateElement>{" "}
        | {item.Title}
      </Link>
      <p className={s.excerpt}>
        <ReactMarkdown>{truncate(item.Text)}</ReactMarkdown>
      </p>
    </div>
  );
};
