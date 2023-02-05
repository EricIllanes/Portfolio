import "./projects.css";
import sportmarket from "../../icons/sportmarket.jpg";
import pokemonapp from "../../icons/pokemonapp2.jpg";
import climapp from "../../icons/climapp.jpg";
import portfolio from "../../icons/portfolio.jpg";
import formProject from "../../icons/formproject.jpg";
import todoList from "../../icons/todolist.jpg";	

const Projects = () => {
  const projects = [
    {
      name: "To Do List",
      description:
        "Proyecto Lista de Tareas, realizado para aprender conceptos de JWT, Cookies y registro de usuarios. Se utilizó la libreria de beautiful-dnd para el drag and drop de las tareas.",
      image: `${todoList}`,
      deployed: "https://to-do-list-sortable.vercel.app",
      github: "https://github.com/EricIllanes/ToDoList-Sortable",
    },
    {
      name: "Pokémon App",
      description:
        "Pokémon App es una página donde el usuario podrá buscar, ordenar y filtrar diferentes tipos de Pokémon, ver los detalles y/o crear un nuevo Pokémon que será guardado en la base de datos.",
      image: `${pokemonapp}`,
      deployed: "https://proyecto-pokemon-xi.vercel.app/",
      github: "https://github.com/EricIllanes/Proyecto-Pokemon",
    },
    {
      name: "E-commerce SportsMarket",
      description:
        "SportMarket es una e-commerce construida desde cero usando React, Redux, Node.js, Express y Sequelize. Tiene autenticación con Google, servicio de emails con Nodemailer y métodos de pago con Stripe.",
      image: `${sportmarket}`,
      deployed: "https://sports-market.vercel.app/",
      github: "https://github.com/e-commercePF?tab=repositories",
    },
    {
      name: "Proyecto Formulario",
      description:
        "Proyecto de formulario controlado, construido para aprender sobre el framework TailwindCSS, se puede conectar a una base de datos para la creación y/o registro de usuarios.",
      image: `${formProject}`,
      deployed: "https://form-project-rouge.vercel.app",
      github: "https://github.com/EricIllanes/formProject",
    },
    {
      name: "Clima App",
      description:
        "Una aplicación que muestra el clima actual de una ciudad, la cuál, es encontrada a través de una barra de búsqueda.",
      image: `${climapp}`,
      deployed: "https://app-clima-xi.vercel.app/",
      github: "https://github.com/EricIllanes/appClima",
    },
    {
      name: "Portfolio",
      description:
        "Personal Portfolio personal hecho a modo de mostrar sobre mí, mis proyectos y si lo necesitas, poder contactar conmigo. Hecho con ReactJS.",
      image: `${portfolio}`,
      deployed: "https://portfolio-ericillanes.vercel.app/",
      github: "https://github.com/EricIllanes/Portfolio",
    },

  ];
  return (
    <div className="div-projects">
      <span className="proyecto-title">Proyectos</span>
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
