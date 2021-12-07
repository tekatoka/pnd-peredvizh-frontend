import { useEffect } from "react";

const useOutsideClick = (ref, callback) => {
  const handleClick = (e) => {
    debugger;
    if (
      ref.current &&
      !ref.current.contains(e.target) &&
      (e.target.classList && e.target.classList.value.indexOf("ScrollButton") == -1) &&
      e.target.nodeName != "rect" &&
      e.target.nodeName != "circle"
    ) {
      callback();
    }
  };

  useEffect(() => {
    window.addEventListener("click", handleClick);

    return () => {
      window.removeEventListener("click", handleClick);
    };
  });
};

export default useOutsideClick;
