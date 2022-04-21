import React from 'react';
import styled from "styled-components";

const VideoContainer = styled.section`
  height: 854px;
  min-height: 854px;

  .video__container {
    width: 100%;
    height: 100%;

    .video__content {
      width: 100%;
      height: 100%;
    }
  }
`;

const Video = () => {
    return (
        <VideoContainer>
        <div className="video__container">
          <iframe
            className="video__content"
            width="560"
            height="315"
            src="https://www.youtube.com/embed/k-OR5DkgsAs"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </VideoContainer>
    );
};

export default Video;