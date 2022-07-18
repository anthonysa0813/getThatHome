import { StyledSearchBox } from "../styles/header";
import Button from "./Button";
import SearchInput from "./SearchInput";

function SearchBox() {
  return (
    <StyledSearchBox className="text-center">
      <div className="field">
        <SearchInput
          label="I'M LOOKING FOR"
          options={["An Apartment", "A House"]}
        />
      </div>
      <div className="field">
        <SearchInput label="I WANT TO" options={["Rent", "Buy"]} />
      </div>
      <div className="field">
        <SearchInput label="WHERE" options={[]} />
      </div>
      <div className="buttonContent">
        <Button text="SEARCH" color="pink" extraClass="text-white" />
      </div>
    </StyledSearchBox>
  );
}

export default SearchBox;
