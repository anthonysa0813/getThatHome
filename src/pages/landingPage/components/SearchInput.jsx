import { SearchInputStyle } from "../styles/header";
import styled from "styled-components";

const StyledOption = styled.option`
  
`

function SearchInput(props) {
  return (
    <SearchInputStyle>
      <label>{props.label}</label>
      <select>
        {props.options.map((item, index) => {
          return <option value={item[1]} key={index}>{item[0]}</option>;
        })}
      </select>
    </SearchInputStyle>
  );
}
export default SearchInput;
