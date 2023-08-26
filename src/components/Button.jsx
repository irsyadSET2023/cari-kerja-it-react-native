import React from "react";
import { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";

const Button = ({ children, ...rest }) => {
  return (
    <TouchableOpacity {...rest} style={{ ...rest.style }}>
      <Text>{children}</Text>
    </TouchableOpacity>
  );
};

export default Button;
