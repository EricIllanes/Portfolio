import imagen from "../../icons/image.jpg";
import "./homePage.css";
import Projects from "../projects/projects";
import Skills from "../skills/skills";
import Contact from "../contact/contact";
import { AboutMe } from "../aboutMe/aboutMe";

export default function HomePage() {
  return (
    <div name="home" className="padre-homepage">
      <div className="name-img">
        <div className="circular--portrait">
          <img className="image-circular" src={imagen} alt="img-home" />
        </div>
        <div className="text-home">
          <span className="name-span">¡Hola!</span>
          <span className="name-span">Soy Eric Illanes</span>
          <span className="title-span">Desarrollador Web Full Stack .</span>
        </div>
      </div>
      <div name="aboutme" className="div-containers">
        <AboutMe />
      </div>

      <div name="projects" className="div-projects">
        <Projects />
      </div>

      <div name="skills" className="div-container-skills">
        <Skills />
      </div>
      <div name="contact" className="div-container-contact">
        <Contact />
      </div>
    </div>
  );
}
