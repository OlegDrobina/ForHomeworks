import HeaderComponent from "./HeaderComponent/HeaderComponent"
import SmileComponent from "./SmileComponent/SmileComponent"
import ShowResultsComponent from "./ShowResultsComponent/ShowResultsComponent"
import smileImage from "./img/smile.svg"
import punkImage from "./img/punk.svg"
import asianImage from "./img/asian-traditional.svg"
import hipsterImage from "./img/hipster.svg"
import gentlmanImage from "./img/gentleman-men.svg"

function App() {

  return (
    <>
    <HeaderComponent></HeaderComponent>
    <br></br>
    <SmileComponent src={smileImage} id="smileEl-id"></SmileComponent>
    <SmileComponent src={punkImage} id="punkEl-id"></SmileComponent>
    <SmileComponent src={asianImage} id="asianEl-id"></SmileComponent>
    <SmileComponent src={hipsterImage} id="hipsterEl-id"></SmileComponent>
    <SmileComponent src={gentlmanImage} id="gentMan-id"></SmileComponent>
    <br></br>
    <ShowResultsComponent></ShowResultsComponent>
    </>
  )
}

export default App
