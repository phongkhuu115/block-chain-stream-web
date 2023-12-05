import Banner from "@components/header/banner";
import clsx from "clsx";
import React, { ReactNode } from "react";

interface TextComponentProps {
  className?: string;
  children: ReactNode;
}

const TextComponent: React.FC<TextComponentProps> = ({
  className,
  children,
}) => (
  <p className={clsx(`text-base text-white-A700 w-auto`, className)}>
    {children}
  </p>
);

type LinksColumnProps = {
  title: string;
  links: string[];
} & React.HTMLAttributes<HTMLDivElement>;

const LinksColumn: React.FC<LinksColumnProps> = ({ title, links }) => (
  <div className="flex flex-col gap-[50px] items-start justify-start w-auto">
    <TextComponent className="text-2xl md:text-[20px] font-bold sm:text-xl">
      {title}
    </TextComponent>
    <div
      className={`flex flex-col font-quicksand gap-[12px] md:h-auto items-start justify-between w-auto`}
    >
      {links.map((link, index) => (
        <TextComponent className="" key={index}>
          {link}
        </TextComponent>
      ))}
    </div>
  </div>
);

const Footer: React.FC = () => {
  const accountLinks = ["Wishlist", "Cart", "Track Order", "Shipping Details"];
  const usefulLinks = [
    "About Us",
    "Contact",
    "Hot deals",
    "Promotions",
    "New products",
  ];
  const helpCenterLinks = [
    "Payments",
    "Refund",
    "Checkout",
    "Shipping",
    "Q&A",
    "Privacy Policy",
  ];

  return (
    <div className="flex bg-secondary flex-col md:flex-row-reverse  items-center justify-between h-full w-full">
      <div className="flex flex-row  items-center justify-center w-full ">
        <div className="flex flex-row justify-between w-[50vw]  px-[50px] py-[20px] md:px-[50px]">
          <LinksColumn title="Account" links={accountLinks} />
          <LinksColumn title="Useful Links" links={usefulLinks} />
          <LinksColumn title="Help Center" links={helpCenterLinks} />
        </div>
      </div>
      <div className="w-[400px] h-full flex justify-center items-center">
        <Banner fontSize="text-[40px]" />
      </div>
    </div>
  );
};

export default Footer;
