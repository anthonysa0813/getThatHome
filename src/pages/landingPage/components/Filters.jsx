import InputWithIcon from "../../propertyForm/components/InputWithIcon";
import FiltersButton from "./FiltersButton";
import Dropdown from "./Dropdown";
import { FilterContainer } from "../styles/FilterMenu";
import styled from "styled-components";
import { useState } from "react";

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
  border-radius: 8px;

  & .range-container {
    display: flex;
    flex-direction: row;
    & input {
      width: 50px;
    }
  }

  & .bed-bath-container {
    display: flex;
    border-radius: 50px;
    & div {
      display: flex;
      justify-content: center;
      align-items: center;
      border: 1px solid black;
      width: 50px;
      height: 40px;
    }
  }
`;

function Filters({ filters, setFilters }) {
  const [typeProperty, setTypeProperty] = useState(true);
  function handlePriceButton() {
    if (filters.pets == true) {
      setFilters({ pets: false });
    } else {
      setFilters({ pets: true });
    }
    console.log(filters.pets), console.log("Pets clicked");
  }

  function handleClick(number) {
    setFilters({ ...filters, beds: number });
  }

  const handleChange = (e) => {
    console.log(e.target.value);
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const changeInputType = (e) => {
    console.log(e.target);
    setFilters({
      ...filters,
      ["property_type"]: typeProperty ? "house" : "apartment",
    });
  };

  return (
    <FilterContainer>
      <InputWithIcon
        iconType="search"
        placeholder="Search by address"
        name="search"
        value={filters.search}
        onChange={handleChange}
      />
      <div className="buttonJoin">
        <FiltersButton onClick={handlePriceButton} text="PRICE">
          <StyledContainer>
            <span>PRICE RANGE</span>
            <div className="range-container ">
              <InputWithIcon
                iconType="dollar"
                name="minPrice"
                value={filters.minPrice}
                onChange={handleChange}
                placeholder="min"
              />
              <p>&nbsp; to &nbsp;</p>
              <InputWithIcon
                iconType="dollar"
                name="maxPrice"
                value={filters.maxPrice}
                onChange={handleChange}
                placeholder="max"
              />
            </div>
          </StyledContainer>
        </FiltersButton>
        <FiltersButton text="PROPERTY TYPE">
          <StyledContainer>
            <span>PROPERTY TYPE</span>
            <div>
              <input
                id="house"
                type="radio"
                name="property_type"
                onChange={changeInputType}
                onClick={() => setTypeProperty(!typeProperty)}
              />{" "}
              <label htmlFor="house">Houses</label>
            </div>
            <div>
              <input
                id="apartment"
                type="radio"
                name="property_type"
                onChange={changeInputType}
                onClick={() => setTypeProperty(!typeProperty)}
              />{" "}
              <label htmlFor="apartment">Apartments</label>
            </div>
          </StyledContainer>
        </FiltersButton>
        <FiltersButton text="BEDS & BATHS">
          <StyledContainer>
            <span>BEDS</span>
            <div className="bed-bath-container">
              <div>Any</div>
              <div>1+</div>
              <div onClick={console.log("clicked")}>1+</div>
              <div>2+</div>
              <div>3+</div>
              <div>4+</div>
            </div>
            <span>BATHS</span>
            <div className="bed-bath-container">
              <div>Any</div>
              <div>1+</div>
              <div>2+</div>
              <div>3+</div>
              <div>4+</div>
            </div>
          </StyledContainer>
        </FiltersButton>
        <FiltersButton text="MORE">
          <StyledContainer>
            <div>
              <input id="pets" type="checkbox" />{" "}
              <label htmlFor="pets">Pets Allowed</label>
            </div>
            <span>AREA IN M2</span>
            <div className="range-container">
              <input type="text" placeholder="min" />
              <p>&nbsp; to &nbsp;</p>
              <input type="text" placeholder="max" />
            </div>
          </StyledContainer>
        </FiltersButton>
      </div>
      <Dropdown />
    </FilterContainer>
  );
}

export default Filters;
