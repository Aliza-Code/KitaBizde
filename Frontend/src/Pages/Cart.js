import React, { useContext, useState, useEffect } from "react";
import Navbar from "../Components/Navbar";
import CartItem from "../Components/CartItem";
import Footer from "../Components/Footer";
import { Link } from "react-router-dom";
import { CartContext } from "../Context/CartContext";

import { FaCircleArrowLeft } from "react-icons/fa6";
import { LiaShippingFastSolid } from "react-icons/lia";
import { LuBookMarked } from "react-icons/lu";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";

export default function Cart() {
  const { cart, addToCart } = useContext(CartContext);
  const [CART, setCART] = useState([]);
  useEffect(() => {
    setCART(cart);
  }, [cart]);

  const newTotal = CART.map((i) => i.newPrice * i.count).reduce(
    (j, k) => j + k,
    0
  );
  const oldTotal = CART.map((i) => i.oldPrice * i.count).reduce(
    (j, k) => j + k,
    0
  );

  return (
    <>
      <Navbar></Navbar>

      <h1 className="container text-3xl text-center font-raybold mt-16 mb-6 py-1 border-[2px] border-sky-200 bg-sky-100 rounded-full">
        سبد خرید
      </h1>

      <div className="mb-16 container grid gap-4 grid-cols-1 md:grid-cols-7">
        <div className="col-span-4">
          <div className="shadow-xl dark:text-white bg-gray-50 dark:bg-sky-900 dark:border-gray-700 py-1 text-xs xs:text-base sm:text-lg rounded-tl-full">
            <h3 className="flex items-center gap-2 justify-center">
              <LiaShippingFastSolid
                className="max-xs:hidden"
                size={24}
              ></LiaShippingFastSolid>
              ارسال رایگان برای سفارشات بالای 580،000 تومان
            </h3>
          </div>

          {CART.length > 0 ? (
            <div className="my-6 rounded-md dark:bg-white bg-slate-50">
              <ul className="p-4 relative">
                {CART?.map((i, index) => {
                  if (i.count > 0)
                    return (
                      <CartItem
                        key={index}
                        index={index}
                        CART={CART}
                        setCART={setCART}
                        {...i}
                      ></CartItem>
                    );
                })}
              </ul>
            </div>
          ) : (
            <div className="flex items-center flex-col gap-2 text-white text-center my-10 text-2xl">
              <span> متاسفانه سبد خرید شما خالیست.</span>

              <Link
                to={"/products"}
                className="flex items-center gap-2 hover:underline bg-gradient-to-tr from-cyan-500 px-3 rounded-full"
              >
                <MdOutlineProductionQuantityLimits></MdOutlineProductionQuantityLimits>
                <span>بریم به صفحه محصولات</span>
              </Link>
            </div>
          )}
        </div>

        <div className="col-span-3 h-fit">
          <div className="bg-gray-50 rounded-md p-6">
            <div className="flex flex-col">
              <h3 className="text-xl font-raybold text-sky-950 border-b-[1px] border-b-gray-400 mb-6 pb-1">
                فاکتور خرید
              </h3>

              <div className="flex items-center justify-between mb-2 text-gray-700">
                <span className="text-gray-700">مجموع خرید</span>
                <span className="font-raybold">{oldTotal}</span>
              </div>

              <div className="flex items-center justify-between mb-4 text-gray-700">
                <span>سود شما از خرید</span>
                <span className="font-raybold">{oldTotal - newTotal}</span>
              </div>

              <div className="flex items-center justify-between mb-2 text-gray-800">
                <span className="text-gray-700 font-raybold">
                  مبلغ قابل پرداخت
                </span>
                <div className="flex items-center gap-1">
                  <span className="font-rayblack text-lg">{newTotal}</span>
                  <span className="text-sm">تومان</span>
                </div>
              </div>

              <button className="mt-4 w-full mx-auto bg-sky-900 text-white hover:bg-sky-950 py-1.5 rounded-md text-lg">
                <Link
                  to={"/cart"}
                  className="flex items-center justify-center flex-wrap gap-1"
                >
                  <LuBookMarked></LuBookMarked>
                  <span>مشاهده در سبد خرید</span>
                </Link>
              </button>
            </div>
          </div>

          <div className="my-6 bg-gray-50 px-3 py-6 rounded-md">
            <h3 className="mb-2 text-xl font-raybold">کد تخفیف دارید ؟</h3>

            <div className="max-w-full mx-auto h-12 relative">
              <input
                className="outline-none w-full h-full bg-gray-200 border-2 rounded-full placeholder:text-gray-500 placeholder:font-raylight focus:border-[1px] focus:border-slate-600 focus:shadow-md p-2"
                type="text"
                placeholder="اینجا وارد کنید..."
              />

              <button className="bg-white absolute w-10 h-10 rounded-full top-[3px] left-1 flex justify-center items-center">
                <FaCircleArrowLeft
                  className="text-[#ff0000]"
                  size={24}
                ></FaCircleArrowLeft>
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer></Footer>
    </>
  );
}
