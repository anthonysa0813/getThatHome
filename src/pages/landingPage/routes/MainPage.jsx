import { useState } from "react";
import Carousel from "../components/Carousel";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Poster from "../components/Poster";
import Team from "../components/Team";
import LoginForm from "../components/user/LoginForm";
import { Modal } from "../styles/Users";
import Search from "./Search";

function MainPage({ setShowModal, showModal }) {
  return (
    <>
      {showModal ? (
        <Modal className="modal">
          <LoginForm />
        </Modal>
      ) : (
        <>
          <Header setShowModal={setShowModal} />
          <Search />
          <Carousel />
          <Poster />
          <Team />
          <Footer />
        </>
      )}
    </>
  );
}

export default MainPage;
