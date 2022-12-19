import React from "react";
import homeImg from "../assets/backgrounds/landing-bgg.png";
import "../styles/Home.css";
import { TfiLayoutLineSolid } from "react-icons/tfi";
import { AiOutlineSwapRight } from "react-icons/ai";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home__container">
      <div className="home__left">
        <img src={homeImg} alt="home" />
      </div>
      <div className="home__right">
        <p>
          Make all <br /> <span>your</span> <span>things</span> <span>organized</span>
        </p>
        <div className="home__login__signup">
          <div className="home__signup">
            <Link to="/signin">
              <TfiLayoutLineSolid />
              SignUp
            </Link>
          </div>
          <div className="home__login">
            <Link to="/signin">
              Signin
              <AiOutlineSwapRight />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
