import styled from "styled-components";
import { IButtonProps } from ".";

type TButtonStyled = {
  buttonStyle: IButtonProps["type"];
};
// 1px solid color
// none
export const ButtonStyled = styled.button<TButtonStyled>`
  border: ${(props) => {
    switch (props.buttonStyle) {
      case "filled":
        return `1px solid ${props.theme.palette.primary.orange}`;
      case "outlined":
        return `1px solid ${props.theme.palette.neutral.black}`;
      default:
        return `1px solid ${props.theme.palette.primary.orange}`;
    }
  }};
  background: ${(props) => {
    switch (props.buttonStyle) {
      case "filled":
        return props.theme.palette.primary.orange;
      case "outlined":
        return props.theme.palette.neutral.white;
      default:
        return props.theme.palette.primary.orange;
    }
  }};
  padding: 15px 30px;
  color: ${(props) => {
    switch (props.buttonStyle) {
      case "filled":
        return props.theme.palette.neutral.white;
      case "outlined":
        return props.theme.palette.neutral.black;
      default:
        return props.theme.palette.neutral.white;
    }
  }};

  &:hover {
    background-color: ${(props) => {
      switch (props.buttonStyle) {
        case "filled":
          return props.theme.palette.hover.orange;
        case "outlined":
          return props.theme.palette.neutral.black;
        default:
          return props.theme.palette.hover.orange;
      }
    }};
    color: ${(props) => props.theme.palette.neutral.white};
  }
`;

export const Text = styled.span<TButtonStyled>`
  font-family: ${(props) => {
    return props.theme.typography.family.manrope;
  }};
  font-size: 1.3rem;
  letter-spacing: 0.1rem;
  font-weight: ${(props) => props.theme.typography.weights.bold};
  text-transform: uppercase;
`;
