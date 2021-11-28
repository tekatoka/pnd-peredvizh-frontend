import React, { useEffect, useState } from "react";
import { TagCloud } from "react-tagcloud";
import { PageContent } from "../../elements/PageElements";
import s from "./Hashtags.module.scss";

const HashtagsCloud = (props) => {
  const { hashtagsList, toggleModal, selectedHashtag, textPos } = props;
  const tagCloudData = hashtagsList.map((t) => {
    return {
      value: t,
      active: t == selectedHashtag,
      count: Math.floor(Math.random() * 10) + 3,
    };
  });
  return (
    <div
      className={s.hashTagMenu}
      style={{ textAlign: textPos ? textPos : "" }}
    >
      {tagCloudData &&
        tagCloudData.map((tagData) => {
          return (
            <span>
              {tagData.active ? (
                <div style={{fontSize: "26px"}}><strong>#{tagData.value}</strong></div>
              ) : (
                <a
                  className={s.hashTagItem}
                  href={`/hashtags/${tagData.value}`}
                  style={{ fontSize: `${20 + tagData.count}px` }}
                >
                  #{tagData.value}
                </a>
              )}
            </span>
          );
        })}
    </div>
  );
};

export default HashtagsCloud;
//
