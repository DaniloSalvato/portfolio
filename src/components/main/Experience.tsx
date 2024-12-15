import Card from "./Experiences/Card";

import jsIcon from "../../assets/icons/javascript.svg";
import tsIcon from "../../assets/icons/typescript.svg";
import reactIcon from "../../assets/icons/react.svg";
import tailwindIcon from "../../assets/icons/tailwindcss.svg";
import awsIcon from "../../assets/icons/aws.svg";
import cSharpIcon from "../../assets/icons/csharp.svg";
import dotNetIcon from "../../assets/icons/dotnet.svg";
import sqlServerIcon from "../../assets/icons/microsoftsqlserver.svg";
import javaIcon from "../../assets/icons/java.svg";
import springIcon from "../../assets/icons/spring.svg";
import next from "../../assets/icons/next.svg";
import { HeadTitle } from "../typography/HeadTitle";

const experiences = [
  {
    isNew: true,
    title: "Front-end developer.",
    company: "Compass.uol - Developer",
    since: "September 2024",
    address: "Home office",
    icons: [jsIcon, tsIcon, reactIcon, tailwindIcon, next],
    description:
      "Working with next and other tools to build dynamic interfaces and optimize application performance.",
  },
  {
    isNew: false,
    title: "Internship as a front-end web developer.",
    company: "Compass.uol - Intern",
    since: "March 2024 - August 2024",
    address: "Home office",
    icons: [jsIcon, tsIcon, reactIcon, tailwindIcon, awsIcon],
  },
  {
    isNew: false,
    title: "Back-end Developer for web with e-commerce.",
    company: "StarCorp - Consultant",
    since: "June 2022 - July 2023",
    address: "Home office",
    icons: [cSharpIcon, dotNetIcon, sqlServerIcon],
  },
  {
    isNew: false,
    title: "Internship as a Back-end web developer with Java.",
    company: "Compass.uol - Intern",
    since: "February 2022 - May 2022",
    address: "Home office",
    icons: [javaIcon, springIcon],
  },
];

const Experience = () => {
  return (
    <section
      id="experience"
      className="flex flex-col sm:flex-row lg:h-auto w-full bg-slate-50 px-8 mt-10 pb-10 lg:pb-0"
    >
      <article className="flex flex-col flex-1 justify-center items-center">
        <HeadTitle className="w-full sm:w-4/5 lg:w-3/5 mt-10">
          Experiences
        </HeadTitle>
        <Card {...experiences[0]} />
      </article>
      <article className="flex flex-col flex-1 justify-center items-center">
        <Card {...experiences[1]} />
        <Card {...experiences[2]} />
        <Card {...experiences[3]} />
      </article>
    </section>
  );
};

export default Experience;
