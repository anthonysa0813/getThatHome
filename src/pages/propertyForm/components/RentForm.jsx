import Button from "../../landingPage/components/Button"
import { Form } from "../styles/Form"

function RentForm(){
  return(
    <Form>
      <div className="text-box"> 
        <label>ADDRESS</label>
        <input className='address' placeholder='start typing to autocomplete'></input>
      </div>

      <div className="text-box">
        <label>MONTHLY RENT</label>
        <input className='prices' placeholder='2000'></input>
      </div>

      <div className="text-box">
        <label>MAINTANANCE</label>
        <input className='prices' placeholder='100'></input>
      </div>

      <div className='radio-box-container'>
        <label className="title">PROPERTY TYPE</label>
        <div className='radio-box'>
          <input name='property_type' type='radio' value='Apartment'/>
          <label>Apartment</label>
          <input name='property_type' type='radio' value='House'/>
          <label>House</label>
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

      <input id='pets' name='pets' type="checkbox" value="pets"/>
      <label htmlFor='pets'>Pets allowed</label>

      <p>Allowing pets increases the likelyhood of renters liking the property by 9001%.</p>

      <label>ABOUT THIS PROPERTY</label>
      <textarea placeholder="My apartment is great because..."></textarea>
      <p>Renters will read this first, so highlight any features or important information the apartment has</p>

      <h3>Photos</h3>

      <label>UPLOAD AS MANY PHOTOS AS YOU WISH</label>
      

      <Button text='PUBLISH PROPERTY LISTING'/>
    </Form>
  )

}

export default RentForm