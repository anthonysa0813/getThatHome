import styled from "styled-components";

export const CarouselContainer = styled.div`
  padding-block: 4rem;
`;

export const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 48px;
`;

export const Card = styled.div`
  .cardImage img {
    width: 100%;
    object-fit: cover;
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
