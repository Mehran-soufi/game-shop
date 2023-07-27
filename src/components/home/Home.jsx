import React, { useEffect, useState } from "react";
import HomeHero from "./HomeHero";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../redux/action";
import loadingimg from "../../assest/loading/loading.gif";
import HomeProperty from "./HomeProperty";
import HomeCategory from "./HomeCategory";
import HomeMouseCategory from "./HomeMouseCategory";
import HomeApp from "./HomeApp";
import HomeProduct from "./HomeProduct";
import HomeKeyboardCategory from "./HomeKeyboardCategory";
import HomeBrands from "./HomeBrands";

const Home = () => {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  return (
    <div>
      {loading ? (
        <div className="loading-home">
          <img src={loadingimg} />
          <h2>loading...</h2>
        </div>
      ) : (
        <>
          <HomeHero />
          <HomeProperty />
          <HomeApp />
          <HomeCategory />
          <HomeProduct />
          <HomeMouseCategory data={data} loading={loading} error={error} />
          <HomeKeyboardCategory data={data} loading={loading} error={error} />
          <HomeBrands />
        </>
      )}
    </div>
  );
};

export default Home;
