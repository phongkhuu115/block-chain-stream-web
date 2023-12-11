import Link from "next/link";
import React from "react";

type Props = {
  fontSize?: string;
};

const Banner = (props: Props) => {
  const { fontSize } = props;
  return (
    <Link
      href={"/"}
      className="flex flex-row w-fit h-fit items-center justify-start text-base md:text-banner px-4"
    >
      <div className={`relative font-black whitespace-nowrap ${fontSize}`}>
        ZiZi TV
      </div>
    </Link>
  );
};

export default Banner;
