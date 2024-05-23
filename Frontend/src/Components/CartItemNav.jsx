import React, { useContext } from "react";

import { FaTrashCan } from "react-icons/fa6";

export default function CartItemNav({
  index,
  image,
  title,
  author,
  turkTitle,
  newPrice,
  CART,
  setCART,
}) {
  return (
    <li className="border-2 border-gray-400 shadow-md py-2 rounded-md pl-4 mb-2">
      <div className="flex items-center">
        <img className="w-[100px] h-[100px]" src={image} alt={title} />

        <div className="flex flex-col gap-1 text-sky-950">
          <h3 className="font-raybold">{title}</h3>
          <p className="text-[13px] font-inder max-w-[220px] whitespace-nowrap overflow-hidden overflow-ellipsis">
            {turkTitle}
          </p>
          <p className="text-[13px] font-raybold">{author}</p>
        </div>
      </div>

      <div className="pr-4">
        <div className="flex items-center justify-between">
          <FaTrashCan
            onClick={() => {
              const _CART = CART.map((i, index2) => {
                return index === index2 ? { ...i, count: 0 } : i;
              });
              setCART(_CART);
            }}
            className="text-[#f00] cursor-pointer mr-5"
          ></FaTrashCan>

          <div className="flex items-center gap-1 text-black">
            <span className="text-[20px] font-raybold">{newPrice}</span>
            <span className="text-sm text-gray-600">تومان</span>
          </div>
        </div>
      </div>
    </li>
  );
}
