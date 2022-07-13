import { StyledSearchBox } from "../styles/header"
import Button from "./Button"
import SearchInput from "./SearchInput"

function SearchBox() {
  return(
    <StyledSearchBox>
      <SearchInput label="I'M LOOKING FOR" options={['An Apartment' , 'A House']}/>
      <SearchInput label="I WANT TO" options={['Rent' , 'Buy']}/>
      <SearchInput label="WHERE" options={[]}/>
      <Button text='SEARCH'/>
    </StyledSearchBox>
  )
}

export default SearchBox