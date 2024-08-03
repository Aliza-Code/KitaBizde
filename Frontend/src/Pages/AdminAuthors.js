import React from 'react'
import AdminSidebar from "../Components/AdminSidebar";

export default function AdminAuthors() {
  return (
    <>
      <AdminSidebar></AdminSidebar>

      <main className="w-full md:w-[calc(100%-256px)] md:mr-64 bg-gray-50 min-h-screen transition-all">
        <h1 className="my-6 text-center text-2xl text-sky-900 font-raybold">
          لیست کاربران سایت
        </h1>

        <form action="" className="flex items-center justify-evenly">
          <input
            className="border-[1px] rounded-sm px-2 py-1"
            type="text"
            placeholder="نام کاربری"
          />

          <input
            className="border-[1px] rounded-sm px-2 py-1"
            type="text"
            placeholder="ایمیل"
          />

          <div>
            <button className="bg-sky-300 text-black rounded-sm px-2 py-1">
              بگرد
            </button>
            <button className="mr-2 border-[1px] border-sky-300 text-black rounded-sm px-2 py-1">
              خالی
            </button>
          </div>
        </form>

        <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-8">
          <table className="w-full text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-lg text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  نام نویسنده
                </th>
                {/* <th scope="col" className="px-6 py-3">
                  ایمیل
                </th> */}
                {/* <th scope="col" className="px-6 py-3">
                  وضعیت
                </th> */}
                {/* <th scope="col" className="px-6 py-3">
                  تاریخ ثبت‌نام
                </th> */}
                <th scope="col" className="px-6 py-3">
                  عملیات
                </th>
              </tr>
            </thead>

            <tbody>
              <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                <td className="px-6 py-4 text-base">اورهان پاموک</td>
                
                <td className="px-6 py-4">
                  <button className="bg-sky-300 text-black rounded-sm px-2 py-1">
                    ویرایش
                  </button>
                  <button className="mr-2 bg-sky-300 text-black rounded-sm px-2 py-1">
                    افزودن
                  </button>
                  <button className="mr-2 bg-sky-300 text-black rounded-sm px-2 py-1">
                    حذف
                  </button>
                </td>
              </tr>
              
              <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                <td className="px-6 py-4 text-base">اورهان پاموک</td>
                
                <td className="px-6 py-4">
                  <button className="bg-sky-300 text-black rounded-sm px-2 py-1">
                    ویرایش
                  </button>
                  <button className="mr-2 bg-sky-300 text-black rounded-sm px-2 py-1">
                    افزودن
                  </button>
                  <button className="mr-2 bg-sky-300 text-black rounded-sm px-2 py-1">
                    حذف
                  </button>
                </td>
              </tr>
              
              <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                <td className="px-6 py-4 text-base">اورهان پاموک</td>
                
                <td className="px-6 py-4">
                  <button className="bg-sky-300 text-black rounded-sm px-2 py-1">
                    ویرایش
                  </button>
                  <button className="mr-2 bg-sky-300 text-black rounded-sm px-2 py-1">
                    افزودن
                  </button>
                  <button className="mr-2 bg-sky-300 text-black rounded-sm px-2 py-1">
                    حذف
                  </button>
                </td>
              </tr>
              
              <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                <td className="px-6 py-4 text-base">اورهان پاموک</td>
                
                <td className="px-6 py-4">
                  <button className="bg-sky-300 text-black rounded-sm px-2 py-1">
                    ویرایش
                  </button>
                  <button className="mr-2 bg-sky-300 text-black rounded-sm px-2 py-1">
                    افزودن
                  </button>
                  <button className="mr-2 bg-sky-300 text-black rounded-sm px-2 py-1">
                    حذف
                  </button>
                </td>
              </tr>
              
              <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                <td className="px-6 py-4 text-base">اورهان پاموک</td>
                
                <td className="px-6 py-4">
                  <button className="bg-sky-300 text-black rounded-sm px-2 py-1">
                    ویرایش
                  </button>
                  <button className="mr-2 bg-sky-300 text-black rounded-sm px-2 py-1">
                    افزودن
                  </button>
                  <button className="mr-2 bg-sky-300 text-black rounded-sm px-2 py-1">
                    حذف
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>
    </>
  )
}
