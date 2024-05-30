import React from "react";
import Navbar from "../Components/Navbar";
import Welcome from "../Components/Welcome";
import Navlink from "../Components/Navlink";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import ProductCard from "../Components/ProductCard";
import SectionTitle from "../Components/SectionTitle";
import Background from "../Components/Background";
import Poster from "../Components/Poster";
import { Books, Authors } from "../Data";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import { FreeMode } from "swiper/modules";

import { FaRegHandPointLeft } from "react-icons/fa6";

import bg from "../img/BG.png";
import flowerIcon from "../img/FlowerIcon.png";
import novelLearning from "../img/Poster/NovelLearning.jpeg";
import learning from "../img/Poster/Learning.jpeg";
import pop from "../img/Poster/Popular.jpeg";
import novels from "../img/Poster/Novels.JPEG";

export default function Home() {
  return (
    <main>
      <Navbar data={Books}></Navbar>
      <Welcome></Welcome>
      <Navlink></Navlink>
      <Header></Header>

      {/* رمان‌های ترکی‌استانبولی */}
      <div className="my-12">
        <SectionTitle
          title1={"رمان‌های"}
          title2={"ترکی‌استانبولی"}
          btn={"مشاهده همه"}
        ></SectionTitle>

        <div className="container xl:grid grid-cols-5 ">
          <Poster
            img={novels}
            title1={"اگر سطح زبانت مبتدیه"}
            title2={"این کتابا برات مناسبن"}
            height={380}
            icon={<FaRegHandPointLeft size={22}></FaRegHandPointLeft>}
          ></Poster>

          <div className="col-span-4">
            <Swiper
              className="h-[380px]"
              breakpoints={{
                0: {
                  slidesPerView: 1,
                },
                360: {
                  slidesPerView: 2,
                  spaceBetween: 10,
                },
                542: {
                  slidesPerView: 3,
                  spaceBetween: 15,
                },
                768: {
                  slidesPerView: 4,
                  spaceBetween: 15,
                },
              }}
              freeMode={true}
              modules={[FreeMode]}
            >
              {Books.map((i) => {
                if (i.id < 10)
                  return (
                    <SwiperSlide className="relative w-[30px] h-full group bg-white overflow-hidden">
                      <ProductCard key={i.id} {...i}></ProductCard>
                    </SwiperSlide>
                  );
              })}
            </Swiper>
          </div>
        </div>
      </div>

      <Background
        bg={bg}
        title={"کتاب‌های محبوبتو انتخاب کن !"}
        btn1={"محبوب‌ترین‌ها"}
        btn2={"ی ترکی‌استانبولی"}
        icon={flowerIcon}
      ></Background>

      {/* محبوب‌های ترکی‌استانبولی */}
      <div className="my-12">
        <SectionTitle
          title1={"محبوب‌های"}
          title2={"ترکی‌استانبولی"}
          btn={"مشاهده همه"}
        ></SectionTitle>

        <div className="container xl:grid grid-cols-5 ">
          <Poster
            img={pop}
            title1={"اگر سطح زبانت مبتدیه"}
            title2={"این کتابا برات مناسبن"}
            height={380}
            icon={<FaRegHandPointLeft size={22}></FaRegHandPointLeft>}
          ></Poster>

          <div className="col-span-4">
            <Swiper
              className="h-[380px]"
              breakpoints={{
                0: {
                  slidesPerView: 1,
                },
                360: {
                  slidesPerView: 2,
                  spaceBetween: 10,
                },
                542: {
                  slidesPerView: 3,
                  spaceBetween: 15,
                },
                768: {
                  slidesPerView: 4,
                  spaceBetween: 15,
                },
              }}
              freeMode={true}
              modules={[FreeMode]}
            >
              {Books.map((i) => {
                if (i.id < 10)
                  return (
                    <SwiperSlide className="relative w-[30px] h-full group bg-white overflow-hidden">
                      <ProductCard key={i.id} {...i}></ProductCard>
                    </SwiperSlide>
                  );
              })}
            </Swiper>
          </div>
        </div>
      </div>

      {/* نویسنده‌های ترکی‌استانبولی */}
      <div className="container my-12 grid grid-cols-1 xs:grid-cols-2 md:grid-cols-4 gap-1 rounded-tr-3xl rounded-bl-3xl max-lg:rounded-none overflow-hidden transition-all duration-300">
        {Authors.map((i) => (
          <div className="relative group hover:transform hover:scale-[1.02] cursor-pointer">
            <img
              className="h-full w-full max-lg:rounded-sm"
              src={i.img}
              alt={i.name}
            />

            <div className="absolute top-[25%] left-[50%] -translate-x-[50%] -translate-y-[50%] rounded-full flex justify-center items-center">
              <a
                className="flex gap-1 w-[170px] child:py-1 items-center text-slate-50 bg-gray-700 rounded-full transition-all duration-200"
                href="#"
              >
                <span className="text-gray-700 bg-slate-50 font-raylight px-1 rounded-full">
                  کتاب‌های
                </span>
                <span className="px-1.5 font-raybold hidden group-hover:block">
                  {i.name}
                </span>
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* یادگیری ترکی‌استانبولی */}
      <div className="my-12">
        <SectionTitle
          title1={"یادگیری"}
          title2={"ترکی‌استانبولی"}
          btn={"مشاهده همه"}
        ></SectionTitle>

        <div className="container xl:grid grid-cols-5 ">
          <Poster
            img={learning}
            title1={"اگر سطح زبانت مبتدیه"}
            title2={"این کتابا برات مناسبن"}
            height={380}
            icon={<FaRegHandPointLeft size={22}></FaRegHandPointLeft>}
          ></Poster>

          <div className="col-span-4">
            <Swiper
              className="h-[380px]"
              breakpoints={{
                0: {
                  slidesPerView: 1,
                },
                360: {
                  slidesPerView: 2,
                  spaceBetween: 10,
                },
                542: {
                  slidesPerView: 3,
                  spaceBetween: 15,
                },
                768: {
                  slidesPerView: 4,
                  spaceBetween: 15,
                },
              }}
              freeMode={true}
              modules={[FreeMode]}
            >
              {Books.map((i) => {
                if (i.id > 9)
                  return (
                    <SwiperSlide className="relative w[30px] h-full group bg-white overflow-hidden">
                      <ProductCard key={i.id} {...i}></ProductCard>
                    </SwiperSlide>
                  );
              })}
            </Swiper>
          </div>
        </div>
      </div>

      {/* یادگیری با رمان */}
      <div className="my-12">
        <SectionTitle
          title1={"یادگیری"}
          title2={"با رمان!"}
          btn={"مشاهده همه"}
        ></SectionTitle>

        <div className="container xl:grid grid-cols-5 ">
          <Poster
            img={novelLearning}
            title1={"اگر سطح زبانت مبتدیه"}
            title2={"این کتابا برات مناسبن"}
            height={380}
            icon={<FaRegHandPointLeft size={22}></FaRegHandPointLeft>}
          ></Poster>

          <div className="col-span-4">
            <Swiper
              className="h-[380px]"
              breakpoints={{
                0: {
                  slidesPerView: 1,
                },
                360: {
                  slidesPerView: 2,
                  spaceBetween: 10,
                },
                542: {
                  slidesPerView: 3,
                  spaceBetween: 15,
                },
                768: {
                  slidesPerView: 4,
                  spaceBetween: 15,
                },
              }}
              freeMode={true}
              modules={[FreeMode]}
            >
              {Books.map((i) => {
                if (i.id < 10)
                  return (
                    <SwiperSlide className="relative w-[30px] h-full group bg-white overflow-hidden">
                      <ProductCard key={i.id} {...i}></ProductCard>
                    </SwiperSlide>
                  );
              })}
            </Swiper>
          </div>
        </div>
      </div>

      <Footer></Footer>
    </main>
  );
}
