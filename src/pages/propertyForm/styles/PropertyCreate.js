import styled from "styled-components";

export const PropertyCreateContainer = styled.form`
  color: var(--color-dark);
  .field {
    display: flex;
    flex-direction: column;
    row-gap: 0.25rem;

    .col {
      display: flex;
      flex-direction: column;
      select,
      input {
        padding: 8px;
        margin-block-start: 0.25rem;
        border: 1px solid var(--color-pink100);
        background-color: var(--white);
        border-radius: 8px;
        color: var(--color-dark);
      }
    }

    &.pets {
      display: flex;
      flex-direction: row;
    }
    textarea {
      padding: 8px;
      border: 1px solid var(--color-pink100);
      border-radius: 8px;
    }
    .inputFile {
      background-color: var(--color-pink100);
      border: none;
      input {
        background-color: var(--color-pink100);
      }
    }
    .optionBox {
      display: flex;
      column-gap: 1rem;
    }
  }
  .grid-column {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 1rem;
  }
  .field-container {
    display: flex;
    flex-direction: column;
    row-gap: 1rem;
  }
  padding-inline: 152px;
  h3 {
    margin-block-end: 1rem;
  }
  .op-type {
    display: flex;
    border-radius: 8px;
    width: 100px;
    border: 1px solid var(--color-dark);
    .rent_type {
      border-right: 1px solid var(--color-dark);
      padding: 8px 9px;
      width: 50px;
    }
    .sale_type {
      padding: 8px 9px;
      width: 50px;
    }
  }

  .input-container {
    padding: 9px 11px;
    border-radius: 8px;
    display: flex;
    column-gap: 8px;
    input {
      border: none;
      display: block;
      width: 100%;
      outline: none;
    }
    border: 1px solid var(--color-pink100);
  }
  .photoSection {
    height: 150px;
    background-color: #f5f5f6;
    display: flex;
    align-items: center;
    padding: 8px;

    border-radius: 8px;
    .miniPhoto,
    .boxImage {
      width: 120px;
      border-radius: 8px;

      height: 120px;
      background-color: #e1e2e1;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }
  padding-block: 2rem;
  button[type="submit"] {
    padding: 16px 24px;
    margin-block-start: 1rem;
    background-color: var(--color-pink100);
    color: white;
  }
`;
