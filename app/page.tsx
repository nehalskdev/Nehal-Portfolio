import Header from "@/components/Header";
import ThemeToggle from "@/components/ThemeToggle";
import AboutMe from "@/components/AboutMe";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import VideoCarousel from "@/components/VideoCarousel";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <ThemeToggle />
      <Header />
      <div className="mx-auto w-4/5 px-2.5 pt-10 pb-12">
        <AboutMe />
        <Skills />
        <Projects />
        <Experience />
        <VideoCarousel />
        <Contact />
      </div>
      <Footer />
    </>
  );
}
