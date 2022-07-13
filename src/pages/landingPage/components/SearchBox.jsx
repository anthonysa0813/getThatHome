import { StyledSearchBox } from "../styles/header"

function SearchBox() {
  return(
    <StyledSearchBox>
      <label>I'M LOOKING FOR</label>
      <select>
        <option>A House</option>
        <option>An Apartment</option>
      </select>
    </StyledSearchBox>
  )
}

export default SearchBox