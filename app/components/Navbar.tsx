import Link from "next/link";
import DarkModeButton from "./DarkModeButton";
import {
  BsGithub,
  BsFacebook,
  BsYoutube,
  BsBlockquoteRight,
} from "react-icons/bs";
import BurgerButton from "./BurgerButton";

const Navbar = () => {
  return (
    <div className="bg-white dark:bg-zinc-700 w-full px-6 py-5 duration-500 shadow">
      <div className="md:flex items-center grid grid-cols-2">
        <div className="md:flex text-2xl hidden space-x-5 w-2/12 box-content">
          <Link
            href={"https://github.com/alimprasetyo77?tab=repositories"}
            target={"_blank"}
          >
            <BsGithub className="cursor-pointer opacity-80 hover:scale-105 hover:opacity-100 hover:grayscale-0 transition duration-300 dark:grayscale-0" />
          </Link>
          <BsFacebook className="cursor-pointer opacity-80 hover:scale-105 hover:opacity-100 hover:grayscale-0 transition duration-300 dark:grayscale-0" />
          <BsYoutube className="cursor-pointer opacity-80 hover:scale-105 hover:opacity-100 hover:grayscale-0 transition duration-300 dark:grayscale-0" />
        </div>

        <div className="md:flex-grow flex justify-center flex-none place-self-start">
          <Link href="/">
            <span className="text-teal-600 dark:text-white font-semibold self-center text-4xl tracking-tighter underline font-karla">
              News App
            </span>
          </Link>
        </div>

        <div className="w-2/12 md:flex hidden justify-end">
          <DarkModeButton />
        </div>
        <div className="md:hidden place-self-end">
          <BurgerButton />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
