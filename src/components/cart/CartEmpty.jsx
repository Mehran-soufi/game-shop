import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../redux/action";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import HomeSkeleton from "../home/HomeSkeleton";
import { useNavigate } from "react-router-dom";

const CartEmpty = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { data, loading, error } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getProducts());
  }, []);


  return (
    <div className="empty-favorite">
      <div className="empty-favorite-text">
        <h2>shopping cart is empty!</h2>
        <p>Suggestion for you:</p>
      </div>
      <div className="empty-favorite-item">
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 0,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1025: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1110: {
              slidesPerView: 4,
              spaceBetween: 30,
            },
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {loading || error ? (
            <HomeSkeleton />
          ) : (
            <>
              {data
                .sort((x, y) => y.rating - x.rating)
                .splice(0, 4)
                .map((item) => (
                  <SwiperSlide
                    key={item._id}
                    className="best-home"
                    onClick={() => navigate(`/product/${item._id.toString()}`)}
                  >
                    <div className="best-home_img">
                      <img src={item.image} alt={item.name} />
                      {item.countInStock === 0 ? <span>Finished</span> : null}
                    </div>
                    <div className="best-home_det">
                      <div className="best-name">
                        <h2>{item.name.substring(0, 20)}...</h2>
                      </div>
                      <div className="best-detail">
                        <p>{item.price} $</p>
                        <p>
                          <i className="fa-solid fa-star"></i>
                          <span>({item.rating})</span>
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
            </>
          )}
        </Swiper>
      </div>
    </div>
  );
};

export default CartEmpty;
