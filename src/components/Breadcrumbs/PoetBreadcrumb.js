import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { mapStateToProps } from "../../store/mapToProps/mapToProps";

const PoetBreadcrumb = (props) => {
  const { selectedPerson } = props;
  return selectedPerson && <span>{selectedPerson.FirstName} {selectedPerson.Name}</span>;
};

export default connect(mapStateToProps)(PoetBreadcrumb);
