import "./projects.css";
import sportmarket from "../../icons/sportmarket.jpg";
import pokemonapp from "../../icons/pokemonapp.jpg";
import climapp from "../../icons/climapp.jpg";
import portfolio from "../../icons/portfolio.jpg";

const Projects = () => {
  const projects = [
    {
      name: "Pokémon App",
      description:
        "Pokémon App is a page where the user can search, order and filter for different types of Pokémon, see their details and create a new Pokémon that is saved in the database.",
      image: `${pokemonapp}`,
      deployed: "https://proyecto-pokemon-xi.vercel.app/",
      github: "https://github.com/EricIllanes/Proyecto-Pokemon",
    },
    {
      name: "E-commerce SportsMarket",
      description:
        "SportMarket is an e-commerse built from scratch using React, Redux, Node.js, Express and Sequelize. It has authentication with Google, emails services with Nodemailer and payments methods with Stripe.",
      image: `${sportmarket}`,
      deployed: "https://sports-market.vercel.app/",
      github: "https://github.com/e-commercePF?tab=repositories",
    },
    {
      name: "Clima App",
      description:
        "A simple app that displays the current weather of a city, found through a search bar.",
      image: `${climapp}`,
      deployed: "",
      github: "https://github.com/EricIllanes/appClima",
    },
    {
      name: "Portfolio",
      description:
        "Personal portfolio made in order to show a little about me, my projects and if you need it, you can contact me.Technologies React, JavaScript.",
      image: `${portfolio}`,
      deployed: "https://portfolio-ericillanes.vercel.app/",
      github: "https://github.com/EricIllanes/Portfolio",
    },
  ];
  return (
    <div className="div-projects">
      <span className="proyecto-title">Projects</span>
      <div className="projects-container">
        {projects.map((project, index) => {
          return (
            <div className="project-card" key={index}>
              <div className="project-card-front">
                <span className="name-project">{project.name}</span>
                <img
                  className="image-project"
                  src={project.image}
                  alt={project.name}
                />
              </div>
              <div className="project-card-back">
                <span className="name-project">{project.name}</span>
                <span className="description-project">
                  {project.description}
                </span>
                <span className="div-buttons">
                  <button
                    className="link-project"
                    onClick={() => {
                      window.open(`${project.deployed}`, "_blank");
                    }}
                  >
                    Deploy{" "}
                  </button>
                  <button
                    className="link-project"
                    onClick={() => {
                      window.open(`${project.github}`, "_blank");
                    }}
                  >
                    Code
                  </button>
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
