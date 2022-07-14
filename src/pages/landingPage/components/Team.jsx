import { TeamContainer } from "../styles/Team";
import Teammate from "./Teammate";
import avatar from "../../../assets/images/avatar.png";

function Team() {
  return (
    <TeamContainer className="">
      <div className="wrapper">
        <h3 className="text-center">Meet the team</h3>
        <div className="teamLayout">
          <Teammate github="Khmlwugh" linkedin="" photo={avatar}></Teammate>
          <Teammate github="xdxd" linkedin="" photo={avatar}></Teammate>
          <Teammate github="xdxdxd" linkedin="" photo={avatar}></Teammate>
        </div>
      </div>
    </TeamContainer>
  );
}

export default Team;
