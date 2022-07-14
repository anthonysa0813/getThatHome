import { iconList } from "../../../assets/icons/iconList";
import { TeammateContainer } from "../styles/Team";

function Teammate(props) {
  return (
    <TeammateContainer>
      <div className="teamImage ">
        <img src={props.photo}></img>
      </div>
      <div className="extraInfo">
        <h4>Javier Escribano</h4>
        <div className="socialBox ">
          <a href={"https://github.com/" + props.github}>
            <i className={iconList["github"]}></i>
          </a>
          <a href={"https://www.linkedin.com/in/" + props.linkedin}>
            <i className={iconList["linkedin"]}></i>
          </a>
        </div>
      </div>
    </TeammateContainer>
  );
}

export default Teammate;
