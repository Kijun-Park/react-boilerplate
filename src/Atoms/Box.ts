import styled from "styled-components";

interface BoxType {
  width?: string;
  height?: string;
  background?: string;
  display?: string;
  alignItems?: string;
  justifyContent?: string;
  boxSizing?: string;
  border?: string;
}

export const Box = styled.div<BoxType>`
  width: ${(props) => props.width ?? "auto"};
  height: ${(props) => props.height ?? "auto"};
  background: ${(props) => props.background ?? "transparent"};
  display: ${(props) => props.display ?? "flex"};
  align-items: ${(props) => props.alignItems ?? "center"};
  justify-content: ${(props) => props.justifyContent ?? "center"};
  box-sizing: ${(props) => props.boxSizing ?? "border-box"};
  border: ${(props) => props.border ?? "0px"};
`;
