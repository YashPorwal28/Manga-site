import React, { useState } from "react";
import { SlLogin } from "react-icons/sl";
import { AiOutlineSearch } from "react-icons/ai";
const Navbar = () => {
  const [showSearch, setShowSearch] = useState(false);
  const toggleSearch = () => {
    setShowSearch(!showSearch);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <nav className="p-3 h-28 flex justify-center decoration-white bg-gray-800">
      <div className="flex justify-between w-3/5 	">
        <div className="flex  w-1/3 justify-between">
          <img className="bg-white rounded-full " src="https://brandslogo.net/wp-content/uploads/2012/04/yin-yang-vector-logo.png" alt="yin yang" />
          <div className=" mx-4 flex justify-between w-3/4 items-center text-white ">
            <label >Series</label>
            <label >Daily</label>
            <label >Bookmarks</label>
          </div>
        </div>
        <div className="flex items-center  justify-between ">
          <div className="flex gap-3 items-center  rounded-lg p-3 ">
            {showSearch ? (
              <form action="" onClick={handleSearchSubmit}>
                <button type="submit" onClick={toggleSearch}>
                    <AiOutlineSearch className="text-white"/>
                </button>
                
                <input
                  className=" mx-3 p-1 rounded-lg   "
                  type="text"
                  name=""
                  id=""
                  placeholder="Search"
                />

              </form>
            ) : (
                
              <AiOutlineSearch className="text-white"onClick={toggleSearch} />
            )}
          </div>
          <button>
            <SlLogin className="text-white" />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
