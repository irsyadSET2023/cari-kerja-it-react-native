import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Text, TouchableOpacity, View } from "react-native";
import JOB_DATA from "../assests/job-directory-data.json";

const Screen1 = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      {JOB_DATA.map((element, index) => {
        return (
          <Text
            key={index}
            style={{
              backgroundColor: "yellow",
            }}
          >
            {element.job}
          </Text>
        );
      })}
    </View>
  );
};

export default Screen1;
