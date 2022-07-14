import styled from "styled-components";

export const TeamContainer = styled.div`
  padding-block: 64px;
  .teamLayout {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 64px;
  }
`;

export const TeammateContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  .teamImage {
  }
  .socialBox {
    display: flex;
    justify-content: space-around;
  }
`;
