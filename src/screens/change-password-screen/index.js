import { View, Text, Pressable } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { SIZES, FONTS } from "../../constants/theme";
import FormInput from "../../components/FormInput";
import { icons } from "../../constants/icons";
import { useTheme } from "@react-navigation/native";
import TextButton from "../../components/TextButton";

const ChangePasswordScreen = ({ navigation }) => {
  const theme = useTheme();
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  return (
    <SafeAreaView style={{ flex: 1, marginHorizontal: SIZES.margin.medium }}>
      <View style={{}}>
        <Text
          style={{
            ...FONTS.h6,
            color: theme.colors.primary,
            fontFamily: "Poppins-SemiBold",
          }}
        >
          Create a new password
        </Text>
      </View>
      <View style={{ marginTop: SIZES.margin.large * 2 }}>
        <View style={{ marginTop: SIZES.margin.small }}>
          <Text
            style={{
              ...FONTS.body2,
              color: theme.colors.text,
              fontFamily: "Poppins-SemiBold",
            }}
          >
            Old password
          </Text>
          <FormInput
            placeholder={"Enter your password"}
            type="password"
            endIcon={secureTextEntry ? icons.eye : icons.eye_crossed}
            secureTextEntry={secureTextEntry}
            onEndIconPress={() => {
              setSecureTextEntry((state) => !state);
            }}
          />
        </View>
        <View style={{ marginTop: SIZES.margin.small }}>
          <Text
            style={{
              ...FONTS.body2,
              color: theme.colors.text,
              fontFamily: "Poppins-SemiBold",
            }}
          >
            New password
          </Text>
          <FormInput
            placeholder={"Enter your password"}
            type="password"
            endIcon={secureTextEntry ? icons.eye : icons.eye_crossed}
            secureTextEntry={secureTextEntry}
            onEndIconPress={() => {
              setSecureTextEntry((state) => !state);
            }}
          />
        </View>
        <View style={{ marginTop: SIZES.margin.small }}>
          <Text
            style={{
              ...FONTS.body2,
              color: theme.colors.text,
              fontFamily: "Poppins-SemiBold",
            }}
          >
            Confirm new password
          </Text>
          <FormInput
            placeholder={"Enter your password"}
            type="password"
            endIcon={secureTextEntry ? icons.eye : icons.eye_crossed}
            secureTextEntry={secureTextEntry}
            onEndIconPress={() => {
              setSecureTextEntry((state) => !state);
            }}
          />
        </View>

        <TextButton
          title={"Save password"}
          containerStyle={{
            backgroundColor: theme.colors.primary,
            height: SIZES.buttonHeight.large,
            borderRadius: SIZES.radius.large,
            marginTop: SIZES.margin.large * 2,
          }}
          titleStyle={{
            color: "white",
          }}
          onPress={() => {}}
        />
      </View>
    </SafeAreaView>
  );
};

export default ChangePasswordScreen;
