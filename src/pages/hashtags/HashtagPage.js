import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import {
  mapStateToProps,
  mapDispatchToProps,
} from "../../store/mapToProps/mapToProps";
import NotFoundPage from "../../pages/404";
import { PageContent, PageTitle } from "../../elements/PageElements";

import {
  Container,
  Row,
  Col,
  Form,
  FormGroup,
  Input,
  Button,
} from "reactstrap";
import { Link } from "react-router-dom";
import HashtagsCloud from "./HashtagsCloud";
import { HashtagItems } from "./HashtagItems";

const HashtagPage = (props) => {
  const hashtag = props.match.params.hashtag;
  const {
    isLoading,
    hashtagsList,
    selectedHashtag,
    getEntitiesByHashtag,
    toggleModal,
  } = props;
  useEffect(() => {
    if (hashtag && (!selectedHashtag || hashtag != selectedHashtag.tag)) {
      getEntitiesByHashtag(hashtag);
    }
  }, [selectedHashtag]);
  return (
    <React.Fragment>
      {!isLoading && hashtagsList && (
        <>
          {selectedHashtag && hashtag && hashtag == selectedHashtag.tag && (
            <PageContent>
              <Row className="full-width">
                <Col xs={12} sm={6} md={8} lg={9}>
                  <HashtagItems selectedHashtag={selectedHashtag} />
                </Col>
                <Col xs={12} sm={6} md={4} lg={3}>
                  <HashtagsCloud
                    hashtagsList={hashtagsList}
                    selectedHashtag={selectedHashtag.tag}
                    toggleModal={toggleModal}
                    textPos="left"
                  />
                </Col>
              </Row>
            </PageContent>
          )}
        </>
      )}
    </React.Fragment>
  );
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(HashtagPage)
);
