import { Input } from "@components/ui/input";
import { SearchIcon } from "lucide-react";

type Props = {};

const InputSearch = (props: Props) => {
  return (
    <div className="flex h-full w-1/2 items-center justify-between relative rounded-[50px]">
      <Input
        className="flex justify-between items-center h-full pl-[30px] pr-[50px] py-0 rounded-[50px] placeholder:font-extrabold"
        placeholder="Search for..."
      />
      <SearchIcon className="absolute right-4 text-white" />
    </div>
  );
};

export default InputSearch;
