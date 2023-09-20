"use client";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
export const dynamic = "force-dynamic";

const SearchBarViandas = () => {
  const [searchValue, setSearchValue] = useState("");
  const searchParams = useSearchParams();
  const handleSearchChange = (e) => {
    setSearchValue(e.target.value);
  };

  const buildQueryString = () => {
    const params = new URLSearchParams(searchParams);
    if (searchValue.trim() === "") {
      params.delete("search");
    } else {
      params.set("search", searchValue);
      params.delete("skip");
    }
    const queryString = params.toString();
    return queryString;
  };

  return (
    <>
      <div className="flex items-center gap-x-0 min-w-[40%] md:min-w-[35%] ">
        <input
          onChange={handleSearchChange}
          type="text"
          placeholder="Hamburguesa, Pasta, etc..."
          className="input input-bordered input-md w-full max-w-xl"
          value={searchValue}
        />
        <Link href={{ search: buildQueryString() }} className="-ml-12">
          <button className=" btn btn-warning text-white ">
            <FaSearch />
          </button>
        </Link>
      </div>
    </>
  );
};

export default SearchBarViandas;
