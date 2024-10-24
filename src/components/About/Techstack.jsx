
import { Col, Row } from "react-bootstrap";
import {
  DiHtml5,
  DiCss3,
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiSpark,
} from "react-icons/di";
import {
  SiRedux,
  SiBootstrap,
  SiMarkdown,
  SiExpress,
  SiPostgresql,
  SiSqlite,
  SiOpenapiinitiative,
  SiSwagger,
  SiCplusplus,
  SiCsharp,
  SiQt,
  SiPandas,
  SiScikitlearn,
  SiPostman,
  SiBurpsuite,
  SiMetasploit,
} from "react-icons/si";

import "./Stack.css";

function Techstack() {

  const stack = [
    { name: "Html", icon: DiHtml5 },
    { name: "Css", icon: DiCss3 },
    { name: "JavaScript", icon: DiJavascript1 },
    { name: "React", icon: DiReact },
    { name: "Redux", icon: SiRedux },
    { name: "Bootstrap", icon: SiBootstrap },
    { name: "Markdown", icon: SiMarkdown },
    { name: "NodeJs", icon: DiNodejs },
    { name: "Express", icon: SiExpress },
    { name: "Mongodb", icon: DiMongodb },
    { name: "PostgreSQL", icon: SiPostgresql },
    { name: "SQLite", icon: SiSqlite },
    { name: "OpenAPI", icon: SiOpenapiinitiative },
    { name: "Swagger", icon: SiSwagger },
    { name: "C++", icon: SiCplusplus },
    { name: "C#", icon: SiCsharp },
    { name: "Qt", icon: SiQt },
    { name: "Python", icon: DiPython },
    { name: "Spark", icon: DiSpark },
    { name: "Pandas", icon: SiPandas },
    { name: "Scikit-Learn", icon: SiScikitlearn },
    { name: "Postman", icon: SiPostman },
    { name: "BurpSuite", icon: SiBurpsuite },
    { name: "Metasploit", icon: SiMetasploit },
  ];

  return (

    <Row className="stack-row"> 
      {
        stack.map( ( tech ) => {
          return (
            <Col xs={4} md={1} className="tech-icon-box" key={ tech.name } >
              <tech.icon className="tech-icon"/>
              <p>{ tech.name }</p>
            </Col>
          )
        })
      }

    </Row>
  );
}

export default Techstack;
