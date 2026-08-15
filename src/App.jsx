import Contact from "./components/Contact";
import Experiences from "./components/Experiences";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Technologies from "./components/Technologies";
import ScrollMotion from "./components/ScrollMotion";
import Intro from "./components/Intro";
import Manifesto from "./components/Manifesto";

const App = () => {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#080808] text-stone-300">
      <Intro />
      <div className="site-background pointer-events-none fixed inset-0 -z-20" />
      <div className="spotlight pointer-events-none fixed inset-x-0 top-0 -z-10 h-[720px]" />
      <div className="noise pointer-events-none fixed inset-0 -z-10" />
      <ScrollMotion />
      <div className="page-shell">
        <Navbar />
        <Hero />
        <Manifesto />
        <Technologies />
        <Projects />
        <Experiences />
        <Contact />
      </div>
    </main>
  );
};

export default App;
