import smileImage from "./img/smile.svg"
import punkImage from "./img/punk.svg"
import asianImage from "./img/asian-traditional.svg"
import hipsterImage from "./img/hipster.svg"
import gentlmanImage from "./img/gentleman-men.svg"
import HeaderComponent from "./Components/HeaderComponent/HeaderComponent"
import SmileComponent from "./Components/SmileComponent/SmileComponent"
import ShowResultsComponent from "./Components/ShowResultsComponent/ShowResultsComponent"

function App() {
  return (
    <>
      <HeaderComponent></HeaderComponent>
      <SmileComponent src={smileImage} id="smileEl-id" />
      <SmileComponent src={punkImage} id="punkEl-id" />
      <SmileComponent src={asianImage} id="asianEl-id" />
      <SmileComponent src={hipsterImage} id="hipsterEl-id" />
      <SmileComponent src={gentlmanImage} id="gentMan-id" />
      <br></br>
      <ShowResultsComponent />
    </>
  )
}

export default App
