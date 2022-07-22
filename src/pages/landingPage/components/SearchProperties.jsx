import React, { useContext, useEffect, useState } from "react";
import FooterSecondary from "../../../components/Footer";
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
    minPrice: "",
    maxPrice: "",
    property_type: "",
    beds: "",
    baths: "",
    pets: "",
    minArea: "",
    maxArea: "",
    search: "",
  });
  const {
    minPrice,
    maxPrice,
    property_type,
    beds,
    baths,
    pets,
    minArea,
    maxArea,
    search,
  } = filters;

  useEffect(() => {
    getApi("properties").then((res) => {
      setPropertiesArr(res);
      setProperties(res);
      console.log(res);
    });
  }, []);

  useEffect(() => {
    const filterArr = propertiesArr.filter((property) => {
      const district = property.address.split("-");
      if (
        district[1]?.toLowerCase().trim().slice(0, 3) == search.toLowerCase()
      ) {
        console.log({ property });
        return property;
      }
    });

    setProperties(filterArr);
    if (!search) {
      getApi("properties").then((res) => {
        setPropertiesArr(res);
        setProperties(res);
        console.log(res);
      });
    }
  }, [search]);

  useEffect(() => {
    console.log("minPrice", minPrice);
    const arrFilter = propertiesArr.filter((property) => {
      const price = property.montly_price;
      console.log({ price, minPrice });
      if (Number(price) >= Number(minPrice)) {
        return property;
      }
    });
    console.log({ arrFilter });
    setProperties(arrFilter);
    if (!minPrice && !maxPrice) {
      getApi("properties").then((res) => {
        setPropertiesArr(res);
        setProperties(res);
        console.log(res);
      });
    }
  }, [minPrice]);

  useEffect(() => {
    console.log({ maxPrice });
    let arrFilter;

    arrFilter = propertiesArr.filter((property) => {
      const price = property?.montly_price;
      return Number(price) <= Number(maxPrice);
    });

    setProperties(arrFilter);
    if (!minPrice && !maxPrice) {
      getApi("properties").then((res) => {
        setPropertiesArr(res);
        setProperties(res);
        console.log(res);
      });
    }
  }, [maxPrice]);

  useEffect(() => {
    const arrFilter = propertiesArr.filter((property) => {
      if (property.property_type == property_type) {
        return property;
      }
    });
    setProperties(arrFilter);
    if (!property_type) {
      getApi("properties").then((res) => {
        setPropertiesArr(res);
        setProperties(res);
        console.log(res);
      });
    }
  }, [property_type]);

  return (
    <>
      <div className="wrapper">
        <Filters filters={filters} setFilters={setFilters} />
        <CardContainer className="cardContainer mt-1 ">
          {properties.map((property, index) => {
            return <CardBox key={index} property={property} />;
          })}
        </CardContainer>
      </div>
      <FooterSecondary />
    </>
  );
};

export default SearchProperties;
