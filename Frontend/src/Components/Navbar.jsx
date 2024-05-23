import React, { useState, useEffect, useContext } from "react";
import CartItemNav from "./CartItemNav";
import { Link } from "react-router-dom";
import { CartContext } from "../Context/CartContext";

import { FaBookOpen, FaCircle } from "react-icons/fa";
import { IoChevronDownOutline } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { RiMenu3Line } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";
import { LuBookMarked } from "react-icons/lu";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";

export default function Navbar() {
  const [menuClicked, setMenuClicked] = useState(false);
  const [cartClicked, setCartClicked] = useState(false);

  // Start Dark Mode
  const [theme, setTheme] = useState(
    localStorage.getItem("theme" ? localStorage.getItem("theme") : "system")
  );

  const darkQuery = window.matchMedia("(prefers-color-scheme: dark)");
  const options = [
    { icons: "sunny", text: "light" },
    { icons: "moon", text: "dark" },
    { icons: "desktop-outline", text: "system" },
  ];

  function onWindowsMatch() {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) && darkQuery.matches)
    ) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }
  onWindowsMatch();

  useEffect(() => {
    switch (theme) {
      case "dark":
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme", "dark");
        break;

      case "light":
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
        break;

      default:
        localStorage.removeItem("theme");
        onWindowsMatch();
        break;
    }
  }, [theme]);

  darkQuery.addEventListener("change", (e) => {
    if (!("theme" in localStorage)) {
      if (e.matches) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    }
  });
  // End Dark Mode

  const { cart, addToCart } = useContext(CartContext);
  const [CART, setCART] = useState([]);
  useEffect(() => {
    setCART(cart);
  }, [cart]);

  return (
    <>
      <div className="py-1 px-3 sticky top-4 z-50 mt-4 container h-[60px] flex justify-between items-center shadow-md bg-sky-300 rounded-lg dark:bg-sky-900">
        {/* Menu Icon */}
        {menuClicked ? (
          <IoMdClose
            onClick={() => setMenuClicked(!menuClicked)}
            className="cursor-pointer md:hidden mr-3 text-sky-900 dark:text-sky-300"
            size={23}
          ></IoMdClose>
        ) : (
          <RiMenu3Line
            onClick={() => setMenuClicked(!menuClicked)}
            className="cursor-pointer mr-3 md:hidden text-sky-900 dark:text-sky-300"
            size={22}
          ></RiMenu3Line>
        )}

        {/* Logo */}
        <Link
          to={"/"}
          className="font-rayblack select-none flex flex-col items-center text-sky-900 text-xl dark:text-sky-300 max-md:hidden"
        >
          <FaBookOpen></FaBookOpen>
          <p>کیتاپ‌بیزده</p>
        </Link>

        {/* Search Input */}
        <div className="w-[40%] h-[40px] relative max-md:hidden">
          <input
            className="w-full h-full placeholder:font-raylight shadow-2xl bg-slate-200 placeholder:text-slate-600 outline-none rounded-full px-3 max-sm:px-[1px]"
            type="text"
            placeholder="نام کتاب یا نویسنده..."
            name="search"
          />
          <CiSearch
            size={22}
            className="absolute left-2 top-[8.5px] cursor-pointer"
          ></CiSearch>
        </div>

        {/* Icons */}
        <div className="flex items-center max-sm:text-sm child:text-sky-900">
          <div className="group relative z-50">
            <div
              className="relative flex items-center gap-2 flex-row-reverse px-1.5 bg-white h-[35px] rounded-sm"
              onClick={() => setCartClicked(!cartClicked)}
            >
              <Link className="flex items-center">
                <span className="text-[20px] flex items-center justify-center">
                  <ion-icon name="cart"></ion-icon>
                </span>
                سبد خرید
              </Link>

              <span className="absolute -left-1 -top-3 bg-[#0f0] text-white w-5 h-5 rounded-full flex justify-center items-center">
                {CART.length}
              </span>
            </div>

            {/* Navbar Cart */}
            {cartClicked && (
              <div className="absolute hidden sm:block font-raylight dark:bg-white bg-slate-50 rounded-b-md w-[370px] top-10 left-0 rounded-md max-h-[450px] overflow-y-scroll scrollbar-thin scrollbar-thumb-sky-900 hover:scrollbar-thumb-sky-950 scrollbar-track-white shadow-2xl">
                <ul className="p-4 relative">
                  <li className="flex items-center justify-between">
                    <button className="mb-4 w-[60%] bg-sky-900 text-white hover:bg-sky-950 py-1.5 rounded-md text-lg">
                      <div onClick={() => setCartClicked(false)}>
                        {CART.length > 0 ? (
                          <Link
                            to={"/cart"}
                            className="flex items-center justify-center gap-1"
                          >
                            <LuBookMarked></LuBookMarked>
                            <span>مشاهده در سبد خرید</span>
                          </Link>
                        ) : (
                          <Link
                            to={"/products"}
                            className="flex items-center justify-center gap-1"
                          >
                            <MdOutlineProductionQuantityLimits></MdOutlineProductionQuantityLimits>
                            <span>بریم به صفحه محصولات</span>
                          </Link>
                        )}
                      </div>
                    </button>

                    <span
                      onClick={() => setCartClicked(false)}
                      className="flex items-center justify-center text-2xl text-[#ff0000] cursor-pointer"
                    >
                      <ion-icon name="close-outline"></ion-icon>
                    </span>
                  </li>

                  {CART?.map((i, index) => {
                    if (i.count > 0)
                      return (
                        <CartItemNav
                          key={index}
                          index={index}
                          CART={CART}
                          setCART={setCART}
                          {...i}
                        ></CartItemNav>
                      );
                  })}
                </ul>
              </div>
            )}
          </div>

          <Link
            to={"/login"}
            className="bg-white h-[35px] px-1.5 rounded-sm mx-1.5 flex items-center justify-center"
          >
            <ion-icon name="person"></ion-icon>
          </Link>

          {/* Dark Mode Icons */}
          <div className="flex items-center bg-white p-1 h-[35px] rounded-sm">
            {options?.map((i) => (
              <button
                key={i.text}
                onClick={() => setTheme(i.text)}
                className={`w-8 h-8 leading-9 flex justify-center items-center ${
                  theme === i.text && "text-sky-400"
                }`}
              >
                <ion-icon name={i.icons}></ion-icon>
              </button>
            ))}
          </div>
        </div>

        {/* SideBar Navbar */}
        {menuClicked && (
          <div className="absolute z-50 w-[270px] h-[calc(100vh-100px)] bg-sky-300 dark:bg-sky-900 rounded-b-md right-0 top-[61px] bottom-0 md:hidden px-4">
            {/* SideBar Logo */}
            <Link
              to={"/"}
              className="font-rayblack select-none my-4 flex flex-col items-center text-sky-900 text-xl dark:text-sky-300"
            >
              <FaBookOpen></FaBookOpen>
              <p>کیتاپ‌بیزده</p>
            </Link>

            {/* Sidebar Search Input */}
            <div className="w-full h-[33px] mb-7 relative md:hidden">
              <input
                className="w-full h-full placeholder:font-raylight shadow-2xl bg-slate-200 placeholder:text-slate-600 outline-none rounded-full px-3 max-sm:px-[1px]"
                type="text"
                placeholder="نام کتاب یا نویسنده..."
                name="search"
              />
              <CiSearch
                size={22}
                className="absolute left-2 top-[6px] cursor-pointer"
              ></CiSearch>
            </div>

            {/* Sidebar List */}
            <ul className="flex flex-col dark:text-white text-sky-900 child:mb-4">
              <li className="group">
                <a className="flex items-center" href="#">
                  رمان‌های ترکی‌استانبولی
                  <IoChevronDownOutline
                    size={15}
                    className="text-sky-900 dark:text-white group-hover:transform group-hover:rotate-180 group-hover:transition-all group-hover:duration-300"
                  ></IoChevronDownOutline>
                </a>

                <ul className="hidden mt-2 pr-4 group-hover:flex flex-col dark:text-slate-100 child:relative font-raylight">
                  <li className="mb-2">
                    <a
                      className="relative flex items-center gap-2 hover:transform hover:scale-[1.02]"
                      href="#"
                    >
                      <FaCircle size={7}></FaCircle>
                      رمان‌های سطح مبتدی
                    </a>
                  </li>

                  <li className="mb-2">
                    <a
                      className="relative flex items-center gap-2 hover:transform hover:scale-[1.02]"
                      href="#"
                    >
                      <FaCircle size={7}></FaCircle>
                      رمان‌های سطح متوسط
                    </a>
                  </li>

                  <li>
                    <a
                      className="relative flex items-center gap-2 hover:transform hover:scale-[1.02]"
                      href="#"
                    >
                      <FaCircle size={7}></FaCircle>
                      رمان‌های سطح پیشرفته
                    </a>
                  </li>
                </ul>
              </li>

              <li className="group">
                <a className="flex items-center" href="#">
                  آموزش ترکی‌استانبولی
                  <IoChevronDownOutline
                    size={15}
                    className="text-sky-900 dark:text-white group-hover:transform group-hover:rotate-180 group-hover:transition-all group-hover:duration-300"
                  ></IoChevronDownOutline>
                </a>

                <ul className="hidden mt-2 pr-4 group-hover:flex flex-col dark:text-slate-100 child:relative font-raylight">
                  <li className="mb-2">
                    <a
                      className="relative flex items-center gap-2 hover:transform hover:scale-[1.02]"
                      href="#"
                    >
                      <FaCircle size={7}></FaCircle>
                      پک آموزشی استانبول
                    </a>
                  </li>

                  <li className="mb-2">
                    <a
                      className="relative flex items-center gap-2 hover:transform hover:scale-[1.02]"
                      href="#"
                    >
                      <FaCircle size={7}></FaCircle>
                      پک آموزشی هیتیت
                    </a>
                  </li>

                  <li>
                    <a
                      className="relative flex items-center gap-2 hover:transform hover:scale-[1.02]"
                      href="#"
                    >
                      <FaCircle size={7}></FaCircle>
                      پک آموزشی یدی‌ایکلیم
                    </a>
                  </li>
                </ul>
              </li>

              <Link to={"/products"}>
                <a href="#">محصولات</a>
              </Link>

              <li className="group">
                <a className="flex items-center" href="#">
                  معرفی نویسندگان
                  <IoChevronDownOutline
                    size={15}
                    className="text-sky-900 dark:text-white group-hover:transform group-hover:rotate-180 group-hover:transition-all group-hover:duration-300"
                  ></IoChevronDownOutline>
                </a>

                <ul className="hidden mt-2 pr-4 group-hover:flex flex-col dark:text-slate-100 child:relative font-raylight">
                  <li className="mb-2">
                    <a
                      className="relative flex items-center gap-2 hover:transform hover:scale-[1.02]"
                      href="#"
                    >
                      <FaCircle size={7}></FaCircle>
                      اورهان پاموک
                    </a>
                  </li>

                  <li className="mb-2">
                    <a
                      className="relative flex items-center gap-2 hover:transform hover:scale-[1.02]"
                      href="#"
                    >
                      <FaCircle size={7}></FaCircle>
                      الیف شافاک
                    </a>
                  </li>

                  <li className="mb-2">
                    <a
                      className="relative flex items-center gap-2 hover:transform hover:scale-[1.02]"
                      href="#"
                    >
                      <FaCircle size={7}></FaCircle>
                      هاکان منگوچ
                    </a>
                  </li>

                  <li>
                    <a
                      className="relative flex items-center gap-2 hover:transform hover:scale-[1.02]"
                      href="#"
                    >
                      <FaCircle size={7}></FaCircle>
                      زولفو لیوانلی
                    </a>
                  </li>
                </ul>
              </li>

              <li>
                <a href="#">درباره کیتاپ‌بیزده</a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </>
  );
}
