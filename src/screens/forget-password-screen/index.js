import { View, Text, Pressable } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { SIZES, FONTS } from "../../constants/theme";
import FormInput from "../../components/FormInput";
import { useTheme } from "@react-navigation/native";
import TextButton from "../../components/TextButton";
import { SCREENS } from "../../constants/constants";
import { icons } from "../../constants/icons";
import { utils } from "../../utils";
import LoadingAnimation from "../../components/LoadingAnimation";

const ForgetPasswordScreen = ({ navigation }) => {
  const theme = useTheme();
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleForgetPassword = () => {
    navigation.navigate(SCREENS.OTP_VERIFICATION.name);
  };

  const handleEndIconPress = () => {
    if (emailError) {
      setEmail("");
      setEmailError("");
    }
  };
  return (
    <SafeAreaView
      style={{
        flex: 1,
        marginHorizontal: SIZES.margin.medium,
      }}
    >
      <LoadingAnimation visible={loading} />
      <View>
        <Text style={{ ...FONTS.h3, color: theme.colors.text }}>
          Forget Password
        </Text>
        <Text
          style={{
            color: theme.colors.text,
            marginTop: SIZES.margin.large,
            ...FONTS.body2,
          }}
        >
          Enter the email associated with your account and we'll send on email
          instructions to reset your password
        </Text>
      </View>
      <View style={{ marginTop: SIZES.margin.large * 2 }}>
        <FormInput
          placeholder={"Enter your email"}
          keyboardType="email-address"
          autoCompleteType="email"
          startIcon={icons.envelope}
          label={"Email"}
          errorMsg={emailError}
          onEndIconPress={handleEndIconPress}
          value={email}
          endIcon={
            email == "" || (email != "" && emailError == "")
              ? icons.correct
              : icons.cancel
          }
          onChangeText={(value) => {
            utils.validateEmail(value, setEmailError);
            setEmail(value);
          }}
          endIconTintColor={
            email == ""
              ? "grey"
              : email != "" && emailError == ""
              ? "green"
              : "red"
          }
        />
      </View>
      <View style={{ justifyContent: "flex-end", flex: 1 }}>
        <TextButton
          title={"Continue"}
          containerStyle={{
            backgroundColor: theme.colors.primary,
            height: SIZES.buttonHeight.large,
            borderRadius: SIZES.radius.medium,
          }}
          titleStyle={{
            color: "white",
          }}
          onPress={handleForgetPassword}
        />
      </View>
    </SafeAreaView>
  );
};

export default ForgetPasswordScreen;
