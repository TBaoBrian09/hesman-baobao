import styled from "styled-components";

export const SectionStyles = styled.section`
  width: 100%;
  height: ${({ height }) => height || "100%"}; ;
`;

export const Container = styled.div``;

export const Button = styled.button`
  display: inline-block;
  padding: 12px 24px;
  border-radius: 3px;
  -webkit-border-radius: 3px;
  line-height: 1;
  text-align: center;
  cursor: pointer;
`;
