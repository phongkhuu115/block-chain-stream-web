import { Link } from "lucide-react";
import React from "react";

type Props = {};

const Banner = (props: Props) => {
  return (
    <div className="flex  justify-center ">
      <Link
        href={"/"}
        className="flex  w-[150px] flex-col justify-center  text-white text-center text-4xl font-extrabold leading-[normal]"
      >
        ZiZi TV
      </Link>
    </div>
  );
};

export default Banner;
