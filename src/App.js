import React from "react";
import styled from "styled-components";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Routes, Route } from "react-router-dom";
import Header from "./module/Header";
import Hero from "./module/Hero";
import Video from "./module/Video";
import Plot from "./module/Plot";
import Slogan from "./module/Slogan";
import Member from "./module/Member";
import Ecosystem from "./module/Ecosystem";
import Future from "./module/Future";
import Plan from "./module/Plan";
import Journeys from "./module/Journeys";
import Partner from "./module/Partner";
import Contact from "./module/Contact";
import Footer from "./module/Footer";

const ContainerApp = styled.section`
  width: 100%;
  overflow: hidden;
  /* margin-bottom: 50px; */
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
      <Ecosystem />
      <Future />
      <Plan />
      <Journeys />
      <Partner />
      <Contact />
      <Footer />
    </ContainerApp>
  );
}

export default App;
