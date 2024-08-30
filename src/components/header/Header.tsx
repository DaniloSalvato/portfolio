import { useState } from "react";
import { Link } from "../links/Link";
import Logo from "./Logo";
import Navbar from "./Navbar";

import { FaArrowRight } from "react-icons/fa";

const Header = () => {
  const [toggleIsOpen, setToggleIsOpen] = useState(false);
  
  const handleToggleOpen = () => {
    setToggleIsOpen(!toggleIsOpen);
  };

  const handleToggleClose = () => {
    setToggleIsOpen(false);
  }

  return (
    <header className="fixed flex w-full px-8 md:px-12 lg:px-16 justify-between items-center py-4 bg-white border-b border-slate-200 z-50">
      <Logo />
      <Navbar isOpen={toggleIsOpen} onClick={handleToggleClose}/>
      <Link href="#footer" className="hidden md:flex md:flex-row max-w-[125px]" color="primary" size="sm">
        Let's Talk <FaArrowRight className="pl-1" />
      </Link>
      <button
        onClick={handleToggleOpen}
        className="relative flex flex-col w-8 gap-1.5 md:hidden"
      >
        <span
          data-isopen={toggleIsOpen}
          className="block w-full h-0.5 bg-slate-600 data-[isopen=true]:-rotate-[45deg] data-[isopen=true]:translate-y-[4.5px] transition-all"
        ></span>

        <span
          data-isopen={toggleIsOpen}
          className="block w-full h-0.5 bg-slate-600 data-[isopen=true]:hidden"
        ></span>

        <span
          data-isopen={toggleIsOpen}
          className="block w-full h-0.5 bg-slate-600 data-[isopen=true]:rotate-[45deg] data-[isopen=true]:-translate-y-[3px] transition-all"
        ></span>
      </button>
    </header>
  );
};

export default Header;
