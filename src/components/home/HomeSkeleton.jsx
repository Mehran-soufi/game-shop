import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";
import { Skeleton, Stack } from "@mui/material";

const HomeSkeleton = () => {
  const [width, setwidth] = useState(0);
  const widthDoc = document.documentElement.offsetWidth;

  useEffect(() => {
    if (widthDoc > 1024) {
      setwidth(0);
    } else if (widthDoc > 800) {
      setwidth(1);
    } else if (widthDoc > 450) {
      setwidth(2);
    } else if (widthDoc > 400) {
      setwidth(3);
    } else if (widthDoc > 330) {
      setwidth(4);
    } else {
      setwidth(5);
    }
  }, []);
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
          1025: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          1110: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {width === 0 ? (
          <>
            <SwiperSlide className="best-home skeleton">
              <Stack spacing={1}>
                <Skeleton variant="rectangular" width={300} height={300} />
                <Skeleton variant="rectangular" width={300} height={40} />
                <Skeleton variant="rectangular" width={300} height={30} />
              </Stack>
            </SwiperSlide>
            <SwiperSlide className="best-home skeleton">
              <Stack spacing={1}>
                <Skeleton variant="rectangular" width={300} height={300} />
                <Skeleton variant="rectangular" width={300} height={40} />
                <Skeleton variant="rectangular" width={300} height={30} />
              </Stack>
            </SwiperSlide>
            <SwiperSlide className="best-home skeleton">
              <Stack spacing={1}>
                <Skeleton variant="rectangular" width={300} height={300} />
                <Skeleton variant="rectangular" width={300} height={40} />
                <Skeleton variant="rectangular" width={300} height={30} />
              </Stack>
            </SwiperSlide>
            <SwiperSlide className="best-home skeleton">
              <Stack spacing={1}>
                <Skeleton variant="rectangular" width={300} height={300} />
                <Skeleton variant="rectangular" width={300} height={40} />
                <Skeleton variant="rectangular" width={300} height={30} />
              </Stack>
            </SwiperSlide>
          </>
        ) : width === 1 ? (
          <>
            <SwiperSlide className="best-home skeleton">
              <Stack spacing={1}>
                <Skeleton variant="rectangular" width={350} height={250} />
                <Skeleton variant="rectangular" width={350} height={40} />
                <Skeleton variant="rectangular" width={350} height={40} />
              </Stack>
            </SwiperSlide>
            <SwiperSlide className="best-home skeleton">
              <Stack spacing={1}>
                <Skeleton variant="rectangular" width={350} height={250} />
                <Skeleton variant="rectangular" width={350} height={40} />
                <Skeleton variant="rectangular" width={350} height={40} />
              </Stack>
            </SwiperSlide>
            <SwiperSlide className="best-home skeleton">
              <Stack spacing={1}>
                <Skeleton variant="rectangular" width={350} height={250} />
                <Skeleton variant="rectangular" width={350} height={40} />
                <Skeleton variant="rectangular" width={350} height={40} />
              </Stack>
            </SwiperSlide>
            <SwiperSlide className="best-home skeleton">
              <Stack spacing={1}>
                <Skeleton variant="rectangular" width={350} height={250} />
                <Skeleton variant="rectangular" width={350} height={40} />
                <Skeleton variant="rectangular" width={350} height={40} />
              </Stack>
            </SwiperSlide>
          </>
        ) : width === 2 ? (
          <>
            <SwiperSlide className="best-home skeleton">
              <Stack spacing={1}>
                <Skeleton variant="rectangular" width={300} height={230} />
                <Skeleton variant="rectangular" width={300} height={30} />
                <Skeleton variant="rectangular" width={300} height={30} />
              </Stack>
            </SwiperSlide>
            <SwiperSlide className="best-home skeleton">
              <Stack spacing={1}>
                <Skeleton variant="rectangular" width={300} height={230} />
                <Skeleton variant="rectangular" width={300} height={30} />
                <Skeleton variant="rectangular" width={300} height={30} />
              </Stack>
            </SwiperSlide>
            <SwiperSlide className="best-home skeleton">
              <Stack spacing={1}>
                <Skeleton variant="rectangular" width={300} height={230} />
                <Skeleton variant="rectangular" width={300} height={30} />
                <Skeleton variant="rectangular" width={300} height={30} />
              </Stack>
            </SwiperSlide>
            <SwiperSlide className="best-home skeleton">
              <Stack spacing={1}>
                <Skeleton variant="rectangular" width={300} height={230} />
                <Skeleton variant="rectangular" width={300} height={30} />
                <Skeleton variant="rectangular" width={300} height={30} />
              </Stack>
            </SwiperSlide>
          </>
        ) : width === 3 ? (
          <>
            <SwiperSlide className="best-home skeleton">
              <Stack spacing={1}>
                <Skeleton variant="rectangular" width={130} height={120} />
                <div className="skaleton-res">
                  <Skeleton variant="rectangular" width={190} height={45} />
                  <Skeleton variant="rectangular" width={190} height={45} />
                </div>
              </Stack>
            </SwiperSlide>
            <SwiperSlide className="best-home skeleton">
              <Stack spacing={1}>
                <Skeleton variant="rectangular" width={130} height={120} />
                <div className="skaleton-res">
                  <Skeleton variant="rectangular" width={190} height={45} />
                  <Skeleton variant="rectangular" width={190} height={45} />
                </div>
              </Stack>
            </SwiperSlide>
            <SwiperSlide className="best-home skeleton">
              <Stack spacing={1}>
                <Skeleton variant="rectangular" width={130} height={120} />
                <div className="skaleton-res">
                  <Skeleton variant="rectangular" width={190} height={45} />
                  <Skeleton variant="rectangular" width={190} height={45} />
                </div>
              </Stack>
            </SwiperSlide>
            <SwiperSlide className="best-home skeleton">
              <Stack spacing={1}>
                <Skeleton variant="rectangular" width={130} height={120} />
                <div className="skaleton-res">
                  <Skeleton variant="rectangular" width={190} height={45} />
                  <Skeleton variant="rectangular" width={190} height={45} />
                </div>
              </Stack>
            </SwiperSlide>
          </>
        ) : width === 4 ? (
          <>
            <SwiperSlide className="best-home skeleton">
              <Stack spacing={1}>
                <Skeleton variant="rectangular" width={130} height={120} />
                <div className="skaleton-res">
                  <Skeleton variant="rectangular" width={160} height={45} />
                  <Skeleton variant="rectangular" width={160} height={45} />
                </div>
              </Stack>
            </SwiperSlide>
            <SwiperSlide className="best-home skeleton">
              <Stack spacing={1}>
                <Skeleton variant="rectangular" width={130} height={120} />
                <div className="skaleton-res">
                  <Skeleton variant="rectangular" width={160} height={45} />
                  <Skeleton variant="rectangular" width={160} height={45} />
                </div>
              </Stack>
            </SwiperSlide>
            <SwiperSlide className="best-home skeleton">
              <Stack spacing={1}>
                <Skeleton variant="rectangular" width={130} height={120} />
                <div className="skaleton-res">
                  <Skeleton variant="rectangular" width={160} height={45} />
                  <Skeleton variant="rectangular" width={160} height={45} />
                </div>
              </Stack>
            </SwiperSlide>
            <SwiperSlide className="best-home skeleton">
              <Stack spacing={1}>
                <Skeleton variant="rectangular" width={130} height={120} />
                <div className="skaleton-res">
                  <Skeleton variant="rectangular" width={160} height={45} />
                  <Skeleton variant="rectangular" width={160} height={45} />
                </div>
              </Stack>
            </SwiperSlide>
          </>
        ) : (
          <>
            <SwiperSlide className="best-home skeleton">
              <Stack spacing={1}>
                <Skeleton variant="rectangular" width={100} height={100} />
                <div className="skaleton-res">
                  <Skeleton variant="rectangular" width={130} height={40} />
                  <Skeleton variant="rectangular" width={130} height={40} />
                </div>
              </Stack>
            </SwiperSlide>
            <SwiperSlide className="best-home skeleton">
            <Stack spacing={1}>
                <Skeleton variant="rectangular" width={100} height={100} />
                <div className="skaleton-res">
                  <Skeleton variant="rectangular" width={130} height={40} />
                  <Skeleton variant="rectangular" width={130} height={40} />
                </div>
              </Stack>
            </SwiperSlide>
            <SwiperSlide className="best-home skeleton">
            <Stack spacing={1}>
                <Skeleton variant="rectangular" width={100} height={100} />
                <div className="skaleton-res">
                  <Skeleton variant="rectangular" width={130} height={40} />
                  <Skeleton variant="rectangular" width={130} height={40} />
                </div>
              </Stack>
            </SwiperSlide>
            <SwiperSlide className="best-home skeleton">
            <Stack spacing={1}>
                <Skeleton variant="rectangular" width={100} height={100} />
                <div className="skaleton-res">
                  <Skeleton variant="rectangular" width={130} height={40} />
                  <Skeleton variant="rectangular" width={130} height={40} />
                </div>
              </Stack>
            </SwiperSlide>
          </>
        )}
      </Swiper>
    </section>
  );
};

export default HomeSkeleton;
