import React from "react";
import { TextInputProps } from "react-native";

import { Container } from "./styles";

export const Input: React.FC<TextInputProps> = ({
  ...rest
}: TextInputProps) => {
  return <Container {...rest}></Container>;
};
