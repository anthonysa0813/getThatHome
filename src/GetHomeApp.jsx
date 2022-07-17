import React, { useContext } from "react";
import LandingRoutes from "./pages/landingPage/routes";
import { BrowserRouter } from "react-router-dom";
import Header from "./pages/landingPage/components/Header";
import { ModalContext } from "./context/modalActiveContext";
import { Modal } from "./pages/landingPage/styles/Users";
import LoginForm from "./pages/landingPage/components/user/LoginForm";

const GetHomeApp = () => {
  const { activeModal, setActiveModal } = useContext(ModalContext);

  return (
    <BrowserRouter>
      {activeModal && (
        <Modal className="modal">
          <LoginForm
            setActiveModal={setActiveModal}
            // setShowModal={setShowModal}
            // showModal={showModal}
          />
        </Modal>
      )}
      <Header setShowModal={setActiveModal} />

      <LandingRoutes />
    </BrowserRouter>
  );
};

export default GetHomeApp;
