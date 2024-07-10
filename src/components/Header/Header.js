import React from "react";
import Typical from "react-typical";
import profileImg from "../../assets/profileImg.png";
import "./Header.css";
const Header = () => {
  return (
    <div className="header-container">
      {/* Header Content */}
      <div className="header-content">
        <h1>Hy! Am</h1>
        <h2 className="full-name">Akshar Pujara</h2>
        <h2>
          I'm a {""}
          <Typical
            steps={[
              "Full Stack Developer Student  🚀",
              1000,
              "Frontend Developer ✅",
              1000,
              "React Developer 👨‍💻",
              1000,
            ]}
            loop={Infinity}
            wrapper="b"
          />
        </h2>
        <p>
          Welcome to my Website. I am an Web Development Student. Currently
          pursuing React JS. This is my first functional website using React.
        </p>
        {/* /Payment gateway */}
        <div className="header-payment-container">
          <button>Hire Me</button>
          <i className="fa-brands fa-paypal"></i>
          <i className="fa-brands fa-cc-visa"></i>
          <i className="fa-brands fa-cc-mastercard"></i>
          <i className="fa-brands fa-cc-amex "></i>
        </div>
      </div>
      {/* Image Container */}
      <div className="profile-img-container">
        <img src={profileImg} />
        <div className="circle-1"></div>
        <div className="circle-2"></div>
      </div>
    </div>
  );
};

export default Header;
