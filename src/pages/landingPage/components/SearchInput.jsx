function SearchInput(props) {
  return(
    <div>
      <label>{props.label}</label>
      <select>
        {props.options.map( (item, index) =>{return(<option key={index}>{item}</option>)})}
      </select>
    </div>
  )

}
export default SearchInput