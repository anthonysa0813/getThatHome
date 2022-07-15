import styled from "styled-components";

export const AsideContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid red;
  & .title-box{
    display:table;
    text-align: center;
    & span{
      display: table-cell;
      vertical-align: middle;
    }
  }

`