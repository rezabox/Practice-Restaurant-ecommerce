import Header from "./Components/Navbar/Header";
import Section from "./Components/Section1/Section";
import SectionMenu from "./Components/Section2/SectionMenu";
import SectionNews from "./Components/Section3/SectionNews";
import Slider from "./Components/slider/Slider";

function App() {
  return (
    <div className="App">
       <Header/>
       <Slider/>
       <br/>
       <br/>
       <br/>
       <Section/> 
       <br/>
       <br/>
       <SectionMenu/>
       <br/>   
       <br/>
       <SectionNews/>
       <br/>
       <br/>
       <br/>

    </div>
  );
}

export default App;
