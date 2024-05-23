import React from "react";

export default function Background({ bg, title, btn1, btn2, icon }) {
  return (
    <div className="container group relative cursor-pointer">
      <div
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0 0 0 / 20%), rgba(0 0 0 / 80%)), url(${bg})`,
        }}
        className="h-[400px] bg-center bg-cover bg-no-repeat mb-12 rounded-sm shadow-lg"
      ></div>

      <div className="absolute top-8 right-8 max-w-[300px]">
        <h3 className="text-2xl max-sm:text-lg text-white mb-2 font-raybold">
          {title}
        </h3>

        <a
          className="relative rounded-full hover:rounded-2xl font-raylight text-lg max-xs:border-2 max-xs:border-red-300 flex justify-center hover:shadow-xl items-center py-[3px] px-px bg-[#F7C378]"
          href="#"
        >
          {btn1} <span className="max-xs:hidden">{btn2}</span>
        </a>

        <img
          className="w-9 h-9 absolute -left-3 top-7 transform -rotate-[25deg] max-sm:hidden"
          src={icon}
          alt="Icon"
        />
      </div>
    </div>
  );
}
