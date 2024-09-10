import { View, Text, Pressable } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { SIZES, FONTS } from "../../constants/theme";
import FormInput from "../../components/FormInput";
import { icons } from "../../constants/icons";
import { useTheme } from "@react-navigation/native";
import TextButton from "../../components/TextButton";

const LoginScreen = ({ navigation }) => {
  const theme = useTheme();
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  return (
    <SafeAreaView style={{ flex: 1, marginHorizontal: SIZES.margin.medium }}>
      <View style={{ marginTop: SIZES.margin.large * 3 }}>
        <Text style={{ ...FONTS.h3, color: theme.colors.text }}>Sign In</Text>
      </View>
      <View style={{ marginTop: SIZES.margin.large * 2 }}>
        <View>
          <Text
            style={{
              ...FONTS.body2,
              color: theme.colors.text,
              fontFamily: "Poppins-SemiBold",
            }}
          >
            Email
          </Text>
          <FormInput placeholder={"Enter your email"} type="email" />
        </View>
        <View style={{ marginTop: SIZES.margin.small }}>
          <Text
            style={{
              ...FONTS.body2,
              color: theme.colors.text,
              fontFamily: "Poppins-SemiBold",
            }}
          >
            Password
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
        <View style={{ width: "100%" }}>
          <Pressable onPress={() => navigation.navigate("ForgetPassword")}>
            <Text
              style={{
                ...FONTS.h6,
                color: theme.colors.primary,
                textAlign: "right",
                fontFamily: "Poppins-SemiBold",
              }}
            >
              Forget password?
            </Text>
          </Pressable>
        </View>
        <TextButton
          title={"Sign In"}
          containerStyle={{
            backgroundColor: theme.colors.primary,
            height: SIZES.buttonHeight.large,
            borderRadius: SIZES.radius.large,
            marginTop: SIZES.margin.large * 2,
          }}
          titleStyle={{
            color: "white",
          }}
          onPress={() => navigation.navigate("OTPVerification")}
        />
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;
