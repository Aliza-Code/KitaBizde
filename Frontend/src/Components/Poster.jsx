import React from "react";

export default function Poster({ img, title1, title2, icon, height }) {
  return (
    <div
      className={`hidden xl:block w-[220px] col-span-1 relative group h-[${height}px]`}
    >
      <img
        className="h-full w-full rounded-xl"
        src={img}
        alt="Popular Background"
      />

      <div className="cursor-pointer absolute top-[50%] -translate-x-[50%] -translate-y-[50%] left-[50%] transition-all duration-500 opacity-0 group-hover:opacity-100 w-full h-0 group-hover:h-full bg-gray-50 flex items-center justify-center rounded-xl">
        <div className="flex flex-col items-center gap-2 font-raybold text-lg">
          <span>{title1}</span>
          <span>{title2}</span>
          {icon}
        </div>
      </div>
    </div>
  );
}
