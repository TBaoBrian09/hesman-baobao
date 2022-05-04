import styled from "styled-components";

const CloudStyles = styled.div`
  width: ${({ width }) => width || "100%"};
  height: 100%;
  justify-content: flex-start;
  @media screen and (max-width: 1023px) {
    display: none;
  }
`;

const CloudWrap = styled.div`
  position: absolute;
  top: 0;
  width: 216px;
  height: 100%;
`;

const CloudHeader = ({ children, width = "", className = "", ...props }) => {
  return (
    <CloudStyles width={width} className={className}>
      <CloudWrap>{children}</CloudWrap>
    </CloudStyles>
  );
};

export default CloudHeader;
