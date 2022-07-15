import Button from "../../landingPage/components/Button";
import { Form } from "../styles/Form";

function SaleForm(){
  return(
    <Form>
      <div className='text-box'>
        <label>ADDRESS</label>
        <input className='address' placeholder='start typing to autocomplete'></input>
      </div>

      <div className='text-box'>
        <label>PRICE</label>
        <input className='prices' placeholder='2000'></input>
      </div>

      <div className='radio-box-container'>
        <label className="title">PROPERTY TYPE</label>
        <div className='radio-box'>
          <input id='Apartment' name='property-type' type='radio' value='Apartment'/>
          <label htmlFor="Apartment">Apartment</label>
          <input id='House' name='property-type' type='radio' value='House'/>
          <label htmlFor='House'>House</label>
        </div>
      </div>

      <div>
        <label>BEDROOMS</label>
        <select>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </select>
        <label>BATHROOMS</label>
        <select>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </select>
        <label>AREA IN M2</label>
        <input placeholder='##'></input>
      </div>

      <label>ABOUT THIS PROPERTY</label>
      <textarea placeholder="My apartment is great because..."></textarea>
      <p>Renters will read this first, so highlight any features or important information the apartment has</p>
    
      <h3>Photos</h3>

      <label>UPLOAD AS MANY PHOTOS AS YOU WISH</label>
      

      <Button text='PUBLISH PROPERTY LISTING'/>

    </Form>
  )
}

export default SaleForm