import React, { useState } from "react";
import Button from "./Button";
import { View } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const modalStyles = {
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: 10,
};

const Modal = ({ setShow }) => {
  const closeModal = () => {
    setShow(false);
  };
  return (
    <View>
      <View style={{ position: "absolute", right: 20 }}>
        <AntDesign
          name="closesquareo"
          size={24}
          color="black"
          onPress={closeModal}
        />
      </View>
      <View style={modalStyles}>
        <Button variant="outline">📈 Stats</Button>
        <Button variant="outline">✈️ Talents</Button>
        <Button variant="outline">📤 Post Jobs</Button>
        <Button variant="outline">💌 Get Job Alerts</Button>
        <Button variant="outline">☁️ Log In</Button>
        <Button variant="outline">✨ Register</Button>
      </View>
    </View>
  );
};

export default Modal;
