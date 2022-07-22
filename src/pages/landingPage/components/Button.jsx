import { Link } from "react-router-dom";
import { iconList } from "../../../assets/icons/iconList";
import { StyledButton } from "../styles/header";

function Button({ color, text, iconName = "", extraClass = "" ,onClick={}}) {
  return (
    <StyledButton className={`bg-${color} ${extraClass}`}>
      <Link to="/register">
        <i className={iconList[iconName]}></i>
        <p>{text}</p>
      </Link>
    </StyledButton>
  );
}

export default Button;
