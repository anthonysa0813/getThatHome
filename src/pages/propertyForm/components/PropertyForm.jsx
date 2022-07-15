import RentForm from "./RentForm"
import SaleForm from "./SaleForm"
import {useState} from 'react'
import { SlideOptions } from "../styles/SlideOptions"

function PropertyForm(){
  const [type, setType] = useState("Rent")
  const [rentclass, setRentclass] = useState("focus")
  const [saleclass, setSaleclass] = useState("off")
  
  function RenderForm(){
    if(type=='Rent'){
      return (
        <RentForm/>
      )} else {
        return(
          <SaleForm/>
        )
      } 
    }
  

  return(
    <div>
      <h2>Create a property listing</h2>
      <div>
        <div>OPERATION TYPE</div>
        <SlideOptions>
          <div className={rentclass} onClick={() => {
            setType("Rent");
            setRentclass("focus");
            setSaleclass("off");
            }}>Rent</div>
          <div className={saleclass} onClick={() => {
            setType("Sale");
            setRentclass("off");
            setSaleclass("focus");
            }}>Sale</div>
        </SlideOptions>
        {RenderForm()}
      </div>
    </div>
  )
}

export default PropertyForm