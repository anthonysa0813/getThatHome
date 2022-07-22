import React from "react";
import FooterSecondary from "../../../../components/Footer";
import { FooterMain } from "../../styles/footerMain";
import { FooterUserContainer, Modal } from "../../styles/Users";
import Footer from "../Footer";
import Header from "../Header";
import LoginForm from "./LoginForm";
import Register from "./Register";

const UserPage = ({ setShowModal, showModal }) => {
  console.log({ setShowModal });
  return (
    <>
      <Register />
      <FooterSecondary />
    </>
  );
};

export default UserPage;
