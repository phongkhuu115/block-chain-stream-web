import Image, { StaticImageData } from "next/image";
import React from "react";

type Props = {
  src: string | StaticImageData;
  alt: string;
};

const Avatar = (props: Props) => {
  const { src, alt } = props;
  return (
    <div>
      <Image
        className="rounded-full border border-white"
        loading="lazy"
        width={50}
        height={50}
        src={src}
        alt={alt}
      />
    </div>
  );
};

export default Avatar;
