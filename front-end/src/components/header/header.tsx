import InputSearch from "@components/ui/input-search";
import Actions from "./actions";
import Banner from "./banner";
import NavigatorLinks from "./navigator";

const Header = () => {
  return (
    <div
      id="header"
      className="bg-secondary flex flex-row items-center justify-between h-[50px] "
    >
      <div className="flex flex-row h-full">
        <Banner />
        <NavigatorLinks />
      </div>

      <InputSearch placeholder="eg. Domixo" />
      <Actions />
    </div>
  );
};

export default Header;
