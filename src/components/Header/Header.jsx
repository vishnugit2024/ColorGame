import React from "react";
import "./Header.css";
// import logo from "../../assets/KWG.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header className="header">
        <div className="header-logo">
          <Link to={"/"}>
            <h3>DIGI DEMO</h3>
          </Link>
        </div>
        <div>
          <Link to={"#"}>
            <i className="bi bi-chat-left-dots-fill header-icon"></i>
          </Link>
          <Link to={"#"}>
            <i className="bi bi-capslock-fill app-download"></i>{" "}
          </Link>
        </div>
      </header>
    </>
  );
};

export default Header;
