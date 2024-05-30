import React, { useState, useEffect } from "react";
import { IoMdClose } from "react-icons/io";

export default function Welcome() {
  const [welcome, setWelcome] = useState();

  const welcomeHandle = () => {
    localStorage.setItem("show_welcome", true);
    setWelcome(false);
  };

  useEffect(() => {
    let welcomeData = localStorage.getItem("show_welcome");
    setWelcome(!welcomeData);
  }, []);

  return (
    <>
      {welcome && (
          <div className="container relative text-white text-2xl font-rayblack bg-gradient-to-l from-purple-400 rounded-full flex items-center justify-center py-1.5 my-2">
              <h2>دوست عزیز، خوش آمدید</h2>

            <button className="absolute bg-white w-8 h-8 rounded-full right-1 flex justify-center items-center text-xl">
                <IoMdClose className="text-[#f00]" onClick={()=>setWelcome(false)}></IoMdClose>
            </button>
        </div>
      )}
    </>
  );
}
