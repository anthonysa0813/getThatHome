import { Link } from "react-router-dom";
import { iconList } from "../../../assets/icons/iconList";
import { StyledButton } from "../styles/header";

function Button({ color, text, iconName = "", extraClass = "" }) {
  return (
    <StyledButton className={`bg-${color} ${extraClass}`}>
      <Link to="/register">
        <i className={iconList[iconName]}></i>
        {text}
      </Link>
    </StyledButton>
  );
}

export default Button;
