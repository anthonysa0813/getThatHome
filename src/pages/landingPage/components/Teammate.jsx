import { iconList } from "../../../assets/icons/iconList"

function Teammate(props){
  return(
    <div>
      <img></img>
      <a href={"https://github.com/" + props.github}>
        <i className={iconList['github']} ></i>
      </a>
      <a href={"https://www.linkedin.com/in/" + props.linkedin}>
        <i className={iconList['linkedin']} ></i>
      </a>
    </div>
  )

}

export default Teammate