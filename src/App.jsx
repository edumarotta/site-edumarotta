import { GlobalStyle } from "./assets/styles/global";
import AboutMe from "./components/AboutMe/AboutMe";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Portifolio from "./components/Portifolio/Portifolio";

function App() {
  return (
    <>
      <GlobalStyle/>
      <Header/>
      <Home/>
      <AboutMe/>
      <Portifolio/>
    </>
  );
}

export default App;
