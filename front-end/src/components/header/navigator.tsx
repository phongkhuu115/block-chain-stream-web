import { navLinks } from "@lib/constant/nav-links";
import Link from "next/link";import React from "react";

type Props = {};

const NavigatorLinks = (props: Props) => {
  return (
    <div className="flex justify-center items-center ">
      {navLinks.map((link, index) => (
        <Link
          href={link.href}
          key={index}
          className="flex w-[150px]  h-full flex-col justify-center items-center gap-2.5 hover:bg-[#9b5d5d]"
        >
          <div className="flex w-[150px] h-full flex-col justify-center text-white text-center text-2xl font-extrabold leading-[normal]">
            {link.name}
          </div>
        </Link>
      ))}
    </div>
  );
};

export default NavigatorLinks;
