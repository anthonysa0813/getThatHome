import styled from "styled-components";

export const PropertyByIdContainer = styled.div`
  margin-block-start: 40px;
  display: grid;
  grid-template-columns: 70% 30%;
  .boxImage img {
    height: 384px;
    object-fit: cover;
  }
  .infoHead {
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid var(--dark-pink);
  }
  .address h2 {
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 400;
    font-size: 36px;
    line-height: 48px;
    /* identical to box height, or 133% */
    display: inline-block;
    letter-spacing: 0.25px;

    /* DarkGray */

    color: #373737;

    margin-block: 0;
  }
  .priceBlock {
    font-style: normal;
    font-weight: 400;
    font-size: 36px;
    line-height: 48px;
    /* identical to box height, or 133% */

    letter-spacing: 0.25px;

    /* DarkGray */

    color: #373737;
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }

  .infoExtra {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    padding-block: 1rem;
    border-bottom: 1px solid var(--dark-pink);
    .col {
      display: flex;
      column-gap: 6px;
    }
  }
  .aboutProperty {
    h4 {
      color: var(--dark-pink);
    }
  }
`;
