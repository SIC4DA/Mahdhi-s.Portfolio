import Card from "./Card";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode } from "swiper/modules";

const BlogsCarousel = ({ blogs }) => {
  const swiperBreakpoints = {
    100: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
    375: {
      slidesPerView: 1.2,
      spaceBetween: 30,
    },
    485: {
      slidesPerView: 1.3,
      spaceBetween: 30,
    },
    565: {
      slidesPerView: 1.5,
      spaceBetween: 30,
    },
    765: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    885: {
      slidesPerView: 2.3,
      spaceBetween: 30,
    },
    960: {
      slidesPerView: 2.5,
      spaceBetween: 30,
    },
    1158: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    1365: {
      slidesPerView: 3.5,
      spaceBetween: 30,
    },
    1575: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
    1780: {
      slidesPerView: 4.5,
      spaceBetween: 30,
    },
  };

  return (
    <Swiper
      slidesPerView={4.5}
      spaceBetween={10}
      freeMode={true}
      modules={[FreeMode]}
      className="mySwiper"
      breakpoints={swiperBreakpoints}
    >
      {blogs.slice(0, 6).map((card, i) => (
        <SwiperSlide key={i}>
          <Card card={card} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default BlogsCarousel;
