import React from "react";
import styled from "styled-components";

const FutureStyles = styled.section`
  margin-top: -17px;
  .container {
    width: 100%;

    img {
      width: 100%;
    }
  }
`;

const Future = () => {
  return (
    <FutureStyles>
      <div className="container">
        <img
          src="https://hesman.net/wp-content/uploads/2022/03/Future2.png.webp"
          alt=""
        />
      </div>
    </FutureStyles>
  );
};

export default Future;
