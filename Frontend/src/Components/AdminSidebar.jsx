import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoMdClose } from "react-icons/io";
import { IoMenuSharp } from "react-icons/io5";

export default function AdminSidebar() {
  const [downClick, setDownClick] = useState(false);
  const [closeClick, setCloseClick] = useState(true);

  return (
    <>
      {closeClick ? (
        <div className="fixed right-0 top-0 w-64 h-full bg-sky-900 p-4 z-50 sidebar-menu transition-transform">
          <span className="flex items-center justify-between text-lg font-bold text-white ml-3">
            داشبورد کیتاپ‌بیزده
            <IoMdClose
              size={22}
              className="cursor-pointer"
              onClick={() => setCloseClick(false)}
            ></IoMdClose>
          </span>

          <ul className="mt-4">
            <li className="mb-1 group active">
              <Link
                to={"/admin"}
                className="flex items-center gap-2 py-2 px-4 text-gray-300 hover:bg-gray-950 hover:text-gray-100 rounded-md group-[.active]:bg-gray-800 group-[.active]:text-white group-[.selected]:bg-gray-950 group-[.selected]:text-gray-100"
              >
                <ion-icon name="home-outline"></ion-icon>
                <span className="text-sm">پنل ادمین</span>
              </Link>
            </li>

            <li
              onClick={() => setDownClick(!downClick)}
              className="mb-1 group active"
            >
              <a
                href="#"
                className="flex items-center gap-2 py-2 px-4 text-gray-300 hover:bg-gray-950 hover:text-gray-100 rounded-md group-[.active]:bg-gray-800 group-[.active]:text-white group-[.selected]:bg-gray-950 group-[.selected]:text-gray-100"
              >
                {!downClick ? (
                  <ion-icon name="chevron-down-outline"></ion-icon>
                ) : (
                  <ion-icon name="chevron-up-outline"></ion-icon>
                )}
                <span className="text-sm">مدیریت کاربران</span>
              </a>

              {downClick && (
                <ul className="text-white pr-6 mt-3 text-[14px] child:mb-1.5">
                  <li>
                    <a href="#">دسترسی‌ها</a>
                  </li>
                  <li>
                    <Link to={"/admin/users"}>کاربران</Link>
                  </li>
                  <li>
                    <Link to={"/admin/books"}>کتاب‌ها</Link>
                  </li>
                  <li>
                    <a href="#">کاربران حذف‌شده</a>
                  </li>
                </ul>
              )}
            </li>
          </ul>
        </div>
      ) : (
        <IoMenuSharp
          className="absolute top-3 right-3 cursor-pointer"
          size={22}
          onClick={() => setCloseClick(true)}
        ></IoMenuSharp>
      )}
    </>
  );
}
