import React from "react";
import Header from "./components/Header";
import styled from "styled-components";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Hero from "./components/Hero";
import Video from "./components/Video";
import Plot from "./components/Plot";
import Slogan from "./components/Slogan";
import Member from "./components/Member";

const ContainerApp = styled.section`
  width: 100%;
  margin-bottom: 50px;
`;

function App() {
  return (
    <ContainerApp>
      <Header></Header>
      <Hero />
      <Video />
      <Plot />
      <Slogan />
      <Member />
    </ContainerApp>
  );
}

export default App;
