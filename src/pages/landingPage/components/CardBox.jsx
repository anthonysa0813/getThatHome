import IconLabel from "./IconLabel"

function CardBox(props) {
  
  function PetBox(){
    if (props.pets == 'true') {
      return (<IconLabel icon='pets'/>)
    }   
  }

  return(
    <div>
      <img src='src/assets/images/Property-1.png'></img>
      <div>
        <IconLabel icon='dollar' text={props.price}/>
        <IconLabel icon='building' text={props.property}/>
      </div>
      <div>
        86872 Jacob Gateway,<br/>
        Durganport, WV 48044
      </div>
      <div>
        <IconLabel icon='beds' text={props.beds}/>
        <IconLabel icon='bathroom' text={props.bathroom}/>
        <IconLabel icon='area' text={props.area + 'm2'}/>
        {PetBox()}
      </div>
    </div>
  )

}

export default CardBox