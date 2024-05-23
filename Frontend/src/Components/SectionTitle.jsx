import React from "react";
import { BiCaretLeft } from "react-icons/bi";
import { FaQuoteLeft } from "react-icons/fa6";

export default function SectionTitle({ title1, title2, btn }) {
  return (
    <div className="shadow-xl bg-slate-50 dark:bg-sky-900 py-5 relative mb-24 ">
      <div className="container sm:py-6 py-0 px-4 absolute -top-[75%] left-[50%] -translate-x-[50%] translate-y-[50%] bg-sky-400 w-full rounded-b-md rounded-t-3xl border-t-[12px] border-t-red-500">
        <div
          className={`flex items-center max-sm:flex-col max-sm:gap-2 max-xs:mt-2 justify-between`}
        >
          <h2 className="relative text-2xl font-raylight flex items-center gap-1 border-b-[1px] border-b-gray-300 text-white">
            <span className="relative font-raybold text-3xl before:absolute before:w-full before:h-full before:rounded-se-full before:left-[50%] before:top-[50%] before:transform before:-translate-x-[50%] before:-translate-y-[50%] before:bg-gradient-to-r before:from-red-500 before:-z-50">
              {title1}
            </span>
            {title2}
            <FaQuoteLeft
              size={16}
              className="absolute -left-4 bottom-5 text-yellow-300 max-xs:hidden"
            ></FaQuoteLeft>
          </h2>

          <a
            className="flex items-center text-[17px] font-ray border-[1.5px] bg-white hover:bg-yellow-300 hover:text-black hover:border-none px-2 max-xs:px-[2px] py-px rounded-sm"
            href="#"
          >
            مشاهده همه
            <BiCaretLeft size={15}></BiCaretLeft>
          </a>
        </div>
      </div>
    </div>
  );
}
