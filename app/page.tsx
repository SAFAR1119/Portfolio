import Navbar from "../components/layout/Navbar";
import Hero from "../components/home/Hero";
import About from "../components/home/About";
import Skills from "../components/home/Skills";
import Projects from "../components/home/Projects";
import Experience from "../components/home/Experience";
import GithubStats from "../components/home/GithubStats";
import Contact from "../components/home/Contact";
import Footer from "../components/layout/Footer";
import ScrollProgress from "../components/layout/ScrollProgress";

export default function Home() {
  return (
    <>
      <ScrollProgress /> 
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <GithubStats />
      <Contact />
      <Footer />
    </>
  );
}