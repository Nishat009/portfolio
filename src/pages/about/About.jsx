import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./About.css";
import Profile from "../../images/pic-removebg-preview.jpg";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVoicemail } from "@fortawesome/free-solid-svg-icons";

const About = () => {
  return (
    <div id="about">
     
      <div className="about"> 
      {/* <h1 className="text-center font-details-b pb-4"  style={{fontSize:'50px', color:'white'}}> ABOUT ME</h1> */}
        
        <Container>
          <Row className="pt-3 pb-5 align-items-center">
          <h1 className="pt-3 text-center font-details pb-3  " style={{fontSize:'50px',fontWeight:'bold',color:'white'}}>ABOUT ME</h1>
            <Col xs={12} md={6}>
            <Row className=" align-items-start p-2 my-details rounded">
                Hello, I am <strong className="color">&nbsp;Nishat Raihana Prantik</strong>
                <br />I am Nishat Raihana Prantik. I am looking forward to work in an organization where I can get to learn a lot of things to achieve my desire and improve my skills. I would love to work for any organization that is related to create content, web development, problem solving etc. 
                <br/>
                <ul>
                  <li>Skilled in Bootstrap, Cascading Style Sheets (CSS), JavaScript, MySQL, MongoDB,Node Js, Express Js, Material UI and HTML5.</li>
                  <li>I love to learn new things daily basis</li>
                  <li>When it comes to my work, i never neglect it</li>
                </ul>
                <br />
                <br /> <br />
                <Col className="d-flex justify-content-center flex-wrap">
                  <div>
                    <a href="#contact">
                      <Button className="m-2" variant="outline-info">
                      <FontAwesomeIcon icon={faVoicemail} />
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a href="https://www.linkedin.com/in/nishat12/" target="_blank" rel="noopener noreferrer">
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
                </Col>
              </Row>
            </Col>
            <Col xs={12} md={6}>
             <Row className="justify-content-center mb-2 mr-2 ">
                <Image className="profile justify-content-end h-70" alt="profile" src={Profile} />
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default About;
