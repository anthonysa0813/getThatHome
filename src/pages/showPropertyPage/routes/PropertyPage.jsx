import Aside from "../components/Aside"
import Footer from "../components/Footer"
import NavBar from "../components/NavBar"
import PropertyDetails from "../components/PropertyDetails"
import { PropertyPageContainer } from "../styles/PropertyPageContainer"


function PropertyPage(){
  return(
    <div>
      <NavBar></NavBar>
      <PropertyPageContainer>
        <PropertyDetails/>
        <Aside/>
      </PropertyPageContainer>
      <Footer/>
    </div>
  )
}

export default PropertyPage