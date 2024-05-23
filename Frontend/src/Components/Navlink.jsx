import React from 'react'
import {Link} from 'react-router-dom'
import { IoChevronDownOutline } from "react-icons/io5";

export default function Navlink() {
  return (
    <div className="shadow-lg mt-2 pt-5 bg-slate-100 dark:bg-slate-700 dark:text-white max-md:hidden">
        <ul className="container flex items-center justify-between max-lg:text-sm">
          <li className="group relative">
            <a className="flex items-center" href="#">
              رمان‌های ترکی‌استانبولی
              <IoChevronDownOutline
                className="text-sky-900 dark:text-white group-hover:transform group-hover:rotate-180 group-hover:transition-all group-hover:duration-300"
                size={15}
              ></IoChevronDownOutline>
            </a>

            <ul className="absolute dark:child:text-slate-200 font-raylight hidden group-hover:block bg-slate-100 dark:bg-slate-700 rounded-b-md w-full py-3 pl-1 pr-2 z-50">
              <li className="relative mb-1">
                <a
                  className="relative before:absolute before:w-6 before:transition-all before:duration-500 before:hover:w-full before:h-[1px] before:bg-sky-900 dark:before:bg-slate-400 before:bottom-0 before:rounded-full"
                  href="#"
                >
                  رمان‌های سطح مبتدی
                </a>
              </li>

              <li className="relative mb-1">
                <a
                  className="relative before:absolute before:w-6 before:transition-all before:duration-500 before:hover:w-full before:h-[1px] before:bg-sky-900 dark:before:bg-slate-400  before:bottom-0 before:rounded-full"
                  href="#"
                >
                  رمان‌های سطح متوسط
                </a>
              </li>

              <li className="relative mb-1">
                <a
                  className="relative before:absolute before:w-6 before:transition-all before:duration-500 before:hover:w-full before:h-[1px] before:bg-sky-900 dark:before:bg-slate-400  before:bottom-0 before:rounded-full"
                  href="#"
                >
                  رمان‌های سطح پیشرفته
                </a>
              </li>
            </ul>
          </li>

          <li className="group relative">
            <a className="flex items-center" href="#">
              آموزش ترکی‌استانبولی
              <IoChevronDownOutline
                className="text-sky-900 dark:text-white group-hover:transform group-hover:rotate-180 group-hover:transition-all group-hover:duration-300"
                size={15}
              ></IoChevronDownOutline>
            </a>

            <ul className="absolute dark:child:text-slate-200 font-raylight hidden group-hover:block bg-slate-100 dark:bg-slate-700 rounded-b-md w-full py-3 pl-1 pr-2 z-50">
              <li className="relative mb-1">
                <a
                  className="relative before:absolute before:w-6 before:transition-all before:duration-500 before:hover:w-full before:h-[1px] before:bg-sky-900 dark:before:bg-slate-400 before:bottom-0 before:rounded-full"
                  href="#"
                >
                  پک آموزشی استانبول
                </a>
              </li>

              <li className="relative mb-1">
                <a
                  className="relative before:absolute before:w-6 before:transition-all before:duration-500 before:hover:w-full before:h-[1px] before:bg-sky-900 dark:before:bg-slate-400  before:bottom-0 before:rounded-full"
                  href="#"
                >
                  پک آموزشی هیتیت
                </a>
              </li>

              <li className="relative mb-1">
                <a
                  className="relative before:absolute before:w-6 before:transition-all before:duration-500 before:hover:w-full before:h-[1px] before:bg-sky-900 dark:before:bg-slate-400  before:bottom-0 before:rounded-full"
                  href="#"
                >
                  پک آموزشی یدی‌ایکلیم
                </a>
              </li>
            </ul>
          </li>

          <Link to={'/products'}>
            <a className="flex items-center" href="#">
              محصولات
            </a>
          </Link>

          <li className="group relative">
            <a className="flex items-center" href="#">
              معرفی نویسندگان
              <IoChevronDownOutline
                className="text-sky-900 dark:text-white group-hover:transform group-hover:rotate-180 group-hover:transition-all group-hover:duration-300"
                size={15}
              ></IoChevronDownOutline>
            </a>

            <ul className="absolute dark:child:text-slate-200 font-raylight hidden group-hover:block bg-slate-100 dark:bg-slate-700 rounded-b-md w-full py-3 pl-1 pr-2 z-50">
              <li className="relative mb-1">
                <a
                  className="relative before:absolute before:w-6 before:transition-all before:duration-500 before:hover:w-full before:h-[1px] before:bg-sky-900 dark:before:bg-slate-400 before:bottom-0 before:rounded-full"
                  href="#"
                >
                  اورهان پاموک
                </a>
              </li>

              <li className="relative mb-1">
                <a
                  className="relative before:absolute before:w-6 before:transition-all before:duration-500 before:hover:w-full before:h-[1px] before:bg-sky-900 dark:before:bg-slate-400  before:bottom-0 before:rounded-full"
                  href="#"
                >
                  الیف شافاک
                </a>
              </li>

              <li className="relative mb-1">
                <a
                  className="relative before:absolute before:w-6 before:transition-all before:duration-500 before:hover:w-full before:h-[1px] before:bg-sky-900 dark:before:bg-slate-400  before:bottom-0 before:rounded-full"
                  href="#"
                >
                  هاکان منگوچ
                </a>
              </li>

              <li className="relative mb-1">
                <a
                  className="relative before:absolute before:w-6 before:transition-all before:duration-500 before:hover:w-full before:h-[1px] before:bg-sky-900 dark:before:bg-slate-400  before:bottom-0 before:rounded-full"
                  href="#"
                >
                  زولفو لیوانلی
                </a>
              </li>
            </ul>
          </li>

          <li>
            <a href="#"> درباره کیتاپ‌بیزده</a>
          </li>
        </ul>
      </div>
  )
}
