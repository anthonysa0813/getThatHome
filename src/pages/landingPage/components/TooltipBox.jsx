import React from "react";
import styled from "styled-components";

const StyledToolkit = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  box-shadow: 0px 5px 10px rgba(0,0,0,0.2);

  & button{
    background-color: hotpink;
    color: white;
    border: 0px;
    border-radius: 5px;
    width: 60px;
    height: 32px;
    margin: 10px 0px 5px 0px;
    align-self: end;
  }
`

const TooltipBox = ({ children }) => {
  return (
    <StyledToolkit>
      {children}
      <button>Done</button>
    </StyledToolkit>
  );
};

export default TooltipBox;
