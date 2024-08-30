import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer id="footer" className="bg-slate-950 text-slate-400 mt-[176px] px-6 sm:px-12 lg:px-16">
      <p className="pt-16 lg:pt-32 font-normal text-sm lg:text-xl">
        You can find me, right here ...
      </p>
      <h2 className="text-slate-50 pt-10 font-medium text-lg sm:text-4xl lg:text-5xl">
        Danilo_salvato@hotmail.com
      </h2>
      <div className="flex pt-14 gap-8 pb-[87px]">
        <a className="hover:text-slate-500" href="https://www.instagram.com/dan.miguel02/" target="_blank">Instagram</a>
        <a className="hover:text-slate-500" href="https://www.linkedin.com/in/danilo-salvato/" target="_blank">Linkedin</a>
        <a className="hover:text-slate-500" href="https://github.com/DaniloSalvato" target="_blank">github</a>
      </div>

      <div className="flex flex-col sm:flex-row gap-5 border-t border-slate-800 py-10 justify-between items-center font-normal text-sm">
        <span>All rights reserved</span>
        <span>Powered By Danilo</span>
        <span className="flex gap-7 text-2xl">
          <a className="hover:text-slate-500" href="https://www.instagram.com/dan.miguel02/" target="_blank">
            <FaLinkedinIn />
          </a>
          <a className="hover:text-slate-500" href="https://www.linkedin.com/in/danilo-salvato/" target="_blank">
            <FiGithub />
          </a>
          <a className="hover:text-slate-500" href="https://github.com/DaniloSalvato" target="_blank">
            <FaInstagram />
          </a>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
