import "./projects.css";
import sportmarket from "../../icons/sportmarket.jpg";
import pokemon from "../../icons/pokemon.jpg";
import climapp from "../../icons/climapp.jpg";
import portfolio from "../../icons/portfolio.jpg";
import formProject from "../../icons/formproject.jpg";
import todoList from "../../icons/todolist.jpg";
import notes from "../../icons/project-notes.jpg"

const Projects = () => {
  const projects = [
    {
      name: "Notes",
      description:
        "Notes permite crear notas, agruparlas por #tags, filtrar y editar notas que te ayudan a mantener ordenado tu día  a día. ReactJS, Redux-toolkit, React-toastify ",
      image: `${notes}`,
      deployed: "https://notes-frontend-ten.vercel.app/",
      
      github: "https://github.com/EricIllanes/notes-frontend",

    },
    {
      name: "To Do List",
      description:
        "Proyecto Lista de Tareas, realizado para aprender conceptos de JWT, Cookies y registro de usuarios. Se utilizó la libreria de beautiful-dnd para el drag and drop de las tareas y estilado con TailwindCSS.",
      image: `${todoList}`,
      deployed: "https://to-do-list-sortable-ericillanes.vercel.app",
      github: "https://github.com/EricIllanes/ToDoList-Sortable",
    },
    {
      name: "Pokémon App",
      description:
        "Pokémon App es una página donde el usuario podrá buscar, ordenar,filtrar y ver los detalles diferentes tipos de Pokémon.",
      image: `${pokemon}`,
      deployed: "https://pokemon-ericillanes.vercel.app",
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
      deployed: "https://form-project-ericillanes.vercel.app",
      github: "https://github.com/EricIllanes/formProject",
    },
    {
      name: "Clima App",
      description:
        "Una aplicación que muestra el clima actual de una ciudad, la cuál, es encontrada a través de una barra de búsqueda.",
      image: `${climapp}`,
      deployed: "https://app-clima-ericillanes.vercel.app",
      github: "https://github.com/EricIllanes/appClima",
    },

  ];
  return (
    <div className="div-projects">
      <span className="proyecto-title">Proyectos</span>
      <div className="projects-container">
        {projects.map((project, index) => {
          return (
            <div className="project-card" key={index}>
            <span className="name-project">{project.name}</span>
                <img
                   className="image-project"
                    src={project.image}
                    alt={project.name}
                  />
 
             <div className="card-body">
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
