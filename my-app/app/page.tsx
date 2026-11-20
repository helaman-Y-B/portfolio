import Image from "next/image";
import Projects from "./components/Projects";

export default function Home() {
  return (
    <div>
      <main>
        <h1>Helamã Y. Barbour</h1>
        <p>A BYU Student</p>
        <picture>
          <source media="(prefers-color-scheme: dark)" srcSet="/helama-size.webp" />
          <img src="/helama-size.webp" alt="Profile Image" width={200} height={200} />
        </picture>
        <Projects />
      </main>
    </div>
  );
}
