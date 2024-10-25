
import { Container, Row, Col, Button } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineDownload,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

import { homeImg } from "../../Assets";
import pdf from "../../Assets/../Assets/Curriculum_Web_English.pdf";
import "./Home.css";

// import Type from "./Type";

function Home() {
  return (
    <Container className="home-section" id="home">
      <Row className="home-header">
        <Col md={7} >
          <h1 className="salute">
            Hi There!{" "}
            <span className="wave" role="img" aria-labelledby="wave">
              👋🏻
            </span>
          </h1>

          <h1 className="name-header">
            I&apos;M
            <strong className="main-name"> DENNIS VILLAVICENCIO</strong>
          </h1>

          <div className="main-info">
            <p>Full Stack Developer and Big Data Specialist. I build solutions with a strong focus on software security. </p>
            {/* <Type /> */}
          </div>

          <Col md={12} className="home-about-social">
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Dennis-Villa"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/dennis-villavicencio-quintero-990180298/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="mailto:dennisvillavicencioq@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <MdOutlineEmail />
                </a>
              </li>
              <li className="social-icons" >
                <Button
                  variant="primary"
                  href={pdf}
                  target="_blank"
                  className="home-curriculum-button"
                >
                  <AiOutlineDownload className="download-logo"/>
                  &nbsp;Download CV
                </Button>
              </li>
            </ul>
          </Col>
        </Col>

        <Col md={5} className="col-home-picture" >
          <img
            src={ homeImg }
            alt="home pic"
            className="home-picture"
          />
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
