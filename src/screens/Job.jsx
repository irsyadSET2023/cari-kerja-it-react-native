import React from "react";
import { View, Text, ScrollView } from "react-native";
import Container from "../components/Container";
import Header from "../components/Headers";
import JOB_DATA from "../assests/job-directory-data.json";

const Job = ({ route }) => {
  const { id } = route.params;
  const filteredData = JOB_DATA.find((element) => {
    return element.id === Number(id);
  });

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "start",
        // alignItems: "center",

        gap: 10,
        paddingTop: 30,
      }}
    >
      <Header style={{ marginTop: 20 }} />
      <ScrollView>
        <Container key={1} data={filteredData} />
      </ScrollView>
    </View>
  );
};

export default Job;
