import styled from "styled-components";

export const CarouselContainer = styled.div`
  padding-block: 4rem;
`;

export const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 86px;
  row-gap: 32px;
  margin-block: 1rem;
`;

export const Card = styled.div`
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  background-color: var(--color-white);
  border-bottom: 7px solid #bf5f82;
  position: relative;
  .operationType {
    position: absolute;
    top: 0;
    right: 0;
    color: white;
    background-color: var(--color-pink100);
    padding: 4px 10px;
    border-top-right-radius: 8px;
  }
  .cardImage img {
    width: 100%;
    object-fit: cover;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
  }
  .cardBody {
    padding: 10px;
  }

  .card-head {
    display: flex;
    justify-content: space-between;
  }
`;

export const IconBox = styled.div`
  display: flex;
  column-gap: 10px;
  align-items: center;
`;

export const DirBox = styled.div`
  text-align: left;
  margin-block: 8px 25px;
`;

export const ExtraInfo = styled.div`
  display: flex;
  column-gap: 18px;
`;
