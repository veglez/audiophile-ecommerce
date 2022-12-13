import React, { FC } from "react";
import { ButtonStyled, Text } from "./button.styles";

export interface IButtonProps {
  text: string;
  type: "outlined" | "filled";
  icon?: React.ReactNode;
}

const Button: FC<IButtonProps> = (props) => {
  const { text, type, icon } = props;
  return (
    <ButtonStyled buttonStyle={type}>
      <Text buttonStyle={type}>{text}</Text>
      {icon && icon}
    </ButtonStyled>
  );
};

export default Button;
