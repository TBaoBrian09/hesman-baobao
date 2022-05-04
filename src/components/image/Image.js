import styled from "styled-components";
const ImageStyles = styled.img`
  width: ${({ width }) => width || "100%"};
  height: ${({ height }) => height};
  min-width: ${({ minWidth }) => minWidth}; ;
`;

const Image = ({
  src = "",
  alt = "",
  width = "",
  height = "",
  minWidth = "",
  ...props
}) => {
  return (
    <ImageStyles
      src={src}
      width={width}
      height={height}
      minWidth={minWidth}
      alt={alt}
    />
  );
};

export default Image;
