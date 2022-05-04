import React from "react";
import styled from "styled-components";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Routes, Route } from "react-router-dom";
import Header from "./views/Header";
import Hero from "./views/Hero/Hero";
import Video from "./views/Video";
import Plot from "./views/Plot/Plot";
import Slogan from "./views/Slogan/Slogan";
import Member from "./views/Member/Member";
import Ecosystem from "./views/Ecosystem/Ecosystem";
import Future from "./views/Future/Future";
import Plan from "./views/Plan/Plan";
import Journeys from "./views/Journey/Journeys";
import Partner from "./views/Partner/Partner";
import Contact from "./views/Contact/Contact";
import Footer from "./views/Footer/Footer";

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
