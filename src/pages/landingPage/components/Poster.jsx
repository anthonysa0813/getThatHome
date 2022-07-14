import { PosterContainer } from "../styles/Poster";
import Button from "./Button";

function Poster() {
  return (
    <PosterContainer className=" text-center">
      <h3>Getting someone to rent your apartment has never been this easy</h3>
      <Button
        color="pink"
        text="CREATE AN ACCOUNT NOW"
        extraClass="py-1 px-2"
      ></Button>
    </PosterContainer>
  );
}

export default Poster;
