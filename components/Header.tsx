import Image from "next/image";
import React from "react";
import mangoLogo from "../public/Logo/Mango-logo.png";
import SearchBar from "./SearchBar";

function Header() {
  return (
    <div className=" sticky top-0 flex p-5 items-start justify-between mx-auto z-20 xl:items-center">
      <div className="flex">
        <Image src={mangoLogo} width={100} height={100} alt="" />
        <SearchBar></SearchBar>
      </div>
      <div className="flex space-x-2 items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
          />
        </svg>
        <button className=" text-white rounded-2xl bg-indigo-600 h-9 w-20">
          Sign Out
        </button>
      </div>
    </div>
  );
}

export default Header;
