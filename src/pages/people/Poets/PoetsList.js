import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import s from "../People.module.scss";
import {
  mapStateToProps,
  mapDispatchToProps,
} from "../../../store/mapToProps/mapToProps";
import { PageContent } from "../../../elements/PageElements";
import ImageList from "../../../components/Gallery/ImageList";

const PoetsList = (props) => {
  const { peopleList, getPeopleList, toggleModal } = props;

  useEffect(() => {
    if (!Array.isArray(peopleList)) {
      getPeopleList();
    }
  }, [props]);

  return (
    <React.Fragment>
      {peopleList && (
        <PageContent>
          <ImageList items={peopleList} type={"poets"} toggleModal={toggleModal} />
        </PageContent>
      )}
    </React.Fragment>
  );
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(PoetsList)
);
