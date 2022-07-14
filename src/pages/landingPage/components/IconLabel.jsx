import 'remixicon/fonts/remixicon.css'
import { iconList } from '../../../assets/icons/iconList'
function IconLabel(props){

  return(
    <div>
      <i className={iconList[props.icon]}></i>
      <div>{props.text}</div>
    </div>
  )
}

export default IconLabel