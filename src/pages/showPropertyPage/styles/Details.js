import styled from "styled-components"

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 70vw;
  margin: 0 10%;

  & .image-box{
    display: flex;
    align-items:center;
  }
  & .title-container{
    display: flex;
    margin: 10px 0px;
  }
  & .title-box{
    & h2{
      font-size: 36px;
      margin: 0px;
    }
  }
  & .price-box{
    width: 100px;
    display: flex;
    flex-direction: column;
    & div{
      display: flex;
      justify-content: flex-end;
    }
  }

  & .features{
    display: flex;
    border: 2px solid pink;
    border-style: solid hidden;
    padding: 15px 0;
    justify-content: center;
    & div{
      font-size: 24px;
    }
    }

  & .description-box{
    width: 100%;
    & h3{
      color: pink;
    }
  }

  & .location-box{
    width: 100%;
    & h3{
      color: pink;
    }
  }
  }
`
