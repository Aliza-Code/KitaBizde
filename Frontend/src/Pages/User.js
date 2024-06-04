import React from "react";
import Navbar from "../Components/Navbar";
import { Link } from "react-router-dom";
import avatar from "../img/Prof.jfif";
import { IoHomeOutline } from "react-icons/io5";

export default function User() {
  return (
    <>
      <Navbar></Navbar>

      <main className="container my-12 grid grid-cols-1 lg:grid-cols-3 gap-2">
        <div className="col-span-1">
          <div className="shadow-xl rounded-md flex items-center justify-center flex-col gap-2 p-3">
            <img
              className="w-[100px] h-[100px] rounded-sm"
              src={avatar}
              alt="avatar"
            />

            <h1 className="text-lg dark:text-white">علیرضا فرهودی</h1>

            <p className="flex gap-1 items-center text-gray-500 dark:text-gray-300">
              <span className="font-raylight">تاریخ عضویت:</span>
              <span>1403/03/14</span>
            </p>
          </div>

          <div className="shadow-xl rounded-md mt-6 p-3">
            <p className="border-b-[1px] border-b-gray-400 dark:text-white mb-4 text-lg font-raybold">
              میز کار
            </p>

            <ul className="inline-flex flex-col gap-2 text-gray-900 dark:text-gray-300 dark:child-hover:text-gray-400 child-hover:text-gray-600">
              <li>
                <a href="">مشاهده حساب کاربری</a>
              </li>

              <Link to={"/user/edit"}>ویرایش پروفایل</Link>

              <Link to={"/user/pass"}>تغییر رمزعبور</Link>

              <Link to={"/user/orders"}>سفارش‌های من</Link>

              <li>
                <a href="">تنظیمات پروفایل</a>
              </li>

              <Link to={"/user"}>خروج از حساب کاربری</Link>
            </ul>
          </div>
        </div>

        <div className="col-span-2">
          <div className="shadow-xl rounded-md mt-6 p-6">
            <p className="border-b-[1px] text-center border-b-gray-400 dark:text-white mb-8 text-xl font-raybold">
              پروفایل من
            </p>

            <p className="text-sky-500 mb-4 text-lg">اطلاعات کاربری</p>

            <ul className="inline-flex flex-col gap-2 text-gray-900 dark:text-gray-300">
              <li className="flex items-center gap-2">
                <span className="flex items-center gap-1 text-gray-500 dark:text-gray-300 font-raylight">
                  <IoHomeOutline></IoHomeOutline>
                  نام کاربری:
                </span>
                <span>Aliza</span>
              </li>

              <li className="flex items-center gap-2">
                <span className="flex items-center gap-1 text-gray-500 dark:text-gray-300 font-raylight">
                  <IoHomeOutline></IoHomeOutline>
                  ایمیل:
                </span>
                <span>alezafarhud@gmail.com</span>
              </li>

              <li className="flex items-center gap-2">
                <span className="flex items-center gap-1 text-gray-500 dark:text-gray-300 font-raylight">
                  <IoHomeOutline></IoHomeOutline>
                  تاریخ عضویت:
                </span>
                <span>1403/03/14</span>
              </li>

              <li className="flex items-center gap-2">
                <span className="flex items-center gap-1 text-gray-500 dark:text-gray-300 font-raylight">
                  <IoHomeOutline></IoHomeOutline>
                  مجموع سفارش‌:
                </span>
                <span>10000 تومان</span>
              </li>
            </ul>
          </div>
        </div>
      </main>
    </>
  );
}
