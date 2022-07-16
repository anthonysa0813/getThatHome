import React from "react";
import { Link } from "react-router-dom";
import { HeaderContainer } from "../styles/header";
import Button from "./Button";
import logo from "../../../assets/images/Logo.png";

const Header = ({ setShowModal }) => {
  const showModalFunc = () => {
    setShowModal((modal) => {
      return !modal;
    });
  };
  return (
    <HeaderContainer className="">
      <Link to="/" className="headerImage ">
        <img src={logo} alt=""></img>
      </Link>
      <div className="actionsContainer ">
        <Link to="/properties">
          <i className="icon-search mr-1"></i>
          <p>FIND A HOME</p>
        </Link>
        <Button color="white" text="JOIN" iconName="login" route="/register" />
        <button className="btn bg-pink border-radius" onClick={showModalFunc}>
          <i className="icon-login"></i>
          login
        </button>
      </div>
    </HeaderContainer>
  );
};

export default Header;
