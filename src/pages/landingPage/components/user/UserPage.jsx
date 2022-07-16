import React from "react";
import { Modal } from "../../styles/Users";
import Header from "../Header";
import LoginForm from "./LoginForm";
import Register from "./Register";

const UserPage = ({ setShowModal, showModal }) => {
  console.log({ setShowModal });
  return (
    <>
      {showModal ? (
        <Modal className="modal ">
          <LoginForm setShowModal={setShowModal} showModal={showModal} />
        </Modal>
      ) : (
        <>
          <Header setShowModal={setShowModal} />
          <Register />
        </>
      )}
    </>
  );
};

export default UserPage;
