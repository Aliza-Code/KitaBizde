import React, { useState } from "react";
import AdminSidebar from "../Components/AdminSidebar";
import { IoHomeOutline } from "react-icons/io5";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

const data = [
  { name: "فروردین", uv: 100, pv: 2400, amt: 2400 },
  { name: "اردیبهشت", uv: 300, pv: 2400, amt: 2400 },
  { name: "خرداد", uv: 300, pv: 2400, amt: 2400 },
  { name: "تیر", uv: 200, pv: 2400, amt: 2400 },
  { name: "مرداد", uv: 278, pv: 2400, amt: 2400 },
  { name: "شهریور", uv: 139, pv: 2400, amt: 2400 },
];

export default function Admin() {
  return (
    <>
      <AdminSidebar></AdminSidebar>

      <main className="w-full md:w-[calc(100%-256px)] md:mr-64 bg-gray-50 min-h-screen transition-all">
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
            <div className="bg-white rounded-md border border-gray-100 p-6 shadow-md shadow-black/5">
              <div className="flex justify-between mb-6">
                <div>
                  <div className="text-2xl font-semibold mb-1">10</div>
                  <div className="text-sm font-medium text-gray-400">
                    سفارش‌های فعال
                  </div>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-full bg-gray-100 rounded-full h-4">
                  <div className="h-full bg-blue-500 rounded-full p-1 w-[60%]">
                    <div className="w-2 h-2 rounded-full bg-white ml-auto"></div>
                  </div>
                </div>
                <span className="text-sm font-medium text-gray-600 ml-4">
                  %60
                </span>
              </div>
            </div>

            <div className="bg-white rounded-md border border-gray-100 p-6 shadow-md shadow-black/5">
              <div className="flex justify-between mb-4">
                <div>
                  <div className="flex items-center mb-1">
                    <div className="text-2xl font-semibold">324</div>

                    <div className="p-1 rounded bg-emerald-500/10 text-emerald-500 text-[12px] font-semibold leading-none ml-2">
                      +30%
                    </div>
                  </div>

                  <div className="text-sm font-medium text-gray-400">
                    بازدیدکنندگان
                  </div>
                </div>
              </div>

              <div className="flex items-center">
                <img
                  src="https://placehold.co/32x32"
                  alt=""
                  className="w-8 h-8 rounded-full object-cover block"
                />
                <img
                  src="https://placehold.co/32x32"
                  alt=""
                  className="w-8 h-8 rounded-full object-cover block -ml-3"
                />
                <img
                  src="https://placehold.co/32x32"
                  alt=""
                  className="w-8 h-8 rounded-full object-cover block -ml-3"
                />
                <img
                  src="https://placehold.co/32x32"
                  alt=""
                  className="w-8 h-8 rounded-full object-cover block -ml-3"
                />
                <img
                  src="https://placehold.co/32x32"
                  alt=""
                  className="w-8 h-8 rounded-full object-cover block -ml-3"
                />
              </div>
            </div>

            <div className="bg-white rounded-md border border-gray-100 p-6 shadow-md shadow-black/5">
              <div className="flex justify-between mb-6">
                <div>
                  <div className="text-2xl font-semibold mb-1">
                    4
                    <span className="text-sm font-normal text-gray-400 align-top">
                      میلیون تومان
                    </span>
                  </div>

                  <div className="text-sm font-medium text-gray-400">
                    مجموع سفارش‌ها
                  </div>
                </div>
              </div>

              <a
                href="#"
                className="text-blue-500 font-medium text-sm hover:text-blue-600"
              >
                دیدن جزئیات
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            <div className="bg-white border border-gray-100 shadow-md shadow-black/5 p-6 rounded-md">
              <div className="flex justify-between mb-4 items-start">
                <div className="font-medium">مدیریت سفارش‌ها</div>
              </div>

              <div className="flex items-center mb-4 order-tab">
                <button
                  type="button"
                  data-tab="order"
                  data-tab-page="active"
                  className="bg-gray-50 text-sm font-medium text-gray-400 py-2 px-4 rounded-tl-md rounded-bl-md hover:text-gray-600 active"
                >
                  فعال
                </button>

                <button
                  type="button"
                  data-tab="order"
                  data-tab-page="completed"
                  className="bg-gray-50 text-sm font-medium text-gray-400 py-2 px-4 hover:text-gray-600"
                >
                  تکمیل‌شده
                </button>

                <button
                  type="button"
                  data-tab="order"
                  data-tab-page="canceled"
                  className="bg-gray-50 text-sm font-medium text-gray-400 py-2 px-4 rounded-tr-md rounded-br-md hover:text-gray-600"
                >
                  لغوشده
                </button>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full min-w-[540px]">
                  <thead>
                    <tr>
                      <th className="text-[12px] uppercase tracking-wide font-medium text-gray-400 py-2 px-4 bg-gray-50 text-left rounded-tl-md rounded-bl-md">
                        خدمات
                      </th>
                      <th className="text-[12px] uppercase tracking-wide font-medium text-gray-400 py-2 px-4 bg-gray-50 text-left">
                        زمان تخمینی
                      </th>
                      <th className="text-[12px] uppercase tracking-wide font-medium text-gray-400 py-2 px-4 bg-gray-50 text-left">
                        ارزش
                      </th>
                      <th className="text-[12px] uppercase tracking-wide font-medium text-gray-400 py-2 px-4 bg-gray-50 text-left rounded-tr-md rounded-br-md">
                        وضعیت
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr>
                      <td className="py-2 px-4 border-b border-b-gray-50">
                        <div className="flex items-center">
                          <img
                            src="https://placehold.co/32x32"
                            alt=""
                            className="w-8 h-8 rounded object-cover block"
                          />
                          <a
                            href="#"
                            className="text-gray-600 text-sm font-medium hover:text-blue-500 ml-2 truncate"
                          >
                            سفارش کتاب
                          </a>
                        </div>
                      </td>
                      <td className="py-2 px-4 border-b border-b-gray-50">
                        <span className="text-[13px] font-medium text-gray-400">
                          4 روز
                        </span>
                      </td>
                      <td className="py-2 px-4 border-b border-b-gray-50">
                        <span className="text-[13px] font-medium text-gray-400">
                          300,000
                        </span>
                      </td>
                      <td className="py-2 px-4 border-b border-b-gray-50">
                        <span className="inline-block p-1 rounded bg-emerald-500/10 text-emerald-500 font-medium text-[12px] leading-none">
                          درحال بسته‌بندی
                        </span>
                      </td>
                    </tr>

                    <tr>
                      <td className="py-2 px-4 border-b border-b-gray-50">
                        <div className="flex items-center">
                          <img
                            src="https://placehold.co/32x32"
                            alt=""
                            className="w-8 h-8 rounded object-cover block"
                          />
                          <a
                            href="#"
                            className="text-gray-600 text-sm font-medium hover:text-blue-500 ml-2 truncate"
                          >
                            سفارش کتاب
                          </a>
                        </div>
                      </td>
                      <td className="py-2 px-4 border-b border-b-gray-50">
                        <span className="text-[13px] font-medium text-gray-400">
                          4 روز
                        </span>
                      </td>
                      <td className="py-2 px-4 border-b border-b-gray-50">
                        <span className="text-[13px] font-medium text-gray-400">
                          300,000
                        </span>
                      </td>
                      <td className="py-2 px-4 border-b border-b-gray-50">
                        <span className="inline-block p-1 rounded bg-emerald-500/10 text-emerald-500 font-medium text-[12px] leading-none">
                          درحال بسته‌بندی
                        </span>
                      </td>
                    </tr>

                    <tr>
                      <td className="py-2 px-4 border-b border-b-gray-50">
                        <div className="flex items-center">
                          <img
                            src="https://placehold.co/32x32"
                            alt=""
                            className="w-8 h-8 rounded object-cover block"
                          />
                          <a
                            href="#"
                            className="text-gray-600 text-sm font-medium hover:text-blue-500 ml-2 truncate"
                          >
                            سفارش کتاب
                          </a>
                        </div>
                      </td>
                      <td className="py-2 px-4 border-b border-b-gray-50">
                        <span className="text-[13px] font-medium text-gray-400">
                          4 روز
                        </span>
                      </td>
                      <td className="py-2 px-4 border-b border-b-gray-50">
                        <span className="text-[13px] font-medium text-gray-400">
                          300,000
                        </span>
                      </td>
                      <td className="py-2 px-4 border-b border-b-gray-50">
                        <span className="inline-block p-1 rounded bg-emerald-500/10 text-emerald-500 font-medium text-[12px] leading-none">
                          درحال بسته‌بندی
                        </span>
                      </td>
                    </tr>

                    <tr>
                      <td className="py-2 px-4 border-b border-b-gray-50">
                        <div className="flex items-center">
                          <img
                            src="https://placehold.co/32x32"
                            alt=""
                            className="w-8 h-8 rounded object-cover block"
                          />
                          <a
                            href="#"
                            className="text-gray-600 text-sm font-medium hover:text-blue-500 ml-2 truncate"
                          >
                            سفارش کتاب
                          </a>
                        </div>
                      </td>
                      <td className="py-2 px-4 border-b border-b-gray-50">
                        <span className="text-[13px] font-medium text-gray-400">
                          4 روز
                        </span>
                      </td>
                      <td className="py-2 px-4 border-b border-b-gray-50">
                        <span className="text-[13px] font-medium text-gray-400">
                          300,000
                        </span>
                      </td>
                      <td className="py-2 px-4 border-b border-b-gray-50">
                        <span className="inline-block p-1 rounded bg-emerald-500/10 text-emerald-500 font-medium text-[12px] leading-none">
                          درحال بسته‌بندی
                        </span>
                      </td>
                    </tr>

                    <tr>
                      <td className="py-2 px-4 border-b border-b-gray-50">
                        <div className="flex items-center">
                          <img
                            src="https://placehold.co/32x32"
                            alt=""
                            className="w-8 h-8 rounded object-cover block"
                          />
                          <a
                            href="#"
                            className="text-gray-600 text-sm font-medium hover:text-blue-500 ml-2 truncate"
                          >
                            سفارش کتاب
                          </a>
                        </div>
                      </td>
                      <td className="py-2 px-4 border-b border-b-gray-50">
                        <span className="text-[13px] font-medium text-gray-400">
                          4 روز
                        </span>
                      </td>
                      <td className="py-2 px-4 border-b border-b-gray-50">
                        <span className="text-[13px] font-medium text-gray-400">
                          300,000
                        </span>
                      </td>
                      <td className="py-2 px-4 border-b border-b-gray-50">
                        <span className="inline-block p-1 rounded bg-emerald-500/10 text-emerald-500 font-medium text-[12px] leading-none">
                          درحال بسته‌بندی
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>

                <table className="w-full min-w-[540px] hidden">
                  <thead>
                    <tr>
                      <th className="text-[12px] uppercase tracking-wide font-medium text-gray-400 py-2 px-4 bg-gray-50 text-left rounded-tl-md rounded-bl-md">
                        خدمات
                      </th>
                      <th className="text-[12px] uppercase tracking-wide font-medium text-gray-400 py-2 px-4 bg-gray-50 text-left">
                        زمان تخمینی
                      </th>
                      <th className="text-[12px] uppercase tracking-wide font-medium text-gray-400 py-2 px-4 bg-gray-50 text-left">
                        ارزش
                      </th>
                      <th className="text-[12px] uppercase tracking-wide font-medium text-gray-400 py-2 px-4 bg-gray-50 text-left rounded-tr-md rounded-br-md">
                        وضعیت
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr>
                      <td className="py-2 px-4 border-b border-b-gray-50">
                        <div className="flex items-center">
                          <img
                            src="https://placehold.co/32x32"
                            alt=""
                            className="w-8 h-8 rounded object-cover block"
                          />
                          <a
                            href="#"
                            className="text-gray-600 text-sm font-medium hover:text-blue-500 ml-2 truncate"
                          >
                            سفارش کتاب
                          </a>
                        </div>
                      </td>
                      <td className="py-2 px-4 border-b border-b-gray-50">
                        <span className="text-[13px] font-medium text-gray-400">
                          4 روز
                        </span>
                      </td>
                      <td className="py-2 px-4 border-b border-b-gray-50">
                        <span className="text-[13px] font-medium text-gray-400">
                          300,000
                        </span>
                      </td>
                      <td className="py-2 px-4 border-b border-b-gray-50">
                        <span className="inline-block p-1 rounded bg-emerald-500/10 text-emerald-500 font-medium text-[12px] leading-none">
                          درحال بسته‌بندی
                        </span>
                      </td>
                    </tr>

                    <tr>
                      <td className="py-2 px-4 border-b border-b-gray-50">
                        <div className="flex items-center">
                          <img
                            src="https://placehold.co/32x32"
                            alt=""
                            className="w-8 h-8 rounded object-cover block"
                          />
                          <a
                            href="#"
                            className="text-gray-600 text-sm font-medium hover:text-blue-500 ml-2 truncate"
                          >
                            سفارش کتاب
                          </a>
                        </div>
                      </td>
                      <td className="py-2 px-4 border-b border-b-gray-50">
                        <span className="text-[13px] font-medium text-gray-400">
                          4 روز
                        </span>
                      </td>
                      <td className="py-2 px-4 border-b border-b-gray-50">
                        <span className="text-[13px] font-medium text-gray-400">
                          300,000
                        </span>
                      </td>
                      <td className="py-2 px-4 border-b border-b-gray-50">
                        <span className="inline-block p-1 rounded bg-emerald-500/10 text-emerald-500 font-medium text-[12px] leading-none">
                          درحال بسته‌بندی
                        </span>
                      </td>
                    </tr>

                    <tr>
                      <td className="py-2 px-4 border-b border-b-gray-50">
                        <div className="flex items-center">
                          <img
                            src="https://placehold.co/32x32"
                            alt=""
                            className="w-8 h-8 rounded object-cover block"
                          />
                          <a
                            href="#"
                            className="text-gray-600 text-sm font-medium hover:text-blue-500 ml-2 truncate"
                          >
                            سفارش کتاب
                          </a>
                        </div>
                      </td>
                      <td className="py-2 px-4 border-b border-b-gray-50">
                        <span className="text-[13px] font-medium text-gray-400">
                          4 روز
                        </span>
                      </td>
                      <td className="py-2 px-4 border-b border-b-gray-50">
                        <span className="text-[13px] font-medium text-gray-400">
                          300,000
                        </span>
                      </td>
                      <td className="py-2 px-4 border-b border-b-gray-50">
                        <span className="inline-block p-1 rounded bg-emerald-500/10 text-emerald-500 font-medium text-[12px] leading-none">
                          درحال بسته‌بندی
                        </span>
                      </td>
                    </tr>

                    <tr>
                      <td className="py-2 px-4 border-b border-b-gray-50">
                        <div className="flex items-center">
                          <img
                            src="https://placehold.co/32x32"
                            alt=""
                            className="w-8 h-8 rounded object-cover block"
                          />
                          <a
                            href="#"
                            className="text-gray-600 text-sm font-medium hover:text-blue-500 ml-2 truncate"
                          >
                            سفارش کتاب
                          </a>
                        </div>
                      </td>
                      <td className="py-2 px-4 border-b border-b-gray-50">
                        <span className="text-[13px] font-medium text-gray-400">
                          4 روز
                        </span>
                      </td>
                      <td className="py-2 px-4 border-b border-b-gray-50">
                        <span className="text-[13px] font-medium text-gray-400">
                          300,000
                        </span>
                      </td>
                      <td className="py-2 px-4 border-b border-b-gray-50">
                        <span className="inline-block p-1 rounded bg-emerald-500/10 text-emerald-500 font-medium text-[12px] leading-none">
                          درحال بسته‌بندی
                        </span>
                      </td>
                    </tr>

                    <tr>
                      <td className="py-2 px-4 border-b border-b-gray-50">
                        <div className="flex items-center">
                          <img
                            src="https://placehold.co/32x32"
                            alt=""
                            className="w-8 h-8 rounded object-cover block"
                          />
                          <a
                            href="#"
                            className="text-gray-600 text-sm font-medium hover:text-blue-500 ml-2 truncate"
                          >
                            سفارش کتاب
                          </a>
                        </div>
                      </td>
                      <td className="py-2 px-4 border-b border-b-gray-50">
                        <span className="text-[13px] font-medium text-gray-400">
                          4 روز
                        </span>
                      </td>
                      <td className="py-2 px-4 border-b border-b-gray-50">
                        <span className="text-[13px] font-medium text-gray-400">
                          300,000
                        </span>
                      </td>
                      <td className="py-2 px-4 border-b border-b-gray-50">
                        <span className="inline-block p-1 rounded bg-emerald-500/10 text-emerald-500 font-medium text-[12px] leading-none">
                          درحال بسته‌بندی
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>

                <table className="w-full min-w-[540px] hidden">
                  <thead>
                    <tr>
                      <th className="text-[12px] uppercase tracking-wide font-medium text-gray-400 py-2 px-4 bg-gray-50 text-left rounded-tl-md rounded-bl-md">
                        خدمات
                      </th>
                      <th className="text-[12px] uppercase tracking-wide font-medium text-gray-400 py-2 px-4 bg-gray-50 text-left">
                        زمان تخمینی
                      </th>
                      <th className="text-[12px] uppercase tracking-wide font-medium text-gray-400 py-2 px-4 bg-gray-50 text-left">
                        ارزش
                      </th>
                      <th className="text-[12px] uppercase tracking-wide font-medium text-gray-400 py-2 px-4 bg-gray-50 text-left rounded-tr-md rounded-br-md">
                        وضعیت
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr>
                      <td className="py-2 px-4 border-b border-b-gray-50">
                        <div className="flex items-center">
                          <img
                            src="https://placehold.co/32x32"
                            alt=""
                            className="w-8 h-8 rounded object-cover block"
                          />
                          <a
                            href="#"
                            className="text-gray-600 text-sm font-medium hover:text-blue-500 ml-2 truncate"
                          >
                            سفارش کتاب
                          </a>
                        </div>
                      </td>
                      <td className="py-2 px-4 border-b border-b-gray-50">
                        <span className="text-[13px] font-medium text-gray-400">
                          4 روز
                        </span>
                      </td>
                      <td className="py-2 px-4 border-b border-b-gray-50">
                        <span className="text-[13px] font-medium text-gray-400">
                          300,000
                        </span>
                      </td>
                      <td className="py-2 px-4 border-b border-b-gray-50">
                        <span className="inline-block p-1 rounded bg-emerald-500/10 text-emerald-500 font-medium text-[12px] leading-none">
                          درحال بسته‌بندی
                        </span>
                      </td>
                    </tr>

                    <tr>
                      <td className="py-2 px-4 border-b border-b-gray-50">
                        <div className="flex items-center">
                          <img
                            src="https://placehold.co/32x32"
                            alt=""
                            className="w-8 h-8 rounded object-cover block"
                          />
                          <a
                            href="#"
                            className="text-gray-600 text-sm font-medium hover:text-blue-500 ml-2 truncate"
                          >
                            سفارش کتاب
                          </a>
                        </div>
                      </td>
                      <td className="py-2 px-4 border-b border-b-gray-50">
                        <span className="text-[13px] font-medium text-gray-400">
                          4 روز
                        </span>
                      </td>
                      <td className="py-2 px-4 border-b border-b-gray-50">
                        <span className="text-[13px] font-medium text-gray-400">
                          300,000
                        </span>
                      </td>
                      <td className="py-2 px-4 border-b border-b-gray-50">
                        <span className="inline-block p-1 rounded bg-emerald-500/10 text-emerald-500 font-medium text-[12px] leading-none">
                          درحال بسته‌بندی
                        </span>
                      </td>
                    </tr>

                    <tr>
                      <td className="py-2 px-4 border-b border-b-gray-50">
                        <div className="flex items-center">
                          <img
                            src="https://placehold.co/32x32"
                            alt=""
                            className="w-8 h-8 rounded object-cover block"
                          />
                          <a
                            href="#"
                            className="text-gray-600 text-sm font-medium hover:text-blue-500 ml-2 truncate"
                          >
                            سفارش کتاب
                          </a>
                        </div>
                      </td>
                      <td className="py-2 px-4 border-b border-b-gray-50">
                        <span className="text-[13px] font-medium text-gray-400">
                          4 روز
                        </span>
                      </td>
                      <td className="py-2 px-4 border-b border-b-gray-50">
                        <span className="text-[13px] font-medium text-gray-400">
                          300,000
                        </span>
                      </td>
                      <td className="py-2 px-4 border-b border-b-gray-50">
                        <span className="inline-block p-1 rounded bg-emerald-500/10 text-emerald-500 font-medium text-[12px] leading-none">
                          درحال بسته‌بندی
                        </span>
                      </td>
                    </tr>

                    <tr>
                      <td className="py-2 px-4 border-b border-b-gray-50">
                        <div className="flex items-center">
                          <img
                            src="https://placehold.co/32x32"
                            alt=""
                            className="w-8 h-8 rounded object-cover block"
                          />
                          <a
                            href="#"
                            className="text-gray-600 text-sm font-medium hover:text-blue-500 ml-2 truncate"
                          >
                            سفارش کتاب
                          </a>
                        </div>
                      </td>
                      <td className="py-2 px-4 border-b border-b-gray-50">
                        <span className="text-[13px] font-medium text-gray-400">
                          4 روز
                        </span>
                      </td>
                      <td className="py-2 px-4 border-b border-b-gray-50">
                        <span className="text-[13px] font-medium text-gray-400">
                          300,000
                        </span>
                      </td>
                      <td className="py-2 px-4 border-b border-b-gray-50">
                        <span className="inline-block p-1 rounded bg-emerald-500/10 text-emerald-500 font-medium text-[12px] leading-none">
                          درحال بسته‌بندی
                        </span>
                      </td>
                    </tr>

                    <tr>
                      <td className="py-2 px-4 border-b border-b-gray-50">
                        <div className="flex items-center">
                          <img
                            src="https://placehold.co/32x32"
                            alt=""
                            className="w-8 h-8 rounded object-cover block"
                          />
                          <a
                            href="#"
                            className="text-gray-600 text-sm font-medium hover:text-blue-500 ml-2 truncate"
                          >
                            سفارش کتاب
                          </a>
                        </div>
                      </td>
                      <td className="py-2 px-4 border-b border-b-gray-50">
                        <span className="text-[13px] font-medium text-gray-400">
                          4 روز
                        </span>
                      </td>
                      <td className="py-2 px-4 border-b border-b-gray-50">
                        <span className="text-[13px] font-medium text-gray-400">
                          300,000
                        </span>
                      </td>
                      <td className="py-2 px-4 border-b border-b-gray-50">
                        <span className="inline-block p-1 rounded bg-emerald-500/10 text-emerald-500 font-medium text-[12px] leading-none">
                          درحال بسته‌بندی
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="bg-white border border-gray-100 shadow-md shadow-black/5 p-6 rounded-md">
              <div className="flex justify-between items-start">
                <div className="font-medium">پنل اعلان‌ها</div>
              </div>

              <form action="" className="flex items-center my-4">
                <div className="relative w-full mr-2">
                  <input
                    type="text"
                    className="py-2 pr-4 pl-10 bg-gray-50 w-full outline-none border border-gray-100 rounded-md text-sm focus:border-blue-500"
                    placeholder="جستجو..."
                  />

                  <IoHomeOutline className="absolute top-1/2 left-4 -translate-y-1/2 text-gray-400"></IoHomeOutline>
                </div>
              </form>

              <div className="overflow-x-auto mb-4">
                <ul className="w-full min-w-[540px] px-2 child:border-b-[1px] child:border-b-gray-400 child:mb-4 child:flex child:items-center child:justify-between">
                  <li>
                    <span className="flex items-center gap-2">
                      <IoHomeOutline></IoHomeOutline>
                      نظرات جدید
                    </span>
                    <span className="text-gray-600 font-raylight">
                      4 دقیقه قبل
                    </span>
                  </li>

                  <li>
                    <span className="flex items-center gap-2">
                      <IoHomeOutline></IoHomeOutline>
                      دنبال‌کننده‌های جدید
                    </span>
                    <span className="text-gray-600 font-raylight">
                      12 دقیقه قبل
                    </span>
                  </li>

                  <li>
                    <span className="flex items-center gap-2">
                      <IoHomeOutline></IoHomeOutline>
                      پیام‌های ارسال‌شده
                    </span>
                    <span className="text-gray-600 font-raylight">
                      27 دقیقه قبل
                    </span>
                  </li>

                  <li>
                    <span className="flex items-center gap-2">
                      <IoHomeOutline></IoHomeOutline>
                      وظایف جدید
                    </span>
                    <span className="text-gray-600 font-raylight">
                      9:49 صبح
                    </span>
                  </li>

                  <li>
                    <span className="flex items-center gap-2">
                      <IoHomeOutline></IoHomeOutline>
                      سرورهای دوباره راه‌اندازه‌شده
                    </span>
                    <span className="text-gray-600 font-raylight">
                      43 دقیقه قبل
                    </span>
                  </li>

                  <li>
                    <span className="flex items-center gap-2">
                      <IoHomeOutline></IoHomeOutline>
                      سرورهای خراب‌شده
                    </span>
                    <span className="text-gray-600 font-raylight">
                      11:32 صبح
                    </span>
                  </li>

                  <li>
                    <span className="flex items-center gap-2">
                      <IoHomeOutline></IoHomeOutline>
                      سرورهای بدون پاسخ
                    </span>
                    <span className="text-gray-600 font-raylight">
                      11:13 صبح
                    </span>
                  </li>

                  <li>
                    <span className="flex items-center gap-2">
                      <IoHomeOutline></IoHomeOutline>
                      سفارش‌های جدید
                    </span>
                    <span className="text-gray-600 font-raylight">
                      10:57 صبح
                    </span>
                  </li>

                  <li>
                    <span className="flex items-center gap-2">
                      <IoHomeOutline></IoHomeOutline>
                      پرداخت‌های جدید
                    </span>
                    <span className="text-gray-600 font-raylight">دیروز</span>
                  </li>
                </ul>
              </div>

              <button className="flex items-center justify-center w-full rounded-sm py-1.5 bg-gray-100 text-sky-500">
                مشاهده تمام هشدارها
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
            <div className="bg-white border border-gray-100 shadow-md shadow-black/5 p-6 rounded-md lg:col-span-2">
              <LineChart
                width={600}
                height={300}
                data={data}
                margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
              >
                <Line type="monotone" dataKey="uv" stroke="#0C226E" />
                <CartesianGrid stroke="#0C4A6E" strokeDasharray="5 5" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
              </LineChart>
            </div>

            <div className="bg-white border border-gray-100 shadow-md shadow-black/5 p-6 rounded-md">
              <div className="flex justify-between mb-4 items-start">
                <div className="font-medium">درآمد</div>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full min-w-[460px]">
                  <thead>
                    <tr>
                      <th className="text-[12px] uppercase tracking-wide font-medium text-gray-400 py-2 px-4 bg-gray-50 text-left rounded-tl-md rounded-bl-md">
                        خدمات
                      </th>
                      <th className="text-[12px] uppercase tracking-wide font-medium text-gray-400 py-2 px-4 bg-gray-50 text-left">
                        درآمد
                      </th>
                      <th className="text-[12px] uppercase tracking-wide font-medium text-gray-400 py-2 px-4 bg-gray-50 text-left rounded-tr-md rounded-br-md">
                        وضعیت
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr>
                      <td className="py-2 px-4 border-b border-b-gray-50">
                        <div className="flex items-center">
                          <img
                            src="https://placehold.co/32x32"
                            alt=""
                            className="w-8 h-8 rounded object-cover block"
                          />

                          <a
                            href="#"
                            className="text-gray-600 text-sm font-medium hover:text-blue-500 ml-2 truncate"
                          >
                            سفارش کتاب
                          </a>
                        </div>
                      </td>

                      <td className="py-2 px-4 border-b border-b-gray-50">
                        <span className="text-[13px] font-medium text-emerald-500">
                          700,000
                        </span>
                      </td>

                      <td className="py-2 px-4 border-b border-b-gray-50">
                        <span className="inline-block p-1 rounded bg-emerald-500/10 text-emerald-500 font-medium text-[12px] leading-none">
                          درحال انتظار
                        </span>
                      </td>
                    </tr>

                    <tr>
                      <td className="py-2 px-4 border-b border-b-gray-50">
                        <div className="flex items-center">
                          <img
                            src="https://placehold.co/32x32"
                            alt=""
                            className="w-8 h-8 rounded object-cover block"
                          />

                          <a
                            href="#"
                            className="text-gray-600 text-sm font-medium hover:text-blue-500 ml-2 truncate"
                          >
                            سفارش کتاب
                          </a>
                        </div>
                      </td>

                      <td className="py-2 px-4 border-b border-b-gray-50">
                        <span className="text-[13px] font-medium text-emerald-500">
                          700,000
                        </span>
                      </td>

                      <td className="py-2 px-4 border-b border-b-gray-50">
                        <span className="inline-block p-1 rounded bg-emerald-500/10 text-emerald-500 font-medium text-[12px] leading-none">
                          درحال انتظار
                        </span>
                      </td>
                    </tr>

                    <tr>
                      <td className="py-2 px-4 border-b border-b-gray-50">
                        <div className="flex items-center">
                          <img
                            src="https://placehold.co/32x32"
                            alt=""
                            className="w-8 h-8 rounded object-cover block"
                          />

                          <a
                            href="#"
                            className="text-gray-600 text-sm font-medium hover:text-blue-500 ml-2 truncate"
                          >
                            سفارش کتاب
                          </a>
                        </div>
                      </td>

                      <td className="py-2 px-4 border-b border-b-gray-50">
                        <span className="text-[13px] font-medium text-emerald-500">
                          700,000
                        </span>
                      </td>

                      <td className="py-2 px-4 border-b border-b-gray-50">
                        <span className="inline-block p-1 rounded bg-emerald-500/10 text-emerald-500 font-medium text-[12px] leading-none">
                          درحال انتظار
                        </span>
                      </td>
                    </tr>

                    <tr>
                      <td className="py-2 px-4 border-b border-b-gray-50">
                        <div className="flex items-center">
                          <img
                            src="https://placehold.co/32x32"
                            alt=""
                            className="w-8 h-8 rounded object-cover block"
                          />

                          <a
                            href="#"
                            className="text-gray-600 text-sm font-medium hover:text-blue-500 ml-2 truncate"
                          >
                            سفارش کتاب
                          </a>
                        </div>
                      </td>

                      <td className="py-2 px-4 border-b border-b-gray-50">
                        <span className="text-[13px] font-medium text-emerald-500">
                          700,000
                        </span>
                      </td>

                      <td className="py-2 px-4 border-b border-b-gray-50">
                        <span className="inline-block p-1 rounded bg-emerald-500/10 text-emerald-500 font-medium text-[12px] leading-none">
                          درحال انتظار
                        </span>
                      </td>
                    </tr>

                    <tr>
                      <td className="py-2 px-4 border-b border-b-gray-50">
                        <div className="flex items-center">
                          <img
                            src="https://placehold.co/32x32"
                            alt=""
                            className="w-8 h-8 rounded object-cover block"
                          />

                          <a
                            href="#"
                            className="text-gray-600 text-sm font-medium hover:text-blue-500 ml-2 truncate"
                          >
                            سفارش کتاب
                          </a>
                        </div>
                      </td>

                      <td className="py-2 px-4 border-b border-b-gray-50">
                        <span className="text-[13px] font-medium text-emerald-500">
                          700,000
                        </span>
                      </td>

                      <td className="py-2 px-4 border-b border-b-gray-50">
                        <span className="inline-block p-1 rounded bg-emerald-500/10 text-emerald-500 font-medium text-[12px] leading-none">
                          درحال انتظار
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
