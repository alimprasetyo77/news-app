"use client";

import { categories } from "@/constants";
import SectionLinks from "../section/SectionLinks";
import { usePathname } from "next/navigation";
const NavLinks = () => {
  const pathname = usePathname();
  const isActive = (path: string) => {
    return pathname?.split("/").pop() === path;
  };
  return (
    <div className="flex flex-wrap lg:grid lg:grid-cols-7 max-w-6xl md:text-base text-sm gap-4 pb-10 justify-center mx-auto border-b mt-10">
      {categories.map((category) => (
        <SectionLinks
          key={category}
          category={category}
          isActive={isActive(category)}
        />
      ))}
    </div>
  );
};

export default NavLinks;
