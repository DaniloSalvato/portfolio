import profile from "../../assets/Perfil.jpg";
import { HeadTitle } from "../typography/HeadTitle";

const About = () => {
  const pVariation = "w-full text-base lg:text-xl text-slate-500 mb-4";
  return (
    <section id="about" className="flex flex-col-reverse gap-10 xl:gap-0 xl:flex-row w-full xl:h-screen">
      <article className="flex justify-center xl:justify-end items-center w-full px-8 py-8 xl:w-2/6 h-full bg-amber-600 -z-10">
        <img
          src={profile}
          alt="Danilo-photo"
          className="lg:left-72 lg:top-40 lg:w-[436px] xl:h-[715px] max-w-lg:max-h-[500px] object-cover rounded-lg z-10 xl:translate-x-20"
        />
      </article>

      <article className="flex w-full sm:w-4/5 lg:w-4/6 h-full justify-center items-center px-8 sm:px-12">
        <div className="flex flex-col lg:max-w-[637px]">
          <HeadTitle className="pb-3">About Dan</HeadTitle>
          <h2 className=" text-slate-800 text-3xl md:text-4xl pb-4">
            I'm a developer aiming to advance in the web stack.
          </h2>

          <p className={pVariation}>
            As I said before, my name is Danilo, I'm 24 years old, I live in
            Mogi Mirim, in the interior of São Paulo. I graduated from Fatec
            Arthur de Azevedo in ADS (Systems Analysis and Development).
          </p>

          <p className={pVariation}>
            I'm a developer aiming to advance in the web stack. My focus is on
            creating solutions that not only solve everyday problems but also
            add real value to people's lives.
          </p>

          <p className={pVariation}>
            I'm constantly motivated to learn something new and improve my
            skills, strongly believing that continuous learning is the key to
            success.
          </p>

          <p className={pVariation}>
            Every challenge is an opportunity for growth and evolution.
          </p>
        </div>
      </article>
    </section>
  );
};

export default About;
