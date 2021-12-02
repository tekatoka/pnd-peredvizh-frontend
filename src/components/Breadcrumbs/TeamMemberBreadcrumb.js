import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { mapStateToProps } from "../../store/mapToProps/mapToProps";

const TeamMemberBreadcrumb = (props) => {
  const { selectedTeamMember } = props;
  return selectedTeamMember && <span>{selectedTeamMember.FirstName} {selectedTeamMember.Name}</span>;
};

export default connect(mapStateToProps)(TeamMemberBreadcrumb);
