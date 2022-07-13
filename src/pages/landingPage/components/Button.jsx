import { StyledButton } from "../styles/header"

function Button(props) {
  return (
    <StyledButton color={props.color}>
      {props.text}
    </StyledButton>
  )

}

export default Button