import { useReducer } from "react";
import { Trail } from "./Trail";
import { IoIosArrowDown } from "react-icons/io";
import { HeadTitle } from "../typography/HeadTitle";

const trailsFront = [
  "HTML",
  "CSS",
  "TypeScript",
  "JavaScript",
  "React",
  "Tailwind",
  "Redux",
];

const trailsBack = [
  "NodeJS",
  "Express",
  "C#",
  ".Net",
  "Java",
  "SpringBoot",
  "Ruby",
  "Python",
  "SQL Server",
  "MySQL",
  "Mongo",
];

const trailDevOps = ["AWS", "Git", "GitHub", "SCRUM"];

type TrailState = {
  isOpenTrailFront: boolean;
  isOpenTrailBack: boolean;
  isOpenTrailDevOps: boolean;
};

type Action = {
  type: "IS_OPEN_TRAIL_FRONT" | "IS_OPEN_TRAIL_BACK" | "IS_OPEN_TRAIL_DEVOPS";
  value: boolean;
};

function reducer(state: TrailState, action: Action) {
  switch (action.type) {
    case "IS_OPEN_TRAIL_FRONT":
      return {
        ...state,
        isOpenTrailFront: action.value,
        isOpenTrailBack: false,
        isOpenTrailDevOps: false,
      };
    case "IS_OPEN_TRAIL_BACK":
      return {
        ...state,
        isOpenTrailFront: false,
        isOpenTrailBack: action.value,
        isOpenTrailDevOps: false,
      };
    case "IS_OPEN_TRAIL_DEVOPS":
      return {
        ...state,
        isOpenTrailFront: false,
        isOpenTrailBack: false,
        isOpenTrailDevOps: action.value,
      };
    default:
      return state;
  }
}

const initialState: TrailState = {
  isOpenTrailFront: false,
  isOpenTrailBack: false,
  isOpenTrailDevOps: false,
};

const More = () => {
  const [state, Dispatch] = useReducer(reducer, initialState);

  const handleIsOpenTrailFront = () => {
    Dispatch({
      type: "IS_OPEN_TRAIL_FRONT",
      value: !state.isOpenTrailFront,
    });
  };

  const handleIsOpenTrailBack = () => {
    Dispatch({
      type: "IS_OPEN_TRAIL_BACK",
      value: !state.isOpenTrailBack,
    });
  };

  const handleIsOpenTrailDevOps = () => {
    Dispatch({
      type: "IS_OPEN_TRAIL_DEVOPS",
      value: !state.isOpenTrailDevOps,
    });
  };

  const pVariation =
    "flex flex-col w-full text-base lg:text-xl font-regular text-slate-500 pb-3";
  return (
    <section id="more" className="flex flex-col xl:flex-row w-full max-w-[1440px] mx-auto xl:h-screen px-8 md:px-12 xl:px-16 gap-10 xl:gap-0 mt-20 xl:mt-0 justify-between">
      <article className="flex flex-col w-full xl:max-w-[448px] justify-center items-center">
        <HeadTitle className="pb-[10px] w-full text-start">More about Dan</HeadTitle>
        <p className={pVariation}>
          My journey as a developer began with an internship in back-end
          development, where I worked with Java Spring Boot.
        </p>
        <p className={pVariation}>
          This initial experience was crucial for my technical growth, providing
          a solid understanding of back-end development principles and the
          creation of scalable systems.
        </p>
        <p className={pVariation}>
          After this internship, I worked as a back-end developer for an
          e-commerce company, using C# and .NET. In this role, I was responsible
          for ...
        </p>

        <a href="#footer" className="flex flex-col w-full text-amber-500 text-base font-medium hover:text-amber-600">
          Call me
        </a>
      </article>
      <article className="flex flex-col h-full justify-center items-center gap-y-5 w-full xl:max-w-[690px]">

        <Trail.Root isOpen={state.isOpenTrailFront} onClick={handleIsOpenTrailFront}>
          <Trail.Header>
            <Trail.Title isOpen={state.isOpenTrailFront}>Front-end</Trail.Title>
            <Trail.Action >
              <IoIosArrowDown />
            </Trail.Action>
          </Trail.Header>

          <Trail.Content isOpen={state.isOpenTrailFront}>
            <p className="text-slate-400 text-base font-regular pb-6 mt-4">
              I aim to create solutions with simple code to help my clients
              achieve their goals and make their projects more flexible.
            </p>

            <ul className="flex flex-wrap w-full justify-start gap-x-4 gap-y-3  ">
              {trailsFront.map((trail, index) => (
                <Trail.Budget key={index}>{trail}</Trail.Budget>
              ))}
            </ul>
          </Trail.Content>
        </Trail.Root>

        <Trail.Root isOpen={state.isOpenTrailBack} onClick={handleIsOpenTrailBack}>
          <Trail.Header>
            <Trail.Title isOpen={state.isOpenTrailBack}>Back-end</Trail.Title>
            <Trail.Action >
              <IoIosArrowDown />
            </Trail.Action>
          </Trail.Header>

          <Trail.Content isOpen={state.isOpenTrailBack}>
            <p className="text-slate-400 text-base font-regular pb-6 mt-4">
              I build a secure and efficient system so that my clients can
              achieve strong performance when starting a project.
            </p>

            <ul className="flex flex-wrap w-full justify-start gap-x-4 gap-y-3  ">
              {trailsBack.map((trail, index) => (
                <Trail.Budget key={index}>{trail}</Trail.Budget>
              ))}
            </ul>
          </Trail.Content>
        </Trail.Root>

        <Trail.Root isOpen={state.isOpenTrailDevOps} onClick={handleIsOpenTrailDevOps}>
          <Trail.Header>
            <Trail.Title isOpen={state.isOpenTrailDevOps}>DevOps</Trail.Title>
            <Trail.Action >
              <IoIosArrowDown />
            </Trail.Action>
          </Trail.Header>

          <Trail.Content isOpen={state.isOpenTrailDevOps}>
            <p className="text-slate-400 text-base font-regular pb-6 mt-4">
              I design the architecture to ensure that applications are
              accessible to everyone, providing a seamless user experience
              across various devices and platforms while maintaining high
              performance and security standards.
            </p>

            <ul className="flex flex-wrap w-full justify-start gap-x-4 gap-y-3  ">
              {trailDevOps.map((trail, index) => (
                <Trail.Budget key={index}>{trail}</Trail.Budget>
              ))}
            </ul>
          </Trail.Content>
        </Trail.Root>
      </article>
    </section>
  );
};

export default More;
