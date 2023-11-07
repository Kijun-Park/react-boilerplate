import styled from "styled-components";

interface ImgType {
  width?: string;
  height?: string;
  margin?: string;
  objectFit?: string;
}

export const Img = styled.img<ImgType>`
  width: ${(props) => props.width ?? "100%"};
  height: ${(props) => props.height ?? "100%"};
  margin: ${(props) => props.margin ?? "0"};
  object-fit: ${(props) => props.objectFit ?? "fill"};
`;
