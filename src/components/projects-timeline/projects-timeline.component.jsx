import React from "react";
import Button from "react-bootstrap/Button";

// projects
import kids from "../../images/1.PNG";
import grocery from "../../images/2.PNG"
import dragon from "../../images/Capture.PNG"
import league from "../../images/3.PNG"
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Zoom from 'react-reveal/Zoom';



import "./projects-timeline.styles.css";

const TimeLine = () => {
  return (
    <div id="projects">

      <h1 className="pt-3 text-center font-details-b pb-3" style={{color:'white'}}>PROJECTS</h1>


      <div className="row">
      <Zoom top>
        <div className="col-md-6">

      


      <div className=" d-flex justify-content-between flex-column mt-1 bg-dark p-3 m-1">

        <Accordion>
          <Card >
            <img  src={kids} alt="" />
            <Accordion.Toggle
              as={Card.Header}
              eventKey="0"
              className="p-2 text-center button accordian-main"
            >
              PROJECT DETAILS
                    </Accordion.Toggle>

            <Accordion.Collapse eventKey="0" className="text-left" >
              <Card.Body>
                <strong>Title:</strong> DEPENDABLE CLEAN
                        <hr />
                <strong>Features:</strong>
                <ul className="list-styles pt-1">
                  <li>This is an House Cleaning Service Booking Website site. Here you can Book different Service for your house cleaning purpose.</li>
                  <li>You can easily select your desire Services to add to your Service List and see the Service as well.</li>
                  <li>You have to have a account in order to book any services.</li>
                  <li>Admin and normal User Intrerface of Dashboard is Different.</li>
                </ul>
                <hr />
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>

        <div className="d-flex justify-content-between flex-nowrap text-center">
          <Button  className="btn button text-white"
            href="https://house-cleaning-5b69e.web.app/"
            target="_blank"
          >
            SEE LIVE
                </Button>
          <Button  className="btn button text-white"
            href="https://github.com/Nishat009/Dependable-clean-client"
            target="_blank"
          >
            Client Code
                </Button>
          <Button  className="btn button text-white"
            href="https://github.com/Nishat009/dependable-clean-server"
            target="_blank"
          >
            Server Code
                </Button>
        </div>
      </div>
    </div>
    <div className="col-md-6">


      <div className=" d-flex justify-content-between flex-column mt-1 bg-dark p-3 m-1">

        <Accordion>
          <Card>
            <img className="h-80" src={league} alt="" />
            <Accordion.Toggle
              as={Card.Header}
              eventKey="2"
              className="p-2 text-center button accordian-main"
            >
              PROJECT DETAILS
                  </Accordion.Toggle>

            <Accordion.Collapse eventKey="2" className="text-left" >
              <Card.Body>
                <strong>Title:</strong> LA-LEAGUES SUPREME
                      <hr />
                <strong>Features:</strong>
                <ul className="list-styles pt-1">
                  <li>This is a website about some football leagues.</li>
                  <li>By clicking on the Explore button you can see some the details of the selected league.</li>
                  <li>Also you can see the social sites of selected league by clicking on social icons below.</li>
                  
                </ul>
                <hr />
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>

        <div className="d-flex justify-content-between flex-nowrap text-center">
          <Button  className="btn button text-white"
            href="https://nifty-goldwasser-aec480.netlify.app/"
            target="_blank"
          >
            SEE LIVE
              </Button>
          <Button  className="btn button text-white"
            href="https://github.com/Nishat009/react-router"
            target="_blank"
          >
           Client Code
              </Button>
         
        </div>
      </div>

      </div>





      <div className="col-md-6">


      <div className=" d-flex justify-content-between flex-column mt-1 bg-dark p-3 m-1">

        <Accordion>
          <Card>
            <img className="h-80" src={grocery} alt="" />
            <Accordion.Toggle
              as={Card.Header}
              eventKey="2"
              className="p-2 text-center button accordian-main"
            >
              PROJECT DETAILS
                  </Accordion.Toggle>

            <Accordion.Collapse eventKey="2" className="text-left" >
              <Card.Body>
                <strong>Title:</strong> SPEED BREAKER
                      <hr />
                <strong>Features:</strong>
                <ul className="list-styles pt-1">
                  <li>Show vehicles options to ride.</li>
                  <li>Rider can select the destination by login.</li>
                  <li>To login rider need to create an account.</li>
                  <li>Rider need to register only once and with unique email</li>
                </ul>
                <hr />
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>

        <div className="d-flex justify-content-between flex-nowrap text-center">
          <Button  className="btn button text-white"
            href="https://rider-77c30.web.app/"
            target="_blank"
          >
            SEE LIVE
              </Button>
          <Button  className="btn button text-white"
            href="https://github.com/Nishat009/spped-breaker"
            target="_blank"
          >
           Client Code
              </Button>
         
        </div>
      </div>

      </div>


      <div className="col-md-6">


<div className=" d-flex justify-content-between flex-column mt-1 bg-dark p-3 m-1">

  <Accordion>
    <Card>
      <img className="h-80" src={dragon} alt="" />
      <Accordion.Toggle
        as={Card.Header}
        eventKey="2"
        className="p-2 pb-2 text-center button accordian-main"
      >
        PROJECT DETAILS
            </Accordion.Toggle>

      <Accordion.Collapse eventKey="2" className="text-left" >
        <Card.Body>
          <strong>Title:</strong> BOOK-RU
                <hr />
          <strong>Features:</strong>
          <ul className="list-styles pt-1">
            <li> From here you can order different type of books</li>
            <li>You can add them in the cart.</li>
            <li>Also have an account to buy books.</li>
            <li>There is different login for admin and user</li>
          </ul>
          <hr />
        </Card.Body>
      </Accordion.Collapse>
    </Card>
  </Accordion>

  <div className="d-flex justify-content-between flex-nowrap text-center">
    <Button  className="btn button text-white"
      href="https://book-shop-5cd08.web.app/"
      target="_blank"
    >
      SEE LIVE
        </Button>
    <Button  className="btn button text-white"
      href="https://github.com/Nishat009/full-stack-client"
      target="_blank"
    >
     Client Code
        </Button>
        <Button  className="btn button text-white"
            href="https://github.com/Nishat009/full-stack-server-booka-ru"
            target="_blank"
          >
         Server Code
              </Button>
  </div>
</div>

</div>
</Zoom>
</div>
</div>





    
  );
};

export default TimeLine;
