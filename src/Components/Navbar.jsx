import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-slate-800 text-white">
      <div className="mycontainer flex justify-between items-center px-4 py-5 h-14">

      <div className="logo font-bold text-2xl">
        <span className="text-green-500"> &lt;</span>
        PASS
        <span className="text-green-500"> MAN/&gt;</span>
        </div>
      <button className="text-white bg-green-700 my-5 rounded-full flex justify-between items-center ring-1 ring-white">
        <img className="invert p-1 w-10" src="icons/github.svg" alt="github logo" />
        <span className="font-bold px-2">GitHub</span>
      </button>
      </div>
    </nav>
  );
};

export default Navbar;
