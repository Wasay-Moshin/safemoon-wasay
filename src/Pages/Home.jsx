import React from 'react'
import Hero from '../Component/Elements/Hero';
import Section1 from '../Component/Elements/Section1';
import Section2 from "../Component/Elements/Section2";
import Section3 from "../Component/Elements/Section3";
import Section4 from "../Component/Elements/Section4";
import Section5 from "../Component/Elements/Section5";
function Home() {
  return (
    <div>
      <Hero/>
      <Section1/>
      <Section2/>
      <Section3 />
      <Section4/>
      <Section5/>
    </div>
  )
}

export default Home
