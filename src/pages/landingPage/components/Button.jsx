import { iconList } from "../../../assets/icons/iconList";
import { StyledButton } from "../styles/header";

function Button({ color, text, iconName = "", extraClass = "" }) {
  console.log();
  return (
    <StyledButton className={`bg-${color} ${extraClass}`}>
      <i className={iconList[iconName]}></i>
      {text}
    </StyledButton>
  );
}

export default Button;
