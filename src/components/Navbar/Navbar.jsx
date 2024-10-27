import { useEffect, useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import {
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from "react-icons/ai";
import { IoBriefcaseOutline } from "react-icons/io5";
import { FaRegMoon, FaRegSun } from "react-icons/fa";

import "./Navbar.css";
import Logo from "../../Assets/logo.svg";


function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);
  const [darkMode, updateDarkMode] = useState(true);

  useEffect(() => {
    setDarkTheme( localStorage.getItem('darkMode') == 'true' );
  }, []);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  function setDarkTheme( darkMode ) {
    document.body.style.colorScheme = (darkMode ? 'dark' : 'light');
    localStorage.setItem('darkMode', darkMode );
    updateDarkMode( darkMode );
  }

  window.addEventListener("scroll", scrollHandler);

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container>
        <Navbar.Brand href="/" className="d-flex">
          <Logo className="navbar-logo" alt="brand" />
        </Navbar.Brand>
        <Nav.Item className="toggler-wraper">
          {
            darkMode
              ? <FaRegMoon onClick={ () => setDarkTheme(false) }/>
              : <FaRegSun onClick={ () => setDarkTheme(true) } />
          }
        </Nav.Item>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="#home">
            <Nav.Item>
              <Nav.Link 
                as="a"
                href="/#home"
                onClick={() => updateExpanded(false)}
              >
                <AiOutlineHome style={{ marginBottom: "3px" }} /> Home
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as="a"
                href="/#experience"
                onClick={() => updateExpanded(false)}
              >
                <IoBriefcaseOutline
                  style={{ marginBottom: "3px" }}
                />{" "}
                Experience
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as="a"
                href="/#projects"
                onClick={() => updateExpanded(false)}
              >
                <AiOutlineFundProjectionScreen
                  style={{ marginBottom: "3px" }}
                />{" "}
                Projects
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as="a"
                href="/#about"
                onClick={() => updateExpanded(false)}
              >
                <AiOutlineUser style={{ marginBottom: "3px" }} /> About
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
        
      </Container>
    </Navbar>
  );
}

export default NavBar;
