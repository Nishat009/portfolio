import React from "react";
import banner from "../../images/photo-1485347492501-a7d5b757d7e0.jpg"
import "./Home.css";

const Home = () => {
  return (
    <div id="home">
      <img className="d-block w-100 custom-img" src={banner} alt="Third slide" />
    </div>
  );
};
export default Home;
