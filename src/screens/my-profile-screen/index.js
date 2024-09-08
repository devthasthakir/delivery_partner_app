import { View, Text, ScrollView } from "react-native";
import React from "react";

const MyProfileScreen = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <View
          style={{
            width: 100,
            height: 100,
            backgroundColor:'#925BFE',
            opacity:'9%'
          }}
        ></View>
      </View>
    </ScrollView>
  );
};

export default MyProfileScreen;
