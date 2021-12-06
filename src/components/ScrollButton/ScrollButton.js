import React, { useState, useEffect } from "react";
import s from "./ScrollButton.module.scss";

const ScrollButton = (props) => {
  const [visible, setVisible] = useState(false);

  const { forwardedRef } = props;

  useEffect(() => {
    if (forwardedRef && forwardedRef.current) {
      forwardedRef.current.addEventListener("scroll", toggleVisible);
    } else {
      window.addEventListener("scroll", toggleVisible);
    }
  }, [props]);

  const toggleVisible = () => {
    let scrolled = document.documentElement.scrollTop;
    if (forwardedRef) {
      scrolled = forwardedRef.current.scrollTop;
    }
    if (scrolled > 600) {
      setVisible(true);
    } else if (scrolled <= 600) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    let selector = window;
    if(forwardedRef) selector = forwardedRef.current;

    selector.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <div className={s.button}>
      <i
        className={`fa fa-angle-double-up ${visible ? s.visible : s.hidden}`}
        onClick={scrollToTop}
      />
    </div>
  );
};

export default ScrollButton;
