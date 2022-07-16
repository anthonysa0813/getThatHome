import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../../../landingPage/components/Header";
import { PropertyByIdContainer } from "../../../landingPage/styles/PropertiesStyles";
import { PropertyContext } from "../../../user/context/PropertiesContext";

const PropertyByIdPage = () => {
  const { id } = useParams();
  const { propertiesArr, setPropertiesArr } = useContext(PropertyContext);
  const [propertyId, setPropertyId] = useState({});
  console.log(propertiesArr);
  useEffect(() => {
    const filterArr = propertiesArr.filter((property) => {
      if (property.id === Number(id)) {
        return property;
      }
    });
    setPropertyId(filterArr[0]);
  }, []);

  return (
    <>
      <Header />
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
          </div>
          <div className="col2"></div>
        </PropertyByIdContainer>
      </div>
    </>
  );
};

export default PropertyByIdPage;
