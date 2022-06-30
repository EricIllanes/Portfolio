import css3 from "../../icons/css3.png";
import express from "../../icons/express.png";
import github from "../../icons/github.png";
import html from "../../icons/html.png";
import javascript from "../../icons/javascript.png";
import node from "../../icons/node.png";
import react from "../../icons/react.png";
import redux from "../../icons/redux.png";
import postgresql from "../../icons/postgresql.png";
import sequelize from "../../icons/sequelize.png";
import "./skills.css";

const Skills = () => {
  return (
    <div name="skills" className="div-skills">
      <div>
        <span className="skills-title">Skills</span>
      </div>
      <div className="skills-container">
        <div className="image-text">
          <img className="image-skill" src={html} alt="css3" />
          <span className="text-skill">HTML</span>
        </div>

        <div className="image-text">
          <img className="image-skill" src={css3} alt="css3" />
          <span className="text-skill">CSS</span>
        </div>

        <div className="image-text">
          <img className="image-skill" src={react} alt="css3" />
          <span className="text-skill">React</span>
        </div>

        <div className="image-text">
          <img className="image-skill" src={redux} alt="css3" />
          <span className="text-skill">Redux</span>
        </div>

        <div className="image-text">
          <img className="image-skill" src={javascript} alt="css3" />
          <span className="text-skill">JavaScript</span>
        </div>

        <div className="image-text">
          <img className="image-skill" src={node} alt="css3" />
          <span className="text-skill">Node.js</span>
        </div>

        <div className="image-text">
          <img className="image-skill" src={postgresql} alt="css3" />
          <span className="text-skill">PostgreSQL</span>
        </div>

        <div className="image-text">
          <img className="image-skill" src={sequelize} alt="css3" />
          <span className="text-skill">Sequelize</span>
        </div>

        <div className="image-text">
          <img className="image-skill" src={express} alt="css3" />
          <span className="text-skill">Express</span>
        </div>

        <div className="image-text">
          <img className="image-skill" src={github} alt="css3" />
          <span className="text-skill">GitHub</span>
        </div>
      </div>
    </div>
  );
};

export default Skills;
