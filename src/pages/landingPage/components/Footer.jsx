import { FooterMain } from "../styles/footerMain";
import IconLabel from "./IconLabel";

function Footer() {
  return (
    <FooterMain>
      <div className="wrapper">
        <div className="footerContainer">
          <div className="field">
            <p>2022 - Find That Home</p>
          </div>
          <div className="field">
            <p className="title-block"> Source Code</p>
            <div className="stackBox">
              <IconLabel icon="ruby" text="Ruby on Rails REST API" />
              <IconLabel icon="react" text="React Responsive SPA" />
            </div>
          </div>
          <div className="field">
            <p>Codeable - Cohort 6 Final Project</p>
          </div>
        </div>
      </div>
    </FooterMain>
  );
}

export default Footer;
