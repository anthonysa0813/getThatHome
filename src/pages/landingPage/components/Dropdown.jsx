import styled from "styled-components";

const DropdownContainer = styled.div`
  select {
    padding: 11px 9px;
    border: none;
    border: 1px solid var(--color-pink100);
    background-color: white;
    border-radius: 8px;
    outline: none;
  }
`;

function Dropdown() {
  return (
    <DropdownContainer>
      <select>
        <option>Buying & Renting</option>
        <option>Buying</option>
        <option>Renting</option>
      </select>
    </DropdownContainer>
  );
}

export default Dropdown;
