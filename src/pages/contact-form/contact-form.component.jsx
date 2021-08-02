import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import "./ContactForm.css";
import emailjs from "emailjs-com";
// import shake from "../../images/4199950.svg"

const ContactForm = () => {

  function sendEmail(e) {
    e.preventDefault();
    emailjs.sendForm('service_0zlfnbd', 'template_g5tchxa', e.target, 'user_wk6InuuSqqoThtOEEbMgx')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
      e.target.reset();
  }

  return (
    <div id="contact">
      <h1 className="pt-3 text-center font-details-b pb-3">CONTACT ME</h1>
      
      <Jumbotron className="contact-jumbotron">
        <div className="container ">
         
           <div className="row">
           
             <div className="col-md-12 mx-auto mt-2">
             <small className="pt-3 text-center" style={{color:'white'}}>find me at : nishatraihana009@gmail.com</small>
              <form onSubmit={sendEmail}>
                <div className="row pt-5 mx-auto">
                  <div className="col-8 form-group mx-auto">
                    <input type="text" className="form-control" placeholder="Name" name="name" />
                  </div>
                  <div className="col-8 form-group pt-2 mx-auto">
                    <input type="email" className="form-control" placeholder="Email Address" name="email" />
                  </div>
                  <div className="col-8 form-group pt-2 mx-auto">
                    <input type="text" className="form-control" placeholder="Subject" name="subject" />
                  </div>
                  <div className="col-8 form-group pt-2 mx-auto">
                    <textarea className="form-control" id="" cols="30" rows="8" placeholder="Your message" name="message"></textarea>
                  </div>
                  <div className="col-8 pt-3 mx-auto">
                    <input type="submit" className="btn button text-white" value="Send Message"></input>
                  </div>
                </div>
              </form>
            </div>
            

           </div>
         

        </div>
      </Jumbotron>
    </div>
  );
};

export default ContactForm;
