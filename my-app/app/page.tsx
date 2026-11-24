import Hero from "./components/Hero";
import Aboutme from "./components/Aboutme";
import Projects from "./components/Projects";
import WorkWithMe from "./components/WorkWithMe";


export default function Home() {
  return (
    <div>
      <main>
        <Hero />
        <Aboutme />
        <Projects />
        <WorkWithMe />
      </main>
    </div>
  );
}
