import React from 'react'
import Section from "../../Components/Section1/Section";
import SectionMenu from "../../Components/Section2/SectionMenu";
import SectionNews from "../../Components/Section3/SectionNews";
import Slider from "../../Components/slider/Slider";
function Home() {

  return (
    <div>
      <Slider/>
      <Section/>
      <SectionMenu/>
      <SectionNews/>
    </div>
  )
}

export default Home;
