import styled from "styled-components"

import IconLabel from "../pages/landingPage/components/IconLabel"

const StyledFooter = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: #F5F5F6;
  position: absolute;
  bottom: 0;
  width: 100vw;
  padding: 20px 100px;

  & .footerLeftContainer{
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;
    & div{
      padding: 2px 0px;
    }
  }

  & .footerMiddleContainer{
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;
    & div{
      padding: 2px 0px;
    }
  }

  & .iconContainer{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

    & div{
      width: 50%;
    }

  }
  & .sourceContainer{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    & div{
      padding: 2px 0px;
    }
  }
`

function Footer(){
  return(
    <StyledFooter>
      <div className='footerLeftContainer'>
        <div><img src='src/assets/images/Logo.png' alt=''></img></div>
        <div>© 2021 - Get That Home</div>
        <div>Codeable - Cohort 6 Final Project</div>
      </div>
      <div className="footerMiddleContainer">
        <span>Build with ♥ by:</span>
        <div className='iconContainer'>
          <IconLabel icon='github' text='Ruby Ramirez'/>
          <IconLabel icon='github' text='Raul Rubina'/>
          <IconLabel icon='github' text='Javier Escribano'/>
          <IconLabel icon='github' text='Francisca Reategui'/>
        </div>
      </div>
      <div className="sourceContainer">
        <div>Source code:</div>
        <div>
          <IconLabel icon='ruby' text='Ruby on Rails REST API'/>
          <IconLabel icon='react' text='React Response SPA'/>
        </div>
      </div>
    </StyledFooter>
  )

}

export default Footer