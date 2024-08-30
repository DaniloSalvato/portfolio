import { useEffect, useState } from "react";

const sections = [
  "#home",
  "#about",
  "#experience",
  "#more",
  "#projects",
  "#footer",
];
const options = {
  threshold: [1,0.5,0.2,0.5],
};

type NavbarProps = {
  isOpen: boolean;
  onClick: () => void
};

const Navbar = ({ isOpen, onClick }: NavbarProps) => {
  const [isVisible, setIsVisible] = useState<string>("home");

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) setIsVisible(entry.target.id);
      });
    }, options);

    sections.forEach((section) => {
      observer.observe(document.querySelector(section)!);
    });

    return () => observer.disconnect();
  }, [isVisible]);

  return (
    <nav
      data-isopen={isOpen}
      className="hidden md:block data-[isopen=true]:absolute data-[isopen=true]:flex data-[isopen=true]:justify-center data-[isopen=true]:bottom-0 data-[isopen=true]:left-0 data-[isopen=true]:w-full data-[isopen=true]:translate-y-full bg-white data-[isopen=true]:shadow-md data-[isopen=true]:py-5 md:data-[isopen=true]:py-0 md:data-[isopen=true]:static md:data-[isopen=true]:translate-y-0 md:data-[isopen=true]:shadow-none"
    >
      <ul
        data-isopen={isOpen}
        className="flex text-slate-400 gap-6 md:gap-3 justify-center items-center data-[isopen=true]:flex-col sm:data-[isopen=true]:flex-row"
      >
        <li
          data-onfocus={isVisible}
          className="px-3 py-1 rounded data-[onfocus=home]:text-amber-600 data-[onfocus=home]:bg-amber-50 hover:text-amber-600"
        >
          <a onClick={onClick} href="#home">Home</a>
        </li>
        <li
          data-onfocus={isVisible}
          className="px-3 py-1 rounded data-[onfocus=about]:text-amber-600 data-[onfocus=about]:bg-amber-50 data-[onfocus=experience]:text-amber-600 data-[onfocus=experience]:bg-amber-50 data-[onfocus=more]:text-amber-600 data-[onfocus=more]:bg-amber-50 hover:text-amber-600"
        >
          <a onClick={onClick} href="#about">About</a>
        </li>
        <li
          data-onfocus={isVisible}
          className="px-3 py-1 rounded data-[onfocus=projects]:text-amber-600 data-[onfocus=projects]:bg-amber-50 hover:text-amber-600"
        >
          <a onClick={onClick} href="#projects">Works</a>
        </li>
        <li
          data-onfocus={isVisible}
          className="px-3 py-1 rounded data-[onfocus=footer]:text-amber-600 data-[onfocus=footer]:bg-amber-50  hover:text-amber-600"
        >
          <a onClick={onClick} href="#footer">Contacts</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
