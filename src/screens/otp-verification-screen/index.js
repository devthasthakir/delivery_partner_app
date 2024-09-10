import { View, Text, Pressable, Keyboard } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { SIZES, FONTS } from "../../constants/theme";
import FormInput from "../../components/FormInput";
import { icons } from "../../constants/icons";
import { useTheme } from "@react-navigation/native";
import TextButton from "../../components/TextButton";
import OTPTextView from "react-native-otp-textinput";

const OTPVerificationScreen = ({ navigation }) => {
  const theme = useTheme();
  const [otp, setOtp] = useState("");
  return (
    <View
      style={{
        flex: 1,
        marginHorizontal: SIZES.margin.medium,
        marginBottom: SIZES.margin.large,
      }}
    >
      <View style={{ marginTop: SIZES.margin.large}}>
        <Text style={{ ...FONTS.h3, color: theme.colors.text }}>
          OTP Verification
        </Text>
        <Text
          style={{
            color: theme.colors.text,
            marginTop: SIZES.margin.large,
            ...FONTS.body2,
          }}
        >
          Enter the 6 digits code that you received on yur email.
        </Text>
      </View>
      <View style={{ marginTop: SIZES.margin.large * 2 }}>
        <View>
          <OTPTextView
            inputCount={6}
            textInputStyle={{
              color: theme.colors.text,
              borderWidth: 4,
              borderRadius: SIZES.radius.small,
            }}
            tintColor={theme.colors.primary}
            handleTextChange={(e) => {
              if (e.length === 6) {
                console.log("reached");
                Keyboard.dismiss();
              }
              setOtp(e);
            }}
          />
        </View>
        <View
          style={{
            width: "100%",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            marginTop: SIZES.margin.large,
          }}
        >
          <Text
            style={{
              ...FONTS.h6,
              color: theme.colors.text,
              fontFamily: "Poppins-SemiBold",
              marginRight: SIZES.margin.small,
            }}
          >
            Didn't receive the OTP?
          </Text>
          <Pressable onPress={() => navigation.navigate("ForgetPassword")}>
            <Text
              style={{
                ...FONTS.h6,
                color: theme.colors.primary,
                fontFamily: "Poppins-SemiBold",
              }}
            >
              Resend OTP
            </Text>
          </Pressable>
        </View>
      </View>
      <View style={{ justifyContent: "flex-end", flex: 1 }}>
        <TextButton
          title={"Continue"}
          containerStyle={{
            backgroundColor: theme.colors.primary,
            height: SIZES.buttonHeight.large,
            borderRadius: SIZES.radius.large,
            marginTop: SIZES.margin.large * 2,
          }}
          titleStyle={{
            color: "white",
          }}
        />
      </View>
    </View>
  );
};

export default OTPVerificationScreen;
