import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import Button from "../components/Button";
import { SafeAreaView } from "react-native-safe-area-context";
import { AntDesign } from "@expo/vector-icons";
import Header from "../components/Headers";
import JOB_DATA from "../assests/job-directory-data.json";
import Card from "../components/Card";
const Home = ({ navigation: { navigate } }) => {
  return (
    <>
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
        <ScrollView style={{ width: "100%" }}>
          <View
            style={{
              gap: 10,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ fontSize: 20 }}>Find Tech Jobs In Malaysia 🇲🇾</Text>
            <Text style={{ fontSize: 12 }}>
              Let employers find you. Or apply to companies directly.
            </Text>
            <TouchableOpacity
              style={{
                backgroundColor: "black",
                height: 30,
                alignItems: "center",
                flexDirection: "column",
                justifyContent: "center",
                width: 250,
              }}
            >
              <Text style={{ color: "white" }}>
                🎯 I want Companies to find me
              </Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text>🔍 Search Jobs</Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              justifyContent: "start",
              alignItems: "start",
              marginLeft: 20,
              marginTop: 10,
            }}
          >
            <Text>⌛ Latest Jobs ➡️</Text>
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                flexWrap: "wrap",
                justifyContent: "center",
                gap: 20,
                marginTop: 20,
                // alignItems: "center",
                // marginHorizontal: -25,
                // marginVertical: -25,
                // marginBottom: 30,
              }}
            >
              {JOB_DATA.map((element, index) => {
                return (
                  <Card
                    key={index}
                    id={element.id}
                    title={element.job}
                    workplace={element.company}
                    jobType={element.work_type}
                    date={element.post_date}
                    location={element.company_state}
                    navigate={() => navigate("Job", { id: element.id })}
                  />
                );
              })}
            </View>
          </View>
        </ScrollView>

        <StatusBar style="auto" />
      </View>
    </>
  );
};

export default Home;
