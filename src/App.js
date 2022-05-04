import React from "react";
import styled from "styled-components";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Routes, Route } from "react-router-dom";
import Header from "./views/Header";
import Hero from "./views/Hero";
import Video from "./views/Video";
import Plot from "./views/Plot";
import Slogan from "./views/Slogan";
import Member from "./views/Member";
import Ecosystem from "./views/Ecosystem";
import Future from "./views/Future";
import Plan from "./views/Plan";
import Journeys from "./views/Journeys";
import Partner from "./views/Partner";
import Contact from "./views/Contact";
import Footer from "./views/Footer";

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
