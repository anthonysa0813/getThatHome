import { Link } from "react-router-dom";
import { Card, DirBox, ExtraInfo } from "../styles/carousel";
import IconLabel from "./IconLabel";

function CardBox({ property }) {
  const {
    id,
    montly_price,
    property_type,
    bedrooms_count,
    bathroom_count,
    area,
    pets_allowed,
    photo,
    operation_type,
  } = property;

  return (
    <Link to={`/properties/${id}`}>
      <Card>
        <span className="operationType">
          {operation_type === "rent" ? "For Rental" : "For Sale"}
        </span>
        <div className="cardImage">
          <img src={photo}></img>
        </div>
        <div className="cardBody">
          <div className="card-head">
            <IconLabel icon="dollar" text={montly_price} />
            <IconLabel icon="building" text={property_type} />
          </div>
          <DirBox>
            86872 Jacob Gateway,
            <br />
            Durganport, WV 48044
          </DirBox>
          <ExtraInfo>
            <IconLabel icon="beds" text={bedrooms_count} />
            <IconLabel icon="bathroom" text={bathroom_count} />
            <IconLabel icon="area" text={area + "m2"} />
            {pets_allowed && <IconLabel icon="pets" />}
          </ExtraInfo>
        </div>
      </Card>
    </Link>
  );
}

export default CardBox;
