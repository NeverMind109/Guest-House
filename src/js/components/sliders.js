import Swiper, { Navigation, Pagination } from "swiper";
Swiper.use([Navigation, Pagination]);

const reviewsSlider = new Swiper(".reviews__slider", {
  slidesPerView: "auto",
  spaceBetween: 20,
  grabCursor: true,
  navigation: {
    nextEl: ".reviews__slider-next",
    prevEl: ".reviews__slider-prev",
  },
});
