import React from "react";
import Header from "./components/Header";
import styled from "styled-components";

import Hero from "./components/Hero";
import Video from "./components/Video";
import Plot from "./components/Plot";
import Slogan from "./components/Slogan";

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
    </ContainerApp>
  );
}

export default App;
