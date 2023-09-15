import React, { useState } from "react";
import Logo from "../assets/logo.svg";
import { useDispatch } from "react-redux";
import { searchbookThunk } from "../redux/book/thunk/searchBookThunk";

const Header = () => {
  const [searchValue, setSearchValue] = useState("");
  const dispatch = useDispatch();
  const handelChangle = (e) => {
    setSearchValue(e.target.value);
    dispatch(searchbookThunk(e.target.value));
  };
  const handelSubmit = (e) => {
    e.preventDefault();
    dispatch(searchbookThunk(searchValue));
  };
  return (
    <nav className="py-4 2xl:px-6">
      <div className="container flex items-center justify-between">
        <img src={Logo} width="150px" className="object-contain" />

        <ul className="hidden md:flex items-center space-x-6">
          <li className="font-semibold cursor-pointer">Book Store</li>
          <li className="cursor-pointer">Wishlist</li>
          <li className="cursor-pointer">My Collection</li>
        </ul>

        <form className="flex items-center" onSubmit={handelSubmit}>
          <div className="group relative rounded-md bg-white">
            <svg
              width="20"
              height="20"
              fill="currentColor"
              className="absolute left-3 top-1/2 -mt-2.5 text-slate-400 pointer-events-none group-focus-within:text-primary"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
              ></path>
            </svg>
            <input
              type="text"
              placeholder="Filter books..."
              className="search"
              id="lws-searchBook"
              value={searchValue}
              onChange={handelChangle}
            />
          </div>
        </form>
      </div>
    </nav>
  );
};

export default Header;
