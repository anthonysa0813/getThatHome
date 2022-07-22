import { useState } from "react";
import TooltipBox from "./TooltipBox";
import styled from "styled-components";

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  & .button{
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: hotpink;
    color: white;
    height: 40px;
    width: 135px;
    border-radius: 50px;
  }
`

function FiltersButton({ text, onClick, children }) {
  const [currentTooltipActive, setCurrentTooltipActive] = useState(false);

  return (
    <ButtonContainer>
      <div className='button' onClick={() => setCurrentTooltipActive(!currentTooltipActive)}>
        {text}
      </div>
      {currentTooltipActive && <TooltipBox>{children}</TooltipBox>}
    </ButtonContainer>
  );
}

export default FiltersButton;
