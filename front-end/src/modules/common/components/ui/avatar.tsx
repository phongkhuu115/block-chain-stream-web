import Image, { StaticImageData } from "next/image";
import React from "react";

type Props = {
  src: StaticImageData;
  alt: string;
} & React.HTMLAttributes<HTML>;

const Avatar: React.FC<Props> = ({ className, src, alt, ...props }: Props) => {
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
