import SearchBox from "../components/SearchBox"
import { SearchContainer } from "../styles/search"

function Search(){
  return(
    <SearchContainer> 
      <h2>Meet your new Home</h2>
      <div> The easiest way to find where you belong</div>
      <SearchBox/>
    </SearchContainer>
  )

}

export default Search