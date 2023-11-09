import Link from "next/link";
import React from "react";

type Props = {};

const Banner = (props: Props) => {
  return (
    <Link
      href={"/"}
      className="flex flex-row w-fit h-full items-center justify-start text-base md:text-banner px-4"
    >
      <div className="relative font-black whitespace-nowrap">ZiZi TV</div>
    </Link>
  );
};

export default Banner;
