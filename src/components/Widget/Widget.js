import React, {useRef} from "react";
import s from "./Widget.module.scss";
import classNames from "classnames";
import AnimateHeight from "react-animate-height";
import ScrollButton from "../ScrollButton/ScrollButton";

const Widget = (props) => {

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
  } = props;

  return (
    <React.Fragment>
      <section
        className={classNames(
          "widget",
          s.widget,
          className
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
          <button onClick={() => props.toggleModal(false)} id={`closeButton`}>
            {typeof close === "string" ? (
              <strong className="text-gray-light">{close}</strong>
            ) : (
              <i className="la la-remove" />
            )}
          </button>
        </div>
        <AnimateHeight duration={500}>
          <div className={`${s.widgetBody} widget-body ${bodyClass}`}>
            {children}
          </div>
        </AnimateHeight>
      </section>
      <div className={s.widgetBackground}></div>
    </React.Fragment>
  );
};

export default Widget;
