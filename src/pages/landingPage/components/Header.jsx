import React from "react";

import { HeaderContainer } from "../styles/header";
import Button from "./Button";

const Header = () => {
  return (
    <HeaderContainer>
      <div className="headerImage ">
        <img src="src/pages/landingPage/components/Logo.png" alt=""></img>
      </div>
      <div className="actionsContainer">
        <Button color="white" text="FIND A HOME" />
        <Button color="white" text="JOIN" iconName="login" />
        <Button color="pink" text="LOGIN" iconName="login" />
      </div>
    </HeaderContainer>
  );
};

export default Header;
