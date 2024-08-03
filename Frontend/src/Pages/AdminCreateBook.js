import React, { useState } from "react";
import AdminSidebar from "../Components/AdminSidebar";

const getCreate = async () => {
  const res = await fetch("api/Admin/Books/Create");
  const body = await res.json();
  return body.createData;
};

export default function AdminCreateBook() {
  
  const [createData, setCreateData] = useState(null);
  const createFetch = async () => {
    const createData = await getCreate();
    setCreateData(createData);
  };

  return (
    <>
      <AdminSidebar></AdminSidebar>

      <main className="w-full md:w-[calc(100%-256px)] md:mr-64 bg-gray-50 min-h-screen transition-all">
        <h1 className="my-6 text-center text-2xl text-sky-900 font-raybold">
          افزودن کتاب جدید
        </h1>

        <form className="rounded-md shadow-md p-3 mb-6" action="">
          <div className="flex flex-col gap-1">
            <label
              htmlFor="level"
              className="text-lg font-raybold text-gray-600"
            >
              سطح کتاب
            </label>

            <select
              className="mb-2 border-[1px] border-gray-400 rounded-sm outline-none px-2 py-[2px]"
              id="level"
            >
              <option disabled selected value="">
                انتخاب سطح
              </option>
              <option value="مبتدی">مبتدی</option>
              <option value="متوسط">متوسط</option>
              <option value="پیشرفته">پیشرفته</option>
            </select>
          </div>

          <div className="flex flex-col gap-1">
            <label
              htmlFor="category"
              className="text-lg font-raybold text-gray-600"
            >
              دسته‌بندی
            </label>
            <select
              className="mb-2 border-[1px] border-gray-400 rounded-sm outline-none px-2 py-[2px]"
              id="level"
            >
              <option disabled selected value="">
                انتخاب دسته‌بندی
              </option>
              <option value="رمان">رمان</option>
              <option value="آموزشی">آموزشی</option>
            </select>
          </div>

          <div className="flex flex-col gap-1">
            <label
              htmlFor="title"
              className="text-lg font-raybold text-gray-600"
            >
              عنوان فارسی
            </label>
            <input
              id="title"
              className="mb-2 border-[1px] border-gray-400 rounded-sm outline-none px-2 py-[2px]"
              type="text"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label
              htmlFor="turkTitle"
              className="text-lg font-raybold text-gray-600"
            >
              عنوان ترکی
            </label>
            <input
              id="turkTitle"
              className="mb-2 border-[1px] border-gray-400 rounded-sm outline-none px-2 py-[2px]"
              type="text"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label
              htmlFor="author"
              className="text-lg font-raybold text-gray-600"
            >
              نویسنده کتاب
            </label>
            <input
              id="author"
              className="mb-2 border-[1px] border-gray-400 rounded-sm outline-none px-2 py-[2px]"
              type="text"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label
              htmlFor="price"
              className="text-lg font-raybold text-gray-600"
            >
              قیمت
            </label>
            <input
              id="price"
              className="mb-2 border-[1px] border-gray-400 rounded-sm outline-none px-2 py-[2px]"
              type="text"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="img" className="text-lg font-raybold text-gray-600">
              عکس کتاب
            </label>
            <input
              id="img"
              className="mb-2 border-[1px] border-gray-400 rounded-sm outline-none px-2 py-[2px]"
              type="file"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label
              htmlFor="stock"
              className="text-lg font-raybold text-gray-600"
            >
              تعداد موجودی
            </label>
            <input
              id="stock"
              className="mb-2 border-[1px] border-gray-400 rounded-sm outline-none px-2 py-[2px]"
              type="number"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label
              htmlFor="pages"
              className="text-lg font-raybold text-gray-600"
            >
              تعداد صفحه
            </label>
            <input
              id="pages"
              className="mb-2 border-[1px] border-gray-400 rounded-sm outline-none px-2 py-[2px]"
              type="text"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label
              htmlFor="caption"
              className="text-lg font-raybold text-gray-600"
            >
              توضیحات
            </label>
            <input
              id="caption"
              className="mb-2 border-[1px] border-gray-400 rounded-sm outline-none px-2 py-[2px]"
              type="text"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label
              htmlFor="weight"
              className="text-lg font-raybold text-gray-600"
            >
              وزن
            </label>
            <input
              id="weight"
              className="mb-2 border-[1px] border-gray-400 rounded-sm outline-none px-2 py-[2px]"
              type="number"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label
              htmlFor="material"
              className="text-lg font-raybold text-gray-600"
            >
              قطع
            </label>
            <select
              className="mb-2 border-[1px] border-gray-400 rounded-sm outline-none px-2 py-[2px]"
              id="level"
            >
              <option disabled selected value="">
                انتخاب قطع
              </option>
              <option value="رقعی">رقعی</option>
              <option value="نیم‌رقعی">نیم‌رقعی</option>
              <option value="رحلی">رحلی</option>
              <option value="وزیری">وزیری</option>
              <option value="پالتویی">پالتویی</option>
            </select>
          </div>

          <div className="flex flex-col gap-1">
            <label
              htmlFor="cover"
              className="text-lg font-raybold text-gray-600"
            >
              جلد
            </label>
            <select
              className="mb-2 border-[1px] border-gray-400 rounded-sm outline-none px-2 py-[2px]"
              id="level"
            >
              <option disabled selected value="">
                انتخاب جلد
              </option>
              <option value="شومیز">شومیز</option>
              <option value="کاغذی">کاغذی</option>
              <option value="سخت">سخت</option>
              <option value="گلاسه">گلاسه</option>
            </select>
          </div>

          <div className="flex flex-col gap-1">
            <label
              htmlFor="isbn"
              className="text-lg font-raybold text-gray-600"
            >
              شابک
            </label>
            <input
              id="isbn"
              className="mb-2 border-[1px] border-gray-400 rounded-sm outline-none px-2 py-[2px]"
              type="text"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label
              htmlFor="year"
              className="text-lg font-raybold text-gray-600"
            >
              سال انتشار
            </label>
            <input
              id="year"
              className="mb-2 border-[1px] border-gray-400 rounded-sm outline-none px-2 py-[2px]"
              type="text"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label
              htmlFor="sells"
              className="text-lg font-raybold text-gray-600"
            >
              تعداد فروش
            </label>
            <input
              id="sells"
              className="mb-2 border-[1px] border-gray-400 rounded-sm outline-none px-2 py-[2px]"
              type="text"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label
              htmlFor="publisher"
              className="text-lg font-raybold text-gray-600"
            >
              انتشارات
            </label>
            <input
              id="publisher"
              className="mb-2 border-[1px] border-gray-400 rounded-sm outline-none px-2 py-[2px]"
              type="text"
            />
          </div>

          <button
            onClick={createFetch}
            className="bg-green-500 py-1 text-lg text-white rounded-sm w-full mt-4"
          >
            ذخیره اطلاعات
          </button>
        </form>
      </main>
    </>
  );
}
