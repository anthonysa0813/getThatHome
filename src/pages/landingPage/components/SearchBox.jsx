import { SearchInputStyle, StyledButton, StyledSearchBox } from "../styles/header";
import Button from "./Button";
import SearchInput from "./SearchInput";
import { useState } from "react";
import { Link } from "react-router-dom";


function SearchBox() {

  const [mainPageFilters, setMainPageFilters] = useState({})

  return (
    <StyledSearchBox className="text-center">
      <div className="field">
        <SearchInput
          label="I'M LOOKING FOR"
          options={[["An Apartment", "apartment"], ["A House", "house"]]}
        />
      </div>
      <div className="field">
        <SearchInput label="I WANT TO" options={[["Rent", "rent"],["Buy", "buy"] ]} />
      </div>
      <div className="whereField">
        <SearchInputStyle>
          <label>WHERE</label>
          <input placeholder='Favourite district' type='text' value={mainPageFilters.where} onChange={(e)=>{
            setMainPageFilters({...mainPageFilters ,where: e.target.value})
          }}/>
        </SearchInputStyle>
      </div>
      <div className="buttonContent">
        <Link to='/properties' className='bg-pink text-white'>
          <div>
            SEARCH
          </div>
        </Link>

      </div>
    </StyledSearchBox>
  );
}

export default SearchBox;
