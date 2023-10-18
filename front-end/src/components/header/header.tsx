import InputSearch from "@components/ui/input-search";
import Link from "next/link";
import Actions from "./actions";
import Navigator from "./navigator";
import Banner from "./banner";

const Header = () => {
  return (
    <header className="flex h-[70px] w-full justify-center items-center p-3">
      <div className="flex w-[1920px] h-full justify-between ">
        <div className="flex  w-1/3  justify-between ">
          <Banner />
          <Navigator />
        </div>

        <div className="flex w-1/3 h-full items-center gap-[36px] justify-between">
          <InputSearch />
          <Actions />
        </div>
      </div>
    </header>
  );
};

export default Header;
