import React, { useContext, useEffect, useState } from "react";
import { getApi } from "../../../helper/fetchFunctions";
import { PropertyContext } from "../../user/context/PropertiesContext";
import { CardContainer } from "../styles/carousel";
import { Modal } from "../styles/Users";
import CardBox from "./CardBox";
import Filters from "./Filters";
import Header from "./Header";
import LoginForm from "./user/LoginForm";

const SearchProperties = ({ setShowModal, showModal }) => {
  const [properties, setProperties] = useState([]);
  const { propertiesArr, setPropertiesArr } = useContext(PropertyContext);
  const [filters, setFilters] = useState({
    minPrice: 1000,
    maxPrice: 2000,
    property_type: ["house", "apartment"],
    beds: 4,
    baths: 2,
    pets: true,
    minArea: 100,
    maxArea: 200,
  });

  useEffect(() => {
    getApi("properties").then((res) => {
      setPropertiesArr(res);
      setProperties(res);
      console.log(res);
    });
  }, [filters]);

  return (
    <>
      <div className="wrapper">
        <Filters filters={filters} setFilters={setFilters} />
        <CardContainer className="cardContainer mt-1 ">
          {properties.map((property, index) => {
            if (
              property.bedrooms_count == filters.beds &&
              property.bathroom_count == filters.baths &&
              property.pets_allowed == filters.pets &&
              property.montly_price >= filters.minPrice &&
              property.montly_price <= filters.maxPrice &&
              property.area >= filters.minArea &&
              property.area <= filters.maxArea &&
              filters.property_type.includes(property.property_type)
            ) {
              return <CardBox key={index} property={property} />;
            }
          })}
        </CardContainer>
      </div>
    </>
  );
};

export default SearchProperties;
