import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import s from "./Loader.module.scss";

const Loader = () => {
  return (
    <div className={cx(s.root, s.loader)}>
      <i
        className={"la la-circle-notch la-spin " + s.spinner}
        style={{ fontSize: 64 }}
      />
      {/* la-dharmachakra */}
    </div>
  );
};

export default Loader;
