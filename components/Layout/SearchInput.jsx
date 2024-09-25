import React, {useState} from "react";
import Link from 'next/link'

const SearchInput = () => {
  const [isFocused, setIsFocused] = useState(false);
  const [inputValue, setInputValue] = useState("");

  return (
    <div className="flex items-center mt-20  h-[] py-4">
      <div className="relative h-[56px] bg-white ">
        <div
          className={` h-full rounded-l-lg border-gray-400 border  lg:w-[230px] xl:w-[350px] custom-input ${
            isFocused || inputValue ? "focused" : ""
          }`}
        >
          {!inputValue && !isFocused && (
            <div className="placeholder">
              <img
                src="/images/searchicon.png"
                alt="Search Icon"
                className="icon"
              />
              <span className="text font-[14px] ">Search</span>
            </div>
          )}
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            className="input-element "
          />
        </div>
      </div>
      <Link href={`/search/${inputValue}`}>
        <button className="bg-searchheader text-white h rounded-r-lg font-semibold h-[56px] text-[px] px-7 text-[16px]">
          Search
        </button>
      </Link>
    </div>
  );
};

export default SearchInput;
