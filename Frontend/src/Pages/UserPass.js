import React from "react";
import Navbar from "../Components/Navbar";
import { Link } from "react-router-dom";
import avatar from "../img/Prof.jfif";
import { IoHomeOutline } from "react-icons/io5";

export default function UserPass() {
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
              تغییر رمزعبور
            </p>

            <form action="" className="flex flex-col gap-8">
              <div className="relative">
                <IoHomeOutline
                  size={20}
                  className="absolute left-2 bottom-[7px] dark:text-white"
                ></IoHomeOutline>
                <input
                  className="w-full p-1 outline-none border-[1px] border-gray-400 dark:bg-inherit rounded-sm placeholder:text-gray-600 dark:placeholder:text-gray-300"
                  type="password"
                  placeholder="رمزعبور فعلی را وارد کنید"
                />
              </div>

              <div className="relative">
                <IoHomeOutline
                  size={20}
                  className="absolute left-2 bottom-[7px] dark:text-white"
                ></IoHomeOutline>
                <input
                  className="w-full p-1 outline-none border-[1px] border-gray-400 dark:bg-inherit rounded-sm placeholder:text-gray-600 dark:placeholder:text-gray-300"
                  type="password"
                  placeholder="رمزعبور جدید را وارد کنید"
                />
              </div>

              <div className="relative">
                <IoHomeOutline
                  size={20}
                  className="absolute left-2 bottom-[7px] dark:text-white"
                ></IoHomeOutline>
                <input
                  className="w-full p-1 outline-none border-[1px] border-gray-400 dark:bg-inherit rounded-sm placeholder:text-gray-600 dark:placeholder:text-gray-300"
                  type="password"
                  placeholder="رمزعبور جدید را تکرار کنید"
                />
              </div>

              <button className="max-w-[140px] px-2 mx-auto bg-sky-400 py-1 rounded-sm">
                تغییر رمزعبور
              </button>
            </form>
          </div>
        </div>
      </main>
    </>
  );
}
