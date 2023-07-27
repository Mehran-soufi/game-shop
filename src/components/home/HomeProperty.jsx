import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";
const HomeProperty = () => {
  return (
    <section>
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
          1030: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1110: {
            slidesPerView: 4,
            spaceBetween: 30,
          }
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className="property">
          <div className="property-title">
            <i className="fa-solid fa-truck-fast"></i>
            <span>fast sending</span>
          </div>
          <div className="property-det">
            <p>We will send your order as soon as possible</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="property">
          <div className="property-title">
            <i className="fa-solid fa-calendar-check"></i>
            <span>Product warranty</span>
          </div>
          <div className="property-det">
            <p>All goods are provided with a guarantee</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="property">
          <div className="property-title">
          <i className="fa-solid fa-headset"></i>
            <span>24 hour support</span>
          </div>
          <div className="property-det">
            <p>We are at your service at all hours</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="property">
          <div className="property-title">
          <i className="fa-solid fa-money-bill-1-wave"></i>
            <span>The price is right</span>
          </div>
          <div className="property-det">
            <p>All products are offered at the best price</p>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default HomeProperty;
