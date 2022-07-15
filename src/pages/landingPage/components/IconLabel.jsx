import "remixicon/fonts/remixicon.css";
import { iconList } from "../../../assets/icons/iconList";
import { IconBox } from "../styles/carousel";
function IconLabel(props) {
  return (
    <IconBox>
      <i className={iconList[props.icon]}></i>
      <p>{props.text}</p>
    </IconBox>
  );
}

export default IconLabel;
