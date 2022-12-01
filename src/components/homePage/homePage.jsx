import imagen from "../../icons/image.jpg";
import { Icon } from "@iconify/react";
import "./homePage.css";
import Projects from "../projects/projects";
import Skills from "../skills/skills";
import Contact from "../contact/contact";

export default function HomePage() {
  return (
    <div name="home" className="padre-homepage">
          {/* <div className="skewed">
          </div> */}
        
        <div className="name-img">
          <div className="text-home">
            <span className="name-span">Hello there!</span>
            <span className="name-span">I'm Eric Illanes</span>
            <span className="title-span">Full Stack Web Developer</span>
          </div>
          <div className="circular--portrait">
            <img className="image-circular" src={imagen} alt="img-home" />
          </div>
        </div>
      

      <div name="projects" className="div-containers">
        <Projects />
        <div className="curve"></div>
      </div>
      <div name="skills" className="div-containers">
  
        <Skills />
      </div>
      <div name="contact" className="div-containers-contact">
        <Contact />
      </div>

      <div className="div-footer">
        <a
          className="github-icon"
          href="https://github.com/EricIllanes"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon
            icon="akar-icons:github-fill"
            color="black"
            width="40"
            height="40"
          />
        </a>

        <a
          className="github-icon"
          href="https://www.linkedin.com/in/ericillanes/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon
            icon="entypo-social:linkedin-with-circle"
            color="black"
            width="40"
            height="40"
          />
        </a>
      </div>
    </div>
  );
}
