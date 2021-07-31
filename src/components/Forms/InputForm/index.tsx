import React from "react";
import { Input } from "../Input";

import { Container, Error } from "./styles";
import { TextInputProps } from "react-native";
import { Control, Controller } from "react-hook-form";

interface Props extends TextInputProps {
  control: Control;
  name: string;
  error: string;
}

export const InputForm: React.FC<Props> = ({
  control,
  name,
  error,
  ...rest
}: Props) => {
  return (
    <Container>
      <Controller
        name={name}
        control={control}
        render={({ field: { onChange, value } }) => (
          <Input onChangeText={onChange} value={value} {...rest} />
        )}
      />
      {error && <Error>{error}</Error>}
    </Container>
  );
};
