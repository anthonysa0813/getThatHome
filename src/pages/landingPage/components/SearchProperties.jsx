import React, { useContext, useEffect, useState } from "react";
import { getApi } from "../../../helper/fetchFunctions";
import { PropertyContext } from "../../user/context/PropertiesContext";
import { CardContainer } from "../styles/carousel";
import { Modal } from "../styles/Users";
import CardBox from "./CardBox";
import Header from "./Header";
import LoginForm from "./user/LoginForm";

const SearchProperties = ({ setShowModal, showModal }) => {
  const [properties, setProperties] = useState([]);
  const { propertiesArr, setPropertiesArr } = useContext(PropertyContext);

  useEffect(() => {
    getApi("properties").then((res) => {
      setPropertiesArr(res);
      setProperties(res);
    });
  }, []);

  return (
    <>
      <div className="wrapper">
        <CardContainer className="cardContainer mt-1 ">
          {properties.map((property) => {
            return <CardBox property={property} />;
          })}
        </CardContainer>
      </div>
    </>
  );
};

export default SearchProperties;
