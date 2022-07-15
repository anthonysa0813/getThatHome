import React, { useEffect, useState } from "react";
import { getApi } from "../../../helper/fetchFunctions";
import { CardContainer } from "../styles/carousel";
import { Modal } from "../styles/Users";
import CardBox from "./CardBox";
import Header from "./Header";
import LoginForm from "./user/LoginForm";

const SearchProperties = ({ setShowModal, showModal }) => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    getApi("properties").then((res) => setProperties(res));
  }, []);

  return (
    <>
      {showModal ? (
        <Modal className="modal">
          <LoginForm />
        </Modal>
      ) : (
        <>
          <Header setShowModal={setShowModal} />
          <div className="wrapper">
            <CardContainer className="cardContainer mt-1 ">
              {properties.map((property) => {
                return <CardBox property={property} />;
              })}
            </CardContainer>
          </div>
        </>
      )}
    </>
  );
};

export default SearchProperties;
