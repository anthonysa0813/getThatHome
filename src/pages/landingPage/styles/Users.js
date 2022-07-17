import styled from "styled-components";

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(97, 97, 97, 0.75);
  display: flex;
  justify-content: center;
  padding-top: 96px;
  z-index: 1000;
`;

export const LoginFormContainer = styled.form`
  padding: 1rem;
  border-radius: 0.5rem;
  background-color: var(--color-white);
  display: flex;
  flex-direction: column;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
  height: 300px;
  width: 400px;
  gap: 0.5rem;
  position: relative;
  z-index: 100;

  .close {
    position: absolute;
    top: calc(-15px);
    right: calc(-15px);
    width: 30px;
    height: 30px;
    background-color: var(--dark-pink);
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    color: white;
  }
  .field {
    display: flex;
    flex-direction: column;
    input {
      padding: 0.5rem;
    }
  }
  button {
    display: inline-block;
  }
`;

export const RegisterContainer = styled.div`
  .hero {
    height: 350px;
    background: rgba(244, 143, 177, 0.15);
    padding-top: 64px;
  }
  .selectionRegister {
    display: flex;
    justify-content: center;
    column-gap: 54px;
  }
`;

export const CardSelection = styled.div`
  padding: 1rem;
  background-color: white;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
`;

export const FooterUserContainer = styled.div``;

export const FormRegisterForm = styled.form`
  padding: 1rem;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
  background-color: var(--color-white);
  width: 390px;
  margin: 0 auto;
  margin-block-start: 10%;
  border-radius: 8px;
  .formFields {
    display: flex;
    flex-direction: column;
    row-gap: 0.5rem;
    margin-block-end: 1rem;
    .field {
      display: flex;
      flex-direction: column;
      input {
        padding: 0.5rem;
        border-radius: 0.5rem;
        border: 1px solid var(--color-pink100);
      }
    }
  }
`;
