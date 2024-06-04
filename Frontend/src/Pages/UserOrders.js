import React from "react";
import Navbar from "../Components/Navbar";
import { Link } from "react-router-dom";
import cukur from "../img/Cukur.png";
import avatar from "../img/Prof.jfif";
import { IoHomeOutline } from "react-icons/io5";

export default function UserOrders() {
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
              سفارش‌های من
            </p>

            <table className="w-full text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead className="text-lg text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    تصویر کتاب
                  </th>
                  <th scope="col" className="px-6 py-3">
                    عنوان کتاب
                  </th>
                  <th scope="col" className="px-6 py-3">
                    تاریخ
                  </th>
                  <th scope="col" className="px-6 py-3">
                    نوع تراکنش
                  </th>
                </tr>
              </thead>

              <tbody>
                <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                  <td>
                    <img
                      src={cukur}
                      className="max-w-[130px] h-[130px]"
                      alt=""
                    />
                  </td>

                  <td className="px-6 py-4 text-base">چوکور</td>

                  <td className="px-6 py-4 text-base">1403/03/14</td>

                  <td className="px-6 py-4">
                    <p className="bg-green-400 text-center text-sky-900 py-1 rounded-sm ">
                      واریز به حساب
                    </p>
                  </td>
                </tr>

                <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                  <td>
                    <img
                      src={cukur}
                      className="max-w-[130px] h-[130px]"
                      alt=""
                    />
                  </td>

                  <td className="px-6 py-4 text-base">چوکور</td>

                  <td className="px-6 py-4 text-base">1403/03/14</td>

                  <td className="px-6 py-4">
                    <p className="bg-green-400 text-center text-sky-900 py-1 rounded-sm ">
                      واریز به حساب
                    </p>
                  </td>
                </tr>

                <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                  <td>
                    <img
                      src={cukur}
                      className="max-w-[130px] h-[130px]"
                      alt=""
                    />
                  </td>

                  <td className="px-6 py-4 text-base">چوکور</td>

                  <td className="px-6 py-4 text-base">1403/03/14</td>

                  <td className="px-6 py-4">
                    <p className="bg-green-400 text-center text-sky-900 py-1 rounded-sm ">
                      واریز به حساب
                    </p>
                  </td>
                </tr>

                <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                  <td>
                    <img
                      src={cukur}
                      className="max-w-[130px] h-[130px]"
                      alt=""
                    />
                  </td>

                  <td className="px-6 py-4 text-base">چوکور</td>

                  <td className="px-6 py-4 text-base">1403/03/14</td>

                  <td className="px-6 py-4">
                    <p className="bg-green-400 text-center text-sky-900 py-1 rounded-sm ">
                      واریز به حساب
                    </p>
                  </td>
                </tr>

                <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                  <td>
                    <img
                      src={cukur}
                      className="max-w-[130px] h-[130px]"
                      alt=""
                    />
                  </td>

                  <td className="px-6 py-4 text-base">چوکور</td>

                  <td className="px-6 py-4 text-base">1403/03/14</td>

                  <td className="px-6 py-4">
                    <p className="bg-green-400 text-center text-sky-900 py-1 rounded-sm ">
                      واریز به حساب
                    </p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </>
  );
}
