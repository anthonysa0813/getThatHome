import Button from "../../landingPage/components/Button"

function RentForm(){
  return(
    <form>
      <label>ADDRESS</label>
      <input placeholder='start typing to autocomplete'></input>

      <label>MONTHLY RENT</label>
      <input placeholder='2000'></input>

      <label>MAINTANANCE</label>
      <input placeholder='100'></input>

      <label>PROPERTY TYPE</label>
      <input name='property_type' type='radio' value='Apartment'/>
      <label>Apartment</label>
      <input name='property_type' type='radio' value='House'/>
      <label>House</label>

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
    </form>
  )

}

export default RentForm