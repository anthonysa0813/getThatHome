import styled from "styled-components";

export const SlideOptions = styled.div`
  display: flex;
  border-radius: 70px;
  & .focus{
    height: 40px;
    width: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid black;
    background-color: pink;
    color: white;
  }
  & .off{
    height: 40px;
    width: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid black;
    background-color: white;
    color: black;
  }
`

