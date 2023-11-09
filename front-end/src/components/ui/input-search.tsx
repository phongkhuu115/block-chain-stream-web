"use client";
import { InputProps } from "@components/ui/input";
import { SearchIcon } from "lucide-react";
import { useState } from "react";

import * as React from "react";

import useCurrentWidth from "@lib/hook/use-current-width";
import { cn } from "@lib/utils";

export type SearchProps = React.InputHTMLAttributes<HTMLInputElement>;

const InputSearch = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, placeholder, ...rest }, ref) => {
    const [searchValue, setSearchValue] = useState("");
    const currentWidth = useCurrentWidth();
    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setSearchValue(event.target.value);
    };

    return (
      <div
        className={cn(
          "rounded-[10px] relative border border-beta bg-beta flex flex-row items-center justify-between w-full mx-10 h-[60%] px-5 text-left ring-offset-background focus-within:ring-1 focus-within:ring-ring focus-within:ring-offset-2 ",
          className
        )}
      >
        <input
          {...rest}
          placeholder={currentWidth >= 768 ? placeholder : undefined}
          ref={ref}
          className=" h-full w-full text-navigate md:text-sm focus-visible:ring-0 focus-visible:outline-none bg-transparent"
          value={searchValue}
          onChange={handleSearchChange}
          aria-label="searchValue"
        />
        <SearchIcon className="relative object-cove" strokeWidth={3} />
      </div>
    );
  }
);

InputSearch.displayName = "Search";

export default InputSearch;
