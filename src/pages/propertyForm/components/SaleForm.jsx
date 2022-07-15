import Button from "../../landingPage/components/Button"

function SaleForm(){
  return(
    <form>
      <label>ADDRESS</label>
      <input placeholder='start typing to autocomplete'></input>

      <label>PRICE</label>
      <input placeholder='2000'></input>

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

      <label>ABOUT THIS PROPERTY</label>
      <textarea placeholder="My apartment is great because..."></textarea>
      <p>Renters will read this first, so highlight any features or important information the apartment has</p>
    
      <h3>Photos</h3>

      <label>UPLOAD AS MANY PHOTOS AS YOU WISH</label>
      

      <Button text='PUBLISH PROPERTY LISTING'/>

    </form>
  )
}

export default SaleForm