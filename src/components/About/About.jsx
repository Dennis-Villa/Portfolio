
import { Container, Row, Col } from "react-bootstrap";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import { aboutImg } from "../../Assets";

import "./About.css"

function About() {
  return (
    <Container id="about" className="about-section">
      <Container>
        <h1 className="main-header">
          About <strong className="important-text">Me</strong>
        </h1>
        <Row className="align-items-center">
          <Col md={7} >
            <Aboutcard />
          </Col>
          <Col md={5} className="col-about-image">
            <img src={aboutImg} alt="about" className="img-fluid about-img" />
          </Col>
        </Row>
        <h1 className="main-header">
          Professional <strong className="important-text">Skillset </strong>
        </h1>

        <Techstack />

        {/* <Github /> */}
      </Container>
    </Container>
  );
}

export default About;
