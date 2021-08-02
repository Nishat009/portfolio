import React from "react";
import MyNavbar from "./components/my-navbar/my-navbar.component";
import MyTitleMessage from "./components/TitleMessage/TitleMessage";
import AboutO from "./pages/about/AboutO";
import Skills from "./pages/skills/skills.component";
import Container from "react-bootstrap/Container";
import TimeLine from "./components/projects-timeline/projects-timeline.component";
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";
import ContactForm from "./pages/contact-form/contact-form.component";
import { Parallax } from "react-parallax";
import Particles from "react-particles-js";
import { particlesOptions } from "./particlesOptions";
import FooterPanel from "./components/footer/footer.component";

import "./App.css";
import Blog from "./pages/Blog/Blog";
import Home from "./components/Home/Home";
import About0 from "./pages/about/AboutO";

const App = () => {
  return (
    <div className="App" style={{ position: "relative" }}>
      <Home />
      <MyTitleMessage />
      <MyNavbar />
      <Particles
        className="particles particles-box"
        params={particlesOptions}
      />

      <div>
        <Parallax
          blur={{ min: -30, max: 30 }}
          bgImage={require("./images/smoke-png---smog-transparent-background-hd-(8)bkznlffwva.png")}
          bgImageAlt=""
          strength={-200}
        >
          <div>
            <Container className="container-box rounded">
              <Fade duration={500}>
                <AboutO></AboutO>
              </Fade>
            </Container>
          </div>
        </Parallax>
      </div>
      <Container className="container-box rounded">
        <Slide bottom duration={500}>
          <hr />
          <Skills />
        </Slide>
      </Container>
      <Container className="container-box rounded">
        <Slide bottom duration={500}>
          <hr />
          <TimeLine />
        </Slide>
      </Container>
      <div>
        <Container className="container-box rounded">
          <Fade duration={500}>
            <hr />

            <Blog />
          </Fade>
        </Container>
      </div>
     
      <Container className="container-box rounded">
        <Fade duration={500}>
          <hr />
          <ContactForm />
        </Fade>
      </Container>

      <hr />
      <FooterPanel />
    </div>
  );
};

export default App;
