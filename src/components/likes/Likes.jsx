import React, { useEffect, useState } from "react";
import LikeItems from "./LikeItems";
import LikesEmpty from "./LikesEmpty";
import {  useSelector } from "react-redux";

const Likes = () => {

  
  const favorites = useSelector((state) => state.favorite.favorites);

  return <section>{favorites.length ? <LikeItems /> : <LikesEmpty />}</section>;
};

export default Likes;
