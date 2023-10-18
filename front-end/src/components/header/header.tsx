import { Input } from "@components/ui/input";
import AliceIcon from "common/icons/alice-icon";
import {
  BellDotIcon,
  SearchIcon,
  TvIcon,
  UserIcon,
  Wallet,
  WalletIcon,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const navLinks = [
  {
    name: "Home",
    href: "/home",
  },
  {
    name: "Live",
    href: "/live",
  },
  {
    name: "Favorite",
    href: "/favorite",
  },
];

const actions = [
  {
    name: "Live TV",
    icon: TvIcon,
    href: "/live",
  },
  {
    name: "Notification",
    icon: BellDotIcon,
    href: "/notification",
  },
  {
    name: "Wallet",
    icon: WalletIcon,
    href: "/wallet",
  },
  {
    name: "Alice",
    icon: UserIcon,
    href: "/user",
  },
];

const Header = () => {
  return (
    <header className="flex h-[70px] w-full justify-center items-center p-3">
      <div className="flex w-[1920px] h-full justify-between ">
        <div className="flex  w-1/3  justify-between ">
          <div className="flex  justify-center ">
            <Link
              href={"/"}
              className="flex  w-[150px] flex-col justify-center  text-white text-center text-4xl font-extrabold leading-[normal]"
            >
              ZiZi TV
            </Link>
          </div>

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
        </div>

        <div className="flex w-1/3 h-full items-center gap-[36px] justify-between">
          <div className="flex h-full w-1/2 items-center justify-between relative rounded-[50px]">
            <Input
              className="flex justify-between items-center h-full pl-[30px] pr-[50px] py-0 rounded-[50px] placeholder:font-extrabold"
              placeholder="Search for..."
            />
            <SearchIcon className="absolute right-4 text-white" />
          </div>

          <div className="inline-flex items-center h-full relative">
            {actions.map((action, index) => (
              <div
                key={index}
                className="flex justify-center items-center h-full w-[50px] hover:bg-[#9b5d5d] rounded-[50px]"
              >
                <Link href={action.href}>
                  <div className="flex justify-center items-center h-full w-[50px] rounded-[50px]">
                    <action.icon className="text-white" />
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
