import RentForm from "./RentForm"
import SaleForm from "./SaleForm"
import {useState} from 'react'

function PropertyForm(){
  const [type, setType] = useState("Rent")
  
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
        <div>
          <div onClick={() => setType("Rent")}>Rent</div>
          <div onClick={() => setType("Sale")}>Sale</div>
        </div>
        {RenderForm()}
      </div>
    </div>
  )
}

export default PropertyForm