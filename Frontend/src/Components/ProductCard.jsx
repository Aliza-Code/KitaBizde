import React, { useEffect, useRef, useContext } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import { MdAddShoppingCart } from "react-icons/md";

export default function ProductCard({
  id,
  turkTitle,
  title,
  oldPrice,
  newPrice,
  image,
  image2,
}) {

  return (
    <>
      <div className="h-full w-full shadow-lg bg-gray-50">
        <div className="p-1">
          <Link to={`/book/showBook/${id}`}>
            <img
              src={image2 ? image2 : image}
              className="max-w[180px] max-h-[190px] mx-auto cursor-pointer rounded-sm"
              alt={title}
            />
          </Link>
        </div>

        <div className="px-2 text-center">
          <p className="font-ray pb-1 text-[14px] max-w-[230px] mx-auto whitespace-nowrap overflow-hidden overflow-ellipsis border-b-[1px] border-b-gray-300">
            {title}
          </p>
          <p className="font-inder pt-1 text-[14px] max-w-[230px] mx-auto whitespace-nowrap overflow-hidden overflow-ellipsis mb-2">
            {turkTitle}
          </p>

          <div className="inline-flex font-ray py-px flex-col gap-2">
            <p className="flex items-center flex-col gap-1">
              <span className="text-gray-600 font-raylight text-[18px] line-through">
                {oldPrice}
              </span>

              <span className="font-ray text-xs">
                <span className="font-rayblack text-[20px]">{newPrice}</span>{" "}
                تومان
              </span>
            </p>

            {/* Animate sell button */}
            <Link to={`/book/showBook/${id}`}>
              <div className="flex items-center justify-center bg-sky-400 rounded-sm py-1">
                <SpotlightButton />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

// Animate sell button.
const SpotlightButton = () => {
  const btnRef = useRef(null);
  const spanRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { width } = e.target.getBoundingClientRect();
      const offset = e.offsetX;
      const left = `${(offset / width) * 100}%`;

      spanRef.current.animate({ left }, { duration: 250, fill: "forwards" });
    };

    const handleMouseLeave = () => {
      spanRef.current.animate(
        { left: "50%" },
        { duration: 100, fill: "forwards" }
      );
    };

    btnRef.current.addEventListener("mousemove", handleMouseMove);
    btnRef.current.addEventListener("mouseleave", handleMouseLeave);

    // return () => {
    //   btnRef.current.removeEventListener("mousemove", handleMouseMove);
    //   btnRef.current.removeEventListener("mouseleave", handleMouseLeave);
    // };
  }, []);

  return (
    <motion.button
      whileTap={{ scale: 0.8 }}
      ref={btnRef}
      className="relative w-full overflow-hidden rounded-sm bg-sky-400 px-5 lg:px-6 py-2 text-white"
    >
      <span className="pointer-events-none relative z-10 mix-blend-difference flex items-center gap-2">
        خرید کتاب
        <MdAddShoppingCart></MdAddShoppingCart>
      </span>
      <span
        ref={spanRef}
        className="pointer-events-none absolute left-[50%] top-[50%] h-32 w-32 -translate-x-[50%] -translate-y-[50%] rounded-full bg-white"
      />
    </motion.button>
  );
};
