
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
      isBlog: false,
      title: "Hash Encryption API ",
      description: "Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI, and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages.",
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
      isBlog: false,
      title: "CartWish E-Commerce",
      description: "My personal blog page build with Next.js and Tailwind Css which takes the content from makdown files and renders it using Next.js. Supports dark mode and easy to write blogs using markdown.",
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
      isBlog: false,
      title: "Collaborative Calendar",
      description: "Online code and markdown editor build with react.js. Online Editor which supports html, css, and js code with instant view of website. Online markdown editor for building README file which supports GFM, Custom Html tags with toolbar and instant preview.Both the editor supports auto save of work using Local Storage",
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
      isBlog: false,
      title: "Light Hotel Manager",
      description: "Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model.",
      ghLink: "https://github.com/Dennis-Villa/Gestor_Hotelero",
      tecnologies: [ 
        { name: "Cplusplus", icon: SiCplusplus, },
        { name: "Qt", icon: SiQt, },
        { name: "Sqlite", icon: SiSqlite, },
      ],
    },
    {
      imgPath: attrition,
      isBlog: false,
      title: "Attrition Prediction Model",
      description: "Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention.",
      ghLink: "https://github.com/Dennis-Villa/Attrition_Prediction",
      tecnologies: [ 
        { name: "Python", icon: SiPython, },
        { name: "Pandas", icon: SiPandas, },
        { name: "Scikitlearn ", icon: SiScikitlearn , },
      ],
    },
    {
      imgPath: agriculture,
      isBlog: false,
      title: "Smart Irrigation System",
      description: "Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention.",
      articleLink: "https://dialnet.unirioja.es/servlet/articulo?codigo=9513939",
      tecnologies: [ 
        { name: "Python", icon: SiPython, },
        { name: "Pandas", icon: SiPandas, },
        { name: "Spark ", icon: DiSpark , },
      ],
    },
  ];

  return (
    <Container id="projects" className="project-section">
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Projects </strong>
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
