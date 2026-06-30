import Navbar from "../components/layout/Navbar";
import Hero from "../components/home/Hero";
import About from "../components/home/About";
import Skills from "../components/home/Skills";
import Experience from "../components/home/Experience";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
    </>
  );
}