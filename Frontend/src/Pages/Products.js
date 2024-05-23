import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { Link } from "react-router-dom";
import ProductCard from "../Components/ProductCard";
import { Books } from "../Data";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import Switch from "@mui/material/Switch";

const publishes = ["همه انتشارات", ...new Set(Books.map((i) => i.publisher))];
const authors = ["همه نویسندگان", ...new Set(Books.map((i) => i.author))];

export default function Products() {
  const [checked, setChecked] = useState(true);

  const [open, setOpen] = useState(0);
  const [alwaysOpen, setAlwaysOpen] = useState(true);
  const handleAlwaysOpen = () => setAlwaysOpen((cur) => !cur);
  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  const [open2, setOpen2] = useState(0);
  const [alwaysOpen2, setAlwaysOpen2] = useState(true);
  const handleAlwaysOpen2 = () => setAlwaysOpen2((cur) => !cur);
  const handleOpen2 = (value) => setOpen2(open2 === value ? 0 : value);

  return (
    <>
      <Navbar></Navbar>

      <h1 className="container text-3xl text-center font-raybold mt-16 mb-6 py-1 border-[2px] border-sky-200 bg-sky-100 rounded-full">
        محصولات
      </h1>

      <div className="mb-16 container grid gap-3 grid-cols-7">
        <div className="col-span-7 md:col-span-5">
          <ul className="container hidden sm:flex items-center justify-around gap-6 p-2 shadow-xl dark:text-white bg-gray-50 dark:bg-sky-900 dark:border-gray-700 rounded-md mb-6">
            <li className="font-raylight text-gray-500 dark:text-gray-300">مرتب‌سازی:</li>
            <Link>گران‌ترین</Link>
            <Link>پرفروش‌ترین</Link>
            <Link>جدیدترین</Link>
            <Link>ارزان‌ترین</Link>
          </ul>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-1">
            {Books.map((i) => {
              if (i.id < 10)
                return (
                  <div
                    key={i.id}
                    className="bg-white h-[380px] rounded-sm hover:transform hover:translate-y-1 hover:scale-[1.02] hover:shadow-2xl hover:rounded-md transition-transform duration-300"
                  >
                    <ProductCard {...i}></ProductCard>
                  </div>
                );
            })}

            {Books.map((i) => {
              if (i.id > 9)
                return (
                  <div
                    key={i.id}
                    className="bg-white h-[380px] rounded-sm hover:transform hover:translate-y-1 hover:scale-[1.02] hover:shadow-2xl hover:rounded-md transition-transform duration-300"
                  >
                    <ProductCard {...i}></ProductCard>
                  </div>
                );
            })}
          </div>
        </div>

        <div className="max-md:hidden md:col-span-2 h-fit">
          <div className="flex items-center justify-center gap-8 rounded-md py-6 bg-gray-50">
            <Switch
              checked={checked}
              onChange={(e) => setChecked(e.target.checked)}
              inputProps={{ "aria-label": "controlled" }}
            />
            <p>کتاب‌های موجود</p>
          </div>

          <div className="bg-gray-50 my-4 rounded-md">
            <div className="py-2 px-4">
              <Accordion open={alwaysOpen}>
                <AccordionHeader onClick={handleAlwaysOpen}>
                  <div className="w-full flex justify-center gap-2 items-center text-lg py-0.5 px-2 font-raybold border-[1px] border-gray-400 rounded-full bg-gray-100">
                    <span>انتشارات</span>
                    <span className="text-sky-400 flex items-center justify-center">
                      <ion-icon name="book"></ion-icon>
                    </span>
                  </div>
                </AccordionHeader>

                <AccordionBody>
                  <ul className="font-inder text-base px-1">
                    {publishes.map((i, index) => (
                      <li
                        key={index}
                        className={`flex items-center gap-2 cursor-pointer mb-1.5 hover:underline ${
                          index === 0 ? "font-ray" : "font-inder"
                        }`}
                      >
                        <span
                          className={`flex items-center justify-center ${
                            index === publishes.length - 1 && "hidden"
                          }`}
                        >
                          <ion-icon name="book-outline"></ion-icon>
                        </span>
                        <span>{i}</span>
                      </li>
                    ))}
                  </ul>
                </AccordionBody>
              </Accordion>
            </div>
          </div>

          <div className="bg-gray-50 my-4 rounded-md">
            <div className="py-2 px-4">
              <Accordion open={alwaysOpen2}>
                <AccordionHeader onClick={handleAlwaysOpen2}>
                  <div className="w-full flex justify-center gap-2 items-center text-lg py-0.5 px-2 font-raybold border-[1px] border-gray-400 rounded-full bg-gray-100">
                    <span>نویسندگان</span>
                    <span className="text-sky-400 flex items-center justify-center">
                      <ion-icon name="pencil"></ion-icon>
                    </span>
                  </div>
                </AccordionHeader>

                <AccordionBody>
                  <ul className="text-base px-1">
                    {authors.map((i, index) => (
                      <li
                        key={index}
                        className={`flex items-center gap-2 cursor-pointer mb-1.5 hover:underline`}
                      >
                        <span
                          className={`flex items-center justify-center ${
                            index === authors.length - 1 && "hidden"
                          }`}
                        >
                          <ion-icon name="pencil-outline"></ion-icon>
                        </span>
                        <span>{i}</span>
                      </li>
                    ))}
                  </ul>
                </AccordionBody>
              </Accordion>
            </div>
          </div>

          <div className="py-2 px-4 bg-gray-50 rounded-md">
            <div className="flex items-center justify-center gap-2 text-lg py-0.5 px-2 font-raybold border-[1px] border-gray-400 rounded-full bg-gray-100">
              <span>کتاب‌های پرفروش</span>
              <span className="text-sky-400 flex items-center text-2xl justify-center">
                <ion-icon name="analytics"></ion-icon>
              </span>
            </div>

            <ul className="mt-6">
              {Books.map((i) => {
                if (i.id <= 5)
                  return (
                    <li
                      key={i.id}
                      className={`flex items-end justify-around my-2 border-b-[1px] border-b-gray-400`}
                    >
                      <img className="w-10" src={i.image2} alt={i.title} />

                      <Link to={`/products/${i.id}`}>
                        <button
                          type="button"
                          class="text-white text-sm bg-sky-400 hover:bg-sky-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-sm px-3 py-1.5 text-center inline-flex items-center gap-2"
                        >
                          مشاهده کتاب
                          <span className="flex items-center text-xl justify-center">
                            <ion-icon name="analytics"></ion-icon>
                          </span>
                        </button>{" "}
                      </Link>
                    </li>
                  );
              })}
            </ul>
          </div>
        </div>
      </div>

      <Footer></Footer>
    </>
  );
}
