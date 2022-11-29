import React, { FC } from "react";
import { ButtonStyled, Text } from "./button.styles";

export interface IButtonProps {
  text: string;
  type: "outlined" | "filled";
}

const Button: FC<IButtonProps> = (props) => {
  const { text, type } = props;
  return (
    <ButtonStyled buttonStyle={type}>
      <Text buttonStyle={type}>{text}</Text>
    </ButtonStyled>
  );
};

export default Button;
