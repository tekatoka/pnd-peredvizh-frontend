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

const TeamMembersList = (props) => {
  const { teamList, getTeamMembersList, toggleModal } = props;

  useEffect(() => {
    if (!Array.isArray(teamList)) {
      getTeamMembersList();
    }
  }, [props]);

  return (
    <React.Fragment>
      {teamList && (
        <PageContent>
          <ImageList items={teamList} type={"team"} toggleModal={toggleModal} />
        </PageContent>
      )}
    </React.Fragment>
  );
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(TeamMembersList)
);
