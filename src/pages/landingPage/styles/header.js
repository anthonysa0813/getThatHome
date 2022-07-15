import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  /* position: fixed;
  top: 0;
  left: 0;
  right: 0; */
  background-color: var(--color-white);
  justify-content: space-between;
  padding-inline: 152px;
  padding-block: 16px;
  margin-block-end: 2rem;
  /* box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2); */
  .actionsContainer {
    display: flex;
    column-gap: 1.5rem;
    align-items: center;
  }
  p {
    margin: 0;
    display: inline-block;
    margin-left: 0.5rem;
  }
`;

export const StyledButton = styled.button`
  border: none;
  border-radius: 8px;
`;

export const StyledSearchBox = styled.form`
  margin: 0 auto;
  padding: 8px;
  margin-block-start: 64px;
  display: grid;
  column-gap: 8px;
  width: 800px;
  grid-template-columns: 18% 18% 50% 14%;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  .field {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .buttonContent {
    display: flex;
    justify-content: center;
    align-items: center;
    height: auto;
  }
`;

export const SearchInputStyle = styled.div`
  label {
    display: block;
  }
  select {
    width: 100%;
  }
`;
