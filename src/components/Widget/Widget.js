import React from "react";
import PropTypes from "prop-types";
import { UncontrolledTooltip } from "reactstrap";
import s from "./Widget.module.scss";
import classNames from "classnames";
import Loader from "../Loader"; // eslint-disable-line css-modules/no-unused-class
import AnimateHeight from "react-animate-height";
import uuidv4 from "uuid/v4";
import {
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "reactstrap";

class Widget extends React.Component {
  static propTypes = {
    title: PropTypes.node,
    className: PropTypes.string,
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node,
    ]),
    close: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
    fullscreen: PropTypes.bool,
    collapse: PropTypes.bool,
    refresh: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
    settings: PropTypes.bool,
    settingsInverse: PropTypes.bool,
    tooltipPlacement: PropTypes.string,
    showTooltip: PropTypes.bool,
    bodyClass: PropTypes.string,
    customControls: PropTypes.bool,
    options: PropTypes.object, //eslint-disable-line,
    fetchingData: PropTypes.bool,
    handleToggleModal: PropTypes.func,
  };

  static defaultProps = {
    title: null,
    className: "",
    children: [],
    close: false,
    fullscreen: false,
    collapse: false,
    refresh: false,
    settings: false,
    settingsInverse: false,
    tooltipPlacement: "bottom",
    showTooltip: false,
    bodyClass: "",
    customControls: false,
    customClose: null,
    customExpand: null,
    customCollapse: null,
    customFullscreen: null,
    customReload: null,
    customDropDown: null,
    prompt: false,
    collapsed: false,
    options: {},
    fetchingData: false,
    widgetType: "",
  };

  constructor(props) {
    super(props);

    this.state = {
      reloading: false
    };
  }

  toggleModal = () => {
    this.props.toggleModal(false);
  };

  render() {
    const {
      title,
      className,
      children,
      toggleModal,
      close,
      bodyClass,
      fetchingData,
      handleToggleModal,
      options, //eslint-disable-line
      ...attributes
    } = this.props;

    const {
      reloading
    } = this.state;

    return (
      <React.Fragment>
        <section
          className={classNames(
            "widget",
            s.widget,
            className,
            reloading || fetchingData ? s.reloading : ""
          )}
          {...attributes}
        >
          {title &&
            (typeof title === "string" ? (
              <h5 className={s.title}>{title}</h5>
            ) : (
              <header className={s.title}>{title}</header>
            ))}

          <div className={`${s.widgetControls} widget-controls`}>
            <button onClick={this.toggleModal} id={`closeButton`}>
              {typeof close === "string" ? (
                <strong className="text-gray-light">{close}</strong>
              ) : (
                <i className="la la-remove" />
              )}
            </button>
          </div>
          <AnimateHeight duration={500}>
            <div className={`${s.widgetBody} widget-body ${bodyClass}`}>
              {reloading || fetchingData ? (
                <Loader className={s.widgetLoader} size={40} />
              ) : (
                children
              )}
            </div>
          </AnimateHeight>
        </section>
        <div
          className={s.widgetBackground}
        ></div>
      </React.Fragment>
    );
  }
}

export default Widget;
