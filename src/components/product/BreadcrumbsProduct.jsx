import React from "react";
import { useNavigate } from "react-router-dom";

const BreadcrumbsProduct = ({ data }) => {
  const navigate = useNavigate();
  return (
    <>
      {data.map((item) => (
        <div key={item._id}>
          <p onClick={() => navigate("/")}>
            <i className="fa-solid fa-house"></i>
            <span>Home</span> /
          </p>
          <p onClick={() => navigate("/products")}>
            <i className="fa-solid fa-store"></i>
            <span>products</span> /
          </p>

          <p>
            {item.category === "mouse" ? (
             <i className="fa-solid fa-computer-mouse"></i>
            ) : (
              <i className="fa-solid fa-keyboard"></i>
            )}
            <span onClick={item.category === "Keyboard" ?()=> navigate('/products/Keyboard'):()=>navigate('/products/mouse')}>{item.category}</span> /
          </p>
          <p>{item.name}</p>
        </div>
      ))}
    </>
  );
};

export default BreadcrumbsProduct;
