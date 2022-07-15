import Button from "../../landingPage/components/Button"
import IconLabel from "../../landingPage/components/IconLabel"
import { AsideContainer } from "../styles/Aside"

function Aside(){
  return(
    <AsideContainer>
      <div className="title-box">
        <span>
          Log in or Join to contact the advertiser
        </span>
      </div>
      <IconLabel icon='login' text='LOGIN'/>
    </AsideContainer>
  )
}
export default Aside
