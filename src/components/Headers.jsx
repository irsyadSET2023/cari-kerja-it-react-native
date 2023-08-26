import React, { useState } from "react";
import Modal from "./Modal";
import { View, Text, TouchableOpacity } from "react-native";
import { Entypo } from "@expo/vector-icons";

const headerStyles = {
  position: "sticky",
  top: 0,
  backgroundColor: "white",
  flexDirection: "row",
  justifyContent: "space-between",
  width: "100%",
  paddingTop: 6,
  paddingRight: 8,
  paddingBottom: 6,
  paddingLeft: 8,
  borderWidth: 1,
  borderColor: "gray",
};

const Header = () => {
  const [modalState, setModalState] = useState(false);

  const openModal = () => {
    setModalState(true);
  };

  return (
    <View>
      {!modalState && (
        <View style={headerStyles}>
          <Text>Kerja It</Text>
          <TouchableOpacity onPress={openModal}>
            <Entypo name="menu" size={24} color="black" />
          </TouchableOpacity>
        </View>
      )}

      {modalState && <Modal setShow={setModalState} />}
    </View>
  );
};

export default Header;
