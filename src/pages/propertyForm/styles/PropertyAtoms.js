import styled from "styled-components";

export const BoxAgent = styled.div`
  padding: 1rem;
  background: #ffffff;
  /* Elevation1 */

  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  .seekerContent {
    display: flex;
    flex-direction: column;
    row-gap: 1.5rem;
  }
  .icon-filledheart {
    &:hover {
      color: pink;
    }
  }
  .activeFav {
    color: pink;
  }
  .color-pink {
    color: pink;
  }
`;
