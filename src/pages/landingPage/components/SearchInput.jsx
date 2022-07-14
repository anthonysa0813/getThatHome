import { SearchInputStyle } from "../styles/header";

function SearchInput(props) {
  return (
    <SearchInputStyle>
      <label>{props.label}</label>
      <select>
        {props.options.map((item, index) => {
          return <option key={index}>{item}</option>;
        })}
      </select>
    </SearchInputStyle>
  );
}
export default SearchInput;
