import React, { useEffect, useState } from "react";
import AdminSidebar from "../Components/AdminSidebar";
import { Link } from "react-router-dom";
import Cukur from "../img/Cukur.png";

export default function AdminCourses() {
   
  const [newData, setNewData] = useState(null);
  useEffect(() => {
    fetch("api/Account/GetUsers")
      .then((response) => response.json())
      .then((newData) => console.log(newData));
  }, []);  

  return (
    <>
      <AdminSidebar></AdminSidebar>

      <main className="w-full md:w-[calc(100%-256px)] md:mr-64 bg-gray-50 min-h-screen transition-all">
        <div className="flex items-center justify-evenly flex-row-reverse">
          <h1 className="mt-6 text-center text-2xl text-sky-900 font-raybold">
            لیست کتاب‌های سایت
          </h1>
          <Link
            to={"/admin/books/edit"}
            className="bg-sky-300 text-black rounded-sm px-2 py-1"
          >
            افزودن
          </Link>
        </div>

        <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-8">
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
                  قیمت
                </th>
                <th scope="col" className="px-6 py-3">
                  عملیات
                </th>
              </tr>
            </thead>

            <tbody>
              <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                <td>
                  <img src={Cukur} className="w-[130px] h-[130px]" alt="" />
                </td>

                <td className="px-6 py-4 text-base">چوکور</td>

                <td className="px-6 py-4 text-base">244,000</td>

                <td className="px-6 py-4">
                  <Link
                    to={"/admin/books/edit"}
                    className="bg-sky-300 text-black rounded-sm px-2 py-1"
                  >
                    ویرایش
                  </Link>
                  <Link
                    to={"/admin/books/create"}
                    className="mr-2 bg-sky-300 text-black rounded-sm px-2 py-1"
                  >
                    حذف
                  </Link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>
    </>
  );
}
