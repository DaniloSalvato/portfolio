
import HeroBackground from "../HeroBackGround";
import { Link } from "../links/Link";

const Discovery = () => {
  return (
    <section id="home" className=" relative flex flex-col h-screen justify-center items-center px-4 text-center z-0 overflow-hidden">
      <HeroBackground/>
      <p className="text-xs md:text-xl font-medium text-slate-400 mb-3 pointer-events-none">
        Hello world - this is my portfolio
      </p>
      <h1 className="text-3xl md:text-5xl lg:text-[64px] font-semibold text-slate-900 leading-[115%] mb-4 pointer-events-none">
        It's <span className="text-amber-600">Danilo Salvato</span>, <br className="hidden md:block"/>
        but you can call <br className="block md:hidden"/> me
        <span className="text-amber-600"> Dan</span>.
      </h1>
      <p className="text-sm md:text-xl font-normal text-slate-400 mb-[18px] max-w-[580px] pointer-events-none">
        Welcome to the portfolio, I'm a dev with some experience, and I
        created this project for people to get to know me.
      </p>
      <Link href="#footer" color="secondary" size="md" className="max-w-[313px]">
        Call me
      </Link>
    </section>
  );
};

export default Discovery;
