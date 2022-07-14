import "remixicon/fonts/remixicon.css";
import { iconList } from "../../../assets/icons/iconList";
import { IconBox } from "../styles/carousel";
function IconLabel(props) {
  return (
    <IconBox>
      <i className={iconList[props.icon]}></i>
      <div>{props.text}</div>
    </IconBox>
  );
}

export default IconLabel;
