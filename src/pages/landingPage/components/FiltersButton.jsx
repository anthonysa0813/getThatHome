function FiltersButton({text, onClick}){

  return(
    <div onClick={onClick}>
      {text}
    </div>
  )
}

export default FiltersButton