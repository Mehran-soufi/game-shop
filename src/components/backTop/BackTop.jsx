import React, { useState } from "react";

const BackTop = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 50) {
      setVisible(true);
    } else if (scrolled <= 50) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0 });
  };

  window.addEventListener("scroll", toggleVisible);

  return (
    <div className={visible ? "scrollTop active" : "scrollTop"}>
      <button onClick={scrollToTop} title="back top">
        <i className="fa-solid fa-chevron-up"></i>
      </button>
    </div>
  );
};

export default BackTop;
