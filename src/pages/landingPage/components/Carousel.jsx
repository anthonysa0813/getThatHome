import CardBox from "./CardBox"
import IconLabel from "./IconLabel"

function Carousel(props) {

  return(
    <div>
      <div>Find an Apartment you Love</div>
      <h2>Homes for rent at the best prices</h2>
      <CardBox price='3000' property='Apartment' beds='4' bathroom='2' area='180' pets='true'/>
      <CardBox price='2500' property='Apartment' beds='3' bathroom='1' area='150' pets='false'/>
      <CardBox price='3800' property='Apartment' beds='5' bathroom='3' area='200' pets='true'/>
    </div>
  )
}

export default Carousel