import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getOneProduct } from "../../redux/action";

import loadingimg from "../../assest/loading/loading.gif";
import errorimg from "../../assest/error/error.png";
import BreadcrumbsProduct from "./BreadcrumbsProduct";
import ProductImg from "./ProductImg";
import ProductDetail from "./ProductDetail";
import ProductDescription from "./ProductDescription";

const Product = () => {
  const { _id } = useParams();
  const dispatch = useDispatch();
  const { data, loading,error } = useSelector((state) => state.Oneproduct);
  useEffect(() => {
    dispatch(getOneProduct(_id));
    window.scrollTo({ top: 0 });
  }, []);
  
  return (
    <>
      {loading ? (
        <div className="loading-home">
          <img src={loadingimg} />
          <h2>loading...</h2>
        </div>
      ) : error?(
        <div className="loading-home">
        <img src={errorimg} />
        <h2>Unfortunately, a problem has occurred</h2>
      </div>
      ) : (
        <>
          <section className="product">
            <div className="breadcrumbs">
              {data ? <BreadcrumbsProduct data={data} /> : null}
            </div>
            <div className="one_product-items">
              <ProductImg data={data} />
              <ProductDetail data={data} />
            </div>
            <div className="one_product-details">
              <ProductDescription data={data}/>
            </div>
          </section>
        </>
      )}
    </>
  );
};

export default Product;
