
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

import "./Footer.css";

function Footer() {
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright footer-credits">
          <h3>Based on <a 
              href="https://github.com/soumyajit4419/Portfolio/tree/master"
              rel="noreferrer noopener"
              target="_blank"
              className="credit-link"
            >
              Soumyajit
            </a> project</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Dennis Villavicencio Quintero 2024</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/Dennis-Villa"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillGithub className="footer-icon"/>
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/dennis-villavicencio-quintero-990180298/"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaLinkedinIn className="footer-icon"/>
              </a>
            </li>
            <li className="social-icons">
              <a
                href="mailto:dennisvillavicencioq@gmail.com"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <MdOutlineEmail className="footer-icon"/>
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
