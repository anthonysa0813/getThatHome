import styled from "styled-components";

export const FooterMain = styled.footer`
  padding: 1rem;
  background-color: var(--bg-gray100);

  .footerContainer {
    display: flex;
    .field {
      flex: 1 0 33%;
    }
    .title-block {
      display: block;
    }
    .stackBox {
      display: flex;
      column-gap: 1rem;
    }
  }
`;
