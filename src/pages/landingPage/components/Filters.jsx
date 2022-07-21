import InputWithIcon from "../../propertyForm/components/InputWithIcon";
import FiltersButton from "./FiltersButton";
import Dropdown from "./Dropdown";
import { FilterContainer } from "../styles/FilterMenu";

function Filters({ filters, setFilters }) {
  function handlePriceButton() {
    if (filters.pets == true) {
      setFilters({ pets: false });
    } else {
      setFilters({ pets: true });
    }
    console.log(filters.pets), console.log("Pets clicked");
  }

  return (
    <FilterContainer>
      <InputWithIcon
        iconType="search"
        placeholder="Search by address"
        name="search"
      />
      <div className="buttonJoin">
        <FiltersButton onClick={handlePriceButton} text="PRICE">
          <h5>jejejeje</h5>
        </FiltersButton>
        <FiltersButton text="PROPERTY TYPE">
          <h5>jojojoj</h5>
          <p>Lorem ipsum dolor sit amet.</p>
        </FiltersButton>
        <FiltersButton text="BEDS & BATHS" />
        <FiltersButton text="MORE" />
      </div>
      <Dropdown />
    </FilterContainer>
  );
}

export default Filters;
