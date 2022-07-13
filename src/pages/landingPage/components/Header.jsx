import React from "react";
import { HeaderContainer} from "../styles/header";
import Button from "./Button";

const Header = () => {
  return (
  <HeaderContainer>
    <img src='src/pages/landingPage/components/Logo.png' alt=''></img>
    <Button color='white' text='FIND A HOME'/>
    <Button color='white' text='JOIN'/>
    <Button color='white' text='LOGIN'/>    
  </HeaderContainer>);
};

export default Header;
