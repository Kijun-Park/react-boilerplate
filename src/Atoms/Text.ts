import styled from "styled-components";

export const Text = styled.span<{ size?: string }>`
  font-size: ${(props) =>
    props.size === "xs"
      ? "20px"
      : props.size === "sm"
      ? "24px"
      : props.size === "md"
      ? "40px"
      : props.size === "lg"
      ? "48px"
      : "20px"};
  color: ${(props) => props.theme.color.fontPrimary};
  font-family: "Lexend", sans-serif;
`;
