import React from "react";

import { Container, Title } from "./styles";
import { RectButtonProps } from "react-native-gesture-handler";

interface Props extends RectButtonProps {
  title: string;
  onPress: () => void;
}

export const Button: React.FC<Props> = ({ title, onPress, ...rest }: Props) => {
  return (
    <Container onPress={onPress} {...rest}>
      <Title>{title}</Title>
    </Container>
  );
};
