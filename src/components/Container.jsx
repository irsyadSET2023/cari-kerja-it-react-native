import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

const Container = ({ data }) => {
  return (
    <View
      style={{
        marginHorizontal: "auto",
        paddingHorizontal: 5,
        backgroundColor: "slate",
        paddingVertical: 5,
      }}
    >
      <Text>
        Jobs/ {data?.job || "No job"} {data?.district || "No district"} -
        {data?.company || "No company"}
      </Text>
      <View className="border-3 border-gray-500">
        <Text>
          {data?.district || "No district"} {data?.stacks[0] || ""}
        </Text>
        <Text>
          {data?.job || "No job"} {data?.district || "No district"}
        </Text>
        <Text>{data?.company || "No company"}</Text>
      </View>
      <View>
        <Text>📅 Posted on {data?.post_date}</Text>
        <Text>🧭 {data?.company_state}</Text>
        <Text>💼 {data?.work_type}</Text>
        <Text>🕑 Unspecified</Text>
      </View>
      <View style={{ marginVertical: 5 }}>
        <TouchableOpacity variant="solid">
          <Text>Apply Now 🚀</Text>
        </TouchableOpacity>
      </View>
      <View style={{ marginVertical: 5 }}>
        <Text>✍️ Job Description</Text>
        <View style={{ marginHorizontal: "auto", width: 700, gap: 20 }}>
          <View
            style={{
              marginVertical: 5,
              flexWrap: "wrap",
              flexDirection: "row",
              // paddingLeft: 10,
              paddingRight: 10,
            }}
          >
            {data.details.job_description.map((item, index) => {
              return <Text>{item}</Text>;
            })}
          </View>
        </View>
        <Text style={{ marginVertical: 5 }}>🎓Qualification</Text>
        <View style={{ marginHorizontal: "auto", width: 700, gap: 20 }}>
          <View
            style={{
              marginVertical: 5,
              flexWrap: "wrap",
              flexDirection: "row",
              // paddingLeft: 10,
              paddingRight: 10,
            }}
          >
            {data.details.qualification.map((item, index) => {
              return <Text>{item}</Text>;
            })}
          </View>
        </View>
      </View>
    </View>
  );
};

export default Container;
