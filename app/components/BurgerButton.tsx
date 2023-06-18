"use client";
import { useState } from "react";
import { BsBlockquoteRight, BsX } from "react-icons/bs";
import DarkModeButton from "./DarkModeButton";

const BurgerButton = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      {open ? (
        <BsX
          onClick={() => setOpen(false)}
          className={"w-12 h-12 cursor-pointer"}
        />
      ) : (
        <BsBlockquoteRight
          onClick={() => setOpen(true)}
          className={"w-10 h-10 cursor-pointer "}
        />
      )}
      <div>
        {open && (
          <div className="absolute dark:text-white dark:bg-zinc-500 text-zinc-900 bg-slate-100 top-20 left-0 right-0 h-min z-50 shadow-lg">
            <div className="flex-col items-center justify-center h-full text-lg text-center py-2 ">
              <span className="block cursor-pointer hover:font-semibold hover:scale-110">
                Github
              </span>
              <span className="block cursor-pointer hover:font-semibold hover:scale-110">
                Linkedin
              </span>
              <span className="block cursor-pointer hover:font-semibold hover:scale-110">
                Instagram
              </span>
            </div>
            <div className="w-full h-10 dark:bg-zinc-300 bg-teal-500 text-white flex justify-center items-center">
              <DarkModeButton />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BurgerButton;
