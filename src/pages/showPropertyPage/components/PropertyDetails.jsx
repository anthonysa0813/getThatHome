import IconLabel from "../../landingPage/components/IconLabel"
import { Details } from "../styles/Details"

function PropertyDetails(){
  return(
    <Details>
      <div className='image-box'>
        <img src='src/assets/images/Property-2.png' alt=''/>
      </div>
      <div className='title-container'>
        <div className='title-box'>
          <h2>Francisco de Paula Ugarriza 27</h2>
          <div>Miraflores, Lima</div>
        </div>
        <div className="price-box">
          <IconLabel icon='dollar' text='3000'/>
          <div>+100</div>
        </div>
      </div>
      <div className="features">
        <IconLabel icon='beds' text='4 bedrooms'/>
        <IconLabel icon='bathroom' text='2 bathrooms'/>
        <IconLabel icon='area' text='180 m2'/>
        <IconLabel icon='pets' text='pets allowed'/>
      </div>

      <div className="description-box">
        <h3>About this property</h3>
        <p>3 Bedroom/2 Bathroom apartment available for ASAP move-in!</p>
        <p>Apartment features hardwood floors throughout, virtual doorman, Central AC/heat, dishwasher and a microwave.</p>
        <p>The kitchen has custom cabinetry and the living room is big enough to fit a dinner table, a couch and a tv set up.</p>
      </div>

      <div className="location-box">
        <h3>Location</h3>
        <div>Francisco de Paula Ugarriza 27, Miraflores, Lima</div>
      </div>
    </Details>
  )
}

export default PropertyDetails