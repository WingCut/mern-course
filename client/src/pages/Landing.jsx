import React from "react";
import Wrapper from "../assets/wrappers/LandingPage";
import main from "../assets/images/main.svg";
import { Link } from "react-router-dom";
import { Logo } from "../components";
const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className="container page ">
        <div className="info">
          <h1>
            job<span>tracking</span>app
          </h1>
          <p>
            I'm baby aute waistcoat pug gentrify do four dollar toast voluptate
            truffaut franzen ut bitters ut. Cred austin ad seitan 90's fugiat
            sed. Iceland activated charcoal la croix laborum, narwhal laboris
            tumeric ut williamsburg. Commodo glossier tousled, you probably
            haven't heard of them same bushwick man braid synth ea next level
          </p>
          <Link to="/register" className=" btn register-link">
            Register
          </Link>
          <Link to="/login" className=" btn login-link">
            Login / Demo User
          </Link>
        </div>
        <img src={main} alt="job hunt" className="img main-img" />
      </div>
    </Wrapper>
  );
};

export default Landing;
