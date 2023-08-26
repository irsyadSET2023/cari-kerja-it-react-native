import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { EvilIcons } from "@expo/vector-icons";

const cardStyle = {
  borderWidth: 1,
  borderColor: "#666",
  width: 250,
  padding: 10,
  borderRadius: 8,
  gap: 5,
};

const Card = ({
  id,
  title = "No title given",
  workplace = "No workplace given",
  location = "No description given",
  date = "No date given",
  jobType = "Not Given",
  navigate,
}) => {
  const handleClick = () => {};
  return (
    <View style={cardStyle}>
      <Text
        style={{
          fontWeight: "bold",
        }}
      >
        {title}
      </Text>
      <Text
        style={{
          fontWeight: 100,
        }}
      >
        {workplace}
      </Text>
      <Text>📅 {date}</Text>
      <Text>🧭 {location}</Text>
      <Text>💼 {jobType}</Text>
      <View style={{ marginTop: 10, alignItems: "center" }}>
        <TouchableOpacity
          style={{
            backgroundColor: "black",
            justifyContent: "center",
            alignItems: "center",
            width: 100,
          }}
          onPress={navigate}
        >
          <Text
            style={{
              color: "white",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            View Job
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Card;
