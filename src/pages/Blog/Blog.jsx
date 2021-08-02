import React from "react";
// import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import Card from "react-bootstrap/Card";
import Tilt from "react-tilt";
import Button from "react-bootstrap/Button";
import blog1 from "../../images/blog1.jpg";
import blog2 from "../../images/blog2.jpeg";
import blog3 from "../../images/blog3.jpg";
import blog4 from "../../images/blog4.jpg";
import './Blog.css'

const Blog = () => {
  return (
    <div id="blogs" >
      <h1 className="pt-3 text-center font-details-b pb-3">Blogs</h1>
      <Jumbotron className="jumbo-style">
       
       <div className="row">
            <div className="col-md-6 col-sm-6 col-lg-6  py-3">
              <Tilt options={{ max: 5 }}>
                <Card className=" col-sm-12 bg-shadow" >
                  <Card.Header as="h5" className="d-flex justify-content-center flex-wrap">
                    <Card.Img variant="top" className="img-resize  img-fluid img-thumbnail" src={blog1 }  alt="" />
                  </Card.Header>
                  <Card.Body className="d-flex justify-content-center flex-column">
                    <div>
                      <Card.Title className="text-center text-dark fw-bolder">Some topic about JavaScript when you conduct any interview</Card.Title>
                    </div>
                    <div>
                      <Card.Text className=" ">
                        <p>
                        when you will call a function from another function or return it than it will create a closed environment and the function it was calling from the closed environment if ........</p>

                        <a href="https://nishatraihana009.medium.com/some-topic-that-you-should-know-about-javascript-68b81398677c" target="_blank" alt='javascript'>
                          <Button className="m-2" variant="outline-info">
                            Read More
                      </Button>
                        </a>
                      </Card.Text>
                    </div>
                  </Card.Body>
                </Card>
              </Tilt>
            </div>

            <div className="col-md-6 py-3">
              <Tilt options={{ max: 5 }}>
                <Card className=" bg-shadow" >
                  <Card.Header as="h5" className="d-flex justify-content-center flex-wrap">
                    <Card.Img variant="top" className="img-resize  img-fluid img-thumbnail" src={blog2} alt="" />
                  </Card.Header>
                  <Card.Body className="d-flex justify-content-center flex-column">
                    <div>
                      <Card.Title className="text-center fw-bolder">Some basic concepts of React for the beginner web developer.</Card.Title>
                    </div>
                    <div>
                      <Card.Text className="">
                        <p>
                        In react Batch Update generally use for to update the real DOM. This means when we update anything in real DOM , they are sent in batches, instead of sending updates for every single change in state......
                        </p>

                        <a href="https://nishatraihana009.medium.com/some-basic-concepts-of-react-for-the-beginner-web-developer-fd26ce100b1a" target="_blank" alt='javascript'>
                          <Button className="m-2" variant="outline-info">
                            Read More
                      </Button>
                        </a>
                      </Card.Text>
                    </div>
                  </Card.Body>
                </Card>
              </Tilt>
            </div>

            <div className="col-md-6 py-3">
              <Tilt options={{ max: 20 }}>
                <Card className=" bg-shadow" >
                  <Card.Header as="h5" className="d-flex justify-content-center flex-wrap">
                    <Card.Img variant="top" className="img-resize img-fluid img-thumbnail" src={blog3} alt="" />
                  </Card.Header>
                  <Card.Body className="d-flex justify-content-center flex-column">
                    <div>
                      <Card.Title className="text-center fw-bolder">Let’s know something more interesting about JavaScript's</Card.Title>
                    </div>
                    <div>
                      <Card.Text className=" ">
                        <p>
                        JavaScript provides different types of value . There are two types of value in JavaScript....
                          </p>

                        <a href="https://nishatraihana009.medium.com/lets-know-something-more-interesting-about-javascripts-79e7a03ecd1d" target="_blank" alt='javascript'>
                          <Button className="m-2" variant="outline-info">
                            Read More
                      </Button>
                        </a>
                      </Card.Text>
                    </div>
                  </Card.Body>
                </Card>
              </Tilt>
            </div>


            <div className="col-md-6 py-3">
              <Tilt options={{ max: 20 }}>
                <Card className=" bg-shadow">
                  <Card.Header as="h5" className="d-flex justify-content-center flex-wrap">
                    <Card.Img variant="top" className="img-resize img-fluid img-thumbnail" src={blog4} alt="" />
                  </Card.Header>
                  <Card.Body className="d-flex justify-content-center flex-column">
                    <div>
                      <Card.Title className="text-center fw-bolder">10 simple tricks for beginner web developer</Card.Title>
                    </div>
                    <div>
                      <Card.Text className=" ">
                        <p>
                        The trim() method is used for removes whitespace from the beginning and ending of a string. If neither the beginning....</p>

                          <a href="https://nishatraihana009.medium.com/10-simple-tricks-for-beginner-web-developer-7283b90cca47" target="_blank" alt='javascript'>
                          <Button className="m-2" variant="outline-info">
                            Read More
                      </Button>
                        </a>


                      </Card.Text>
                    </div>
                  </Card.Body>
                </Card>
              </Tilt>
            </div>


          </div>

     

         

      
      </Jumbotron>
    </div>
  );
};

export default Blog;