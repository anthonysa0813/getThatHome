import styled from "styled-components"

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin: 0 15%;
  & .text-box{
    display: flex;
    flex-direction: column;
    padding: 8px 0px;
    & label{
      font-size: 10px;
    }
  }
  & .address{
    height: 40px;
    border-radius: 8px;
    border: 1px solid pink;
    max-width: 50%;
    min-width: 200px;
  };
  & .prices{
    height: 40px;
    border-radius: 8px;
    border: 1px solid pink;
    max-width: 35%;
    min-width: 150px;
  };
  & .radio-box-container{
    padding: 8px 0px;
    display: flex;
    flex-direction: column;
    & .title{
      font-size: 10px;
    }
  }
  & .radio-box{
    display: flex;
  }

  
`