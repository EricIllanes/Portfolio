import logoAbout from "../../icons/aboutme-logo.png";
import { Icon } from "@iconify/react";
import "./aboutMe.css";

export const AboutMe = () => {
  return (
    <div className="div-aboutme">
      <span className="proyecto-title">Sobre Mí</span>
      <div className="aboutme-spanimg">
        <div className="aboutme-span">
          <span className="span-text">
            Poseo conocimientos en ReactJS, Redux, JavaScript, NodeJS, Express,
            para bases de datos relacionales y no relacionales y GitHub. Aprendo
            con rapidez nuevos conocimientos. He ejercido como profesor de
            matemática en colegios de nivel secundario. Con anhelo de ingresar a
            un equipo productivo y exitoso.
          </span>
          <div className="div-footer">
            <a
              className="github-icon"
              href="https://drive.google.com/file/d/1B0J7q2lRwxgimp7ci5yf7pOtlPSslgZM/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon
                icon="material-symbols:sim-card-download-sharp"
                color="#1f5362"
                width="40"
                height="40"
              />
            </a>
            <a
              className="github-icon"
              href="https://github.com/EricIllanes"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon
                icon="akar-icons:github-fill"
                color="#1f5362"
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
                color="#1f5362"
                width="40"
                height="40"
              />
            </a>
          </div>
        </div>
        <div className="aboutme-img">
          <img className="img-aboutme" src={logoAbout} alt="logo-eric-illanes" />
        </div>
      </div>
    </div>
  );
};
