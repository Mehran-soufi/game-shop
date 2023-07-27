import React from "react";

import hero from '../../assest/hero/hero.webp'

const HomeHero = () => {

  return (
    <div className="hero">
            <img src={hero} alt="game shop" />
              <h1>Gameshop is the best site for selling mouse and keyboard</h1>
    </div>
  );
};

export default HomeHero;
