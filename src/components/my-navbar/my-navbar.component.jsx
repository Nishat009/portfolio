import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "./my-navbar.styles.css";
import Button from "react-bootstrap/Button";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVoicemail } from "@fortawesome/free-solid-svg-icons";


const MyNavbar = () => {
  return (
    <div>
      <Navbar
        fixed="top"
        variant="dark"
        expand="md"
        className="animate-navbar nav-theme justify-content-between"
      >
        <div>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto ">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#skills">Skills</Nav.Link>
              <Nav.Link href="#projects"> Projects</Nav.Link>
              <Nav.Link href="#blog">Blog</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
              
            </Nav>
          </Navbar.Collapse>
        </div>
        <div className="py-2 text-center  d-flex justify-content-center flex-wrap">
        <a href="https://drive.google.com/file/d/169M6Ixo7pNDz3E5i1cMcGWJ2JERTb3Wy/view" target="_blank" rel="noopener noreferrer">
                      <Button className="m-2" variant="outline-danger">
                        My Resume
                      </Button>
                    </a>
        </div>
        <div className="py-2 text-center  d-flex justify-content-center flex-wrap">
     <div>
                    <a href="#contact">
                      <Button className="m-2" variant="outline-info">
                      <FontAwesomeIcon icon={faVoicemail} />
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a href="https://www.linkedin.com/in/nishat-raihana-prantik-a2586b147/" target="_blank" rel="noopener noreferrer">
                      <Button className="m-2" variant="outline-dark">
                      <FontAwesomeIcon icon={faLinkedinIn} />
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a href="https://github.com/Nishat009">
                      <Button className="m-2" variant="outline-danger">
                      <FontAwesomeIcon icon={faGithub} />
                      </Button>
                    </a>
                  </div>
        </div>
      </Navbar>
    </div>
    
  );
};

export default MyNavbar;
