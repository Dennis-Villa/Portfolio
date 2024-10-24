
import { Container, Row, Col } from "react-bootstrap";
import { DiReact, DiNodejs, DiMongodb, DiSpark } from "react-icons/di";
import { 
  SiExpress, SiSwagger, SiCplusplus, 
  SiQt, SiPython, SiPandas, 
  SiScikitlearn, SiSqlite
} from "react-icons/si";

import ProjectCard from "./ProjectCards";
import { hashApi, cartwish, calendar, hotel, attrition, agriculture } from "../../Assets/Projects";
import "./Projects.css";

function Projects() {

  const proyects = [
    {
      imgPath: hashApi,
      title: "Hash Encryption API ",
      description: "My current open source project following the OpenAPI standard. Its goal is to centralize in a single API the most common queries related to hashes and encryption that I have come across, such as: detect, encrypt, decrypt and give information about encryption algorithms and other utilities.",
      ghLink: "https://github.com/Dennis-Villa/Hash_Encryption_API",
      demoLink: "https://hash-encryption-api.onrender.com/",
      tecnologies: [ 
        { name: "NodeJs", icon: DiNodejs, },
        { name: "Express", icon: SiExpress, },
        { name: "Swagger", icon: SiSwagger, },
      ],
    },
    {
      imgPath: cartwish,
      title: "CartWish E-Commerce",
      description: "This project showcases a functional e-commerce page featuring a shopping cart system, user authentication, and login capabilities. It includes search filters that allow users to browse products by category, price, and rating. The project is designed to be scalable and serves as a solid base for future development.",
      ghLink: "https://github.com/Dennis-Villa/cartwish-backend",
      demoLink: "https://cartwish9908.netlify.app/",
      tecnologies: [ 
        { name: "React", icon: DiReact, },
        { name: "NodeJs", icon: DiNodejs, },
        { name: "Mongodb", icon: DiMongodb, },
      ],
    },
    {
      imgPath: calendar,
      title: "Collaborative Calendar",
      description: "This project is a shared calendar platform that allows users to jointly manage and view events. It includes user login and authentication to ensure secure access, with permissions that prevent users from editing events they did not create. The platform facilitates smooth collaboration between users.",
      ghLink: "https://github.com/Dennis-Villa/calendar-app-backend",
      demoLink: "https://calendar-app-rob6.onrender.com/",
      tecnologies: [ 
        { name: "React", icon: DiReact, },
        { name: "NodeJs", icon: DiNodejs, },
        { name: "Mongodb", icon: DiMongodb, },
      ],
    },
    {
      imgPath: hotel,
      title: "Light Hotel Manager",
      description: "A lightweight application for managing reservations, rooms, and customer data in hotels. It is optimized to run on devices with low processing power and includes features such as local storage, tracking reservations by date and daily reports for expected check-ins and check-outs. Ideal for small-scale hotel operations.",
      ghLink: "https://github.com/Dennis-Villa/Gestor_Hotelero",
      tecnologies: [ 
        { name: "Cplusplus", icon: SiCplusplus, },
        { name: "Qt", icon: SiQt, },
        { name: "Sqlite", icon: SiSqlite, },
      ],
    },
    {
      imgPath: agriculture,
      title: "Smart Irrigation System",
      description: "This project uses a Machine Learning-based AI model to optimize water consumption in protected crop houses. Although it is a private project, the research findings have been published. Its objective is to improve water efficiency in irrigation through intelligent predictions of agricultural variables.",
      articleLink: "https://dialnet.unirioja.es/servlet/articulo?codigo=9513939",
      tecnologies: [ 
        { name: "Python", icon: SiPython, },
        { name: "Pandas", icon: SiPandas, },
        { name: "Spark ", icon: DiSpark , },
      ],
    },
    {
      imgPath: attrition,
      title: "Attrition Prediction Model",
      description: "This project is a Machine Learning-based model designed to predict personnel attrition. It generates detailed reports on the influence of each variable in the model and identifies the most likely reasons for employee departures based on the data. Ideal for understanding and addressing workforce turnover.",
      ghLink: "https://github.com/Dennis-Villa/Attrition_Prediction",
      tecnologies: [ 
        { name: "Python", icon: SiPython, },
        { name: "Pandas", icon: SiPandas, },
        { name: "Scikitlearn ", icon: SiScikitlearn , },
      ],
    },
  ];

  return (
    <Container id="projects" className="project-section">
      <Container>
        <h1 className="main-header">
          My Recent <strong className="important-text">Projects </strong>
        </h1>
        <Row className="project-row" >
          
          {
            proyects.map( proyect => {

              return (
                <Col md={4} className="project-card" key={ proyect.title }>
                  <ProjectCard
                    {...proyect}
                  />
                </Col>
              )
            })
          }
          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
