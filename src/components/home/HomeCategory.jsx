import React from "react";

import mouse from "../../assest/category/mouse.png";
import keyboard from "../../assest/category/keyboard.png";
import { useNavigate } from "react-router-dom";

const HomeCategory = () => {
  const navigate = useNavigate();
  return (
    <section>
      <div className="title-home">
        <span></span>
        <h2>Category</h2>
        <span></span>
      </div>
      <div className="category">
        <div
          className="category-item1"
          onClick={() => navigate("/products/mouse")}
        >
          <div className="catgory-img">
            <img src={mouse} alt="mouse" />
          </div>
          <div className="category-det">
            <h2>Mouse</h2>
            <span>
              view
              <i className="fa-solid fa-arrow-right"></i>
            </span>
          </div>
        </div>
        <div
          className="category-item2"
          onClick={() => navigate("/products/keyboard")}
        >
          <div className="catgory-img">
            <img src={keyboard} alt="keyboard" />
          </div>
          <div className="category-det">
            <h2>Keyboard</h2>
            <span>
              view
              <i className="fa-solid fa-arrow-right"></i>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeCategory;
