import React, { useState } from "react";
import s from "./ScrollButton.module.scss";

const ScrollButton = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 600) {
      setVisible(true);
    } else if (scrolled <= 600) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
      /* you can also use 'auto' behaviour
         in place of 'smooth' */
    });
  };

  window.addEventListener("scroll", toggleVisible);
  
  return (
    <div className={s.button}>
      <i
        className={`fa fa-angle-double-up ${visible ? s.visible : s.hidden }`}
        onClick={scrollToTop}
      />
    </div>
  );
};

export default ScrollButton;
