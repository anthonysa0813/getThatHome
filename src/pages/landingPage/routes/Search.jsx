import SearchBox from "../components/SearchBox";
import { SearchContainer } from "../styles/search";

function Search() {
  return (
    <SearchContainer className=" text-center">
      <h2>Meet your new Home</h2>
      <p> The easiest way to find where you belong</p>
      <SearchBox />
    </SearchContainer>
  );
}

export default Search;
