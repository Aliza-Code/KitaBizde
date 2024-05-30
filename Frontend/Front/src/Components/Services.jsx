import React from "react";
import { LiaShippingFastSolid } from "react-icons/lia";
import { MdOutlineHealthAndSafety, MdCreditScore } from "react-icons/md";
import { BsSignpost } from "react-icons/bs";

export default function Services() {
  return (
    <div className="mt-4 mb-12 flex items-center justify-between flex-wrap pb-1 max-md:text-sm max-xs:text-[14px] child:flex child:flex-col child:gap-2 child:items-center">
      <div>
        <LiaShippingFastSolid
          className="text-gray-700 dark:text-gray-300"
          size={28}
        ></LiaShippingFastSolid>
        <div class="inline-flex items-center justify-center p-0.5 mb-2 font-raybold overflow-hidden text-gray-900 rounded-lg dark:text-white bg-gradient-to-br from-sky-400 to-purple-400">
          <span class="transition-all px-4 py-1 ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
            تحویل سریع
          </span>
        </div>
      </div>

      <div>
        <MdOutlineHealthAndSafety
          className="text-gray-700 dark:text-gray-300"
          size={28}
        ></MdOutlineHealthAndSafety>
        <div class="inline-flex items-center justify-center p-0.5 mb-2 font-raybold overflow-hidden text-gray-900 rounded-lg dark:text-white bg-gradient-to-br from-sky-400 to-purple-400">
          <span class="transition-all px-4 py-1 ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
            سلامت فیزیکی
          </span>
        </div>
      </div>

      <div>
        <MdCreditScore
          className="text-gray-700 dark:text-gray-300"
          size={28}
        ></MdCreditScore>
        <div class="inline-flex items-center justify-center p-0.5 mb-2 font-raybold overflow-hidden text-gray-900 rounded-lg dark:text-white bg-gradient-to-br from-sky-400 to-purple-400">
          <span class="transition-all px-4 py-1 ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
            پرداخت آنلاین
          </span>
        </div>
      </div>

      <div>
        <BsSignpost
          className="text-gray-700 dark:text-gray-300"
          size={28}
        ></BsSignpost>
        <div class="inline-flex items-center justify-center p-0.5 mb-2 font-raybold overflow-hidden text-gray-900 rounded-lg dark:text-white bg-gradient-to-br from-sky-400 to-purple-400">
          <span class="transition-all px-4 py-1 ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
            ارسال رایگان
          </span>
        </div>
      </div>
    </div>
  );
}
