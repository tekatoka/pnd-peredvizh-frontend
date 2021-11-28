import React, { useState, useEffect } from "react";
import HashtagsCloud from "./HashtagsCloud";
import s from "./Hashtags.module.scss";

export const SplittedHashtags = ({ tags }) => {
  const [hashtags, setHashtags] = useState([]);
  useEffect(() => {
    if (tags && tags != "") {
      let splittedTags = tags.split("#").filter((t) => {
        return t != "" && t != "undefined";
      });

      setHashtags(
        splittedTags.map((element) => {
          return element.trim().toLowerCase();
        })
      );
    }
  }, [tags]);

  return (
    hashtags &&
    hashtags.length > 0 && (
      <div className={s.hashTagList}>
        <HashtagsCloud hashtagsList={hashtags} textPos="left" />
      </div>
    )
  );
};
