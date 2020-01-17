import React from "react";
import { TouchableOpacity, Text } from "react-native";

// import { Container } from './styles';

export function Button(props) {
  const { children, onPress } = props;

  return (
    <TouchableOpacity onPress={onPress}>
      <Text>{children}</Text>
    </TouchableOpacity>
  );
}
