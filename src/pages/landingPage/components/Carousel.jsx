import { useEffect, useState } from "react";
import { getApi } from "../../../helper/fetchFunctions";
import { CardContainer, CarouselContainer } from "../styles/carousel";
import CardBox from "./CardBox";
import IconLabel from "./IconLabel";

function Carousel(props) {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    getApi("/properties").then((res) => {
      const [property1, property2, property3] = res;
      const newArr = [property1, property2, property3];
      setProperties(newArr);
    });
  }, []);

  return (
    <CarouselContainer>
      <div className="wrapper  text-center">
        <div>Find an Apartment you Love</div>
        <h2>Homes for rent at the best prices</h2>
        <CardContainer className="cardContainer ">
          {properties.map((property) => {
            return <CardBox property={property} />;
          })}
        </CardContainer>
      </div>
    </CarouselContainer>
  );
}

export default Carousel;
