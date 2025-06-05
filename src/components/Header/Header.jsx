import React from "react";
import "./Header.css";
import logo from "../../assets/KWG.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header className="header">
        <Link to={"/"}>
          <img src={logo} alt="logo" />
        </Link>
        <Link to={"#"}>
          <i className="bi bi-chat-left-dots-fill header-icon"></i>
        </Link>
      </header>
    </>
  );
};

export default Header;
