import InputWithIcon from "../../propertyForm/components/InputWithIcon";
import FiltersButton from "./FiltersButton";
import Dropdown from "./Dropdown";
import { FilterContainer } from "../styles/FilterMenu";
import styled from "styled-components";

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;

  & .range-container{
    display: flex;
    flex-direction: row;
    & input{
      width: 50px;
    }}

  & .bed-bath-container{
    display: flex;
    border-radius: 50px;
    & div{
      display: flex;
      justify-content: center;
      align-items: center;
      border: 1px solid black;
      width: 50px;
      height: 40px;
    }
  }
  }
`




function Filters({ filters, setFilters }) {
  function handlePriceButton() {
    if (filters.pets == true) {
      setFilters({ pets: false });
    } else {
      setFilters({ pets: true });
    }
    console.log(filters.pets), console.log("Pets clicked");
  }

  function handleClick(number){
    setFilters({...filters, beds: number })

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
          <StyledContainer>
            <span>PRICE RANGE</span>
            <div className="range-container">
              <InputWithIcon iconType='dollar' placeholder='min'/>
              <p>&nbsp; to &nbsp;</p>
              <InputWithIcon iconType='dollar' placeholder='max'/>
            </div>
          </StyledContainer>
        </FiltersButton>
        <FiltersButton text="PROPERTY TYPE">
          <StyledContainer>
            <span>PROPERTY TYPE</span>
            <div>
              <input id='house' type='checkbox'/> <label htmlFor="house">Houses</label>
            </div>
            <div>
              <input id='apartment' type='checkbox'/> <label htmlFor='apartment'>Apartments</label >
            </div>
          </StyledContainer>
        </FiltersButton>
        <FiltersButton text="BEDS & BATHS">
          <StyledContainer>
            <span>BEDS</span>
            <div className="bed-bath-container">
              <div>Any</div>
              <div onClick={console.log('clicked')}>1+</div>
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
              <input id='pets' type='checkbox'/> <label htmlFor='pets'>Pets Allowed</label>
            </div>
            <span>AREA IN M2</span>
            <div className="range-container">
              <input type='text' placeholder='min'/>
              <p>&nbsp; to &nbsp;</p>
              <input type='text' placeholder='max'/>      
            </div>
          </StyledContainer>
        </FiltersButton>
      </div>
      <Dropdown />
    </FilterContainer>
  );
}

export default Filters;
