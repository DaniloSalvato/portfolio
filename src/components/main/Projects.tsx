import { HeadTitle } from "../typography/HeadTitle";
import ProjectItem from "./Projects/ProjectItem";

import jsIcon from "../../assets/icons/javascript.svg";
import tsIcon from "../../assets/icons/typescript.svg";
import reactIcon from "../../assets/icons/react.svg";
import tailwindIcon from "../../assets/icons/tailwindcss.svg";
import furniroThumb from "../../assets/projects/furniro-thumb.png";
import plantPeaceThumb from "../../assets/projects/plantPeace-thumb.png";

const projects = [
  {
    area: "Front-End",
    title: "Furniro - a ecommerce",
    description:
      "Furniro is an e-commerce store specializing in furniture, offering a wide variety of products to transform any space. With a focus on design, quality, and convenience.",
    technologies: [jsIcon, tsIcon, reactIcon, tailwindIcon],
    gitHubURL: "https://github.com/DaniloSalvato/Furniro",
    thumbnail: furniroThumb,
    background: "#FFF3E3",
    reverse: false,
  },
  {
    area: "Front-End",
    title: "plantPeace",
    description:
      "We are your one-stop destination for all things green and growing. Our website offers a wide array of stunning plants, ranging from vibrant flowers  to lush indoor foliage, allowing you to create your very own green oasis. ",
    technologies: [jsIcon, tsIcon, reactIcon, tailwindIcon],
    gitHubURL: "https://github.com/DaniloSalvato/desafio-2-semana-8",
    thumbnail: plantPeaceThumb,
    background: "#8a9b6e",
    reverse: true,
  },
];

const Projects = () => {
  return (
    <section id="projects" className="flex flex-col pt-20">
      <HeadTitle className="mx-8 sm:mx-12 lg:mx-16">Projects</HeadTitle>
      <p className="text-slate-800 text-[32px] font-medium max-w-[210px] mb-[72px] mx-8 sm:mx-12 lg:mx-16">
        See some of my projects
      </p>
      <ProjectItem {...projects[0]} />
      <ProjectItem {...projects[1]} />
      <a href="https://github.com/DaniloSalvato" className="text-amber-600 font-medium text-base border w-fit border-slate-200 py-2 px-20 lg:px-[118px] rounded self-center hover:text-white hover:bg-amber-600" target="_blank">
        See more
      </a>
    </section>
  );
};

export default Projects;
