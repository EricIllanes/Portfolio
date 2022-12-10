import { Link } from "react-scroll";
import "./navBar.css";

const NavBar = () => {
  return (
    <div>
      <div className="div-navbar">
        <Link to="home" smooth={true} duration={500}>
          <button className="button">Home</button>
        </Link>
        <Link to="aboutme" smooth={true} duration={500}>
          <button className="button">Sobre mí</button>
        </Link>
        <Link to="projects" smooth={true} duration={500}>
          <button className="button">Proyectos</button>
        </Link>
        <Link to="skills" smooth={true} duration={500}>
          <button className="button">Skills</button>
        </Link>
        <Link to="contact" smooth={true} duration={500}>
          <button className="button">Contacto</button>
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
