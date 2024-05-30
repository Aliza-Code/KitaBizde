import React, { useContext, useState } from "react";
import Navbar from "../Components/Navbar";
import Breadcrumb from "../Components/Breadcrumb";
import Footer from "../Components/Footer";
import { useParams } from "react-router-dom";
import { Books } from "../Data";
import { Link } from "react-router-dom";
import ReactImageMagnify from "react-image-magnify";
import { CartContext } from "../Context/CartContext";

import { IoMdStar, IoIosStarHalf, IoIosStarOutline } from "react-icons/io";
import {
  LuBookOpenCheck,
  LuBookX,
  LuBookPlus,
  LuBookMarked,
  LuBookmark,
  LuHeart,
} from "react-icons/lu";
import { IoShareSocial } from "react-icons/io5";

export default function Product() {
  const { productId } = useParams();
  const targetProd = Books.find((i) => i.id === Number(productId));

  const [buyClick, setBuyClick] = useState(false);
  const [capClick, setCapClick] = useState(true);
  const [authorClick, setAuthorClick] = useState(false);
  const [more, setMore] = useState(false);
  const [comment, setComment] = useState(false);

  const { addToCart } = useContext(CartContext);

  return (
    <>
      <Navbar></Navbar>
      <Breadcrumb targetProd={targetProd}></Breadcrumb>

      <div className="mt-12 container grid gap-1 grid-cols-1 lg:grid-cols-3 shadow-lg rounded-md">
        <div className="col-span-2 grid gap-1 grid-cols-1 sm:grid-cols-3">
          <div className="col-span-1 flex justify-center items-center w-full h-full">
            {/* <img
              className="w-[250px]"
              src={targetProd.image}
              alt="Product Image"
            /> */}
            <ReactImageMagnify
              {...{
                smallImage: {
                  alt: targetProd.turkTitle,
                  isFluidWidth: true,
                  src: targetProd.image,
                },
                largeImage: {
                  src: targetProd.image,
                  width: 700,
                  height: 700,
                },
              }}
            />
          </div>

          <div className="col-span-2 px-5 py-4">
            <h1 className="mb-10 dark:text-white text-center max-xs:text-right">
              معرفی و خرید کتاب <br />
              <span className="text-gray-700 font-raybold max-xs:text-xl text-2xl dark:text-white">
                {targetProd.title}
              </span>
            </h1>

            <div className="flex flex-wrap max-xs:gap-4 max-xs:items-center max-xs:justify-enter justify-between items-end">
              {/* Right */}
              <div className="flex flex-col gap-2 child:flex child:items-center child:gap-2">
                <div>
                  <span className=" text-gray-600 dark:text-gray-300">
                    نویسنده:
                  </span>
                  <p className="border-b-[1px] dark:text-white border-b-gray-400">
                    {targetProd.author}
                  </p>
                </div>

                <div>
                  <span className=" text-gray-600 dark:text-gray-300">
                    انتشارات:
                  </span>
                  <p className="font-inder border-b-[1px] dark:text-white border-b-gray-400">
                    {targetProd.publisher}
                  </p>
                </div>

                <div>
                  <span className=" text-gray-600 dark:text-gray-300">
                    تعداد صفحه:
                  </span>
                  <p className="border-b-[1px] dark:text-white border-b-gray-400">
                    {targetProd.pageNum}
                  </p>
                </div>
              </div>

              {/* Left */}
              <div>
                {/* Icons */}
                <div
                  className={`flex items-center text-lg justify-evenly mb-1 ${
                    targetProd.stock === "موجود"
                      ? "text-green-500"
                      : "text-red-500"
                  }`}
                >
                  {targetProd.stock === "موجود" ? (
                    <LuBookOpenCheck></LuBookOpenCheck>
                  ) : (
                    <LuBookX></LuBookX>
                  )}
                  <span>{targetProd.stock}</span>
                </div>

                {/* Category */}
                <div className="font-raylight flex flex-col items-center text-gray-600 bg-gray-100 px-2.5 py-1.5 rounded-md">
                  <div className="flex items-center gap-2">
                    <span>دسته‌ها: </span>
                    <p>({targetProd.category})</p>
                  </div>

                  {/* Star Icon */}
                  <div className="flex items-center text-lg text-orange-500">
                    <IoIosStarOutline></IoIosStarOutline>
                    <IoIosStarHalf></IoIosStarHalf>
                    <IoMdStar></IoMdStar>
                    <IoMdStar></IoMdStar>
                    <IoMdStar></IoMdStar>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="p-4 col-span-1">
          <div className="bg-gray-100 h-full rounded-md">
            <div className="px-8 py-4">
              <div className="mb-8 flex items-start justify-between flex-wrap gap-2">
                <div className="w-[110px]">
                  <div className="flex items-center gap-3">
                    <span className="text-gray-500 line-through">
                      {targetProd.oldPrice}
                    </span>
                    <span className="bg-red-500 text-sm p-1 flex items-center justify-center text-white rounded-sm">
                      {targetProd.off}
                      <span className="text-xs">%</span>
                    </span>
                  </div>

                  <div>
                    <span className="flex items-center gap-1 text-xl font-raybold">
                      {targetProd.newPrice}
                      <span className="text-sm font-ray text-gray-500">
                        تومان
                      </span>
                    </span>
                  </div>
                </div>

                <div className="flex flex-col gap-1 items-center">
                  <span className="text-gray-500">تعداد فروش: </span>
                  <p className="bg-gray-400 text-white px-2 py-px rounded-sm">
                    62
                  </p>
                </div>
              </div>

              <button
                onClick={() => setBuyClick(!buyClick)}
                className="mt-4 w-full bg-sky-900 text-white hover:bg-sky-950 py-1.5 rounded-md text-lg"
              >
                {buyClick ? (
                  <Link
                    to={"/cart"}
                    className="flex items-center justify-center gap-1"
                  >
                    <LuBookMarked></LuBookMarked>
                    <span>مشاهده در سبد خرید</span>
                  </Link>
                ) : (
                  <div
                    onClick={() => addToCart(targetProd)}
                    className="flex items-center justify-center gap-1"
                  >
                    <LuBookPlus></LuBookPlus>
                    <span>اضافه به سبد خرید</span>
                  </div>
                )}
              </button>

              <button className="my-1.5 w-full border-[2px] border-sky-900 text-sky-900 hover:bg-gray-200 py-1.5 rounded-md text-lg">
                معرفی کامل
              </button>

              <div className="mt-4 text-gray-600 child-hover:text-gray-800 flex items-center justify-end text-xl gap-2 child:cursor-pointer">
                <LuBookmark></LuBookmark>
                <LuHeart></LuHeart>
                <IoShareSocial></IoShareSocial>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="my-16 container grid gap-2 grid-cols-1 lg:grid-cols-7">
        <div className="col-span-5 dark:text-white">
          <ul
            className={`mb-4 flex items-center flex-wrap gap-6 md:text-lg border-b-[1px] child-hover:border-b-[2px] child-hover:border-b-red-500 child-hover:transition-all child-hover:duration-200 border-gray-400 child:cursor-pointer`}
          >
            <li
              className={`${
                capClick && "bg-sky-300 py-0.5 px-1.5 rounded-tl-xl"
              }`}
              onClick={() => {
                setCapClick(true);
                setAuthorClick(false);
                setMore(false);
                setComment(false);
              }}
            >
              توضیحات کتاب
            </li>
            <li
              className={`${
                authorClick && "bg-sky-300 py-0.5 px-1.5 rounded-tl-xl"
              }`}
              onClick={() => {
                setAuthorClick(true);
                setCapClick(false);
                setMore(false);
                setComment(false);
              }}
            >
              درباره نویسنده کتاب
            </li>
            <li
              className={`${more && "bg-sky-300 py-0,5 px-1.5 rounded-tl-xl"}`}
              onClick={() => {
                setMore(true);
                setCapClick(false);
                setAuthorClick(false);
                setComment(false);
              }}
            >
              مشخصات کامل
            </li>
            <li
              className={`${
                comment && "bg-sky-300 py-0,5 px-1.5 rounded-tl-xl"
              }`}
              onClick={() => {
                setComment(true);
                setMore(false);
                setCapClick(false);
                setAuthorClick(false);
              }}
            >
              نظرات
            </li>
          </ul>

          {capClick && (
            <ul>
              <li>
                <h3 className="text-2xl">
                  معرفی و خرید کتاب {targetProd.title}
                </h3>
                <h4 className="mb-4">
                  نام اصلی و ترکی کتاب:
                  <span className="font-inder text-xl mr-2">
                    {targetProd.turkTitle}
                  </span>
                </h4>
                <p className="font-raylight mb-4">{targetProd.caption}</p>
              </li>

              <li>
                <h3 className="text-2xl mb-4">
                  آیا این کتاب برای سطح من مناسبه ؟
                </h3>
                <p className="font-raylight mb-4">{targetProd.caption}</p>
              </li>

              <li>
                <h3 className="text-2xl mb-4">جملات معروف از کتاب</h3>
                <p className="font-raylight mb-4">{targetProd.caption}</p>
              </li>
            </ul>
          )}

          {authorClick && (
            <div>
              <h3 className="text-2xl">معرفی نویسنده کتاب</h3>
              <h4 className="mb-4 text-xl">{targetProd.author}</h4>
              <p className="font-raylight mb-4">{targetProd.caption}</p>
            </div>
          )}

          {more && (
            <div>
              <ul className="child:grid child:grid-cols-2 child:py-1.5 child:px-1 child:mb-1 child:rounded-sm">
                <li className="bg-gray-100">
                  <span className="text-gray-600 font-raylight">
                    نام کتاب به ترکی
                  </span>
                  <span className="dark:text-black font-inder">
                    {targetProd.turkTitle}
                  </span>
                </li>

                <li>
                  {targetProd.material ? (
                    <>
                      <span className="text-gray-600 font-raylight dark:text-gray-300">
                        قطع کتاب
                      </span>
                      <span>{targetProd.material}</span>
                    </>
                  ) : (
                    <>
                      <span className="text-gray-600 font-raylight dark:text-gray-300">
                        جنس کاغذ
                      </span>
                      <span>{targetProd.paper}</span>
                    </>
                  )}
                </li>

                <li className="bg-gray-100">
                  <span className="text-gray-600 font-raylight">جلد کتاب</span>
                  <span className="dark:text-black">{targetProd.cover}</span>
                </li>

                <li>
                  <span className="text-gray-600 font-raylight dark:text-gray-300">
                    وزن کتاب
                  </span>
                  <span>{targetProd.weight} گرم</span>
                </li>

                <li className="bg-gray-100">
                  <span className="text-gray-600 font-raylight">
                    سال انتشار
                  </span>
                  <span className="dark:text-black">{targetProd.year}</span>
                </li>

                <li>
                  <span className="text-gray-600 font-raylight dark:text-gray-300">
                    شابک
                  </span>
                  <span>{targetProd.isbn}</span>
                </li>

                {targetProd.pack && (
                  <>
                    <li className="bg-gray-100">
                      <span className="text-gray-600 font-raylight">
                        محتویات پکیج
                      </span>
                      <span className="dark:text-black">{targetProd.pack}</span>
                    </li>
                  </>
                )}
              </ul>
            </div>
          )}

          {comment && (
            <form>
              <div className="w-full mb-4 border border-gray-200 rounded-md bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
                <div className="px-4 py-2 bg-white rounded-t-md dark:bg-gray-800">
                  <textarea
                    id="comment"
                    rows="4"
                    className="w-full px-0 outline-none text-gray-900 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400"
                    placeholder="نظرت درباره این کتاب..."
                    required
                  />
                </div>

                <div className="px-3 py-2 border-t dark:border-gray-600">
                  <button
                    type="submit"
                    className="inline-flex items-center py-2.5 px-4 text-center text-white bg-sky-400 rounded-lg focus:ring-4 focus:ring-blue-200 hover:bg-sky-500"
                  >
                    ارسال نظر
                  </button>
                </div>
              </div>
            </form>
          )}
        </div>

        <div className="col-span-2 p-4 h-fit flex flex-col gap-4 bg-gray-100 rounded-lg">
          <div className="bg-white hover:bg-gray-50 shadow-lg py-6 rounded-md group cursor-pointer">
            <div className="lg:max-w-[250px] sm:max-w-[50%] max-w-[70%] mx-auto">
              <img
                className="w-full h-full group-hover:transform group-hover:scale-110 transition-all duration-500"
                src={targetProd.image2 ? targetProd.image2 : targetProd.image}
                alt={targetProd.title}
              />
            </div>
          </div>

          <div className="flex flex-col items-center justify-center">
            <p className="flex items-center gap-2 font-raybold text-lg text-white bg-sky-900 rounded-sm px-3 py-1 mb-4">
              {targetProd.fromBook ? "تکه کتاب" : "سطح کتاب برای من مناسبه ؟!"}
            </p>

            <h4
              className={`${
                targetProd.fromBook && "font-inder"
              } text-left text-gray-700 bg-[#ffff00] shadow-lg p-1`}
            >
              {targetProd.fromBook ? targetProd.fromBook : targetProd.level}
            </h4>
          </div>
        </div>
      </div>

      <Footer></Footer>
    </>
  );
}
