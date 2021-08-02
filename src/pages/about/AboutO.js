import React from 'react';
import styled from 'styled-components';
import PText from '../../components/PText';
import Button from '../../components/Button';
import AboutImg from "../../images/pic-removebg-preview.jpg";
import AboutInfoItem from '../../components/AboutInfoItem';


const AboutPageStyles = styled.div`
  padding: 5rem 0 5rem 0;

  .top-section {
    display: flex;
    align-items: center;
    justify-content: center;
    /* gap: 2rem; */
  }
  .left {
    flex: 3;
  }
  .right {
    flex: 2;
  }
  .about__subheading {
    font-size: 1.4rem;
    margin-bottom: 1rem;
    span {
      background-color: var(--deep-dark);
      padding: 0.5rem;
      border-radius: 8px;
    }
  }
  .about__heading {
    font-size: 1.6rem;
    margin-bottom: 1rem;
  }
  .about__info {
    margin-right: 1rem;
    .para {
      max-width: 100%;
    }
  }
  .right {
    img {
      border: 2px solid var(--gray-1);
    }
  }
  .about__info__items {
    /* margin-top: 1rem; */
  }
  .about__info__item {
    margin-bottom: 1rem;
  }
  .about__info__heading {
    font-size: 1.6rem;
    text-transform: uppercase;
  }
  @media only screen and (max-width: 768px) {
    /* padding: 10rem 0; */
    .top-section {
      flex-direction: column;
      /* gap: 5rem; */
    }
    .about__subheading {
      font-size: 1.2rem;
    }
    .about__heading {
      font-size: 1.2rem;
    }
    .about__info__heading {
      font-size: 1.4rem;
    }
  }
`;

export default function AboutO() {
  return (
    <>
      <AboutPageStyles>
        <div className="container">
        <h1 className="text-center font-details-b pb-4"  style={{fontSize:'50px', color:'white'}}> ABOUT ME</h1>
          <div className="top-section">
            <div className="left">
              <p className="about__subheading">
                Hi, I am <span>Nishat Raihana Prantik</span>
              </p>
              <h2 className="about__heading">A Web developer</h2>
              <div className="about__info">
                <PText>
                I am looking forward to work in an organization where I can get to learn a lot of things to achieve my desire and improve my skills. I would love to work for any organization that is related to create content, web development, problem solving etc. 
                  <br /> <br />
                  Skilled in Bootstrap, CSS, JavaScript, MySQL, MongoDB,Node Js, Express Js, Material UI and HTML5.
                  <br />
                  I love to learn new things daily basis
                  <br/>
                  When it comes to my work, i never neglect it
                </PText>
                <h1 className="about__info__heading">Education</h1>

              <AboutInfoItem
                title="School"
                items={["Saleha Ishaque Girl's Govt High School,Sirajganj,Bangladesh"]}
              />
              <AboutInfoItem
                title="Collage"
                items={["Rashidozzoha Women's College"]}
              />
              <AboutInfoItem
                title="Varsity"
                items={['International University of Business Agriculture & Technology']}
              />
              </div>
             
            </div>
            <div className="right">
              <img src={AboutImg} alt="me" />
            </div>
          </div>
          {/* <div className="about__info__items"> */}
            {/* <div className="about__info__item"> */}
              
            </div>
            
          
          {/* </div> */}
        {/* </div> */}
        
      </AboutPageStyles>
    </>
  );
}
