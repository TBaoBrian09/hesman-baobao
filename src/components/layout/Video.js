import React from "react";
import styled from "styled-components";

const VideoContainer = styled.section`
  max-height: 854px;
  margin-bottom: 2px;

  .video__container {
    width: 100%;
    height: 700px;

    @media screen and (max-width: 1024px) {
      height: 600px;
    }

    .video__content {
      width: 100%;
      height: 100%;
      background: center center/cover;
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
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </VideoContainer>
  );
};

export default Video;
