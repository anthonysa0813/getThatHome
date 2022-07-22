import styled from "styled-components";

export const FilterContainer = styled.div`
  padding-block: 2rem;
  display: flex;

  justify-content: space-between;
  .buttonJoin {
    display: flex;
    column-gap: 1rem;
    row-gap: 1rem;
  }
  .input-container {
    display: flex;
    align-items: center;
    width: 240px;
    border: 1px solid var(--color-pink100);
    padding: 11px 9px;
    border-radius: 8px;
    input {
      border: none;
      outline: none;
    }
  }
`;
