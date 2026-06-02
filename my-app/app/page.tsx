import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import {
  personalInfo,
  skills,
  experience,
  projects,
  education,
  certifications,
} from "@/lib/data";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero
          name={personalInfo.name}
          tagline={personalInfo.tagline}
          quote={personalInfo.quote}
        />
        <About summary={personalInfo.summary} location={personalInfo.location} />
        <Skills skills={skills} />
        <Experience items={experience} />
        <Projects projects={projects} />
        <Education education={education} certifications={certifications} />
        <Contact
          email={personalInfo.email}
          phone={personalInfo.phone}
          linkedin={personalInfo.linkedin}
          github={personalInfo.github}
          location={personalInfo.location}
        />
      </main>
      <Footer />
    </>
  );
}
