import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { HeaderContainer } from "../styles/header";
import Button from "./Button";
import logo from "../../../assets/images/Logo.png";
import { UserContext } from "../../user/context/UserContext";

const Header = ({ setShowModal }) => {
  const { user, setUser } = useContext(UserContext);
  const { name, type } = user;

  const userActive = Boolean(name);
  const token = sessionStorage.getItem("token");

  const showModalFunc = () => {
    setShowModal((modal) => {
      return !modal;
    });
  };

  const logoutFunc = () => {
    sessionStorage.removeItem("token");
    setUser("");
    location.reload();
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
        {userActive ? (
          <>
            <button className="btn bg-white border-radius" onClick={logoutFunc}>
              <i className="icon-logout"></i>
              LOGOUT
            </button>
            {type === "Landlord" ? (
              <button
                className="btn bg-pink border-radius"
                onClick={showModalFunc}
              >
                <i className="icon-home"></i>
                MY PROPERTIES
              </button>
            ) : (
              <button
                className="btn bg-pink border-radius"
                onClick={showModalFunc}
              >
                <i className="icon-filledheart"></i>
                SAVE PROPERTIES
              </button>
            )}
            <button
              className="btn bg-pink border-radius"
              onClick={showModalFunc}
            >
              <i className="icon-profile"></i>
              PROFILE
            </button>
          </>
        ) : (
          <>
            <Button
              color="white"
              text="JOIN"
              iconName="login"
              route="/register"
            />
            <button
              className="btn bg-pink border-radius"
              onClick={showModalFunc}
            >
              <i className="icon-login"></i>
              login
            </button>
          </>
        )}
      </div>
    </HeaderContainer>
  );
};

export default Header;
