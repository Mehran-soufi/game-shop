import React from "react";

const ProductDescription = ({ data }) => {
  return (
    <div className="description">
      <h2>description :</h2>
      {data.map((item) => (
        <p key={item._id}>{item.description}</p>
      ))}
    </div>
  );
};

export default ProductDescription;
