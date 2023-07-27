import React from "react";

import logitechg from "../../assest/brand/logitechg.png";
import razer from "../../assest/brand/razer.png";
import corsair from "../../assest/brand/corsair.png";

const HomeBrands = () => {
  return (
    <section>
      <div className="title-home">
        <span></span>
        <h2>Brands</h2>
        <span></span>
      </div>
      <div className="brand">
        <img src={logitechg} alt="logitechg" />
        <img src={razer} alt="razer" />
        <img src={corsair} alt="corsair" />
      </div>
    </section>
  );
};

export default HomeBrands;
