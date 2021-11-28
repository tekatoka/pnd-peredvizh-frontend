import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import {
  mapStateToProps,
  mapDispatchToProps,
} from "../../store/mapToProps/mapToProps";
import { PageContent } from "../../elements/PageElements";
import HashtagsCloud from "./HashtagsCloud";

const HashtagsList = (props) => {
  const { hashtagsList, getAllHashtags, toggleModal } = props;

  useEffect(() => {
    if (!Array.isArray(hashtagsList)) {
      getAllHashtags();
    }
  }, [props]);

  return (
    <React.Fragment>
      {hashtagsList && (
        <PageContent>
          <HashtagsCloud hashtagsList={hashtagsList} toggleModal={toggleModal} />
        </PageContent>
      )}
    </React.Fragment>
  );
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(HashtagsList)
);
