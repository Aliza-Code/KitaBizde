import React from "react";
import Services from "./Services";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import { FreeMode, Pagination } from "swiper/modules";
import Typewriter from "typewriter-effect";

import headerBg from "../img/HeaderBg.jpg";
import headerPng from "../img/HeaderPng.png";

export default function Header() {
  return (
    <header className="mt-6 container">
      <h1 className="text-sky-400 dark:text-white text-center font-raybold text-base xs:text-lg sm:text-xl md:text-2xl lg:text-3xl">
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .typeString(
                "بزرگترین مرجع تخصصی کتاب‌های ترکی‌استانبولی در ایران"
              )
              .start()
              .pauseFor(2000)
              .deleteAll()
              .typeString(
                "هر چیزی که برای یادگیری ترکی نیاز داشتی، اینجا برات فراهمه!"
              )
              .start()
              .pauseFor(2000)
              .deleteAll();
          }}
          options={{ loop: true }}
        />
      </h1>

      <Swiper className="mt-6" freeMode={true} modules={[FreeMode]}>
        <SwiperSlide className="relative group rounded-sm overflow-hidden">
          <img
            className="cursor-pointer rounded-md"
            src={headerBg}
            alt="Header BG"
          />
          <img
            className="absolute top-0 left-0 h-full"
            src={headerPng}
            alt="Header Png"
          />
        </SwiperSlide>
        <SwiperSlide className="relative group rounded-sm overflow-hidden">
          <img
            className="cursor-pointer rounded-md"
            src={headerBg}
            alt="Header BG"
          />
          <img
            className="absolute top-0 left-0 h-full"
            src={headerPng}
            alt="Header Png"
          />
        </SwiperSlide>
      </Swiper>

      <Services></Services>
    </header>
  );
}
