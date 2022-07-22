import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ModalContext } from "../../../../context/modalActiveContext";
import Header from "../../../landingPage/components/Header";
import LoginForm from "../../../landingPage/components/user/LoginForm";
import { PropertyByIdContainer } from "../../../landingPage/styles/PropertiesStyles";
import { Modal } from "../../../landingPage/styles/Users";
import { PropertyContext } from "../../../user/context/PropertiesContext";
import AgentBox from "../AgentBox";
import mapboxgl from "mapbox-gl"; // or "const mapboxgl = require('mapbox-gl');"
import FooterSecondary from "../../../../components/Footer";

const PropertyByIdPage = () => {
  const { id } = useParams();
  const { propertiesArr, setPropertiesArr } = useContext(PropertyContext);
  const [propertyId, setPropertyId] = useState({});
  const [agentId, setAgentId] = useState({});
  const { activeModal, setActiveModal } = useContext(ModalContext);

  useEffect(() => {
    const filterArr = propertiesArr.filter((property) => {
      if (property.id === Number(id)) {
        const { user_id } = property;
        getAgent(user_id).then((agent) => setAgentId(agent));
        return property;
      }
    });
    setPropertyId(filterArr[0]);
    mapboxgl.accessToken =
      "pk.eyJ1IjoiYm10aDc0MSIsImEiOiJjbDVwcHMxd2Mwc210M2twY3RtZW54NHhwIn0.7axGHaqkEgQXeWn1BYMkOQ";
    // const mapDiv = useRef(null);
    const map = new mapboxgl.Map({
      container: "map", // container ID
      style: "mapbox://styles/mapbox/streets-v11", // style URL
      center: [-74.5, 40], // starting position [lng, lat]
      zoom: 9, // starting zoom
      projection: "globe", // display the map as a 3D globe
    });
  }, []);

  const getAgent = async (id) => {
    const response = await fetch(`http://localhost:3000/landlord/${id}`);
    const data = await response.json();
    console.log(data);
    return data;
  };

  return (
    <>
      <div className="wrapper">
        <PropertyByIdContainer className="">
          <div className="col1 ">
            <div className="boxImage text-center">
              <img src={propertyId.photo} alt="" />
            </div>
            <div className="infoHead ">
              <div className="address">
                <h2>{propertyId.address}</h2>
              </div>
              <div className="price">
                <div className="priceBlock">
                  <i className="icon-dollarsign"></i>
                  <span>{propertyId.montly_price}</span>
                </div>
                <div className="priceBlock ">
                  <span>+ {propertyId.maintance}</span>
                </div>
              </div>
            </div>
            <div className="infoExtra">
              <div className="col">
                <i className="icon-beds"></i>
                <span>{propertyId.bedroom_count} bedrooms</span>
              </div>
              <div className="col">
                <i className="icon-bathroom"></i>
                <span>{propertyId.bathroom_count} bathrooms</span>
              </div>
              <div className="col">
                <i className="icon-area"></i>
                <span>{propertyId.area} m2</span>
              </div>
              {propertyId.pets_allowed && (
                <div className="col">
                  <i className="icon-pets"></i>
                  <span>Pets allowed </span>
                </div>
              )}
            </div>
            <div className="aboutProperty">
              <h4>About this property</h4>
              <p>{propertyId.description}</p>
              <h4>Location</h4>
              <p>{propertyId.address}</p>
            </div>
            <div id="map" className="map "></div>
          </div>
          <div className="col2 p-2">
            <AgentBox agent={agentId} setActiveModal={setActiveModal} />
          </div>
        </PropertyByIdContainer>
      </div>
      <FooterSecondary />
    </>
  );
};

export default PropertyByIdPage;
