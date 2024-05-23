import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../Context/CartContext";

import { FaTrashCan } from "react-icons/fa6";

export default function CartItem({
  id,
  image,
  title,
  turkTitle,
  author,
  newPrice,
  count,
  index,
  CART,
  setCART,
}) {
  const { cart, setCart, addToCart } = useContext(CartContext);

  return (
    <li className="border-2 border-gray-400 bg-gray-100 shadow-md py-2 rounded-md pl-4 mb-2">
      <div className="flex items-center justify-between max-lg:flex-col">
        <div className="flex items-center">
          <img className="w-[150px] h-[150px]" src={image} alt={title} />

          <div className="w-[110px] flex flex-col gap-1 text-sky-950">
            <h3 className="font-raybold text-lg max-sm:text-sm">{title}</h3>
            <p className="text-[13px] font-inder max-w-[150px] xs:max-w-[180px] md:max-w-[220px] whitespace-nowrap overflow-hidden overflow-ellipsis">
              {turkTitle}
            </p>
            <p className="text-[13px] font-raybold">{author}</p>
          </div>
        </div>

        <div className="max-lg:mb-4 flex items-center border-[1px] border-sky-900 child:text-xl child:py-1.5 child:px-4 rounded-md">
          <button
            onClick={() => {
              const _CART = CART.map((i, index2) => {
                return index === index2 ? { ...i, count: i.count + 1 } : i;
              });
              setCART(_CART);
            }}
            className="bg-slate-100 rounded-r-md border-l-[1px] border-l-sky-950"
          >
            +
          </button>

          <span className="bg-slate-50 w-[40px] flex items-center justify-center">
            {count}
          </span>

          <button
            onClick={() => {
              const _CART = CART.map((i, index2) => {
                return index === index2
                  ? { ...i, count: i.count > 0 ? i.count - 1 : 0 }
                  : i;
              });
              setCART(_CART);
            }}
            className="bg-slate-100 rounded-l-md border-r-[1px] border-r-sky-950"
          >
            -
          </button>
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
            className="text-[#ff0000] cursor-pointer mr-5"
          ></FaTrashCan>

          <div className="flex items-center gap-1 text-black">
            <span className="text-[22px] font-raybold">{newPrice}</span>
            <span className="text-sm text-gray-600">تومان</span>
          </div>
        </div>
      </div>
    </li>
  );
}
