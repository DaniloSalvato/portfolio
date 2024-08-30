import About from "./About";
import Discovery from "./Discovery";
import Experience from "./Experience";
import More from "./More";
import Projects from "./Projects";

const Main = () => {
  return (
    <>
      <main className="w-full">
        <Discovery />
        <About />
        <More />
        <Experience />
        <Projects />
      </main>
    </>
  );
};

export default Main;
