import InputSearch from "@components/ui/input-search";
import Actions from "./actions";
import Banner from "./banner";
import NavigatorLinks from "./navigator";

const Header = () => {
  return (
    <header className="flex h-[70px] w-full justify-center items-center p-3">
      <div className="flex w-[1920px] h-full justify-between ">
        <div className="flex  w-1/3  justify-between gap-3 ">
          <Banner />
          <NavigatorLinks />
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
