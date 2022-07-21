import InputWithIcon from "../../propertyForm/components/InputWithIcon"
import FiltersButton from "./FiltersButton"
import Dropdown from "./Dropdown"

function Filters({filters, setFilters}){

  function handlePriceButton(){

    if (filters.pets == true){
      setFilters({pets: false})
    } else {
      setFilters({pets: true})
    }
    console.log(filters.pets),
    console.log('Pets clicked')
  }


  return(
    <div>
      <InputWithIcon iconType='search' placeholder="Search by address" name='search'/>
      <FiltersButton onClick={handlePriceButton} text='PRICE'/>
      <FiltersButton text='PROPERTY TYPE'/>
      <FiltersButton text="BEDS & BATHS"/>
      <FiltersButton text='MORE'/>
      <Dropdown/>
    </div>
  )

}

export default Filters