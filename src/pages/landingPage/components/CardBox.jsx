import { Card, DirBox, ExtraInfo } from "../styles/carousel";
import IconLabel from "./IconLabel";

function CardBox(props) {
  function PetBox() {
    if (props.pets == "true") {
      return <IconLabel icon="pets" />;
    }
  }

  return (
    <Card>
      <div className="cardImage">
        <img src="src/assets/images/Property-1.png"></img>
      </div>
      <div className="cardBody">
        <div className="card-head">
          <IconLabel icon="dollar" text={props.price} />
          <IconLabel icon="building" text={props.property} />
        </div>
        <DirBox>
          86872 Jacob Gateway,
          <br />
          Durganport, WV 48044
        </DirBox>
        <ExtraInfo>
          <IconLabel icon="beds" text={props.beds} />
          <IconLabel icon="bathroom" text={props.bathroom} />
          <IconLabel icon="area" text={props.area + "m2"} />
          {PetBox()}
        </ExtraInfo>
      </div>
    </Card>
  );
}

export default CardBox;
